import { FaDownload } from "react-icons/fa";
import { SCREENS } from "../../../common/enums";
import { COLOR_CONST, STRING_CONSTANTS } from "../../../constants";
import { useGetUrlPath } from "../../../hooks";
import { ButtonUsingReactIcon } from "../ButtonWithIcon/ButtonUsingReactIcon";

export type DownloadOutputProps = {
  content: string;
};

export function DownloadOutput({ content }: DownloadOutputProps) {
  const baseFileName = `${STRING_CONSTANTS.global.appName}`;
  const { pathname } = useGetUrlPath();
  const fileExt: Record<string, string> = {
    [SCREENS.JSON_PARSER]: ".json",
    [SCREENS.JSON_MINIFIER]: ".json",
    [SCREENS.JSON_TO_TYPESCRIPT]: ".ts",
  };
  const onClick = () => {
    const ext = pathname && fileExt[pathname];
    const fileName = `${baseFileName}${ext ?? ".txt"}`;
    const url = window.URL.createObjectURL(new Blob([content]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
  };

  return (
    <ButtonUsingReactIcon
      name="Download"
      onClick={onClick}
      mdIcon={<FaDownload color={COLOR_CONST.defaultIcon} />}
      tooltip="Download Output"
    />
  );
}
