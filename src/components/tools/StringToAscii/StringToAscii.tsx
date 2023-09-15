import { withRouter } from "next/router";
import { useState } from "react";
import { ToolKeys } from "../ToolsList";
import { InputOutputViewer } from "../helper/InputOutputViewer";
import { StringToAsciiInJavascript } from "./StringToAsciiInJavascript";

function StringToAscii() {
  const [byte, setByte] = useState<string>();

  const textToASCIIConvert = (inputText: string) => {
    const asciiArray = [];

    for (let i = 0; i < inputText.length; i++) {
      const asciiValue = inputText.charCodeAt(i);
      asciiArray.push(asciiValue);
    }

    return asciiArray;
  };

  const onChangeCb = (value: string) => {
    const asciiCodes = textToASCIIConvert(value);
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
    </>
  );
}

export default withRouter(StringToAscii);
