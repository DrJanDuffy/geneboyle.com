/**
 * Minimal WebMCP typings aligned with the July 2026 Community Group draft
 * and Chrome's document.modelContext Imperative API.
 * @see https://webmachinelearning.github.io/webmcp/
 * @see https://developer.chrome.com/docs/ai/webmcp/imperative-api
 */

interface ToolAnnotations {
  readOnlyHint?: boolean;
  untrustedContentHint?: boolean;
}

interface ModelContextTool {
  name: string;
  title?: string;
  description: string;
  inputSchema?: Record<string, unknown>;
  execute: (input: Record<string, unknown>) => Promise<unknown>;
  annotations?: ToolAnnotations;
}

interface ModelContextRegisterToolOptions {
  signal?: AbortSignal;
  exposedTo?: string[];
}

interface RegisteredTool {
  name: string;
  title?: string;
  description: string;
  inputSchema?: string;
  window: Window;
  origin: string;
  annotations?: ToolAnnotations;
}

interface ModelContextGetToolOptions {
  fromOrigins?: string[];
}

interface ModelContext extends EventTarget {
  registerTool(
    tool: ModelContextTool,
    options?: ModelContextRegisterToolOptions,
  ): Promise<void>;
  getTools(options?: ModelContextGetToolOptions): Promise<RegisteredTool[]>;
  executeTool?(
    tool: RegisteredTool | string,
    inputJson: string,
    options?: { signal?: AbortSignal },
  ): Promise<unknown>;
  ontoolchange: ((this: ModelContext, ev: Event) => unknown) | null;
}

interface Document {
  readonly modelContext?: ModelContext;
}

interface Navigator {
  /** Legacy surface; Chrome prefers document.modelContext (Chrome 150+). */
  readonly modelContext?: ModelContext;
}
