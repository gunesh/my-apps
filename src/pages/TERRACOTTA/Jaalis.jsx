import React from "react";
import Hoc from "../../components/hoc";
import ProductList from "../../components/list";
import Header from "../../components/Header";
import data from "../../data/jalis.json";
import ProductListView from "../../layout/ProductList";
import CategoryBanner from "../../layout/CategoryBanner";

const Jaalis = (props) => {
  const MyComponent = Hoc(ProductList, data, true, true, "JAALIS");
  const breadcrumbs = [
    { title: "Home", url: "/" },
    { title: "Products", url: "/products" },
    { title: "TERRACOTTA CLAY Product", url: "/clay" },
    { title: "Jaalis", url: "" },
  ];
  return (
    <Header pageTitle="JAALIS" breadcrumbs={breadcrumbs} currentPage="JAALIS">
      

<img  src="./assets/img/jaalis/Final Jaali Strip.jpg"
        className="img-fluid"
        alt="JAALIS" />
      <ProductListView
        cmp={<MyComponent />}
        description={
          <div className="product-desc">
            <p>
              Terracotta Jalis play a significant role in architectural
              aesthetics.
            </p>
            <p>
              Because of its sustainable and corrosion-resistant nature it is
              widely used as wall partition, interior decoration, and the
              breathable façade.
            </p>
            <p>
              Though it is an ancient form of masonry but still being used
              extensively today.
            </p>
            <p>
              We provide broad spectrum of terracotta jail designs to blend and
              create new designs.
            </p>
          </div>
        }
      />
    </Header>
  );
};

export default Jaalis;
