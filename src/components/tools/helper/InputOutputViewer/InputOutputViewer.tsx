"use client";
import { useToolListData } from "@ft/common/hooks/useToolListData";
import LoadingMonaco from "@ft/components/common/Ide/LoadingMonaco";
import { SampleData } from "@ft/components/common/SampleData";
import dynamic from "next/dynamic";
import React from "react";
import { ToolsBody } from "../../ToolsBody/ToolsBody";
import { ToolKeys } from "../../ToolsList/ToolKeys";
import { ToolDescription } from "../ToolOverview/ToolDescription";
import { ToolInputProps } from "./ToolInput";

const ToolInput = dynamic(
  () => import("./ToolInput").then((mod) => mod.ToolInput),
  {
    ssr: false,
    loading: () => <LoadingMonaco />,
  },
);

const ToolOutput = dynamic(
  () => import("./ToolOutput").then((mod) => mod.ToolOutput),
  {
    ssr: false,
    loading: () => <LoadingMonaco />,
  },
);
const ToolsList = dynamic(() => import("../../ToolsList/ToolsList"), {
  ssr: false,
});

type InputOutputViewerProps = {
  toolId: ToolKeys;
  byte: string;
  outputChild?: React.ReactNode;
  children?: React.ReactNode;
  error?: string;
} & Omit<ToolInputProps, "toolData">;

export function InputOutputViewer({
  toolId,
  onChangeCb = () => {},
  byte,
  input,
  onClick,
  placeholder,
  inputNumber,
  children,
  inputChild,
  outputChild,
  options,
  error = undefined,
  inputEditorActionChild,
}: InputOutputViewerProps) {
  const { toolData } = useToolListData(toolId);

  return (
    <>
      <div className={"row editorMinHeight"}>
        {!input && <ToolsBody toolData={toolData} />}
        {children && children}
        {!children && (
          <ToolInput
            toolData={toolData}
            input={input}
            inputChild={inputChild}
            onChangeCb={onChangeCb}
            placeholder={placeholder}
            inputNumber={inputNumber}
            onClick={onClick}
            options={options}
            inputEditorActionChild={inputEditorActionChild}
          />
        )}
        {!children && (
          <ToolOutput byte={byte} outputChild={outputChild} error={error} />
        )}
      </div>
      <ToolDescription
        content={toolData.toolDescription}
        name={toolData.title}
        keyFeatures={toolData.keyFeatures}
      />
      <SampleData pathname={toolData.link} />
      <ToolsList />
    </>
  );
}
