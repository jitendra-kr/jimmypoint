import React from "react";
import { Form, Input, Button, Select, Tag } from "antd";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { getUser } from "../../../utils/index";

import Config from "../../../config/env";
import {
  messageLoading,
  messageSuccess,
  messageError,
} from "../../../utils/antd";
import { httpGet, httpPost, httpPut } from "../../../utils/http";
const { TextArea } = Input;
const { Option } = Select;

class NewBlog extends React.Component {
  options = [
    { value: "gold" },
    { value: "lime" },
    { value: "green" },
    { value: "cyan" },
  ];
  formRef = React.createRef();
  content;
  user;

  constructor(props) {

    super(props);
    this.user = getUser();

    if (!this.user && this.user?.role !== 'admin') {
      this.props.history.push(`/`);
    }

    this.state = {
      _id: this.props.match.params._id,
      isButtonDisabled: false,
      config: Config.getData().default,
      data: {},
    };
  }

  componentDidMount() {
    if (this.state._id) {
      httpGet({ url: `blog-management/blog-detail/${this.state._id}` })
        .then((response) => {
          this.setState({
            data: response.result,
          });
        })
        .catch((err) => {
          console.log("Error Reading data " + err);
        });
    }
  }

  categoryTagRender(props) {
    const { label, value, closable, onClose } = props;

    return (
      <Tag
        color={value}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    );
  }

  onFinish = (values) => {
    const key = "onFinish";
    messageLoading({ key });
    this.setState({ isButtonDisabled: true });
    values.content = this.content;
    // values.slug = this.state._id;
    this.postNew(values, key);
  };

  postNew(values, key) {
    values.slug = this.state.data.slug;
    console.log(values)
    let http = {
      a:  httpPost,
      b: httpPut
    }
    http[this.state._id ? 'b' : 'a']({
      url: `blog-management/${this.state._id ? 'update-blog/' + this.state._id : 'new-blog'}`,
      body: values,
    })
      .then((response) => {
        this.setState({ isButtonDisabled: false });
        if (response && response.statusCode === 200) {
          messageSuccess({ content: response.message, key, duration: 4 });
          this.formRef.current.resetFields();
          if (this.state._id) {
            this.props.history.push(
              `/blog/${this.state._id}`
            );
          }
        } else if (response && response.statusCode === 400) {
          messageError({ content: response.message, key, duration: 2 });
        }
      })
      .catch((err = {}) => {
        console.log(err);
        this.setState({ isButtonDisabled: false });
        if (err.status === 400) {
          messageError({ content: err.data.message, key, duration: 2 });
        } else {
          messageError({ content: "something went wrong", key, duration: 2 });
        }
      });
  }

  handleEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
  };

  render() {
    if (this.state.data.title || !this.state._id) {
      return (
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <Form
              name="basic"
              layout="vertical"
              ref={this.formRef}
              initialValues={{ title: this.state.data.title,
                meta_description: this.state.data.meta_description,
                meta_keywords: this.state.data.meta_keywords,
              tags: this.state.data.tags,
              content: this.state.data.content
             }}
              onFinish={this.onFinish}
              style={{ width: "70%", margin: "0 auto" }}
            >
              <Form.Item
                name="title"
                label="Title"
                rules={[{ required: true, message: "Please input Title!" }]}
              >
                <TextArea
                  placeholder="e.g. Convert Comma Separated String into an Array"
                  autoSize={{ minRows: 2, maxRows: 5 }}
                />
              </Form.Item>
              <Form.Item
                name="meta_keywords"
                label="SEO Title"
                rules={[
                  { required: true, message: "Please input SEO Keyworlds!" },
                ]}
              >
                <TextArea
                  placeholder="e.g. Convert Comma Separated String into an Array"
                  autoSize={{ minRows: 2, maxRows: 5 }}
                />
              </Form.Item>
              <Form.Item
                name="meta_description"
                label="SEO Description"
                rules={[
                  { required: true, message: "Please input SEO Description!" },
                ]}
              >
                <TextArea
                  placeholder="e.g. Convert Comma Separated String into an Array"
                  autoSize={{ minRows: 2, maxRows: 5 }}
                />
              </Form.Item>
              {/* <Form.Item
                name="category"
                label="Category"
                rules={[{ required: true, message: "Please input category!" }]}
              >
                <Select
                  mode="multiple"
                  showArrow
                  tagRender={this.categoryTagRender}
                  style={{ width: "100%" }}
                  options={this.options}
                />
              </Form.Item> */}
              <Form.Item
                name="tags"
                label="Tags"
                rules={[{ required: true, message: "Please input Tags!" }]}
              >
                <Select
                  mode="tags"
                  style={{ width: "100%" }}
                  placeholder="Tags Mode"
                >
                  {<Option key={"1"}>1</Option>}
                </Select>
              </Form.Item>
              <Form.Item name="content" label="Body" rules={[{ required: true, message: "Please input Body!" }]}>
                <CKEditor
                  editor={ClassicEditor}
                  data={this.state.data.content}
                  onChange={(event, editor) => {
                    this.content = editor.getData();
                  }}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  disabled={this.isButtonDisabled}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="col-lg-2" />
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default NewBlog;
