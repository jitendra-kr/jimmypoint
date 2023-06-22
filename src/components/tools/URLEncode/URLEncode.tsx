import { withRouter } from "next/router";
import { useState } from "react";
import { ToolKeys } from "../ToolsList";
import { InputOutputViewer } from "../helper/InputOutputViewer/InputOutputViewer";

function URLEncode() {
  const [byte, setByte] = useState("");

  const onChangeCb = (value: string) => {
    try {
      const decodedSysRole = encodeURIComponent(value);
      setByte(decodedSysRole);
    } catch (_error) {
      const error = _error as Error;
      setByte(
        `${error.message}- It appears that the text you submitted is not valid url-encoded text.`,
      );
    }
  };

  return (
    <InputOutputViewer
      toolId={ToolKeys.URLEncode}
      byte={byte}
      onChangeCb={onChangeCb}
    />
  );
}

export default withRouter(URLEncode);