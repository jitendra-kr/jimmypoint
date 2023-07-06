import { getToolInput } from "../../../../common/selectors";
import {
  updateDiffLeftInput,
  updateDiffRightInput,
} from "../../../../common/state/tools";
import { useAppDispatch, useAppSelector } from "../../../../hooks";

import { get } from "lodash";
import { useState } from "react";
import { useToolListData } from "../../../../common/hooks/useToolListData";
import { jsonlint } from "../../../../externalLib";
import DiffViewer from "../../../common/Ide/DiffViewer/DiffViewer";
import { ToolKeys } from "../../ToolsList";
import { InputOutputViewer } from "../../helper/InputOutputViewer";

export function JSONDiff() {
  const dispatch = useAppDispatch();
  const { toolData } = useToolListData(ToolKeys.JSON_DIFF);

  const { diffLeftValue, diffRightValue } = useAppSelector(getToolInput);
  const [leftErrorMsg, setLeftErrorMsg] = useState("");
  const [rightErrorMsg, setRightErrorMsg] = useState("");

  const onLeftChange = (valueL: string | undefined) => {
    setLeftErrorMsg("");
    dispatch(updateDiffLeftInput(valueL ?? ""));
  };

  const onRightChange = (valueR: string | undefined) => {
    setRightErrorMsg("");
    dispatch(updateDiffRightInput(valueR ?? ""));
  };

  const formatLeftInput = (valueL: string | undefined) => {
    setLeftErrorMsg("");
    if (!valueL) {
      return;
    }
    try {
      const parsedJSON = jsonlint.parse(valueL);
      onLeftChange(JSON.stringify(parsedJSON, null, "\t"));
    } catch (error: unknown) {
      setLeftErrorMsg(
        `${get(error, "name") + " \n" + get(error, "message")}  `,
      );
    }
  };

  const formatRightInput = (valueR: string | undefined) => {
    setRightErrorMsg("");
    if (!valueR) {
      return;
    }
    try {
      const parsedJSON = jsonlint.parse(valueR);
      onRightChange(JSON.stringify(parsedJSON, null, "\t"));
    } catch (error: unknown) {
      setRightErrorMsg(
        `${get(error, "name") + " \n" + get(error, "message")}  `,
      );
    }
  };

  return (
    <InputOutputViewer
      toolId={ToolKeys.JSON_DIFF}
      byte={""}
      children={
        <DiffViewer
          diffLeftValue={diffLeftValue ?? ""}
          diffRightValue={diffRightValue ?? " "}
          onLeftChange={onLeftChange}
          onRightChange={onRightChange}
          formatLeftInput={formatLeftInput}
          formatRightInput={formatRightInput}
          leftErrorMsg={leftErrorMsg}
          rightErrorMsg={rightErrorMsg}
        />
      }
    />
  );
}