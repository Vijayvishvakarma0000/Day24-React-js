import React from "react";
import Slider from "../components/Slider";
import ProductList from "../components/ProductList";

function Home({ addToCart }) {
  return (
    <div>
      <Slider />
      <ProductList addToCart={addToCart} />
    </div>
  );
}

export default Home;
