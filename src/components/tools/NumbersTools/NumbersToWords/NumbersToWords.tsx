"use client";
import { capitalizeEveryWord } from "@ft/utils/utils";
import dynamic from "next/dynamic";
import { useState } from "react";
import { InputOutputViewer } from "../../helper/InputOutputViewer/InputOutputViewer";
import {
  ConvertNumberToWord,
  InitialNumToWordOptions,
} from "./NumbersToWords.types";

const NumbersToWordsOptions = dynamic(
  () =>
    import("./NumbersToWordsOptions").then((mod) => mod.NumbersToWordsOptions),
  {
    ssr: false,
  },
);

const getLanguage = (): string => {
  return typeof window !== "undefined" ? navigator.language : "en-US";
};

export function NumbersToWords() {
  const [byte, setByte] = useState("");
  const [error, setError] = useState("");
  const [number, setNumber] = useState<string>("");
  const [options, setOptions] = useState<InitialNumToWordOptions>({
    localeCode: getLanguage(),
    currency: false,
  });

  const handleLocaleCodeChange = (localeCode: string) => {
    setOptions((value) => ({ ...value, localeCode }));
    onChangeCb(number, localeCode, options.currency);
  };

  const handleCurrencyCheckboxChange = (currency: boolean) => {
    setOptions((value) => ({ ...value, currency }));
    onChangeCb(number, options.localeCode, currency);
  };

  const convertNumberToWord = async ({
    value,
    localeCode,
    currency,
  }: ConvertNumberToWord) => {
    try {
      const ToWords = (await import("to-words")).ToWords;
      const toWords = new ToWords({
        localeCode: localeCode ?? options.localeCode,
        converterOptions: {
          currency: currency ?? options.currency,
          doNotAddOnly: true,
        },
      });
      const words = toWords.convert(Number(value));
      setByte(capitalizeEveryWord(words));
    } catch (error) {
      setError("INVALID NUMBER");
    }
  };

  const onChangeCb = async (
    value: string,
    localeCode?: string,
    currency?: boolean,
  ) => {
    setByte("");
    setError("");
    setNumber("");

    if (!value) {
      return;
    }
    value = value.replaceAll(",", "");
    setNumber(value);
    convertNumberToWord({ value, localeCode, currency });
  };

  return (
    <>
      <InputOutputViewer
        byte={byte}
        onChangeCb={onChangeCb}
        input={{
          showInput: true,
          buttonName: "",
          options: (
            <NumbersToWordsOptions
              handleCurrencyCheckboxChange={handleCurrencyCheckboxChange}
              handleLocaleCodeChange={handleLocaleCodeChange}
            />
          ),
        }}
        placeholder={`Enter desired number`}
        error={error}
      />
    </>
  );
}
