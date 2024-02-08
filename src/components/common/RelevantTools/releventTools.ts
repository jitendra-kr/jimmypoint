import { SCREENS } from "../../../common/enums";

export const relevantTools: Record<SCREENS, SCREENS[]> = {
  // Number tools
  [SCREENS.NUMBER_TO_WORDS]: [
    SCREENS.UUID_GENERATOR,
    SCREENS.JSON_PARSER,
    SCREENS.JSON_DIFF,
    SCREENS.XML_TO_JSON,
  ],

  // XML tools
  [SCREENS.XML_FORMATTER]: [
    SCREENS.XML_MINIFIER,
    SCREENS.JSON_PARSER,
    SCREENS.JSON_MINIFIER,
    SCREENS.JSON_DIFF,
  ],

  [SCREENS.XML_MINIFIER]: [
    SCREENS.XML_FORMATTER,
    SCREENS.JSON_PARSER,
    SCREENS.JSON_MINIFIER,
    SCREENS.JSON_DIFF,
  ],
  [SCREENS.XML_TO_JSON]: [
    SCREENS.XML_FORMATTER,
    SCREENS.JSON_PARSER,
    SCREENS.JSON_MINIFIER,
    SCREENS.JSON_DIFF,
  ],
  // Text tools
  [SCREENS.STRING_TO_ASCII]: [
    SCREENS.ASCII_TO_STRING,
    SCREENS.TEXT_TO_UPPERCASE,
    SCREENS.TEXT_TO_LOWERCASE,
    SCREENS.WORD_COUNTER,
  ],
  [SCREENS.ASCII_TO_STRING]: [
    SCREENS.STRING_TO_ASCII,
    SCREENS.TEXT_TO_UPPERCASE,
    SCREENS.TEXT_TO_LOWERCASE,
    SCREENS.WORD_COUNTER,
  ],
  [SCREENS.TEXT_TO_UPPERCASE]: [
    SCREENS.STRING_TO_ASCII,
    SCREENS.ASCII_TO_STRING,
    SCREENS.TEXT_TO_LOWERCASE,
    SCREENS.WORD_COUNTER,
  ],
  [SCREENS.TEXT_TO_LOWERCASE]: [
    SCREENS.STRING_TO_ASCII,
    SCREENS.ASCII_TO_STRING,
    SCREENS.TEXT_TO_UPPERCASE,
    SCREENS.WORD_COUNTER,
  ],
  [SCREENS.WORD_COUNTER]: [
    SCREENS.TEXT_TO_LOWERCASE,
    SCREENS.TEXT_TO_UPPERCASE,
    SCREENS.STRING_TO_ASCII,
    SCREENS.ASCII_TO_STRING,
  ],
  [SCREENS.REPLACE_SPACES]: [
    SCREENS.WORD_COUNTER,
    SCREENS.TEXT_TO_LOWERCASE,
    SCREENS.TEXT_TO_UPPERCASE,
    SCREENS.REMOVE_SPACES,
    SCREENS.REMOVE_EXTRA_SPACES,
  ],
  [SCREENS.REMOVE_SPACES]: [
    SCREENS.WORD_COUNTER,
    SCREENS.TEXT_TO_LOWERCASE,
    SCREENS.TEXT_TO_UPPERCASE,
    SCREENS.REPLACE_SPACES,
    SCREENS.REMOVE_EXTRA_SPACES,
  ],
  [SCREENS.REMOVE_EXTRA_SPACES]: [
    SCREENS.WORD_COUNTER,
    SCREENS.TEXT_TO_LOWERCASE,
    SCREENS.TEXT_TO_UPPERCASE,
    SCREENS.REPLACE_SPACES,
    SCREENS.REMOVE_SPACES,
  ],
  // calculator tools
  [SCREENS.SALARY_HIKE_PERCENTAGE_CALCULATOR]: [
    SCREENS.JSON_PARSER,
    SCREENS.WORD_COUNTER,
    SCREENS.TEXT_TO_UPPERCASE,
    SCREENS.REPLACE_SPACES,
    SCREENS.STRING_TO_ASCII,
  ],
  // JSON tools
  [SCREENS.JSON_TO_STRING]: [
    SCREENS.JSON_PARSER,
    SCREENS.JSON_MINIFIER,
    SCREENS.JSON_DIFF,
    SCREENS.JSON_TO_TYPESCRIPT,
  ],
  [SCREENS.JSON_PARSER]: [
    SCREENS.JSON_TO_STRING,
    SCREENS.JSON_MINIFIER,
    SCREENS.JSON_DIFF,
    SCREENS.JSON_TO_TYPESCRIPT,
  ],
  [SCREENS.JSON_MINIFIER]: [
    SCREENS.JSON_PARSER,
    SCREENS.JSON_TO_STRING,
    SCREENS.JSON_DIFF,
    SCREENS.JSON_TO_TYPESCRIPT,
  ],
  [SCREENS.JSON_DIFF]: [
    SCREENS.JSON_PARSER,
    SCREENS.JSON_TO_STRING,
    SCREENS.JSON_MINIFIER,
    SCREENS.JSON_TO_TYPESCRIPT,
  ],
  [SCREENS.JSON_VALIDATOR]: [
    SCREENS.JSON_DIFF,
    SCREENS.JSON_MINIFIER,
    SCREENS.JSON_TO_TYPESCRIPT,
    SCREENS.JSON_TO_XML,
  ],
  [SCREENS.JSON_TO_TYPESCRIPT]: [
    SCREENS.JSON_PARSER,
    SCREENS.JSON_TO_STRING,
    SCREENS.JSON_MINIFIER,
    SCREENS.JSON_DIFF,
  ],
  [SCREENS.JSON_TO_XML]: [
    SCREENS.XML_TO_JSON,
    SCREENS.JSON_PARSER,
    SCREENS.JSON_MINIFIER,
    SCREENS.JSON_DIFF,
  ],
  // encoding/decoding tools
  [SCREENS.URL_DECODE]: [
    SCREENS.URL_ENCODE,
    SCREENS.JSON_PARSER,
    SCREENS.JSON_MINIFIER,
    SCREENS.JSON_DIFF,
  ],
  [SCREENS.URL_ENCODE]: [
    SCREENS.URL_DECODE,
    SCREENS.JSON_PARSER,
    SCREENS.JSON_MINIFIER,
    SCREENS.JSON_DIFF,
  ],
  [SCREENS.UUID_GENERATOR]: [
    SCREENS.GENERATE_RANDOM_STRING,
    SCREENS.JSON_PARSER,
    SCREENS.JSON_MINIFIER,
  ],
  [SCREENS.HOME]: [],
  [SCREENS.JSON_EXAMPLES]: [],
  [SCREENS.GENERATE_RANDOM_STRING]: [
    SCREENS.UUID_GENERATOR,
    SCREENS.JSON_MINIFIER,
    SCREENS.URL_DECODE,
    SCREENS.JSON_DIFF,
  ],
  [SCREENS["PRIVACY_POLICY"]]: [],
};
