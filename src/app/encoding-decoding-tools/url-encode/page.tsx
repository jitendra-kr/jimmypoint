import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import URLEncode from "@ft/components/tools/URLEncode/URLEncode";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.URLEncode);

function URLEncodePage() {
  return <URLEncode />;
}

export default URLEncodePage;
