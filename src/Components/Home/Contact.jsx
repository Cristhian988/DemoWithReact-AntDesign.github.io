import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const Contact = () => {
  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Get in Touch</h2>
          <p>Dolore nam rerum obcaecati fugit odio nobis Moslestiae rerum</p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="fullname"
            rules={[
              { required: true, message: "Please input your full name!" },
            ]}
          >
            <Input size="large" placeholder="Full name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input size="large" type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item name="telephone">
            <Input size="large" placeholder="Telephone" />
          </Form.Item>
          <Form.Item name="subject">
            <Input size="large" placeholder="Subject" />
          </Form.Item>
          <Form.Item name="message">
            <TextArea size="large" placeholder="Message" />
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
          >
            <Checkbox>I agree with terms and conditions.</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              size="large"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
