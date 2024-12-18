"use client";
import { CopyToClip } from "@ft/components/tools/helper/CopyToClip/CopyToClip";
import { Monaco, MonacoDiffEditor } from "@monaco-editor/react";
import Col from "antd/es/grid/col";
import Row from "antd/es/grid/row";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import {
  EditorActions,
  EditorActionsButtons,
  FormatInput,
} from "../EditorActions";
import styles from "../Ide.module.css";
import LoadingMonaco from "../LoadingMonaco";
import { UpdateMonacoTheme } from "../UpdateMonacoTheme";
import { DiffErrorMessage } from "./DiffErrorMessage";

type DiffIdeProps = {
  diffLeftValue: string;
  diffRightValue: string;
  onLeftChange: (valueL: string | undefined) => void;
  onRightChange: (valueR: string | undefined) => void;
  formatLeftInput: (valueL: string | undefined) => void;
  formatRightInput: (valueR: string | undefined) => void;
  leftErrorMsg: string;
  rightErrorMsg: string;
};

const DiffEditor = dynamic(
  () => import("@monaco-editor/react").then((mod) => mod.DiffEditor),
  {
    ssr: false,
    loading: () => <LoadingMonaco />,
  },
);

export default function DiffViewer({
  diffLeftValue,
  diffRightValue,
  onLeftChange,
  onRightChange,
  formatLeftInput,
  formatRightInput,
  leftErrorMsg,
  rightErrorMsg,
}: DiffIdeProps) {
  const diffEditorRef = useRef<MonacoDiffEditor>(null);
  const [theme, setTheme] = useState<string>();

  function handleEditorDidMount(editor: MonacoDiffEditor, monaco: Monaco) {
    diffEditorRef.current = editor;
    editor.getOriginalEditor().focus();
  }

  const getOriginalValue = () => {
    return diffEditorRef.current?.getOriginalEditor().getValue() ?? "";
  };

  const getModifiedValue = () => {
    return diffEditorRef.current?.getModifiedEditor().getValue() ?? "";
  };

  const handleThemeChange = (value: string) => {
    setTheme(value);
  };

  return (
    <>
      <Row
        style={{
          marginBottom: "2px",
        }}
      >
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <>
            <DiffErrorMessage message={leftErrorMsg} />
            <EditorActions
              clear={() => {
                onLeftChange("");
                diffEditorRef.current?.getOriginalEditor().setValue("");
              }}
              onChange={onLeftChange}
              childrenAfter={
                <>
                  <FormatInput value={getOriginalValue} cb={formatLeftInput} />
                  <EditorActionsButtons>
                    <CopyToClip content={getOriginalValue} />
                  </EditorActionsButtons>
                </>
              }
            >
              <UpdateMonacoTheme handleThemeChange={handleThemeChange} />
            </EditorActions>
          </>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <>
            <DiffErrorMessage message={rightErrorMsg} />
            <EditorActions
              clear={() => {
                onRightChange("");
                diffEditorRef.current?.getModifiedEditor().setValue("");
              }}
              onChange={onRightChange}
              childrenAfter={
                <>
                  <FormatInput value={getModifiedValue} cb={formatRightInput} />
                  <EditorActionsButtons
                    // eslint-disable-next-line react/no-children-prop
                    children={<CopyToClip content={getModifiedValue} />}
                  />
                </>
              }
            />
          </>
        </Col>
      </Row>

      <DiffEditor
        onMount={handleEditorDidMount}
        className={styles.editor}
        language={"json"}
        theme={theme}
        height="74vh"
        original={diffLeftValue}
        modified={diffRightValue}
        options={{
          selectOnLineNumbers: true,
          lineDecorationsWidth: 1,
          mouseWheelZoom: true,
          smoothScrolling: true,
          bracketPairColorization: {
            enabled: true,
          },
          wordWrap: "on",
          originalEditable: true,
          enableSplitViewResizing: true,
          diffCodeLens: true,
          formatOnPaste: true,
        }}
      />
    </>
  );
}
