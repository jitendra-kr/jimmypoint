"use client";
import Faq from "@ft/components/common/Faq";
import { textToAscii } from "ascii-text-converter";
import { useState } from "react";
import { ToolKeys } from "../../ToolsList/ToolKeys";
import { InputOutputViewer } from "../../helper/InputOutputViewer/InputOutputViewer";
import { StringToAsciiInJavascript } from "./StringToAsciiInJavascript";
import stringToAsciiFaqData from "./stringToAsciiFaqData";

function StringToAscii() {
  const [byte, setByte] = useState<string>();

  const onChangeCb = (value: string) => {
    const asciiCodes = textToAscii(value);
    setByte(asciiCodes.join(" "));
  };

  return (
    <>
      <InputOutputViewer
        toolId={ToolKeys.StringtoASCII}
        byte={byte ?? ""}
        onChangeCb={onChangeCb}
      />
      <StringToAsciiInJavascript />
      <Faq data={stringToAsciiFaqData}></Faq>
    </>
  );
}

export default StringToAscii;
