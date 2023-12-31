import React from "react";
import { Collapse, Button } from "antd";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: "1",
    label: "How to setup the theme",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "Can I change plan or cancel at any time?",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "How to access through cloud?",
    children: <p>{text}</p>,
  },
];

const Faq = () => {
  return (
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>
            Quidem reiciendis iure, aperiam blanditiis. Alias esse, nam, ea quam
          </p>
        </div>
        <Collapse items={items} defaultActiveKey={["1"]} />;
        <div className="quickSupport">
          <h3>Want quick support?</h3>
          <p>
            Get quick support 24/7 with our dedicated customer service team.
            We're here to help you manage your account, answer any questions,
            and resolve any issues. Trust us to make your experience stress-free
            and enjoyable.
          </p>
          <Button type="primary" size="large">
            <i className="fas fa-envelope"></i>Email your question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
