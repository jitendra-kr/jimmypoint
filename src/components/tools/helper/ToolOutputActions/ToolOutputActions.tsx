import { SCREENS } from "../../../../common/enums";
import { useGetUrlPath } from "../../../../hooks";
import { DownloadOutput, HandleFullScreen } from "../../../common";
import { CopyToClip } from "../CopyToClip";
import styles from "./ToolOutputActions.module.css";

type JsonViewerProps = {
  content: string;
};

export const ToolOutputActions = ({ content }: JsonViewerProps) => {
  const { pathname } = useGetUrlPath();

  const hideDownloads = pathname && [SCREENS.WORD_COUNTER].includes(pathname);
  const hideFullScreen = pathname && [SCREENS.WORD_COUNTER].includes(pathname);

  if (typeof content === "object" || content.length > 0) {
    return (
      <div className={styles.container}>
        {!hideDownloads && <DownloadOutput content={content} />}
        <CopyToClip content={content} />
        {!hideFullScreen && <HandleFullScreen content={content} />}
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div style={{ height: "32px" }}></div>
    </div>
  );
};
