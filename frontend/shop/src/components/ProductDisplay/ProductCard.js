import React from "react";

const ProductCard = (props) => {
  const cartChangeHandler = (event) => {
    props.setUserCart((prevUserCart) => {
      return { sessionID: "test", cart: [props.product] };
    });
  };

  return (
    <div className="col">
      <div className="card card-product">
        <div className="card-body">
          <div className="text-center position-relative">
            <a href="#!">
              <img
                src={props.product.productImage}
                alt={props.product.productTitle}
                className="mb-3 img-fluid"
              />
            </a>

            <div className="card-product-action">
              <a
                href="#!"
                className="btn-action"
                data-bs-toggle="modal"
                data-bs-target="#quickViewModal"
              >
                <i
                  className="bi bi-eye"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  aria-label="Quick View"
                  data-bs-original-title="Quick View"
                ></i>
              </a>
              <a
                href="#!"
                className="btn-action"
                data-bs-toggle="tooltip"
                data-bs-html="true"
                aria-label="Wishlist"
                data-bs-original-title="Wishlist"
              >
                <i className="bi bi-heart"></i>
              </a>
              <a
                href="#!"
                className="btn-action"
                data-bs-toggle="tooltip"
                data-bs-html="true"
                aria-label="Compare"
                data-bs-original-title="Compare"
              >
                <i className="bi bi-arrow-left-right"></i>
              </a>
            </div>
          </div>
          <div className="text-small mb-1">
            <a href="#!" className="text-decoration-none text-muted">
              <small>{props.product.productCategory}</small>
            </a>
          </div>
          <h2 className="fs-6">
            <a
              href="./pages/shop-single.html"
              className="text-inherit text-decoration-none"
            >
              {props.product.productTitle}
            </a>
          </h2>
          <div>
            <small className="text-warning">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-half"></i>
            </small>
            <span className="text-muted small">4.5(149)</span>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              <span className="text-dark">${props.product.productPrice}</span>
            </div>
            <div>
              <button
                className="btn btn-primary btn-sm"
                onClick={cartChangeHandler}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-plus"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
