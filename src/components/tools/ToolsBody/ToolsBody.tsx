import { H1Tag } from "@ft/components/common/HtmlTags/H1Tag";
import { RelevantTools } from "@ft/components/common/RelevantTools/RelevantTools";
import { ITools } from "../ToolsList/toolsListingData";

export function ToolsBody({ toolData }: { toolData: ITools }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <H1Tag
        heading={toolData.heading}
        styles={{ marginBottom: "30px" }}
      ></H1Tag>
      <RelevantTools toolLink={toolData.link} />
    </div>
  );
}
