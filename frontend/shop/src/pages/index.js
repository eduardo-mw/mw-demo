import React from "react";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
 
const Home = (props) => {
    return (
        <main>
            <section className="my-lg-8 my-8">
                <ProductDisplay userCart={props.userCart} setUserCart={props.setUserCart}/>
            </section>
        </main>
    );
};
 
export default Home;