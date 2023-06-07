import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

import AceEditor from "react-ace";

type IdeProps = {
  cb: (value: string) => void;
};

export default function Ide({ cb }: IdeProps) {
  return (
    <AceEditor
      height="100vh"
      mode="java"
      theme="github"
      onChange={cb}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
    />
  );
}
