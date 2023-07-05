import { withRouter } from "next/router";
import { useState } from "react";
import { ToolKeys } from "../ToolsList";
import { InputOutputViewer } from "../helper/InputOutputViewer";

function ToUppercase() {
  const [byte, setByte] = useState<string>("");

  const onChangeCb = (value: string) => {
    if (value) {
      setByte(value.toUpperCase());
    } else {
      setByte("");
    }
  };

  return (
    <InputOutputViewer
      toolId={ToolKeys.UppercaseTextconverter}
      byte={byte}
      onChangeCb={onChangeCb}
    />
  );
}

export default withRouter(ToUppercase);
