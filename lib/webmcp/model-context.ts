/**
 * Resolve the WebMCP ModelContext for the current document.
 * Prefer document.modelContext (Chrome Imperative API, mid-2026);
 * fall back to navigator.modelContext for older preview builds.
 */
export function getModelContext(): ModelContext | null {
  if (typeof window === "undefined") return null;

  const fromDocument = window.document.modelContext;
  if (fromDocument) return fromDocument;

  const fromNavigator = window.navigator.modelContext;
  if (fromNavigator) return fromNavigator;

  return null;
}

export function isWebMCPSupported(): boolean {
  return getModelContext() !== null;
}
