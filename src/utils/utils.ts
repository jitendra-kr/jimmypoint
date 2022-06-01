import { messageSuccess } from "./antd";

 const getLimitedText = (text: string, limit: number) => {
    limit = limit ? limit : 63;
    if (text.length > limit) {
      return text.substring(0, limit) + " ... ";
    }
    return text;
};

export const inputFieldsLimit = {
  firstName: 15,
  lastName: 15
}


export const dateFormat = (date: Date ) => {
  if (date) {
    const newDate = new Date(date);
    const month = newDate.toLocaleString("default", { month: "long" });
    return `${month} ${newDate.getDate()}, ${newDate.getFullYear()}`;
  }
}

export const getDefaultHeadValues = () => {
  return {
    url: window.location.href
  }
}
export const minifyJSON = (data: object) => {
  var jsonObject = JSON.stringify(data);
  return JSON.stringify(jsonObject, null, 0)
}

export const copyToClipboard = (content: any): void => {
  try {
    navigator.clipboard.writeText(content).then(() => {
      messageSuccess({ content: "Copied to clipboard", key: "Copiedtoclipboard", duration: 4 });
    })
  } catch (e) {
    alert("failed to copy")
  }
}