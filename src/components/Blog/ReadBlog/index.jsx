import React from "react";
import Link from "next/link";
import { withRouter } from 'next/router'
import { httpPut } from "../../../utils/http";
import { Layout, Modal } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { messageError, messageSuccess } from "../../../utils/antd";
import { getUser } from "../../../utils/index";
import AppHead from "../../Head/head";

const { Content } = Layout;
const { confirm } = Modal;

class ReadBlog extends React.Component {
  slug;
  user;
  constructor(props) {
    super(props);


    this.user = getUser();
    this.state = {
      data: this.props.blogData.result,
    };
  }


  date(date) {
    if (date) {
      const newDate = new Date(date);
      const month = newDate.toLocaleString("default", { month: "long" });
      return `${newDate.getDate()} ${month} ${newDate.getFullYear()}`;
    }
  }

  deleteBlog(questionId) {
    const that = this;
    confirm({
      title: "Are you sure delete this answer?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        httpPut({ url: `blog-management/delete-blog/${questionId}` })
          .then((response) => {
            that.props.router.push("/");
            messageSuccess({ content: "Deleted successfully" });
          })
          .catch((err) => {
            messageError({ content: "something went wrong" });
          });
      },
    });
  }

  render() {
    return (
      <Content style={{ padding: "100px 50px 59px 56px" }}>

        <AppHead data = {this.state.data}/>
        <div className="row">
          {/* <div className="col-lg-2" /> */}
          <div className="col-lg-9">
            <div style={{ width: "100%" }}>
              <h1>{this.state.data.title}</h1>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <span>
                  <span className="ask-view">Published on:</span>
                  <span className="post-view-data">
                    {this.date(this.state.data.created_at)}
                  </span>
                </span>
              </div>
              <div className="col-lg-5">
                <span >
                  <span className="ask-view"> Viewed: </span>
                  <span className="post-view-data">
                    {this.state.data.visits} times
                  </span>
                </span>
              </div>

              <div className={` ${this.user?.role === 'admin' && this.user?._id === this.state.data.author?._id ? 'visible' : 'invisible '} col-lg-4`}>
                <DeleteOutlined
                  style={{
                    color: "red",
                    float: "right",
                    padding: "10px",
                  }}
                  onClick={() => {
                    this.deleteBlog(this.state.data._id);
                  }}
                />
                <Link href={`/blog/edit/${this.slug}`}>
                  <EditOutlined
                    style={{
                      float: "right",
                      padding: "10px",
                    }}
                  />
                </Link>
              </div>
            </div>
            <div
              style={{ marginTop: "40px" }}
              dangerouslySetInnerHTML={{ __html: this.state.data.content }}
            ></div>
          </div>
          <div className="col-lg-3" />
        </div>
      </Content>
    );
  }
}

export default withRouter(ReadBlog)
