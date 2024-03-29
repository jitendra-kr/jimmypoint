"use client";
import { messageSuccess } from "@ft/utils/antd";
import Form from "antd/es/form";
import { useState } from "react";
import { H2Tag } from "../common";
import styles from "./Feedback.module.css";

type Value = { name: string; feedback: string };

function Feedback() {
  const [value, setValue] = useState<Value>({ name: "", feedback: "" });
  const [disable, setDisable] = useState(false);

  function onSubmit() {
    setDisable(true);
    try {
      setValue({ name: "", feedback: "" });
      fetch("https://www.fireboxtools.com/api/save-feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: value.name, feedback: value.feedback }),
      });
      messageSuccess({
        content: "Thank you for taking the time to share your feedback with us",
        key: "Feedback",
        duration: 6,
      });
    } catch (e) {
      // console.log(e);
    } finally {
      setDisable(false);
    }
  }

  return (
    <div id="feedback" style={{ marginBottom: "30px" }}>
      <H2Tag heading="Your Feedback Matters"></H2Tag>
      <div className={styles["feedback-form"]}>
        <Form
          style={{ padding: "20px" }}
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
          autoComplete="off"
        >
          <label className={styles.label} htmlFor="name">
            Name:
          </label>
          <input
            className={styles.input}
            type="text"
            name="name"
            id="name"
            value={value.name}
            onChange={(value) => {
              setValue((prev) => ({
                ...prev,
                name: value.target.value,
              }));
            }}
            required
          />

          <label className={styles.label} htmlFor="feedback">
            Feedback:
          </label>
          <textarea
            className={styles.input}
            style={{ height: "150px" }}
            name="feedback"
            id="feedbackMsg"
            value={value.feedback}
            onChange={(value) => {
              setValue((prev) => ({
                ...prev,
                feedback: value.target.value,
              }));
            }}
            required
          ></textarea>
          <button
            onSubmit={onSubmit}
            disabled={disable}
            className={styles.button}
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Feedback;
