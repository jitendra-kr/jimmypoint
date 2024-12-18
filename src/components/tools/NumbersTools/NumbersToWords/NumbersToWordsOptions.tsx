import CustomSelect from "@ft/common/components/UiComponent/CustomSelect";

const localeOptions = [
  { value: "pt-BR", label: "Brazil (pt-BR)" },
  { value: "fr-FR", label: "France (fr-FR)" },
  { value: "en-IN", label: "India (en-IN)" },
  { value: "en-NG", label: "Nigeria (en-NG)" },
  { value: "tr-TR", label: "Turkey (tr-TR)" },
  { value: "en-AE", label: "UAE (en-AE)" },
  { value: "en-GB", label: "UK (en-GB)" },
  { value: "en-US", label: "USA (en-US)" },
];

export function NumbersToWordsOptions({
  handleLocaleCodeChange,
  handleCurrencyCheckboxChange,
}: {
  handleLocaleCodeChange: (value: string) => void;
  handleCurrencyCheckboxChange: (value: boolean) => void;
}) {
  return (
    <div style={{ marginTop: "20px" }}>
      <CustomSelect
        onChange={handleLocaleCodeChange}
        label="Select locale"
        options={localeOptions}
        defaultValue={localeOptions[0].value}
        // customStyles={{ select: { marginRight: "150px" } }}
      />

      <label htmlFor="Currency">
        <input
          onChange={(status) =>
            handleCurrencyCheckboxChange(status.target.checked)
          }
          type="checkbox"
          id="Currency"
          name="Currency"
          aria-label="Currency"
          value="Bike"
        ></input>
        Currency
      </label>
    </div>
  );
}
