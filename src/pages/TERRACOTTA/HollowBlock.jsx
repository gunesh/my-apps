import React from "react";
import ProductListView from "../../layout/ProductList";
import CategoryBanner from "../../layout/CategoryBanner";
import Hoc from "../../components/hoc";
import ProductList from "../../components/list";
import Header from "../../components/Header";
import data from "../../data/HollowBlock.json";

const HollowBlock = () => {
  const MyComponent = Hoc(ProductList, data, true, true, "HollowBlock");
  const breadcrumbs = [
    { title: "Home", url: "/" },
    { title: "Products", url: "/products" },
    { title: "TERRACOTTA CLAY Product", url: "/clay" },
    { title: "Hollow Block", url: "" },
  ];
  return (
    <Header
      pageTitle="Hollow Block"
      breadcrumbs={breadcrumbs}
      currentPage="Hollow Block"
    >
      <img
        src="./assets/img/HollowBlock/Final Hollow Block Strip.jpg"
        className="img-fluid"
        alt="Terracotta Panels"
      />
      <ProductListView
        cmp={<MyComponent />}
        description={
          <div className="product-desc">
            <p>
              Hollow Blocks that are made using Terracotta or burnt clay are
              called Terracotta Hollow Blocks.
            </p>
            <p>
              Terracotta is commonly used in interiors as flooring tiles due to
              its durability.
            </p>
            <p>
              The material can withstand a lot of stress and also resists
              breaking and chipping very effectively.
            </p>
            <p>
              It is not affected by the erosive action of the elements,
              resistant to fire and water, and can last for years without any
              degradation
            </p>
          </div>
        }
      />
    </Header>
  );
};

export default HollowBlock;
