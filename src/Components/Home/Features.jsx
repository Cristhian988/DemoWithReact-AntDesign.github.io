import React from "react";
import { Col, Row } from "antd";
import { Card } from "antd";
const { Meta } = Card;

import image1 from "../../assets/modern-design.jpg";
import image2 from "../../assets/clean-design.jpg";
import image3 from "../../assets/great-support.jpg";
import image4 from "../../assets/easy-customise.jpg";
import image5 from "../../assets/unlimited-features.jpg";
import image6 from "../../assets/advanced-option.jpg";

const Features = () => {
  return (
    <div id="features" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
          <p>
            Obcaecati consequatur libero repudiandae, aperiam itaque laborum!
          </p>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            {" "}
            <Card hoverable cover={<img alt="example" src={image1} />}>
              <Meta title="Modern Design" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            {" "}
            <Card hoverable cover={<img alt="example" src={image2} />}>
              <Meta title="Clean and Elegant" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            {" "}
            <Card hoverable cover={<img alt="example" src={image3} />}>
              <Meta title="Great Support" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            {" "}
            <Card hoverable cover={<img alt="example" src={image4} />}>
              <Meta title="Easy to customise" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            {" "}
            <Card hoverable cover={<img alt="example" src={image5} />}>
              <Meta title="Unlimited Features" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            {" "}
            <Card hoverable cover={<img alt="example" src={image6} />}>
              <Meta title="Advanced Options" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Features;
