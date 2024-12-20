"use client";
import { CustomNumberInput } from "@ft/common/components/UiComponent/CustomInput";
import { CustomTextarea } from "@ft/common/components/UiComponent/CustomTextarea";

import CustomSelect from "@ft/common/components/UiComponent/CustomSelect";
import { CSSProperties, Dispatch, SetStateAction, useState } from "react";
import { Label } from "../../SalaryHikePercentageCalculator/Label";
import {
  Format,
  InputValue,
  RandomStringFormat,
} from "./randomStringGenerator.types";

const LabelStyle: CSSProperties = {
  marginTop: "10px",
  fontSize: "18px",
};
const CustomInputStyle: CSSProperties = {
  width: "400px",
};

export const RandomStringOptions: Format[] = [
  {
    value: "Lowercase (a-z)",
    label: "Lowercase (a-z)",
  },
  {
    value: "Uppercase (A-Z)",
    label: "Uppercase (A-Z)",
  },
  {
    value: "Mixed (a-zA-Z)",
    label: "Mixed (a-zA-Z)",
  },
  { value: "Numbers (0-9)", label: "Numbers (0-9)" },
  {
    value: "Lowercase a-z and numbers (0-9)",
    label: "Lowercase a-z and numbers (0-9)",
  },
  {
    value: "Uppercase A-Z and numbers (0-9)",
    label: "Uppercase A-Z and numbers (0-9)",
  },
  {
    value: "All letters a-zA-Z and numbers (0-9)",
    label: "All letters a-zA-Z and numbers (0-9)",
  },
  {
    value: "Hex",
    label: "Hex",
  },
  {
    value: "Binary",
    label: "Binary",
  },
  {
    value: "Octal",
    label: "Octal",
  },
  {
    value: "Custom character set",
    label: "Custom character set",
  },
];

export function RandomStringGeneratorOptions({
  setInputValue,
  inputValue,
}: {
  setInputValue: Dispatch<SetStateAction<InputValue>>;
  inputValue: InputValue;
}) {
  const [randomStringOptionsValue, setRandomStringOptionsValue] =
    useState<RandomStringFormat>(RandomStringOptions[0].value);

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <div>
          <Label style={LabelStyle} label="Format:"></Label>
          <div style={{ marginTop: "10px" }}>
            <CustomSelect
              onChange={(value) => {
                setRandomStringOptionsValue(value);
                setInputValue((previous) => ({
                  ...previous,
                  format: value,
                  customAlphabets: "",
                }));
              }}
              label="Select format"
              options={RandomStringOptions}
              defaultValue={inputValue.format}
            />
          </div>
        </div>

        <div style={{ alignSelf: "center", marginTop: "20px" }}>
          <Label style={LabelStyle} label="String length:"></Label>
          <div style={{ marginTop: "10px" }}>
            <CustomNumberInput
              maxValue={70}
              defaultValue={inputValue.stringLength}
              onChange={(value: number) => {
                setInputValue((previous) => ({
                  ...previous,
                  stringLength: value,
                }));
              }}
              style={CustomInputStyle}
            ></CustomNumberInput>
          </div>
        </div>
        <div style={{ alignSelf: "center", marginTop: "20px" }}>
          <Label style={LabelStyle} label="How Many Strings:"></Label>
          <div style={{ marginTop: "10px" }}>
            <CustomNumberInput
              maxValue={1000}
              defaultValue={inputValue.howManyStrings}
              onChange={(value: number) => {
                setInputValue((previous) => ({
                  ...previous,
                  howManyStrings: value,
                }));
              }}
              style={CustomInputStyle}
            ></CustomNumberInput>
          </div>
        </div>
        <div style={{ alignSelf: "center", marginTop: "20px" }}>
          <Label
            style={LabelStyle}
            label={
              <>
                Custom Alphabets <br></br>to Generate <br></br>random strings :
              </>
            }
          ></Label>

          <div style={{ marginTop: "10px" }}>
            <CustomTextarea
              onChange={(value: string) => {
                if (value) {
                  setRandomStringOptionsValue("Custom character set");
                  setInputValue((previous) => ({
                    ...previous,
                    format: "Custom character set",
                  }));
                } else {
                  setRandomStringOptionsValue("Lowercase (a-z)");
                  setInputValue((previous) => ({
                    ...previous,
                    format: RandomStringOptions[0].value,
                  }));
                }
                setInputValue((previous) => ({
                  ...previous,
                  customAlphabets: value,
                }));
              }}
              style={CustomInputStyle}
              value={inputValue.customAlphabets}
            />
          </div>
        </div>
      </div>
    </>
  );
}
