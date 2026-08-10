import SchemaScript from "@/components/SchemaScript";
import {
  combineSchemas,
  generateRealEstateAgentSchema,
  generateWebSiteSchema,
} from "@/lib/schema";

/** Sitewide RealEstateAgent + WebSite JSON-LD for every page (NAP / LocalBusiness). */
export default function SitewideSchema() {
  return (
    <SchemaScript
      id="sitewide-organization-schema"
      schema={combineSchemas(
        generateRealEstateAgentSchema(),
        generateWebSiteSchema()
      )}
    />
  );
}
