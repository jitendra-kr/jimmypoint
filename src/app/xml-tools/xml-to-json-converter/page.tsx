import { XMLToJSON } from "@ft/components";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.XML_TO_JSON);

function XmlToJSONPage() {
  return <XMLToJSON />;
}

export default XmlToJSONPage;
