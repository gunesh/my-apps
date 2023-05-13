import React from "react";
import ProductListView from "../../layout/ProductList";
import CategoryBanner from "../../layout/CategoryBanner";
import Hoc from "../../components/hoc";
import ProductList from "../../components/list";
import Header from "../../components/Header";
import data from "../../data/ROOFING_TILES.json";

const RoofingTiles = () => {
  const MyComponent = Hoc(ProductList, data, true, true, "RoofingTiles");
  const breadcrumbs = [
    { title: "Home", url: "/" },
    { title: "Products", url: "/products" },
    { title: "TERRACOTTA CLAY Product", url: "/clay" },
    { title: "Roofing Tiles", url: "" },
  ];
  return (
    <Header
      pageTitle="Roofing Tiles"
      breadcrumbs={breadcrumbs}
      currentPage="Roofing Tiles"
    >
      <img
        src="./assets/img/ROOFING_TILES/Final Roofing Tiles Strip.jpg"
        className="img-fluid"
        alt="Roofing Tiles"
      />
      <ProductListView
        cmp={<MyComponent />}
        description={
          <div className="product-desc">
            <p>
              Clay roof tiles are the small tiles that run along the top of the
              roof of the house.
            </p>
            <p>
              It can also be used to cover Eave, Verge of Valley part as well.
            </p>
            <p>
              This gives the house the protection from heat and harshness of
              weather and keeps the rain water out. On the top of all it
              minimises the carbon footprint.
            </p>
          </div>
        }
      />
    </Header>
  );
};

export default RoofingTiles;
