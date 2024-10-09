import { useEffect, useState } from "react";
import styles from "./Ide.module.css";
import { OutputIdeProps } from "./ide.types";

export default function OutputIde({
  value,
  theme,
  language = "json",
}: OutputIdeProps) {
  const [MonacoEditor, setMonacoEditor] = useState<any>(null);

  useEffect(() => {
    import("@monaco-editor/react").then((module) => {
      setMonacoEditor(module.default);
    });
  }, []);

  if (!MonacoEditor) {
    return <div style={{ height: "74vh" }}> </div>;
  }

  return (
    <MonacoEditor
      theme={theme}
      height="74vh"
      language={language}
      className={styles.editor}
      value={value}
      options={{
        selectOnLineNumbers: true,
        lineNumbersMinChars: 3,
        lineDecorationsWidth: 1,
        mouseWheelZoom: true,
        smoothScrolling: true,
        minimap: {
          enabled: false,
        },
        bracketPairColorization: {
          enabled: true,
        },
        wordWrap: "on",
      }}
    />
  );
}
