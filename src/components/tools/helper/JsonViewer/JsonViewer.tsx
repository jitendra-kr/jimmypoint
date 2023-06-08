import Ide from "../../../common/Ide/Ide";
import { ToolOutputActions } from "../ToolOutputActions";
import styles from "./JsonViewer.module.css";

type JsonViewerProps = {
  content: string;
  error: string;
  editorError: string;
};

export const JsonViewer = ({
  content,
  error,
  editorError,
}: JsonViewerProps) => {
  if (error) {
    return (
      <div className={styles.container}>
        <span className={styles.invalidJson}>{error}</span>
        <span className={styles.invalidJson}>{editorError}</span>
      </div>
    );
  }

  return (
    <>
      <ToolOutputActions content={content} />
      <Ide value={content} minimapEnabled={false} />
    </>
  );
};
