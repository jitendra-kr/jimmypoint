import addComma from "./addComma";

type CalculatorOutputProps = {
  text: string;
  value: number;
};

export const CalculatorOutput = ({ text, value }: CalculatorOutputProps) => {
  return (
    <b style={{ textAlign: "center", color: "brown", fontSize: "15px" }}>
      {text} <b style={{ fontSize: "19px" }}>{addComma(value)}</b>
    </b>
  );
};
