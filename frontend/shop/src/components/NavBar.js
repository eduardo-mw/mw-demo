import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Shop</a>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a href="/products" className="nav-link">Products</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/checkout">Checkout</a>
            </li>
            </ul>
        </div>
        </nav>
    );
    };

export default NavBar;