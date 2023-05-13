import React from 'react';
import ProductListView from "../../layout/ProductList";
import CategoryBanner from "../../layout/CategoryBanner";
import Hoc from "../../components/hoc";
import ProductList from "../../components/list";
import Header from "../../components/Header";
import data from "../../data/DECORATIVE_TILES.json";

const TerracottaFloaring = () => {
  const MyComponent = Hoc(ProductList, data, true, true,'TerracottaFloaring');
  const breadcrumbs = [
    { title: "Home", url: "/" },
    { title: "Products", url: "/products" },
    { title: "TERRACOTTA CLAY Product", url: "/clay" },
    { title: "Terracotta Floaring", url: "" },
  ];
  return (
    <Header
      pageTitle="Terracotta Floaring"
      breadcrumbs={breadcrumbs}
      currentPage="Terracotta Floaring"
    >
      <CategoryBanner
        src="./assets/img/jaalis/title.png"
        cls="img-fluid"
        alt="Terracotta Floaring"
      />
      <ProductListView
        cmp={<MyComponent />}
        description={"About the Product ccc"}
      />
    </Header>
  );
};

export default TerracottaFloaring;
