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
      <div className="row content">
        <div className="col-sm-12">
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className=" d-block w-100 img-responsive"
           height="571px"
            src="./assets/img/slider/1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            {/* <Link to="/clay">
              <button className="btn btn-primary">
                TERRACOTTA Clay Products
              </button>
            </Link> */}
          </Carousel.Caption>
          <div className="home-btn text-center justify-content-center align-items-center">
            <Link to="/clay" className="link">
              <button className="btn btn-primary btn-action app-button">
                TERRACOTTA Clay Products
              </button>
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" d-block w-100  img-responsive"
            height="571px"
            src="./assets/img/slider/2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            {/* <Link to="/seed">
              <button className="btn btn-primary">Seeds</button>
            </Link> */}
          </Carousel.Caption>
          <div className="home-btn text-center justify-content-center align-items-center">
            <Link to="/seed" className="link">
              <button className="btn btn-primary btn-action app-button">Seeds</button>
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" d-block w-100  img-responsive"
            height="571px"
            src="./assets/img/slider/3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            {/* <Link to="/bamboo ">
              <button className="btn btn-primary">Bamboo Art</button>
            </Link> */}
          </Carousel.Caption>
          <div className="home-btn text-center justify-content-center align-items-center">
            <Link to="/bamboo " className="link">
              <button className="btn btn-primary  btn-action app-button">Bamboo Art</button>
            </Link>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" d-block w-100  img-responsive"
            height="571px"
            src="./assets/img/slider/4.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            {/* <Link to="/handicraft">
              <button className="btn btn-primary">Handicraft</button>
            </Link> */}
          </Carousel.Caption>

          <div className="home-btn text-center justify-content-center align-items-center">
            <Link to="/handicraft" className="link">
              <button className="btn btn-primary btn-action app-button">Handicraft</button>
            </Link>
          </div>
        </Carousel.Item>
      </Carousel>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
