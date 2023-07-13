import { Col, Row, Switch, Tooltip, Upload } from "antd";
import { get } from "lodash";
import { ReactNode } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaUpload } from "react-icons/fa";
import { COLOR_CONST } from "../../../constants";
import { ButtonUsingReactIcon } from "../ButtonWithIcon/ButtonUsingReactIcon";

type EditorActionsProps = {
  clear: () => void;
  onChange: (value: string | undefined) => void;
  children?: ReactNode;
  childrenAfter?: ReactNode;
};

export function EditorActionsButtons({ children }: { children: ReactNode }) {
  return <Col style={{ marginTop: "5px" }}>{children}</Col>;
}

export function MonoType({
  onChange,
}: {
  onChange: (status: boolean) => void;
}) {
  return (
    <Switch
      style={{ marginTop: "10px", marginRight: "5px" }}
      checkedChildren="Mono Type"
      unCheckedChildren="Mono Type"
      defaultChecked={false}
      onChange={onChange}
    />
  );
}

export const EditorActions = ({
  clear,
  onChange,
  children,
  childrenAfter,
}: EditorActionsProps) => {
  return (
    <Row
      style={{ display: "flex", justifyContent: "start", marginBottom: "5px" }}
    >
      {children}

      <EditorActionsButtons
        children={
          <Tooltip title="Load Data From Load File">
            <Upload
              accept=".txt, .json"
              showUploadList={false}
              beforeUpload={(file) => {
                const reader = new FileReader();

                reader.onload = (e) => {
                  onChange(get(e, "target.result") ?? "");
                };
                reader.readAsText(file);

                return false;
              }}
            >
              <ButtonUsingReactIcon
                name="Load file"
                onClick={() => {}}
                mdIcon={<FaUpload color={COLOR_CONST.defaultIcon} />}
              />
            </Upload>
          </Tooltip>
        }
      />

      {childrenAfter}
      <EditorActionsButtons
        children={
          <ButtonUsingReactIcon
            name="Clear"
            onClick={clear}
            mdIcon={<AiFillDelete size={15} color={COLOR_CONST.defaultIcon} />}
            tooltip="Clear Input"
          />
        }
      />
    </Row>
  );
};
