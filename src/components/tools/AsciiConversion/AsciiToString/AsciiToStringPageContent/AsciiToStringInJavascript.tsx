import { H2Tag } from "@ft/components/common/HtmlTags/H2Tag";
import { PTag } from "@ft/components/common/HtmlTags/PTag";
import { ShowCodeBlock } from "../../../../common/ShowCodeBlock/ShowCodeBlock";

export function AsciiToStringInJavascript() {
  return (
    <>
      <H2Tag heading="Convert ASCII Codes to String in Javascript" />
      <PTag text="JavaScript provides the `fromCharCode` method for obtaining characters from ASCII values. This function allows you to retrieve characters based on their corresponding ASCII values. By passing in the desired ASCII code as an argument, you can effortlessly obtain the corresponding character" />

      <ShowCodeBlock
        download={false}
        language="javascript"
        code={`
function convertAsciiCodesToCharacters(asciiCodes) {
    var text = "";
  
    // Convert ASCII codes to text
    for (var i = 0; i < asciiCodes.length; i++) {
      text += String.fromCharCode(asciiCodes[i]);
    }
  
    return text;
  }
  
  const asciiCodesArray = [102, 105, 114, 101, 98, 111, 120, 116, 111, 111, 108, 115, 46, 99, 111, 109];
  const text = convertAsciiCodesToCharacters(asciiCodesArray);
  console.log(text);
  
// fireboxtools.com
      `}
      />
    </>
  );
}
