import React from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import { Scrollbars } from "react-custom-scrollbars";

const ProductListView = (props) => {
  const { cmp, description } = props;

  return (
    <Row xs={1} md={2} className=" products">
      <Col xs={8} md={8} sm={4} className="product-scroll">
        {/* <Scrollbars
          {...props}
          className="custom-scroll"
          // renderTrackHorizontal={(props) => (
          //   <div {...props} className="track-horizontal" />
          // )}
          // renderTrackVertical={(props) => (
          //   <div {...props} className="track-vertical" />
          // )}
          // renderThumbHorizontal={(props) => (
          //   <div {...props} className="thumb-horizontal" />
          // )}
          // renderThumbVertical={(props) => (
          //   <div {...props} className="thumb-vertical" />
          // )}
          // renderView={(props) => <div {...props} className="view" />}
        >
          {cmp}
        </Scrollbars> */}
        {cmp}
      </Col>
      <Col xs={4} md={4}>
        {/* <Scrollbars {...props} className="custom-scroll"> */}
          {description}
        {/* </Scrollbars> */}
      </Col>
    </Row>
  );
};

export default ProductListView;
