import React from "react";
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = (props) => {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
      aria-modal="true"
      role="dialog"
    >
      <div className="offcanvas-header border-bottom">
        <div className="text-start">
          <h5 id="offcanvasRightLabel" className="mb-0 fs-4">
            Shop Cart
          </h5>
          <small>Location in 382480</small>
        </div>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div>
          <ul className="list-group list-group-flush">
            {props.userCart.cart.map((cartItem) => (
              <ShoppingCartItem
                key={cartItem.productID}
                cartItem={cartItem}
                userCart={props.userCart}
                setUserCart={props.setUserCart}
                productID={cartItem.productID}
                productCategory={cartItem.productCategory}
                productTitle={cartItem.productTitle}
                productPrice={cartItem.productPrice}
                productImage={cartItem.productImage}
              />
            ))}
          </ul>
          <div className="d-flex justify-content-between mt-4">
            <button
              type="button"
              className="btn btn-dark"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Continue Shopping
            </button>
            <a href="#!" className="btn btn-primary">
              Checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
