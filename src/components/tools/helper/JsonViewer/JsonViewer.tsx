import { JSONTree } from 'react-json-tree';
import styles from "./JsonViewer.module.css";
import { JSONTreeTheme } from './editorTheme';
import { get, isArray } from "lodash"
import { ToolOutputActions } from '../ToolOutputActions';
import { STRING_CONSTANTS } from '../../../../constants';

type JsonViewerProps = {
    content: any;
    error: any
}

export const JsonViewer = ({ content, error }: JsonViewerProps) => {    

    const valueColor: any = {
        boolean: "boolean",
        number: "number",
        string: "string"
    }

    const typeOf = (value: any) => {
        if (value === "true" || value === "false") {
            return "boolean"
        }
        return typeof value
    }

    const isNativeArrayOrObj = (value: string) => {
        return value === `"${STRING_CONSTANTS.tools.internalArray}"` || value === `"${STRING_CONSTANTS.tools.internalObject}"`
    }

    const nativeArrayOrObj = (value: string) => {
        if(value === `"${STRING_CONSTANTS.tools.internalArray}"`) {
            return "Array"
        } else if (value === `"${STRING_CONSTANTS.tools.internalObject}"`) {
            return "Object"
        } else {
            return "Invalid value"
        }
    }
    return <>
        <ToolOutputActions content={content} />
        <div className={styles.container} >
            {
                !content ? <></> :
                    content === STRING_CONSTANTS.tools.invalidJson ?
                        
                        <span className={styles.invalidJson} >{content} ----&gt; {get(error, "name") + " " + get(error, "message")}
                        
                        </span> :
                        <>
                            {isArray(content) ? "[" : "{"}                           
                            <JSONTree
                                data={content}
                                labelRenderer={([raw]) => <span className={styles.keyValues}>"{raw}":</span>}
                                valueRenderer={(raw: any) => (
                                    <em>
                                        <span className={`${styles.keyValues} ${styles.dataTypeLabel}`}>
                                            {!isNativeArrayOrObj(raw) ?  typeOf(raw) : ""}
                                        </span>{' '}
                                        <span className={`${styles.keyValues} ${styles[valueColor[typeOf(raw)]]}`}>
                                            {!isNativeArrayOrObj(raw) ? raw : 
                                            <>
                                            <span className={styles.invalidValues} >
                                               { nativeArrayOrObj(raw)}
                                            </span>
                                            <span className={styles.SyntaxError}> &#60;--------SyntaxError</span>
                                            </>
                                             }
                                        </span>
                                    </em>
                                )}
                                theme={{
                                    extend: JSONTreeTheme,
                                }}
                                shouldExpandNode={() => true}

                                hideRoot={true}
                            />
                            {isArray(content) ? "]" : "}"}
                            {/* <ReactJson style={{ padding: 20 }} src={content} iconStyle={"square"} name={false} /> */}

                        </>
            }
        </div>
    </>
}