"use client";

import { useEffect } from "react";
import { registerSiteWebMCPTools } from "@/lib/webmcp/site-tools";

/**
 * Loads @mcp-b/global (polyfill + MCP bridge) then registers site tools.
 * Safe no-op during SSR; works in browsers without native WebMCP.
 */
export default function WebMCPProvider() {
  useEffect(() => {
    let controller: AbortController | null = null;
    let cancelled = false;

    void (async () => {
      try {
        // Side-effect import installs document.modelContext (polyfill when native missing).
        const webmcp = await import("@mcp-b/global");
        if (typeof webmcp.initializeWebModelContext === "function") {
          webmcp.initializeWebModelContext({
            transport: {
              tabServer: {
                allowedOrigins: [
                  "https://www.geneboyle.com",
                  "https://geneboyle.com",
                  window.location.origin,
                ],
              },
            },
          });
        }

        const registered = await registerSiteWebMCPTools();
        if (cancelled) {
          registered?.abort();
          return;
        }
        controller = registered;
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.warn("[WebMCP] tool registration failed", error);
        }
      }
    })();

    return () => {
      cancelled = true;
      controller?.abort();
      void import("@mcp-b/global")
        .then((webmcp) => {
          if (typeof webmcp.cleanupWebModelContext === "function") {
            webmcp.cleanupWebModelContext();
          }
        })
        .catch(() => {
          /* ignore cleanup errors */
        });
    };
  }, []);

  return null;
}
