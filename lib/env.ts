/**
 * Env helpers with aliases for Vercel variable naming variants.
 * Prefer the project's canonical name; fall back to alternate keys already set in the dashboard.
 */

function firstEnv(...keys: string[]): string {
  for (const key of keys) {
    const value = process.env[key]?.trim()
    if (value) return value
  }
  return ''
}

/** Follow Up Boss API key — code historically used FUB_*; dashboard often uses FOLLOW_UP_BOSS_* */
export function getFubApiKey(): string {
  return firstEnv('FUB_API_KEY', 'FOLLOW_UP_BOSS_API_KEY')
}

export function getFubSystemKey(): string | undefined {
  const value = firstEnv('FUB_SYSTEM_KEY', 'FOLLOW_UP_BOSS_SYSTEM_KEY')
  return value || undefined
}

export function getFubAgentId(): string {
  return firstEnv('FUB_AGENT_ID', 'FOLLOW_UP_BOSS_AGENT_ID')
}

/** Anthropic / Claude — accept CLAUDE_API_KEY as well as ANTHROPIC_API_KEY */
export function getAnthropicApiKey(): string {
  return firstEnv('AI_GATEWAY_API_KEY', 'ANTHROPIC_API_KEY', 'CLAUDE_API_KEY')
}

export function usesAiGateway(): boolean {
  return Boolean(process.env.AI_GATEWAY_API_KEY?.trim())
}

export function getSiteUrl(): string {
  return firstEnv('NEXT_PUBLIC_SITE_URL', 'NEXT_PUBLIC_HOST_URL') || 'https://www.geneboyle.com'
}
