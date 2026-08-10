/**
 * Test: /api/leads/capture Route Handler
 * Critical path: Lead generation API endpoint
 */

import { beforeEach, describe, expect, it, vi } from "vitest";

const {
  upsertPerson,
  findPerson,
  addTag,
  createEvent,
  checkRateLimit,
  getClientId,
  getRateLimitHeaders,
  getFubApiKey,
  getFubSystemKey,
} = vi.hoisted(() => ({
  upsertPerson: vi.fn(),
  findPerson: vi.fn(),
  addTag: vi.fn(),
  createEvent: vi.fn(),
  checkRateLimit: vi.fn(),
  getClientId: vi.fn(),
  getRateLimitHeaders: vi.fn(),
  getFubApiKey: vi.fn(),
  getFubSystemKey: vi.fn(),
}));

vi.mock("@/lib/fub/client", () => ({
  FollowUpBossClient: class {
    upsertPerson = upsertPerson;
    findPerson = findPerson;
    addTag = addTag;
    createEvent = createEvent;
  },
}));

vi.mock("@/lib/rate-limit", () => ({
  leadFormLimiter: {},
  getClientId,
  checkRateLimit,
  getRateLimitHeaders,
}));

vi.mock("@/lib/env", () => ({
  getFubApiKey,
  getFubSystemKey,
}));

import { POST } from "./route";

describe("POST /api/leads/capture", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    getClientId.mockReturnValue("test-client");
    checkRateLimit.mockResolvedValue({
      success: true,
      limit: 5,
      remaining: 4,
      reset: Date.now() + 60_000,
    });
    getRateLimitHeaders.mockReturnValue({});
    getFubApiKey.mockReturnValue("test-api-key");
    getFubSystemKey.mockReturnValue("test-system-key");
    findPerson.mockResolvedValue(null);
    upsertPerson.mockResolvedValue({
      id: "lead-123",
      email: "john@example.com",
    });
    addTag.mockResolvedValue(undefined);
    createEvent.mockResolvedValue(undefined);
  });

  it("creates lead with valid data", async () => {
    const request = new Request("http://localhost:3000/api/leads/capture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        phone: "7025551234",
        message: "Interested in buying",
        source: "website-form",
        stage: "New Lead",
        tags: ["website"],
      }),
    });

    const response = await POST(request as never);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.personId).toBe("lead-123");
    expect(upsertPerson).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "John Doe",
        emails: [{ value: "john@example.com" }],
        stage: "New Lead",
      }),
    );
  });

  it("returns 400 for missing required fields", async () => {
    const request = new Request("http://localhost:3000/api/leads/capture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: "7025551234",
      }),
    });

    const response = await POST(request as never);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toMatch(/name|required/i);
  });

  it("returns 400 when email and phone are both missing", async () => {
    const request = new Request("http://localhost:3000/api/leads/capture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "John",
        lastName: "Doe",
      }),
    });

    const response = await POST(request as never);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toMatch(/email or phone/i);
  });

  it("handles FUB API errors gracefully", async () => {
    upsertPerson.mockRejectedValueOnce(new Error("FUB API unavailable"));

    const request = new Request("http://localhost:3000/api/leads/capture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
      }),
    });

    const response = await POST(request as never);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toBeDefined();
  });

  it("enriches lead with source and tags", async () => {
    const request = new Request("http://localhost:3000/api/leads/capture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "Jane",
        lastName: "Smith",
        email: "jane@example.com",
        source: "hero-section",
        stage: "Hot Lead",
        tags: ["website", "hero-cta", "q1-2026"],
      }),
    });

    await POST(request as never);

    expect(upsertPerson).toHaveBeenCalledWith(
      expect.objectContaining({
        stage: "Hot Lead",
        source: expect.stringContaining("hero-section"),
      }),
    );
    expect(addTag).toHaveBeenCalled();
  });

  it("handles property search criteria", async () => {
    const request = new Request("http://localhost:3000/api/leads/capture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "Buyer",
        lastName: "Jones",
        email: "buyer@example.com",
        priceMin: 400000,
        priceMax: 600000,
        bedrooms: 3,
        bathrooms: 2.5,
        timeline: "1-3 months",
        preApproved: true,
      }),
    });

    await POST(request as never);

    expect(upsertPerson).toHaveBeenCalledWith(
      expect.objectContaining({
        customFields: expect.objectContaining({
          priceMin: 400000,
          priceMax: 600000,
          bedrooms: 3,
          bathrooms: 2.5,
          timeline: "1-3 months",
          preApproved: true,
        }),
      }),
    );
  });

  it("returns 429 when rate limited", async () => {
    checkRateLimit.mockResolvedValueOnce({
      success: false,
      limit: 5,
      remaining: 0,
      reset: Date.now() + 120_000,
    });

    const request = new Request("http://localhost:3000/api/leads/capture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
      }),
    });

    const response = await POST(request as never);
    expect(response.status).toBe(429);
  });
});
