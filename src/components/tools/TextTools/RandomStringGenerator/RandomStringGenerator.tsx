"use client";
import dynamic from "next/dynamic";
import { Charset, GenerateOptions } from "randomstring";
import { useState } from "react";
import { InputOutputViewer } from "../../helper/InputOutputViewer/InputOutputViewer";
import { RandomStringOptions } from "./RandomStringGeneratorOptions";
import { InputValue, RandomStringFormat } from "./randomStringGenerator.types";

const RandomStringGeneratorOptions = dynamic(
  () =>
    import("./RandomStringGeneratorOptions").then(
      (mod) => mod.RandomStringGeneratorOptions,
    ),
  {
    ssr: false,
  },
);

export function RandomStringGenerator() {
  const [inputValue, setInputValue] = useState<InputValue>({
    format: RandomStringOptions[0].value,
    howManyStrings: 2,
    stringLength: 32,
  });

  const RandomStringFormatObj = {} as Record<
    RandomStringFormat,
    RandomStringFormat
  >;

  for (const item of RandomStringOptions) {
    RandomStringFormatObj[item.value] = item.label;
  }

  var numbers = "0123456789";
  var charsLower = "abcdefghijklmnopqrstuvwxyz";
  var charsUpper = charsLower.toUpperCase();
  var charsMix = charsLower + charsUpper;

  const [byte, setByte] = useState("");
  const [error, setError] = useState("");

  const onChangeCb = () => {};

  const internalData: Record<RandomStringFormat, Charset> = {
    "Lowercase (a-z)": charsLower,
    "Uppercase (A-Z)": charsUpper,
    "Mixed (a-zA-Z)": charsMix,
    "Numbers (0-9)": "numeric",
    "Lowercase a-z and numbers (0-9)": charsLower + numbers,
    "Uppercase A-Z and numbers (0-9)": charsUpper + numbers,
    "All letters a-zA-Z and numbers (0-9)": charsMix + numbers,
    Hex: "hex",
    Binary: "binary",
    Octal: "octal",
    "Custom character set": "",
  };

  const onClick = async () => {
    try {
      if (error) {
        setError("");
      }
      let result = "";
      const options: GenerateOptions = {};
      if (inputValue.stringLength) {
        options.length = inputValue.stringLength;
      }
      if (inputValue.format) {
        options.charset = internalData[inputValue.format];
      }
      if (inputValue.customAlphabets) {
        options.charset = inputValue.customAlphabets;
      }
      const { generate } = await import("randomstring");
      for (let index = 0; index < inputValue?.howManyStrings; index++) {
        result += generate(options) + "\n";
      }
      setByte(result);
    } catch (error) {
      setError(
        "OOPS! SOMETHING WENT WRONG. WE COULD NOT GENERATE RANDOM STRINGS FOR YOU.\n\nTRY AGAIN",
      );
    }
  };

  return (
    <>
      <InputOutputViewer
        byte={byte}
        onChangeCb={onChangeCb}
        options={{ hideInput: true, buttonAfterOption: true }}
        input={{
          showInput: true,
          buttonName: "Generate String",
          options: (
            <>
              <RandomStringGeneratorOptions
                setInputValue={setInputValue}
                inputValue={inputValue}
              />
            </>
          ),
        }}
        onClick={onClick}
        placeholder={`Enter desired number`}
        error={error}
      />
    </>
  );
}
