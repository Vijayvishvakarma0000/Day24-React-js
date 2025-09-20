import React from "react";
import "../components/Props_plist.css";


function Mycart({ cart, removeFromCart }) {
  return (
    <div>
      <h2>My Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="card-row">
          {cart.map((item, index) => (
            <div className="card" key={index}>
              <div className="card-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="card-body">
                <h3 className="card-title">{item.name}</h3>
                <div className="card-meta">
                  <span className="card-price">₹{item.price}</span>
                </div>
                <div className="card-rating">{item.dsc}</div>
              </div>
              <button type="button" onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Mycart;
