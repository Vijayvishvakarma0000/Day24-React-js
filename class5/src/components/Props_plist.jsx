import React from "react";
import "./Props_plist.css";

function Props_plist({ image, description, price, name, addToCart }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt={name} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <div className="card-meta">
          <span className="card-price">₹{price}</span>
        </div>
        <div className="card-rating">{description}</div>
      </div>
      <button type="button" onClick={addToCart}>
        Add To Cart
      </button>
    </div>
  );
}

export default Props_plist;
