import React from 'react';
import { Link } from 'react-router-dom';
import Meta from '../components/Meta';


const Products = () => {
  const pageTitle = 'Products';

  return (
    <div className="productsd">
      <Meta title={pageTitle} />
      <h2 className="cms-page">Products</h2>
      <br />
      <article className="mb-4 product-category">
        <div className="row content">
          <div className="col-sm-3 sidenav">
            <Link to="/clay" className="nav-link px-2 link-secondary">
              <div className="card">
                <img
                  src="./assets/img/productCategory/teracotta.jpg"
                  className="card-img-top"
                  alt="Clay Products"
                />
                <div className="card-body">
                  <p className="card-text">TERRACOTTA Clay Products</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-3">
            <Link to="/seed" className="nav-link px-2 link-secondary">
              <div className="card">
                <img
                  src="./assets/img/productCategory/seed.jpg"
                  className="card-img-top"
                  alt="Seed Products"
                />
                <div className="card-body">
                  <p className="card-text">Seed Products</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-sm-3">
            <Link to="/handicraft" className="nav-link px-2 link-secondary">
              <div className="card">
                <img
                  src="./assets/img/handicraft.png"
                  className="card-img-top"
                  alt="Handicraft Product"
                />
                <div className="card-body">
                  <p className="card-text">Handicraft Products</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-sm-3 ">
            <Link to="/bamboo" className="nav-link px-2 link-secondary">
              <div className="card">
                <img
                  src="./assets/img/productCategory/bamboo.jpg"
                  className="card-img-top"
                  alt="Bamboo Product"
                />
                <div className="card-body">
                  <p className="card-text">Bamboo Products</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Products;
