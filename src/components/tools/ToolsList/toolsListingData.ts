import { SCREENS } from "../../../common/enums";
import { SeoTags } from "../../../seo/seo.interface";
import seoData from "../../../seo/tools/tools.json";

export enum ToolKeys {
  SalaryHike = "SalaryHike",
  StringtoASCII = "StringtoASCII",
  ASCIItoString = "ASCIItoString",
  JSONtostring = "JSONtostring",
  JSONParser = "JSONParser",
  JSONUnstringify = "JSONUnstringify",
  UppercaseTextconverter = "UppercaseTextconverter",
  LowercaseTextconverter = "LowercaseTextconverter",
  wordCounter = "wordCounter",
  Tools = "Tools",
  ReplaceSpaces = "ReplaceSpaces",
  UrlDecode = "UrlDecode",
  URLEncode = "URLEncode",
  UUIDGenerator = "UUIDGenerator",
  HOME = "HOME",
  JSON_DIFF = "JSON_DIFF",
  JSON_MINIFIER = "JSON_MINIFIER",
  JSON_TO_TYPESCRIPT = "JSON_TO_TYPESCRIPT",
  REMOVE_EXTRA_SPACES = "REMOVE_EXTRA_SPACES",
  REMOVE_SPACES = "REMOVE_SPACES",
}

export interface ITools extends SeoTags {
  title: string;
  link: SCREENS;
  heading: string;
  content: string;
  list: boolean;
  key: ToolKeys;
  toolDescription: string;
}

export const jsonParser = "json-parser";

