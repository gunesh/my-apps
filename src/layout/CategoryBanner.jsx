import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CategoryBanner = (props) => {
  const { src, cls, alt } = props;

  return (
    <Row xs={1} md={2} className="g-4 mt-0-20 ">
      <Col>
        <img src={src} className={cls} alt={alt} />
      </Col>
    </Row>
  );
};

export default CategoryBanner;
