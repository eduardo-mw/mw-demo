import React from "react";
import ProductCard from "./ProductCard";
import productImageApples from "../../assets/images/products/product-img-apples.jpg";
import productImageBananas from "../../assets/images/products/product-img-bananas.jpg";
import productImageBeets from "../../assets/images/products/product-img-beets.jpg";
import productImageCornFlakes from "../../assets/images/products/product-img-corn-flakes.jpg";
import productImageKiwis from "../../assets/images/products/product-img-kiwis.jpg";
import productImageLays from "../../assets/images/products/product-img-lays.jpg";
import productImageNuttyChips from "../../assets/images/products/product-img-nutty-chips.jpg";
import productImagePineapples from "../../assets/images/products/product-img-pineapples.jpg";
import productImagePopcorn from "../../assets/images/products/product-img-popcorn.jpg";
import productImageYogurt from "../../assets/images/products/product-img-yogurt.jpg";


const ProductDisplay = () => {
    const products = [
        {
            productID: 1,
            productCategory: "Snacks and Munchies",
            productTitle: "Johns Chips",
            productPrice: "100",
            productImage: productImageNuttyChips,
        },
        {
            productID: 2,
            productCategory: "Fruits",
            productTitle: "Organic Apples",
            productPrice: "50",
            productImage: productImageApples,
        },
        {
            productID: 3,
            productCategory: "Vegetables",
            productTitle: "Beets",
            productPrice: "80",
            productImage: productImageBeets,
        },
        {
            productID: 4,
            productCategory: "Cereals",
            productTitle: "Corn Flakes",
            productPrice: "30",
            productImage: productImageCornFlakes,
        },
        {
            productID: 5,
            productCategory: "Fruits",
            productTitle: "Kiwis",
            productPrice: "40",
            productImage: productImageKiwis,
        },
        {
            productID: 6,
            productCategory: "Snacks and Munchies",
            productTitle: "Lays Chips",
            productPrice: "20",
            productImage: productImageLays,
        },
        {
            productID: 7,
            productCategory: "Fruits",
            productTitle: "Pineapples",
            productPrice: "25",
            productImage: productImagePineapples,
        },
        {
            productID: 8,
            productCategory: "Snacks and Munchies",
            productTitle: "Popcorn",
            productPrice: "15",
            productImage: productImagePopcorn,
        },
        {
            productID: 9,
            productCategory: "Dairy",
            productTitle: "Yogurt",
            productPrice: "70",
            productImage: productImageYogurt,
        },
        {
            productID: 10,
            productCategory: "Fruits",
            productTitle: "Bananas",
            productPrice: "10",
            productImage: productImageBananas,
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
                            productCategory={product.productCategory}
                            productTitle={product.productTitle}
                            productPrice={product.productPrice}
                            productImage={product.productImage}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductDisplay;
