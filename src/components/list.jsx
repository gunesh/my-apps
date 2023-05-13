import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  const [obj, setObj] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const List = (object) => {
    return (
      <>
        <div
          className={`card ${!props.showImage && "card-mouse"}`}
          onClick={() => {
            if (props.page !== "CLAY") {
              setObj(object);
              handleShow();
            }
          }}
        >
          {props.showImage && (
            <>
              {object.src && (
                <img
                  src={object.src}
                  className="card-img-top  card-popup img-fluid"
                  alt={object.name}
                />
              )}
            </>
          )}

          <div className="card-body custom-body">
            <h5 className="card-title">{object.name}</h5>
            {object &&
              object.details &&
              object.details.map((txt) => {
                return <p className="card-text">{txt}</p>;
              })}
          </div>
        </div>
      </>
    );
  };

  const ModalPopup = () => {
    return (
      <>
        <Modal show={show} onHide={handleClose} className="modal-xl">
          <Modal.Header closeButton>
            <Modal.Title>{obj.name}({obj.prodcuctid}{obj.productid})</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row className="g-4">
              <Col md={6}>
                {props.page !== "SEED" && (
                  <img
                    src={obj.src}
                    className="card-img-top  card-popup img-popup"
                    alt={obj.name}
                  />
                )}

                {props.page === "SEED" && (
                  <Carousel>
                    {obj.src && (
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={obj.src}
                          alt={obj.name}
                        />
                      </Carousel.Item>
                    )}
                    {obj.src1 && (
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={obj.src1}
                          alt={obj.name}
                        />
                      </Carousel.Item>
                    )}

                    {obj.src2 && (
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={obj.src2}
                          alt={obj.name}
                        />
                      </Carousel.Item>
                    )}

                    {obj.src3 && (
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={obj.src3}
                          alt={obj.name}
                        />
                      </Carousel.Item>
                    )}
                  </Carousel>
                )}
              </Col>
              <Col md={6}>
                {/*                 
                {obj.per_100 && (
                  <p>
                    <span className="product-info">Per 100 SQ FT: </span>
                    {obj.per_100}
                  </p>
                )}

                {obj.productid && (
                  <p>
                    <span className="product-info">Product ID: </span>
                    {obj.productid}
                  </p>
                )}
                {obj.prodcuctid && (
                  <p>
                    <span className="product-info">Product ID: </span>
                    {obj.prodcuctid}
                  </p>
                )}

                {obj.size && (
                  <p>
                    <span className="product-info">Size: </span>
                    {obj.size}
                  </p>
                )}

                {obj.thickness && (
                  <p>
                    <span className="product-info">Thickness: </span>
                    {obj.thickness}
                  </p>
                )}

                {obj.weight && (
                  <p>
                    <span className="product-info">Weight: </span>
                    {obj.weight}
                  </p>
                )}

                {obj.color && (
                  <p>
                    <span className="product-info">Color: </span>
                    {obj.color}
                  </p>
                )}
                {obj.packaging_size && (
                  <p>
                    <span className="product-info">Packaging Size: </span>
                    {obj.packaging_size}
                  </p>
                )}

                {obj.packaging_type && (
                  <p>
                    <span className="product-info">Packaging Type: </span>
                    {obj.packaging_type}
                  </p>
                )}
                {obj.usage_application && (
                  <p>
                    <span className="product-info">Usage Application: </span>
                    {obj.usage_application}
                  </p>
                )}
                {obj.storage_instruction && (
                  <p>
                    <span className="product-info">Storage Instruction: </span>
                    {obj.storage_instruction}
                  </p>
                )}
                {obj.self_line && (
                  <p>
                    <span className="product-info">Self life: </span>
                    {obj.self_line}
                  </p>
                )}

                {obj.dimensions && (
                  <p>
                    <span className="product-info">Dimensions: </span>
                    {obj.dimensions}
                  </p>
                )} */}

                <table className="table table-bordered product-info-table">
                  <tbody>
                    {obj.per_100 && (
                      <tr className="product-row">
                        <td className="product-heading">Per 100 SQ FT: </td>
                        <td className="product-detail">{obj.per_100}</td>
                      </tr>
                    )}

                    {obj.per_100 && (
                      <tr className="product-row">
                        <td className="product-heading">Per 100 SQ FT: </td>
                        <td className="product-detail">{obj.per_100}</td>
                      </tr>
                    )}

                    {obj.productid && (
                      <tr className="product-row">
                        <td className="product-heading">Product ID: </td>
                        <td className="product-detail">{obj.productid}</td>
                      </tr>
                    )}
                    {obj.prodcuctid && (
                      <tr className="product-row">
                        <td className="product-heading">Product ID: </td>
                        <td className="product-detail">{obj.prodcuctid}</td>
                      </tr>
                    )}

                    {obj.size && (
                      <tr className="product-row">
                        <td className="product-heading">Size: </td>
                        <td className="product-detail">{obj.size}</td>
                      </tr>
                    )}

                    {obj.thickness && (
                      <tr className="product-row">
                        <td className="product-heading">Thickness: </td>
                        <td className="product-detail">{obj.thickness}</td>
                      </tr>
                    )}

                    {obj.weight && (
                      <tr className="product-row">
                        <td className="product-heading">Weight: </td>
                        <td className="product-detail">{obj.weight}</td>
                      </tr>
                    )}

                    {obj.color && (
                      <tr className="product-row">
                        <td className="product-heading">Color: </td>
                        <td className="product-detail">{obj.color}</td>
                      </tr>
                    )}
                    {obj.packaging_size && (
                      <tr className="product-row">
                        <td className="product-heading">Packaging Size: </td>
                        <td className="product-detail">{obj.packaging_size}</td>
                      </tr>
                    )}

                    {obj.packaging_type && (
                      <tr className="product-row">
                        <td className="product-heading">Packaging Type: </td>
                        <td className="product-detail">{obj.packaging_type}</td>
                      </tr>
                    )}
                    {obj.usage_application && (
                      <tr className="product-row">
                        <td className="product-heading">Usage Application: </td>
                        <td className="product-detail">
                          {obj.usage_application}
                        </td>
                      </tr>
                    )}
                    {obj.storage_instruction && (
                      <tr className="product-row">
                        <td className="product-heading">
                          Storage Instruction:{" "}
                        </td>
                        <td className="product-detail">
                          {obj.storage_instruction}
                        </td>
                      </tr>
                    )}
                    {obj.self_line && (
                      <tr className="product-row">
                        <td className="product-heading">Self life: </td>
                        <td className="product-detail">{obj.self_line}</td>
                      </tr>
                    )}

                    {obj.dimensions && (
                      <tr className="product-row">
                        <td className="product-heading">Dimensions: </td>
                        <td className="product-detail">{obj.dimensions}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </Col>
            </Row>
            <br />
            <Row className="g-4">
              <Col md={5}></Col>
              <Col md={2} className="text-center">
                <Link to="/contact">
                  <button className="btn btn-primary app-button">Connect with us</button>
                </Link>
              </Col>
              <Col md={5}></Col>
            </Row>
          </Modal.Body>
        </Modal>
      </>
    );
  };

  const getDynamicClass = () => {
    if (
      props.page === "SEED" ||
      props.page === "HANDICRAFT" ||
      props.page === "BAMBOO"
    ) {
      return "col-md-3 my-card";
    } else if (
      props.page === "JAALIS" ||
      props.page === "DECORATIVE_TILES" ||
      props.page === "CladdingBricksWallBricks" ||
      props.page === "RoofingTiles" ||
      props.page === "TerracottaFloaring" ||
      props.page === "TerracottaPanel" ||
      props.page === "Bricks"
    ) {
      return "col-md-4 my-card col";
    }
    return "col-sm-4 my-card";
  };

  return (
    <>
      {props.page === "CLAY" &&
        props.data.map((object, i) => {
          return (
            <div key={`cntr-${object.id}`} className={getDynamicClass()}>
              <Link to={object.url} className="text-decoration-none app-link">
                <List {...object} />
              </Link>
            </div>
          );
        })}

      {(props.page === "JAALIS" ||
        props.page === "DECORATIVE_TILES" ||
        props.page === "Bricks" ||
        props.page === "RoofingTiles" ||
        props.page === "TerracottaFloaring" ||
        props.page === "TerracottaLockingPavers" ||
        props.page === "TerracottaPanel" ||
        props.page === "HollowBlock" ||
        props.page === "CladdingBricksWallBricks") && (
        <Row xs={1} md={2} className="g-4">
          {props.data.map((object, i) => {
            return (
              <div
                key={`cntr-${object.id}`}
                className={getDynamicClass()}
                title="Click here for more information"
              >
                <List {...object} />{" "}
              </div>
            );
          })}
        </Row>
      )}

      {(props.page === "SEED" ||
        props.page === "HANDICRAFT" ||
        props.page === "BAMBOO") && (
        <Row xs={1} md={2} className="g-4">
          {props.data.map((object, i) => {
            return (
              <div key={`cntr-${object.id}`} className={getDynamicClass()}>
                <List {...object} />{" "}
              </div>
            );
          })}
        </Row>
      )}

      <ModalPopup />
    </>
  );
};

export default ProductList;
