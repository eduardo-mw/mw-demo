import React from "react";
import ProductCard from "./ProductCard";
import productImageApples from "../../assets/images/products/product-img-15.jpg";
import productImageBananas from "../../assets/images/products/product-img-18.jpg";
import productImageBeets from "../../assets/images/products/product-img-19.jpg";
import productImageCornFlakes from "../../assets/images/products/product-img-8.jpg";
import productImageKiwis from "../../assets/images/products/product-img-17.jpg";
import productImageLays from "../../assets/images/products/product-img-4.jpg";
import productImageNuttyChips from "../../assets/images/products/product-img-14.jpg";
import productImagePineapples from "../../assets/images/products/product-img-16.jpg";
import productImagePopcorn from "../../assets/images/products/product-img-5.jpg";
import productImageYogurt from "../../assets/images/products/product-img-6.jpg";

const ProductDisplay = (props) => {
  const products = [
    {
      productID: 1,
      productCategory: "Snacks and Munchies",
      productTitle: "Johns Chips",
      productPrice: "100",
      productImage: productImageNuttyChips,
      quantity: 1,
    },
    {
      productID: 2,
      productCategory: "Fruits",
      productTitle: "Organic Apples",
      productPrice: "50",
      productImage: productImageApples,
      quantity: 1,
    },
    {
      productID: 3,
      productCategory: "Vegetables",
      productTitle: "Beets",
      productPrice: "80",
      productImage: productImageBeets,
      quantity: 1,
    },
    {
      productID: 4,
      productCategory: "Cereals",
      productTitle: "Corn Flakes",
      productPrice: "30",
      productImage: productImageCornFlakes,
      quantity: 1,
    },
    {
      productID: 5,
      productCategory: "Fruits",
      productTitle: "Kiwis",
      productPrice: "40",
      productImage: productImageKiwis,
      quantity: 1,
    },
    {
      productID: 6,
      productCategory: "Snacks and Munchies",
      productTitle: "Lays Chips",
      productPrice: "20",
      productImage: productImageLays,
      quantity: 1,
    },
    {
      productID: 7,
      productCategory: "Fruits",
      productTitle: "Pineapples",
      productPrice: "25",
      productImage: productImagePineapples,
      quantity: 1,
    },
    {
      productID: 8,
      productCategory: "Snacks and Munchies",
      productTitle: "Popcorn",
      productPrice: "15",
      productImage: productImagePopcorn,
      quantity: 1,
    },
    {
      productID: 9,
      productCategory: "Dairy",
      productTitle: "Yogurt",
      productPrice: "70",
      productImage: productImageYogurt,
      quantity: 1,
    },
    {
      productID: 10,
      productCategory: "Fruits",
      productTitle: "Bananas",
      productPrice: "10",
      productImage: productImageBananas,
      quantity: 1,
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mb-6">
          <h3 className="mb-0">Products</h3>
        </div>
      </div>

      <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
        {products.map((product) => (
          <div className="col" key={product.productID}>
            <ProductCard
              product={product}
              userCart={props.userCart}
              setUserCart={props.setUserCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
