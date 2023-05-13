import React, { Component } from "react";

export default function Hoc(HocComponent, data, showImage, subproduct,page) {
  return class extends Component {
    render() {
      return (
        <>
          <HocComponent
            data={data}
            showImage={showImage}
            subproduct={subproduct}
            page={page}
          />
        </>
      );
    }
  };
}
