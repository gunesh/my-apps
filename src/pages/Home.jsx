import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Meta from "../components/Meta";

const Home = () => {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  // page content
  const pageTitle = "Home";

  return (
    <div className="home-page">
      <Meta title={pageTitle} />
     
     
     
    </div>
  );
};

export default Home;
