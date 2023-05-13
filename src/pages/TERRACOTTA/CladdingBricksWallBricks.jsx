import React from "react";
import ProductListView from "../../layout/ProductList";
import CategoryBanner from "../../layout/CategoryBanner";
import Hoc from "../../components/hoc";
import ProductList from "../../components/list";
import Header from "../../components/Header";
import data from "../../data/CLADDING_BRICKS_WALL_BRICKS.json";

const CladdingBricksWallBricks = () => {
  const MyComponent = Hoc(
    ProductList,
    data,
    true,
    true,
    "CladdingBricksWallBricks"
  );
  const breadcrumbs = [
    { title: "Home", url: "/" },
    { title: "Products", url: "/products" },
    { title: "TERRACOTTA CLAY Product", url: "/clay" },
    { title: "Cladding Bricks Wall Bricks", url: "" },
  ];
  return (
    <Header
      pageTitle="Cladding Bricks Wall Bricks"
      breadcrumbs={breadcrumbs}
      currentPage="Cladding Bricks Wall Bricks"
    >
      <img
        src="./assets/img/CLADDING_BRICKSWALL_BRICKS/Final Cladding Wall Brick Strip.jpg"
        className="img-fluid"
        alt="Cladding Bricks Wall Bricks"
      />
      <ProductListView
        cmp={<MyComponent />}
        description={
          <div className="product-desc">
            <p>
              Different types of clay wall cladding have various advantages and
              challenges.{" "}
            </p>
            <p>
              Wirecut brick is a construction material, and you need not require
              to have a wall to clad it.
            </p>
            <p>
              This way, you can save costs on cladding while using wire-cut
              bricks.{" "}
            </p>
            <p>
              The cleaning of the wall is the most challenging part of the
              construction using wire-cut bricks.
            </p>
            <p>
              {" "}
              Creating a wire-cut brick wall is a skilled job, and cleaning
              while building and covering up while other jobs happening on the
              worksite is mandatory.
            </p>
          </div>
        }
      />
    </Header>
  );
};

export default CladdingBricksWallBricks;
