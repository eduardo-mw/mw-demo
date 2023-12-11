import React from "react";

const shoppingCartItem = (props) => {
    return(            <li className="list-group-item py-3 ps-0 border-top">
    <div className="row align-items-center">
      <div className="col-6 col-md-6 col-lg-7">
        <div className="d-flex">
          <img
            src={props.productImage}
            alt={props.productTitle}
            className="icon-shape icon-xxl"
          />
          <div className="ms-3">
            <a href="./pages/shop-single.html" className="text-inherit">
              <h6 className="mb-0">{props.productTitle}</h6>
            </a>
            <div className="mt-2 small lh-1">
              <a href="#!" className="text-decoration-none text-inherit">
                <span className="me-1 align-text-bottom">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-trash-2 text-success"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </span>
                <span className="text-muted">Remove</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4 col-md-3 col-lg-3">
        <div className="input-group input-spinner">
          <input
            type="button"
            value="-"
            className="button-minus btn btn-sm"
            data-field="quantity"
          />
          <input
            type="number"
            step="1"
            max="10"
            value="1"
            name="quantity"
            className="quantity-field form-control-sm form-input"
          />
          <input
            type="button"
            value="+"
            className="button-plus btn btn-sm"
            data-field="quantity"
          />
        </div>
      </div>
      <div className="col-2 text-lg-end text-start text-md-end col-md-2">
        <span className="fw-bold">${props.productPrice}</span>
      </div>
    </div>
  </li>);
}

export default shoppingCartItem;