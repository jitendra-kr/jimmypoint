"use client";
import Faq from "@ft/components/common/Faq";
import { useState } from "react";

import { ToolKeys } from "../ToolsList/ToolKeys";

import Ide from "@ft/components/common/Ide/Ide";
import { beautifyJSON } from "@ft/utils/json/beautifyJSON";
import { InputOutputViewer } from "../helper/InputOutputViewer/InputOutputViewer";
import JsonViewer from "../helper/JsonViewer/JsonViewer";
import jsonParserFaqData from "./jsonParserFaqData";
import jsonValidatorFaqData from "./jsonValidatorFaqData";

type JsonParserProps = {
  toolKey: ToolKeys.JSONParser | ToolKeys.JSON_VALIDATOR;
};
function JsonParser({ toolKey }: JsonParserProps) {
  const [byte, setByte] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [editorError, setEditorError] = useState<string>("");

  const onError = (errorMsg: string | undefined) => {
    if (errorMsg) {
      setEditorError(errorMsg);
      return;
    }
    setEditorError("");
  };

  const resetStates = () => {
    setError("");
    setByte("");
  };

  function isJsonString(str: string | undefined) {
    if (!str) {
      resetStates();
      return;
    }

    if (editorError) {
      setEditorError("");
    }
    if (error) {
      setError("");
    }
    const { beautifiedData, msg } = beautifyJSON(str);
    if (beautifiedData) {
      setByte(beautifiedData);
    }
    if (msg) {
      setError(msg);
    }
  }

  return (
    <>
      <InputOutputViewer
        inputChild={
          <Ide cb={isJsonString} error={onError} options={{ repair: true }} />
        }
        outputChild={
          <JsonViewer content={byte} error={error} editorError={editorError} />
        }
        toolId={toolKey}
        byte={byte}
      />

      <Faq
        data={
          toolKey === ToolKeys.JSONParser
            ? jsonParserFaqData
            : jsonValidatorFaqData
        }
      />
    </>
  );
}

export default JsonParser;
