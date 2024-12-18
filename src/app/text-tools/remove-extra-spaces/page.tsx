import ToolRenderer from "@ft/components/ToolContentRenderer";
import { RemoveExtraSpaces } from "@ft/components/tools/TextTools/RemoveExtraSpaces/RemoveExtraSpaces";
import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

export const metadata: Metadata = generateMetaTags(
  ToolKeys.REMOVE_EXTRA_SPACES,
);

function RemoveExtraSpacesPage() {
  return (
    <ToolRenderer toolKey={ToolKeys.REMOVE_EXTRA_SPACES}>
      <RemoveExtraSpaces />
    </ToolRenderer>
  );
}

export default RemoveExtraSpacesPage;
