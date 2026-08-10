import { NextResponse } from "next/server";
import { siteConfig, agentInfo } from "@/lib/site-config";

/**
 * Community discovery manifest for WebMCP-aware agents/inspectors.
 * Not part of the W3C draft (tools are registered via document.modelContext);
 * served for crawler/checklist compatibility.
 */
export async function GET() {
  const manifest = {
    name: siteConfig.fullName,
    description: siteConfig.description,
    version: "1.0.0",
    homepage: siteConfig.url,
    contact: {
      phone: agentInfo.phoneFormatted,
      email: agentInfo.email,
    },
    tools: [
      {
        name: "get_contact_info",
        description:
          "Return NAP, phone, email, and Las Vegas partner brokerage details.",
        readOnlyHint: true,
      },
      {
        name: "schedule_consultation",
        description:
          "Open Calendly or on-site scheduling for a relocation consultation.",
        readOnlyHint: false,
      },
      {
        name: "search_homes",
        description:
          "Navigate to listings/buyers/neighborhood search surfaces (RealScout on page).",
        readOnlyHint: false,
      },
      {
        name: "list_service_areas",
        description: "List neighborhood page slugs and URLs on geneboyle.com.",
        readOnlyHint: true,
      },
    ],
    registration: "document.modelContext.registerTool (client-side)",
    spec: "https://webmachinelearning.github.io/webmcp/",
  };

  return NextResponse.json(manifest, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
