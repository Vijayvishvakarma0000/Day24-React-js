import React, { useEffect, useState } from "react";
import axios from "axios";
import Props_plist from "./Props_plist";
import "./ProductList.css";

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://free-food-menus-api-two.vercel.app/bbqs")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card-row">
      {products.map((p, index) => (
        <Props_plist
          key={index}
          image={p.img}
          description={p.dsc}
          name={p.name}
          price={p.price}
          addToCart={() => addToCart(p)}
        />
      ))}
    </div>
  );
}

export default ProductList;
