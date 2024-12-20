"use client";
import { CustomSelect } from "@ft/common/components/UiComponent/CustomSelect";
import { AsciiToTextType, asciiToText } from "ascii-text-converter";
import { useCallback, useEffect, useState } from "react";
import { InputOutputViewer } from "../../helper/InputOutputViewer/InputOutputViewer";

const options: {
  label: string;
  value: AsciiToTextType;
}[] = [
  { value: "decimal", label: "Decimal ASCII" },
  { value: "octal", label: "Octal ASCII" },
  { value: "binary", label: "Binary ASCII" },
  {
    value: "hex",
    label: "Hexadecimal ASCII",
  },
];

function AsciiToString() {
  const [byte, setByte] = useState("");
  const [input, setInput] = useState("");
  const [inputType, setInputType] = useState<AsciiToTextType>("decimal");

  const onChangeCb = useCallback(
    (value: string) => {
      setInput(value);
      if (!value) {
        setByte("");
        return;
      }
      const text = asciiToText(value, {
        type: inputType,
      });
      setByte(text);
    },
    [inputType],
  );

  useEffect(() => {
    onChangeCb(input);
  }, [input, inputType, onChangeCb]);

  return (
    <InputOutputViewer
      byte={byte}
      onChangeCb={onChangeCb}
      inputEditorActionChild={
        <CustomSelect
          onChange={(value: AsciiToTextType) => {
            setInputType(value);
          }}
          label="Select type"
          options={options}
          defaultValue={options[0].value}
        />
      }
    />
  );
}

export default AsciiToString;
