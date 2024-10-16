import { ToolKeys } from "@ft/components/tools/ToolsList/ToolKeys";
import WordCounter from "@ft/components/tools/WordCounter";
import { generateMetaTags } from "@ft/seo/metaTags/generateMetaTags";
import { Metadata } from "next";
export const metadata: Metadata = generateMetaTags(
  ToolKeys.UppercaseTextConverter,
);

function WordsCounterPage() {
  return <WordCounter />;
}

export default WordsCounterPage;
