import React from "react";
import ProductCard from "./ProductCard";

const ProductDisplay = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mb-6">
                    <h3 className="mb-0">Products</h3>
                </div>
            </div>

            <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
                <ProductCard
                    productCategory="Snacks and Munchies"
                    productTitle="Johns Chips"
                    productPrice="100"
                />
                <ProductCard
                    productCategory="Grocery"
                    productTitle="Organic Apples"
                    productPrice="50"
                />
                <ProductCard
                    productCategory="Grocery"
                    productTitle="Fresh Bread"
                    productPrice="80"
                />
                <ProductCard
                    productCategory="Grocery"
                    productTitle="Milk"
                    productPrice="30"
                />
                <ProductCard
                    productCategory="Grocery"
                    productTitle="Eggs"
                    productPrice="40"
                />
                <ProductCard
                    productCategory="Grocery"
                    productTitle="Pasta"
                    productPrice="20"
                />
                <ProductCard
                    productCategory="Grocery"
                    productTitle="Rice"
                    productPrice="25"
                />
                <ProductCard
                    productCategory="Grocery"
                    productTitle="Canned Beans"
                    productPrice="15"
                />
                <ProductCard
                    productCategory="Grocery"
                    productTitle="Frozen Pizza"
                    productPrice="70"
                />
                <ProductCard
                    productCategory="Grocery"
                    productTitle="Chocolate Bar"
                    productPrice="10"
                />
            </div>
        </div>
    );
};

export default ProductDisplay;
