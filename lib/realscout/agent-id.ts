const FALLBACK_ENCODED = "QWdlbnQtMjI1MDUw"; // Agent-225050

function toBase64(value: string): string {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(value, "utf8").toString("base64");
  }
  return btoa(value);
}

/**
 * RealScout widgets need the base64 agent-encoded-id (e.g. QWdlbnQtMjI1MDUw),
 * not the raw numeric agent id (225050). Normalize env either way.
 */
export function getRealScoutAgentEncodedId(): string {
  const raw = process.env.NEXT_PUBLIC_REALSCOUT_AGENT_ID?.trim();
  if (!raw) return FALLBACK_ENCODED;

  if (/^\d+$/.test(raw)) {
    return toBase64(`Agent-${raw}`);
  }

  if (raw.startsWith("Agent-")) {
    return toBase64(raw);
  }

  try {
    const decoded =
      typeof Buffer !== "undefined"
        ? Buffer.from(raw, "base64").toString("utf8")
        : atob(raw);
    if (decoded.startsWith("Agent-")) return raw;
  } catch {
    // not valid base64 — fall through
  }

  return FALLBACK_ENCODED;
}
