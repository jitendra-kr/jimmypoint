import ReplaceSpaces from "@ft/components/tools/ReplaceSpaces/ReplaceSpaces";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";

export const metadata: Metadata = generateMetaTags(ToolKeys.ReplaceSpaces);

function ReplaceSpacesPage() {
  return <ReplaceSpaces />;
}

export default ReplaceSpacesPage;
