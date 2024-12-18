import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import {
  updateSampleData,
  updateToolsInput,
} from "@ft/common/state/tools/toolsInput.slice";
import { useAppDispatch } from "@ft/hooks/useAppDispatch";
import { CopyToClip } from "../../tools/helper/CopyToClip/CopyToClip";
import { InputOutputActionButton } from "../Buttons/InputOutputActionButton";
import { DownloadOutput } from "../DownloadOutput";

function UseIt({ code }: { code: string }) {
  const dispatch = useAppDispatch();

  return (
    <InputOutputActionButton
      name="Try Sample Data"
      onClick={() => {
        dispatch(updateToolsInput(code));
        dispatch(updateSampleData(true));
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      tooltip="Try Sample Data in above tool"
    />
  );
}

export const ShowCodeBlock = ({
  code,
  language,
  trySample,
  download,
  showLineNumbers = true,
}: {
  code: string;
  language: string;
  trySample?: boolean;
  download?: boolean;
  showLineNumbers?: boolean;
}) => {
  return (
    <div
      style={{
        marginBottom: "60px",
      }}
    >
      <div
        style={{
          marginBottom: "8px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <CopyToClip content={code} />
        {trySample && <UseIt code={code} />}
        {download && <DownloadOutput content={code} />}
      </div>
      <SyntaxHighlighter
        language={language}
        style={stackoverflowDark}
        showLineNumbers={showLineNumbers}
        customStyle={{ fontSize: "19px" }}
        wrapLongLines={true}
        wrapLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
