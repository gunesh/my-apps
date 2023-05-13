import React from 'react';
import ProductListView from "../../layout/ProductList";
import CategoryBanner from "../../layout/CategoryBanner";
import Hoc from "../../components/hoc";
import ProductList from "../../components/list";
import Header from "../../components/Header";
import data from "../../data/DECORATIVE_TILES.json";

const TerracottaPanel = () => {
  const MyComponent = Hoc(ProductList, data, true, true,'TerracottaPanel');
  const breadcrumbs = [
    { title: "Home", url: "/" },
    { title: "Products", url: "/products" },
    { title: "TERRACOTTA CLAY Product", url: "/clay" },
    { title: "Terracotta Panels", url: "" },
  ];
  return (
    <Header
      pageTitle="Terracotta Panels"
      breadcrumbs={breadcrumbs}
      currentPage="Terracotta Panels"
    >
      <CategoryBanner
        src="./assets/img/jaalis/title.png"
        cls="img-fluid"
        alt="Terracotta Panels"
      />
      <ProductListView
        cmp={<MyComponent />}
        description={"About the Product ccc"}
      />
    </Header>
  );
};

export default TerracottaPanel;
