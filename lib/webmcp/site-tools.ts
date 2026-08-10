import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";
import { getModelContext } from "@/lib/webmcp/model-context";

const SITE_ORIGIN = siteConfig.url.replace(/\/$/, "");
const CALENDLY_URL = "https://calendly.com/drjanduffy/showing";

/** Neighborhood pages agents may deep-link to (slugs only — no lifestyle copy). */
const NEIGHBORHOOD_SLUGS = [
  "summerlin",
  "henderson",
  "green-valley",
  "the-ridges",
  "southern-highlands",
  "north-las-vegas",
  "skye-canyon",
  "centennial-hills",
  "inspirada",
  "mountains-edge",
] as const;

type NeighborhoodSlug = (typeof NEIGHBORHOOD_SLUGS)[number];

function asString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function navigate(pathOrUrl: string): { navigated: true; url: string } {
  const url = pathOrUrl.startsWith("http")
    ? pathOrUrl
    : `${SITE_ORIGIN}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
  window.location.assign(url);
  return { navigated: true, url };
}

/**
 * Register site-wide WebMCP tools. Returns an AbortController used to unregister
 * all tools on cleanup (Chrome: registerTool options.signal).
 */
export async function registerSiteWebMCPTools(): Promise<AbortController | null> {
  const modelContext = getModelContext();
  if (!modelContext) return null;

  const controller = new AbortController();
  const { signal } = controller;

  await modelContext.registerTool(
    {
      name: "get_contact_info",
      title: "Contact Dr. Gene Boyle",
      description:
        "Return NAP (name, address, phone), email, and Las Vegas partner brokerage for Dr. Gene Boyle / Irvine to Las Vegas relocation. Use when the user asks how to call, email, or visit.",
      inputSchema: {
        type: "object",
        properties: {},
        additionalProperties: false,
      },
      annotations: { readOnlyHint: true },
      execute: async () => ({
        agent: agentInfo.name,
        license: agentInfo.licenseLabel,
        phone: agentInfo.phoneFormatted,
        phoneTel: agentInfo.phoneTel,
        email: agentInfo.email,
        office: officeInfo.address.full,
        lasVegasPartner: {
          name: officeInfo.lasVegasOffice.name,
          address: officeInfo.lasVegasOffice.full,
          partnerAgent: agentInfo.partnerAgent.name,
          partnerLicense: agentInfo.partnerAgent.license,
        },
        contactPage: `${SITE_ORIGIN}/contact`,
        site: SITE_ORIGIN,
      }),
    },
    { signal },
  );

  await modelContext.registerTool(
    {
      name: "schedule_consultation",
      title: "Schedule a consultation",
      description:
        "Open scheduling for an Irvine-to-Las Vegas relocation consultation (Calendly) or the on-site home valuation / contact pages. Use when the user wants to book a call or showing.",
      inputSchema: {
        type: "object",
        properties: {
          intent: {
            type: "string",
            description: "What to schedule",
            enum: ["showing", "home_valuation", "contact_form"],
          },
        },
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false },
      execute: async (input) => {
        const intent = asString(input.intent) ?? "showing";
        if (intent === "home_valuation") {
          return {
            ...navigate("/home-valuation"),
            calendlyUrl: CALENDLY_URL,
            message: "Opening the home valuation page with scheduling widget.",
          };
        }
        if (intent === "contact_form") {
          return {
            ...navigate("/contact"),
            phone: agentInfo.phoneFormatted,
            message: "Opening the contact page.",
          };
        }
        return {
          ...navigate(CALENDLY_URL),
          message: "Opening Calendly to book a consultation.",
        };
      },
    },
    { signal },
  );

  await modelContext.registerTool(
    {
      name: "search_homes",
      title: "Search homes",
      description:
        "Navigate to Las Vegas / Henderson home search pages on geneboyle.com. Optional filters refine the destination URL; live MLS results load via RealScout on the destination page.",
      inputSchema: {
        type: "object",
        properties: {
          area: {
            type: "string",
            description: "Area or neighborhood focus",
            enum: [
              "las-vegas",
              "henderson",
              "summerlin",
              "any",
              ...NEIGHBORHOOD_SLUGS,
            ],
          },
          maxPrice: {
            type: "number",
            description: "Maximum list price in USD (hint for the search page)",
          },
          bedrooms: {
            type: "number",
            description: "Minimum bedrooms (hint for the search page)",
          },
          path: {
            type: "string",
            description: "Which search surface to open",
            enum: ["listings", "buyers", "neighborhood"],
          },
        },
        additionalProperties: false,
      },
      annotations: { readOnlyHint: false },
      execute: async (input) => {
        const area = asString(input.area) ?? "any";
        const pathChoice = asString(input.path) ?? "listings";
        const maxPrice =
          typeof input.maxPrice === "number" ? input.maxPrice : undefined;
        const bedrooms =
          typeof input.bedrooms === "number" ? input.bedrooms : undefined;

        const params = new URLSearchParams();
        if (area !== "any") params.set("area", area);
        if (maxPrice !== undefined) params.set("maxPrice", String(maxPrice));
        if (bedrooms !== undefined) params.set("beds", String(bedrooms));
        const qs = params.toString() ? `?${params.toString()}` : "";

        let path = `/listings${qs}`;
        if (pathChoice === "buyers") {
          path = `/buyers${qs}`;
        } else if (
          pathChoice === "neighborhood" &&
          NEIGHBORHOOD_SLUGS.includes(area as NeighborhoodSlug)
        ) {
          path = `/neighborhoods/${area}`;
        } else if (NEIGHBORHOOD_SLUGS.includes(area as NeighborhoodSlug)) {
          path = `/neighborhoods/${area}`;
        }

        return {
          ...navigate(path),
          filters: { area, maxPrice, bedrooms },
          note: "Live listing data is provided by RealScout on the destination page.",
        };
      },
    },
    { signal },
  );

  await modelContext.registerTool(
    {
      name: "list_service_areas",
      title: "List service areas",
      description:
        "List Las Vegas Valley neighborhood pages available on geneboyle.com for Irvine-to-Las Vegas relocation clients. Returns slugs and URLs only.",
      inputSchema: {
        type: "object",
        properties: {},
        additionalProperties: false,
      },
      annotations: { readOnlyHint: true },
      execute: async () => ({
        agent: agentInfo.name,
        areas: NEIGHBORHOOD_SLUGS.map((slug) => ({
          slug,
          url: `${SITE_ORIGIN}/neighborhoods/${slug}`,
        })),
        indexUrl: `${SITE_ORIGIN}/neighborhoods`,
      }),
    },
    { signal },
  );

  return controller;
}
