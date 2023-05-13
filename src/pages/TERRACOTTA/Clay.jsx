import React from 'react';
import Hoc from "../../components/hoc";
import ProductList from "../../components/list";
import Header from "../../components/Header";
import data from "../../data/clay.json";

const Clay = () => {
  const ClayProduct = Hoc(ProductList, data, false,true,"CLAY");
  const breadcrumbs = [
    { title: "Home", url: "/" },
    { title: "Products", url: "/products" },
    { title: "Terracotta Clay Products", url: "" },
  ];
  return (
    <Header
      pageTitle="TERRACOTTA Clay Products"
      currentPage="TERRACOTTA Clay Products"
      breadcrumbs={breadcrumbs}
    >
      <div className="row content product-list">
        <ClayProduct />

        <div className="product-desc">
          <p>Terracotta or the baked earth is known for its superior durability. Due to its easy to mould and the environment-friendly nature it is being used in wide range of industries such as art & craft, architecture, aesthetics, and construction etc. Terracotta contains high iron oxide which gives it soothing red colour.</p>
          <p>Sustainable and Recyclable Terracotta which means ‘cooked earth’ is made from the natural clay. It is excessively immune to the weathering and ageing. It is frost-resistant and non-combustible and completely recyclable with very high recyclability rate.</p>
          <p>An Energy-Saving Alternative Terracotta has insulating properties and consumes low energy because of its capacity to absorb thermal energy. Their porosity controls heat differently. Their porous surfaces absorb the heat from inside and release it outside, keeping things cool.</p>
          <p>Good For Noise Reduction The dense open pores of the terracotta unit make it out of the sound wave completely or partially. It is highly recommended of high-noise areas.</p>
          <p>Maximum Fire Rating One of its great abilities is its inability to burn which makes it excellent fire-proof material for housing. Even during manufacturing the clay is baked on fire at a very high temperature.</p>

        </div>
      </div>
    </Header>
  );
};

export default Clay;
