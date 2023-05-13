import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Nav } from "react-bootstrap";


const Menu = () => {
  const selmenu = localStorage.getItem("menu") || "home";
  const [menu, setMenu] = useState(selmenu);
  const location = useLocation();
  const { pathname } = location;
  const changeMenu = (evt) => {
    localStorage.setItem("menu", evt);
    setMenu(evt);
  };
  const paths = [
    "/products",
    "/clay",
    "/bamboo",
    "/jaalis",
    "/decorative-tiles",
    "/cladding-wall-bricks",
    "/terracotta-floaring",
    "/bricks",
    "/roofing-tiles",
    "/terracotta-panels",
    "/hollow-block",
    "/terracotta-locking-pavers",
    "/seed",
    "/handicraft",
    "/bamboo",
    "",
    "",
    "",
  ];
  return (
    <div className={`app-menu header-banner app-${menu}`}>
      {/* <Container> */}
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py1-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none logo"
          onClick={() => {
            changeMenu("home");
          }}
        >
          <img src={`./assets/logon.png`} alt="Greencontie 
          Implex" />          
        </Link>
        <Nav>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li
              className={`(${
                (pathname === "/" || pathname === "/home") && "active"
              }`}
            >
              <Link
                to="/"
                className="nav-link px-2 link-secondary"
                onClick={() => {
                  changeMenu("home");
                }}
              >
                HOME
              </Link>
            </li>
            <li className={`${pathname === "/about" && "active"}`}>
              <Link
                to="/about"
                className="nav-link px-2 link-secondary"
                onClick={() => {
                  changeMenu("about");
                }}
              >
                ABOUT
              </Link>
            </li>
            <li className={`${paths.includes(pathname) && "active"}`}>
              <Link
                to="/products"
                className="nav-link px-2 link-secondary"
                onClick={() => {
                  changeMenu("products");
                }}
              >
                PRODUCTS
              </Link>
            </li>
            <li className={`${pathname === "/contact" && "active"}`}>
              <Link
                to="/contact"
                className="nav-link px-2 link-secondary"
                onClick={() => {
                  changeMenu("contact");
                }}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </Nav>
      </header>
      {/* </Container> */}
    </div>
  );
};

export default Menu;
