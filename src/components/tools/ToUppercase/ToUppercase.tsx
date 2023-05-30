import { Layout } from "antd";
import Link from "next/link";
import { withRouter } from "next/router";
import React, { useState } from "react";
import styles from "../../../../styles/StringToAscii.module.css";
import { ConvertedOutputByTools } from "../helper/ConvertedOutputByTools";
import { InputToConvertByTools } from "../helper/InputToConvertByTools";
import { ToolKeys, ToolsList } from "../ToolsList";
import { ToolsBody } from "../ToolsBody";
import { OfflineMetaTags } from "../../common";

const { Content } = Layout;

function ToUppercase() {
  const [byte, setByte] = useState<string>("");


  const onChangeCb = (value: string) => {
    if (value) {
      setByte(value.toUpperCase());
    } else {
      setByte("");
    }
  }

  return (
    <Content>
      <OfflineMetaTags tagId={ToolKeys.UppercaseTextconverter} />

      <div className={`${styles.mainDiv} row`}>
        <ToolsBody />
        <div className="col-lg-6">
          <InputToConvertByTools
            rules={[{ required: true, message: "Please enter text !" }]}
            onChangeCb={onChangeCb}
          />
          <div>
            Want to convert to Lowercase ? use
            <Link href="/tools/text-to-lowercase">
              &nbsp; Lowercase converter
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <ConvertedOutputByTools content={byte} />
        </div>
      </div>
      <ToolsList />
    </Content>
  );
}

export default withRouter(ToUppercase);
