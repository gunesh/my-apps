import React from "react";
import ProductListView from "../../layout/ProductList";
import CategoryBanner from "../../layout/CategoryBanner";
import Hoc from "../../components/hoc";
import ProductList from "../../components/list";
import Header from "../../components/Header";
import data from "../../data/DECORATIVE_TILES.json";

const DecorativeTiles = () => {
  const MyComponent = Hoc(ProductList, data, true, true, "DECORATIVE_TILES");
  const breadcrumbs = [
    { title: "Home", url: "/" },
    { title: "Products", url: "/products" },
    { title: "TERRACOTTA CLAY Product", url: "/clay" },
    { title: "Decorative Tiles", url: "" },
  ];
  return (
    <Header
      pageTitle="Decorative Tiles"
      breadcrumbs={breadcrumbs}
      currentPage="Decorative Tiles"
    >
      <img
        src="./assets/img/decorative_tiles/Final_Decorative_Tiles_Strip.jpg"
        className="img-fluid"
        alt="Decorative Tiles"
      />
      <ProductListView
        cmp={<MyComponent />}
        description={
          <div className="product-desc">
            <p>
              Decorative tiles are a type of ceramic or porcelain tile that is
              designed to be visually appealing and used for decorative purposes
              rather than functional purposes, such as flooring or wall
              coverings. These tiles can be used in a variety of ways, such as
              as an accent tile, a backsplash, or as part of a decorative
              pattern.
            </p>

            <p>
              Decorative tiles come in a wide variety of shapes, sizes, colors,
              and patterns, and can be made from a variety of materials,
              including glass, metal, stone, and even wood. Some decorative
              tiles feature intricate designs or patterns, while others may have
              a more simple or modern aesthetic.
            </p>
            <p>
              Decorative tiles have been used for centuries in various cultures
              and can add an element of beauty and personality to any space.
              They can be used to add a pop of color, texture, or pattern to a
              room, or to create a focal point or feature wall. With so many
              options available, there is sure to be a decorative tile that
              suits any design style or aesthetic.
            </p>
            <p></p>
          </div>
        }
      />
    </Header>
  );
};

export default DecorativeTiles;
