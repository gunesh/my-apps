import React from 'react';
import ProductListView from "../../layout/ProductList";
import CategoryBanner from "../../layout/CategoryBanner";
import Hoc from "../../components/hoc";
import ProductList from "../../components/list";
import Header from "../../components/Header";
import data from "../../data/TerracottaLockingPavers.json";

const TerracottaLockingPavers = () => {
  const MyComponent = Hoc(
    ProductList,
    data,
    true,
    true,
    "TerracottaLockingPavers"
  );
  const breadcrumbs = [
    { title: "Home", url: "/" },
    { title: "Products", url: "/products" },
    { title: "TERRACOTTA CLAY Product", url: "/clay" },
    { title: "Terracotta Locking Pavers", url: "" },
  ];
  return (
    <Header
      pageTitle="Terracotta Locking Pavers"
      breadcrumbs={breadcrumbs}
      currentPage="Terracotta Locking Pavers"
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

export default TerracottaLockingPavers;
