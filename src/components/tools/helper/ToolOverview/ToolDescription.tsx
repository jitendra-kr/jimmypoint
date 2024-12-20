import { PTag } from "@ft/components/common/HtmlTags/PTag";
import ToolDescriptionStyles from "./ToolDescription.module.css";

type ConvertedOutputByToolsProps = {
  content: string;
  name: string;
  keyFeatures?: string[];
};
export const ToolDescription = ({
  content,
  name,
  keyFeatures,
}: ConvertedOutputByToolsProps) => {
  if (!content) {
    return <></>;
  }
  return (
    <>
      <h2 className={ToolDescriptionStyles.heading}>
        How {`${name}`} is beneficial for you?
      </h2>
      <div className={ToolDescriptionStyles.container}>
        <PTag text={content} />
      </div>

      {keyFeatures && keyFeatures.length && (
        <>
          <h2 className={ToolDescriptionStyles.heading}>Key Features of it</h2>
          <div className={ToolDescriptionStyles.keyFeaturesContainer}>
            <ul>
              {keyFeatures.map((r, i) => (
                <li
                  key={i}
                  style={{
                    padding: "4px",
                    fontSize: "22px",
                  }}
                >
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
};
