"use client";

import { useEffect } from "react";
import { registerSiteWebMCPTools } from "@/lib/webmcp/site-tools";

/**
 * Registers geneboyle.com WebMCP tools once on the client.
 * No-ops in browsers without document/navigator.modelContext.
 */
export default function WebMCPProvider() {
  useEffect(() => {
    let controller: AbortController | null = null;
    let cancelled = false;

    void (async () => {
      try {
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
    };
  }, []);

  return null;
}
