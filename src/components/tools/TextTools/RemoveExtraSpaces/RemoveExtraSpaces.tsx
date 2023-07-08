import { useState } from "react";
import { ToolKeys } from "../../ToolsList";
import { InputOutputViewer } from "../../helper/InputOutputViewer";

export function RemoveExtraSpaces() {
  const [byte, setByte] = useState<string>("");

  const onChangeCb = (value: string) => {
    if (value) {
      setByte(value.replace(/^\s+|\s+$/g, "").replace(/[^\S\r\n]+/g, " "));
    } else {
      setByte("");
    }
  };

  return (
    <InputOutputViewer
      toolId={ToolKeys.REMOVE_EXTRA_SPACES}
      byte={byte}
      onChangeCb={onChangeCb}
    />
  );
}