export const toolsListData: Array<ITools> = [
  {
    title: "String to ASCII",
    link: SCREENS.STRING_TO_ASCII,
    heading: "Convert String to ASCII: Online Tool for Easy ASCII Conversion",
    content:
      "Just load your text, System will automatically convert it to ASCII codes",
    metaTitle: seoData.stringToAscii.title,
    metaDescription: seoData.stringToAscii.description,
    list: true,
    key: ToolKeys.StringtoASCII,
    toolDescription: `Are you tired of spending hours manually converting characters to ASCII codes? Look no further than our Convert String to ASCII tool!
    \nIt is not only effective but also remarkably easy to use. You won't have any trouble entering and translating your content because to the simple and clear UI for ASCII Conversion.
    \nConvert text to ASCII quickly and accurately with our free online tool for easy ASCII conversion. Save time and effort with this easy-to-use tool. No coding skills required - just enter your string and get the result instantly.
    \nOur online ASCII converter is a powerful that allows you to easily convert any string of text into its corresponding ASCII code. Whether you need to convert a single word, an paragraph or document, It can handle it all with ease. Simply enter your text or upload text file into the tool, and it will instantly generate the corresponding ASCII code for each character. 
    \nThis tool is particularly useful for developers, programmers, and anyone who needs to work with ASCII codes. Best of all, our online ASCII converter is completely free to use and requires no downloads or installations. 
    `,
  },
  {
    title: "ASCII to String",
    link: SCREENS.ASCII_TO_STRING,
    heading: "Convert ASCII to String Online with Ease and Accuracy",
    content:
      "Just load your ASCII code, System will automatically convert it to text",
    metaTitle: seoData.asciiToString.title,
    metaDescription: seoData.asciiToString.description,
    list: true,
    key: ToolKeys.ASCIItoString,
    toolDescription: `With our cutting-edge ASCII to String converter, you can effortlessly transform your ASCII-encoded data into easily readable strings. This advanced tool is designed to be efficient, accurate, and user-friendly, catering to individuals who require swift processing of vast quantities of data.
    \nUsing our converter is a breeze. You have multiple options at your disposal: typing, pasting, or uploading the ASCII codes to tool. This flexibility allows you to choose the method that best suits your preferences and requirements. Whether you have a small snippet of ASCII code or a massive dataset, our converter can handle it all with ease.   
    \nOne of the standout features of our ASCII codes to String converter is its speed. We understand the importance of time, especially when dealing with significant volumes of data. Our converter is optimized to process the information swiftly, ensuring that you can convert your ASCII-encoded data into readable strings without unnecessary delays.
    \nAccuracy is another key aspect of our converter. We have implemented sophisticated algorithms and technologies to ensure that the conversion process is highly precise. You can trust that the resulting strings will be an accurate representation of the original ASCII-encoded data. This level of accuracy is crucial, particularly in scenarios where data integrity is paramount.
    \nThe user-friendly nature of our converter sets it apart from others in the market. We have designed the interface to be intuitive and straightforward, making it accessible to users of all skill levels. Whether you are a seasoned professional or a novice, you can navigate our converter with ease. The clear instructions and prompts provided throughout the conversion process further enhance the user experience, ensuring that you can effortlessly achieve the desired results.
    \nFurthermore, our converter is constantly updated to ensure compatibility with the latest ASCII standards and industry practices. We strive to stay ahead of the curve and provide our users with a reliable and up-to-date solution. This commitment to continuous improvement sets us apart as a trusted provider of ASCII to readable String conversion tools.
    `,
  },
  {
    title: "JSON to String",
    link: SCREENS.JSON_TO_STRING,
    heading: "Online JSON to String Converter & Stringify Tool",
    content:
      "Just load your JSON, System will automatically convert JSON string or text",
    metaTitle: seoData.jsonToString.title,
    metaDescription: seoData.jsonToString.description,
    list: true,
    key: ToolKeys.JSONtostring,
    toolDescription: `Are you looking for a fast, easy-to-use, and accurate tool that can convert JSON to strings? Look no further! Our cutting-edge converter is the perfect solution for developers and data analysts who need to process JSON data quickly and efficiently.
    \nOne of the standout features of our converter is its speed. We understand the importance of time, especially in the fast-paced world of software development and data analysis. Our tool is optimized to convert JSON to a string in the blink of an eye, allowing you to save precious minutes and focus on other critical tasks.
    \nAccuracy is another key aspect of our tool. We have implemented advanced algorithms and validation techniques to ensure that the conversion process is highly precise. Before converting, our tool validates the JSON data, ensuring that it is well-formed and error-free. This level of accuracy is crucial, particularly when working with large datasets or when data integrity is of the utmost importance.
    \nIt is designed with user-friendliness in mind. We understand that not everyone has extensive programming knowledge, which is why we have created an intuitive and straightforward interface. Whether you are a seasoned developer or a beginner, you can navigate our tool with ease. The clear instructions and prompts provided throughout the conversion process further enhance the user experience, ensuring that you can achieve the desired results effortlessly.
    \nFurthermore, our converter is constantly updated to ensure compatibility with the latest JSON standards and industry practices. We strive to stay ahead of the curve and provide our users with a reliable and up-to-date solution. This commitment to continuous improvement sets us apart as a trusted provider of JSON to String conversion tools.
    \nIn conclusion, our it is a fast, easy-to-use, and accurate tool that is indispensable for developers and data analysts. With its efficient processing capabilities, precise conversion algorithms, and user-friendly interface, it simplifies the process of converting JSON data to a string. Experience the convenience and reliability of our converter today and unlock the full potential of your JSON data.`,
  },
  {
    title: "JSON Parser",
    link: SCREENS.JSON_PARSER,
    heading: "Online JSON Formatter, Parser, Beautifier & Validator",
    content:
      "Just load your JSON, and the system will validate, parse, and format it automatically.",
    metaTitle: seoData.jsonParser.title,
    metaDescription: seoData.jsonParser.description,
    list: true,
    key: ToolKeys.JSONParser,
    toolDescription: `Are you in need of a secure JSON formatter tool to formal JSON data that ensures the integrity and safety of your data? 
    \nLook no further! Our advanced JSON formatter is designed to provide a fast, easy-to-use, and accurate solution for developers and data analysts who value data security and precision.    
Easily parse, beautify and Validate JSON data with our reliable and secure online JSON formatter.    
    \nOne of the key features of our JSON validator is its robust validation process. Before formatting, our tool thoroughly validates the provided JSON data, ensuring that it is well-formed and free of errors. This validation step is crucial, as it guarantees that the resulting formatted JSON will be accurate and reliable.     
    \nIn addition to its validation capabilities, It is incredibly fast. We understand that time is of the essence, especially when dealing with large datasets. Our tool is optimized to process JSON formatting swiftly, allowing you to save valuable time and increase productivity.  
    \nUser-friendliness is another standout aspect of our JSON parser. We have designed the interface to be intuitive and straightforward, catering to users of all skill levels. Whether you are a seasoned developer or a beginner, you can easily navigate our tool with ease. Following beautifying, you may easily download a json file..
    \nIt goes beyond basic formatting, offering additional features to enhance the overall functionality. For instance, if the provided JSON has minor issues like trailing commas, wrap key and values to double quotes, fix incorrect quotes, or unnecessary comments, our tool can automatically repair them. This feature saves you the hassle of manually fixing these small errors, allowing you to focus on more critical aspects of your work.     
    \nMoreover, our JSON tool prioritizes data security. We understand the importance of protecting sensitive information, which is why our tool operates in a secure environment, giving you peace of mind to know that your data is safe throughout the formatting process without sending to external servers. Once      
    \nIn conclusion, our secure JSON formatter tool is a fast, easy-to-use, and accurate solution for developers and data analysts. With its robust validation process, speedy formatting capabilities, and user-friendly interface, it simplifies the process of beautify json data while ensuring data integrity and security. Experience the convenience and reliability of it today and unlock the full potential of your JSON data.`,
  },
  {
    title: "JSON Minifier",
    link: SCREENS.JSON_MINIFIER,
    heading: "Online JSON Minifier",
    content:
      "Simply load your JSON, and the system will automatically minify it",
    metaTitle: seoData.jsonMinifier.title,
    metaDescription: seoData.jsonMinifier.description,
    list: true,
    key: ToolKeys.JSON_MINIFIER,
    toolDescription: `Are you tired of dealing with large, unwieldy JSON files that slow down your website? Do you wish there was an easy and secure way to compress and optimize your JSON data for better performance and faster load times? Look no further than our JSON Minifier!
    \nWith our tool, you can effortlessly minify and compress your JSON data, reducing its size by up to 80% while still maintaining its original quality and data structure. It uses advanced compression algorithms to ensure that your data remains secure throughout the process, protecting your sensitive information from prying eyes and data breaches.
    \nBut that's not all - our JSON Minifier tool offers a range of benefits for your website or application, including:
    \n1. Improved Performance: By reducing the size of your JSON data, our tool can help improve your website or application's overall performance and load times, resulting in a better user experience for your visitors.
    \n2. Cost Savings: Smaller file sizes allow you to cut bandwidth usage and server storage expenses, which over time will save you a lot of money.    .
    \n3. Faster Data Transfer: With compressed JSON data, you can transfer data more quickly, allowing for faster data transfers and quicker communication between the server and client.
    \n4. Easy to use: Our tool is easy to use and can be quickly minify JSON data, Just after typing data tool starts compressing and minifying your JSON data right away.
    \nSo why wait? Try our JSON Minify tool today and see the benefits for yourself. Say goodbye to slow load times and hello to optimized JSON data with just a few clicks!
    `,
  },
  {
    title: "JSON to Typescript",
    link: SCREENS.JSON_TO_TYPESCRIPT,
    heading: "JSON to Typescript",
    content:
      "Simply load your JSON, and the system will automatically generate typescript from JSON",
    metaTitle: seoData.jsonToTypescript.title,
    metaDescription: seoData.jsonToTypescript.description,
    list: true,
    key: ToolKeys.JSON_TO_TYPESCRIPT,
    toolDescription: `Are you tired of manually converting JSON data to TypeScript interfaces? Look no further! Introducing our online JSON to TypeScript Conversion tool, Our online Conversion tool is here to save you time and effort. With our secure and fast conversion process, you can effortlessly transform your JSON data into TypeScript interfaces.

Our first emphasis is security. We recognize the importance of safeguarding sensitive material, so you can be confident that your JSON files will be handled with the utmost care and confidentiality during the conversion process. Your data is kept secure and private, providing peace of mind.

But that's not all. Our tool goes beyond simple conversion. We offer an additional feature that allows you to fix minor errors (fix quotes, escape characters, remove comments and trailing commas) in your JSON data using the "Repair JSON" option. This handy feature ensures that your JSON data is valid and error-free before generating the TypeScript interfaces.

Generating TypeScript interfaces based on your provided data has never been easier. Our tool analyzes the structure and content of your data and automatically generates the corresponding TypeScript interfaces. Say goodbye to manual coding and hello to automated code generation!

Using our JSON conversion tool, you can streamline your development process and eliminate the tedious task of manually converting JSON to Interface. The generated TypeScript interfaces provide strong typing and improved code readability, enhancing the maintainability of your code.

Whether you're a seasoned developer or just starting out, our tool is suitable for all skill levels. You don't have to be a TypeScript expert to benefit from the power of strong typing. Our user-friendly interface simplifies and intuitively converts your code, allowing you to focus on what matters most: creating outstanding software.`,
  },
  {
    title: "JSON Diff",
    link: SCREENS.JSON_DIFF,
    heading: "JSON Diff",
    content:
      "Just load your JSON data, and the system will compare and highlight JSON data differences automatically.",
    metaTitle: seoData.jsonDiff.title,
    metaDescription: seoData.jsonDiff.description,
    list: true,
    key: ToolKeys.JSON_DIFF,
    toolDescription: `Introducing our secure JSON Diff tool, a powerful solution that not only performs JSON comparisons but also validates the provided JSON data. With its lightning-fast speed, user-friendly interface, and unparalleled accuracy, this tool is a must-have for developers, data analysts, and anyone working with JSON files.

One of the key features of our JSON Diff tool is its ability to perform quick and accurate JSON comparisons. It highlights the differences between two JSON files, making it easy to identify additions, modifications, and deletions. This functionality is crucial for debugging code, identifying changes in data structures, and ensuring data integrity.
    
In addition to performing comparisons, our tool goes the extra mile by validating JSON data. It checks the provided JSON against the JSON schema standard, ensuring that it adheres to the specified structure, data types, and constraints. This validation feature is particularly useful in scenarios where data quality and consistency are of utmost importance.
    
Speed is another highlight of our JSON Diff tool. Thanks to its optimized algorithms and efficient processing capabilities, it can handle even the most complex JSON files in a matter of seconds. This allows users to save valuable time and focus on more critical tasks rather than waiting for lengthy comparisons to complete.
    
The user-friendly interface makes it accessible to both novice and experienced users. The intuitive design guides users through the diffing and validation process with ease. Even those without a technical background can navigate through the tool effortlessly and make use of its powerful functionality.
    
Moreover, our JSON Diff tool offers an additional benefit by allowing users to repair JSON files with minor issues. It gives a repair JSON feature to fixe common problems such as trailing commas, corrects inconsistent quote usage, and removes unnecessary whitespace, comments. This feature saves users from the hassle of manually editing JSON files and ensures that the resulting JSON is error-free.
    
When it comes to security, our JSON Diff tool prioritizes the protection of user data. We have implemented robust security measures to safeguard the confidentiality and integrity of the JSON files processed through our tool. Users can have peace of mind knowing that their sensitive data is protected at all times.
    
In summary, our secure JSON Diff tool combines the functionalities of performing comparisons, validating JSON, and repairing minor issues, all while offering speed, user-friendliness, and accuracy. Whether you're a developer, data analyst, or someone working with JSON files, this tool is an invaluable resource for enhancing productivity and ensuring data quality.`,
  },
  {
    title: "Text to Uppercase",
    link: SCREENS.TEXT_TO_UPPERCASE,
    heading: "Easily Convert Text & Strings to Uppercase Online",
    content:
      "Just load your text, System will automatically convert it to upper case text",
    metaTitle: seoData.toUppercase.title,
    metaDescription: seoData.toUppercase.description,
    list: true,
    key: ToolKeys.UppercaseTextconverter,
    toolDescription: `Introducing our revolutionary Convert Text to Uppercase tool – the ultimate solution for effortless capitalization. Are you tired of spending precious time manually capitalizing text? Look no further! Our tool will transform your experience and make sure your words stand out with just a click.

Whether you're a professional writer, a student, or simply someone dealing with the text on a daily basis, our Text to Uppercase Converter tool is the ultimate choice. Gone are the days of painstakingly capitalizing word by word or sentence by sentence. With our tool, you can capitalize an entire document.
    
What sets our Convert Text to Uppercase tool apart from other options on the market is its ease of use. Regardless of your level of technical skill, you will be able to utilize the tool with ease thanks to its simple and intuitive interface. Even those who are not as tech-savvy will find our tool incredibly straightforward to use, making it accessible to a wide range of users.
    
Imagine the time and effort saved by eliminating the need to manually capitalize multiple documents. Our tool streamlines the capitalization process, allowing you to focus on more important tasks. Whether it's a lengthy report for work, an essay for school, or simply a text message that needs a touch of emphasis, our Convert Text to Uppercase tool will make sure your text stands out effortlessly.
    
Additionally, it is web-based, which means you can access it anytime, anywhere with an internet connection. Whether you're working from your desktop computer, laptop, tablet, or even your smartphone, our tool will be at your fingertips whenever you need it. No need to worry about compatibility issues or downloading and installing software – simply open your internet browser and get started!
    
We also understand that cost can be a concern for many users. That's why we offer our Convert Text to Uppercase tool completely free of charge! We believe that everyone should have access to efficient and convenient tools, regardless of their budget or financial resources. By offering our tool for free, we ensure that you can supercharge your text capitalization without any cost barriers.
    
Don't waste another minute manually capitalizing text – try our Convert Text to Uppercase tool and experience the convenience and efficiency it brings to your life. Elevate your written communication, save time, and effortlessly make your words stand out with our irresistible tool
    `,
  },
  {
    title: "Text to Lowercase",
    link: SCREENS.TEXT_TO_LOWERCASE,
    heading: "Easily Convert Text & Strings to Lowercase Online",
    content:
      " Just load your text, System will automatically convert it to lower case text",
    metaTitle: seoData.toLowercase.title,
    metaDescription: seoData.toLowercase.description,
    list: true,
    key: ToolKeys.LowercaseTextconverter,
    toolDescription: `Introducing our Text to Lowercase converter, a powerful online tool that allows you to effortlessly convert any text or strings to lowercase format. With its exceptional speed, user-friendly interface, and unmatched accuracy, this tool is a game-changer for anyone who needs to convert text to lowercase quickly and efficiently.

Our Text to Lowercase converter is designed to save you valuable time and effort. Instead of manually converting each letter or word to lowercase, simply type, paste, or upload your text document into the tool and watch it instantly converts to lowercase. People who routinely work with a lot of text, like writers, editors, or data analysts, will particularly benefit from this. By using it, you can avoid the tedious and time-consuming process of converting text by hand.
    
Speed is a standout feature of our Text to Lowercase converter. It quickly processes your text and provides the converted result in a matter of seconds. It ensures that you can convert text to lowercase format with remarkable efficiency.
    
In addition to its speed, our Text to Lowercase converter boasts a user-friendly interface. The tool is designed to be intuitive and straightforward, allowing users of all levels of technical proficiency to easily navigate and utilize its functionality. You don't need to download or install any software - simply access the tool online and start converting your text to lowercase hassle-free.
    
Accuracy is paramount when it comes to converting text to lowercase, and our tool delivers exceptional results. It ensures that every letter and character in your text is properly converted to lowercase, leaving no room for errors or inconsistencies. This is particularly crucial for maintaining consistency in text formatting, adhering to specific style guidelines, or ensuring compatibility in coding.
    
By using our Text to Lowercase converter, you can enjoy a multitude of benefits. Firstly, it saves you time and energy by automating the conversion process. Secondly, it guarantees consistency and accuracy, eliminating the risk of manual errors. Lastly, it enhances productivity, allowing you to focus on other important tasks instead of spending valuable time converting text.
    `,
  },
  {
    title: "Word Counter",
    link: SCREENS.WORD_COUNTER,
    heading: "Accurate Word and Character Counter Tool",
    content: " Just load your text, System will automatically start counting ",
    metaTitle: seoData.wordCounter.title,
    metaDescription: seoData.wordCounter.description,
    list: true,
    key: ToolKeys.wordCounter,
    toolDescription: `Introducing our Word Counter tool, a fast, user-friendly, and accurate online tool designed to help you effortlessly count the words, characters, and sentences in your content. Whether you're a writer, editor, student, or anyone who frequently deals with textual content, our Word Counter is an invaluable resource that simplifies the process of analyzing and understanding your text.

Speed is a standout feature of our Word Counter tool. With its advanced algorithms, it swiftly scans your content and provides you with precise word, character, and sentence counts in a matter of seconds. It ensures that you can analyze your content efficiently and effectively.
    
User-friendliness is at the core of our Word Counter tool. The interface is designed to be intuitive and straightforward, making it easy for users of all levels of technical proficiency to navigate and utilize its functionality. Simply type, paste, or upload your content into the tool, and instantly receive accurate and detailed word, character, and sentence counts. No downloads or installations are required.
    
Accuracy is paramount when it comes to analyzing and understanding your content, and our Word Counter tool delivers exceptional results. It ensures that every word, character, and sentence is properly counted, without leaving room for errors or inconsistencies. This is particularly crucial for writers, editors, and students who rely on accurate data for various purposes such as meeting word count requirements, tracking progress, or analyzing text patterns.`,
  },
  {
    title: "Replace Spaces with Underscore",
    link: SCREENS.REPLACE_SPACES,
    heading: "Replace Spaces with Underscores",
    metaTitle: seoData.ReplaceSpaces.title,
    metaDescription: seoData.ReplaceSpaces.description,
    content: `Just load your content or text, By default system will replace all spaces with underscores
      if you need to replace specific character please use below input fields accordingly`,
    list: true,
    key: ToolKeys.ReplaceSpaces,
    toolDescription: `Are you tired of struggling with spaces in your file names or text? Look no further than our Replace Space with Underscore tool! You can effortlessly replace spaces with underscores, making your file names or text more organized and compatible.

Our tool is designed to be fast, user-friendly, and accurate. Delete your need to manually rename files or skim through lengthy papers to replace spaces. With our tool, you can automate the process and save valuable time and effort.
    
But wait, there's more! Our tool goes beyond simple space replacement. We understand that there might be instances where you need to replace specific text with provided characters. Our tool caters to this need as well, providing an additional feature to replace any specific text with the characters of your choice. This versatility sets our tool apart, making it a powerful all-in-one solution.
    
In addition to its speed and accuracy, our Replace Space with Underscore tool is also incredibly user-friendly. With its intuitive interface, you can quickly grasp how to use the tool, regardless of your technical expertise. Whether you're a professional in need of efficient file management or a casual user wanting to tidy up your text documents, our tool ensures a seamless experience for everyone.`,
  },
  {
    title: "Remove Extra Spaces",
    link: SCREENS.REMOVE_EXTRA_SPACES,
    heading: "Easily Remove Extra Spaces",
    metaTitle: seoData.RemoveExtraSpaces.title,
    metaDescription: seoData.RemoveExtraSpaces.description,
    content: `Just load your content, System will remove all extra spaces automatically `,

    list: true,
    key: ToolKeys.REMOVE_EXTRA_SPACES,
    toolDescription: `Introducing our game-changing solution for removing extra spaces from your content - it's time to experience cleaner and more professional-looking text! Say goodbye to the frustration of uneven spacing and hello to streamlined, polished content with our innovative Remove Extra Spaces tool.
    \nWhether you're a writer, editor, student, or professional, our tool is designed to make your life easier and enhance your work. Gone are the days of laboriously scanning through your text to manually fix those pesky extra spaces. With just a few clicks, our tool intelligently detects and removes all excessive spaces, transforming your content into a polished masterpiece.
    \nHere's why our Remove Extra Spaces tool is an absolute must-have:
    \n1. Enhanced Readability: Extra spaces can disrupt the flow and readability of your content. By eliminating those unnecessary spaces, our tool ensures that your text is easy on the eyes and a joy to read. Impress your readers with clean, well-formatted content that holds their attention from start to finish.
    \n2. Professional Appearance: Whether it's an important business presentation, a school assignment, or a captivating blog post, the way your content looks matters. Our tool brings professionalism to the forefront by ensuring consistent spacing throughout your text. Stand out from the crowd with content that exudes quality and attention to detail.
    \n3. Time-saving Efficiency: We understand that time is precious, and manual space removal is a tedious, time-consuming task. Our Remove Extra Spaces tool is lightning-fast, allowing you to quickly process and refine your content without breaking a sweat. Spend less time on formatting and more time on what truly matters - creating exceptional content.
    \n4. Error Prevention: Extra spaces can often lead to unintended formatting errors or distortions in your content. Our tool eradicates these potential pitfalls, giving you peace of mind that your content will be error-free, professional, and ready to impress your audience.
    \n5. Seamless Integration: Our Remove Extra Spaces tool seamlessly integrates into your existing workflow. With an intuitive interface and straightforward instructions, it's incredibly user-friendly, even for those with limited technical skills. Simply copy and paste your text, click a button, and watch as our tool works its magic.
    \nDon't let extra spaces diminish the impact of your content. Harness the power of our Remove Extra Spaces tool and unlock a new level of professionalism and efficiency. Try it today and experience the transformation for yourself. Your content deserves to shine with precision and perfection!`,
  },
  {
    title: "Remove Spaces",
    link: SCREENS.REMOVE_SPACES,
    heading: "Easily Remove Spaces",
    metaTitle: seoData.RemoveSpaces.title,
    metaDescription: seoData.RemoveSpaces.description,
    content: `Just load your content, System will remove all spaces automatically `,
    list: true,
    key: ToolKeys.REMOVE_SPACES,
    toolDescription: `Tired of dealing with messy data caused by unnecessary spaces? Our simple, yet powerful Remove Spaces tool is the solution you've been searching for. With just a few clicks, you can eliminate extra spaces and optimize your text for improved readability, easier analysis and sharing.
    Our tool is designed to work seamlessly with text of any length, from small snippets to large datasets. It not only removes spaces, but also eradicates other common whitespace characters, such as tabs or newlines, to leave you with clean and organized text that's easy to use and understand.
    Here are some of the key benefits of our Remove Spaces tool:
    \n1. Saves Your Time: No more manual editing or complex tools to remove spaces from your text! Our simple solution does the job quickly and easily, allowing you to focus on other important tasks.
    \n2. Increases Accuracy: Extra spaces and whitespace characters can be a serious distraction, making it harder to spot anomalies or irregularities in your data. By ensuring that your text is clean and properly formatted, our tool helps improve accuracy, reduce errors, and simplify analysis.
    \n3. Improves Readability: Optimize your content for clear communication and easy comprehension. Remove Spaces can be especially useful as a preparation step before sending or sharing text, such as emails, reports, or articles.
    \n4. Enhances SEO: Unnecessary spaces in your webpages or blog posts can hurt your SEO efforts by impacting keyword density and readability. By using our Remove Spaces tool, you can ensure that your website's content is properly formatted for optimal SEO rankings.
    \nOur Remove Spaces tool is available online and is free to use. Don't let inefficient data harm your productivity or reputation - try our Remove Spaces tool today and experience the benefits for yourself!
    `,
  },

  {
    title: "Online string and JSON Tools",
    link: SCREENS.TOOLS,
    heading: "Online string and JSON Tools",
    content:
      " Just load your text, System will automatically convert it to lower case text",
    metaTitle: seoData.toolsList.title,
    metaDescription: seoData.toolsList.description,
    list: false,
    key: ToolKeys.Tools,
    toolDescription: "",
  },
  {
    title: "URL Decoder",
    link: SCREENS.URL_DECODE,
    heading: "URL Decoder - Decode URL-encoded text",
    content: " Just load your text, System will automatically decode URL",
    metaTitle: seoData.UrlDecode.title,
    metaDescription: seoData.UrlDecode.description,
    list: true,
    key: ToolKeys.UrlDecode,
    toolDescription: `Looking for a secure, fast, user-friendly, and accurate URL decoder tool? Look no further! Our URL decoder tool is meant to make the decoding process as simple and efficient as possible, ensuring that you obtain accurate results every time.

With it, you can easily decode encoded URLs and convert them back to their original format. Whether you need to decode special characters, percent-encoded elements, or any other encoded components, our URL decoder can handle it with ease.
    
One of the key advantages of our URL decoder is its amazing speed. We understand the importance of quick results, and our tool is optimized to deliver them. Say goodbye to wasting time on decoding URLs manually - our tool provides rapid decoding, allowing you to move on to more important work.
    
Not only is our URL decoder fast, but it is also incredibly user-friendly. You don't need to possess advanced technical knowledge to use it! Our intuitive interface guides you through the decoding process effortlessly, making it accessible for both beginners and experts. Simply type, paste, or upload your encoded URL into the designated field, and watch as your URL is transformed back to its original form.
    
When it comes to privacy and security, our URL decoder tool takes every precaution to ensure your data remains safe and protected. We prioritize the confidentiality of your data and employ robust security measures to safeguard it.
    
Another important quality of our URL decoder is its accuracy. We understand that precision matters when it comes to tasks such as decoding URLs, and our tool guarantees accurate results every time. Rest assured that the decoded URLs will retain their original integrity, ensuring seamless integration into your online activities.`,
  },
  {
    title: "URL Encoder",
    link: SCREENS.URL_ENCODE,
    heading: "URL Encoder - Encode URL-encoded text",
    content: " Just load your text, System will automatically decode URL",
    metaTitle: seoData.URLEncode.title,
    metaDescription: seoData.URLEncode.description,
    list: true,
    key: ToolKeys.URLEncode,
    toolDescription: `Looking for a fast and user-friendly URL encoder tool? There is no need to look any further! Our URL encoder is meant to give you a smooth experience, making the procedure quick and very easy.

With our tool, you can easily encode your URLs, ensuring their compatibility with various systems and avoiding any potential errors. Whether you need to encode special characters, spaces, or any other elements, our URL encoder has got you covered.
    
What sets our URL encoder apart is its remarkable speed. We understand the importance of time, which is why we designed our tool to get results in record time. Say goodbye to waiting around for your URLs to be encoded – our tool ensures a swift encoding process, enabling you to work on more important activities.

Your privacy and security matter to us, and we are committed to maintaining the highest standards in protecting your data. Feel confident in using our URL encoder tool, knowing that your information is handled with the utmost care and security.

Not only is our URL encoder fast, but it is also incredibly user-friendly and 100% secure. You don't need to be a tech guru to use it! Our intuitive interface guides you through the process, making it accessible for both beginners and experts alike. Simply type, paste, or upload your URL into the tool, and your encoded URL is ready to use.`,
  },
  {
    title: "UUID Generator",
    link: SCREENS.UUID_GENERATOR,
    heading: "UUID Generator - v4",
    content:
      "Experience the Benefits of Our Fast and Secure UUID Generator.\nEliminate the Risk of Duplicate Identifiers with Our Random UUID Generator",
    metaTitle: seoData.UUIDGenerator.title,
    metaDescription: seoData.UUIDGenerator.description,
    list: true,
    key: ToolKeys.UUIDGenerator,
    toolDescription: `Are you in need of a unique identifier for your projects? Look no further than our UUID generator tool! With its lightning-fast speed and user-friendly interface, our tool provides an easy solution for generating universally unique identifiers (UUIDs).

UUIDs are crucial for assigning unique identification to digital objects, ensuring that they are easily searchable and retrievable. Our tool simplifies the process, generating a random and unique UUID with just a few clicks. Whether you're working on a programming project or need an identifier for your online database, our tool produces accurate and reliable UUIDs every time.
    
One of the key features of our tool is its fast speed. We understand that time management is essential in any digital project, and our tool streamlines the UUID generation process, eliminating any unnecessary waiting time. With our tool, generating a UUID is a matter of seconds, enabling you to focus on other critical aspects of your project.
A Version 4 UUID is a randomly generated universally unique identification number. To generate Version 4 UUIDs, this website employs a secure random UUID  generator algorithm.

Furthermore, our UUID generation tool is really simple to and use ensuring that your data is always protected. Our user-friendly design eliminates the need for you to spend time learning how to utilise our application. Our tool is simple to use regardless of your technological ability, making it a versatile option for a wide range of users.`,
  },
  {
    title: "",
    link: SCREENS.HOME,
    heading: "",
    content: "",
    metaTitle: seoData.homePage.title,
    metaDescription: seoData.homePage.description,
    list: false,
    key: ToolKeys.HOME,
    toolDescription: `Choose our online tools for secure and reliable solutions. 
    Our tools are designed to protect your data while providing you with the efficiency and convenience you need. Whether it's JSON Parser, ASCII to string, or UUID generator, our tools have got you covered. Try them out today and experience peace of mind knowing your information is secure.`,
  },
  {
    title: "Salary Hike Percentage Calculator",
    link: SCREENS.SALARY_HIKE_PERCENTAGE_CALCULATOR,
    heading: "Online Salary Hike Percentage Calculator",
    metaTitle: seoData.salaryHikePercentageCalculator.title,
    metaDescription: seoData.salaryHikePercentageCalculator.description,
    content:
      "Discover your updated salary and the percentage increase with our salary hike calculator.",
    list: true,
    key: ToolKeys.SalaryHike,
    toolDescription: `Get an accurate salary hike percentage calculation with our Salary Hike Percentage Calculator. Quickly enter your wage information and get a personalized salary hike percentage in minutes. Easily compare your wages against industry standards and ensure you're getting the raise you deserve.
    \nCertainly! An online salary hike percentage calculator is a free online tool that allows you to calculate the percentage increase in your salary after a raise or promotion. This tool is especially useful for employees who are negotiating a salary increase or trying to estimate their future earnings. 
    \n To use the calculator, you simply enter your current salary, the amount of the raise, and any other relevant information, such as the frequency of pay periods. The calculator then calculates the percentage increase in your salary and displays the new salary amount.`,
  },
];

// toolsListData.forEach((element) => {
//   element.toolDescription = `${element.toolDescription}The tool's Share option allows you to create a special URL that you may share with others.`;
// });
