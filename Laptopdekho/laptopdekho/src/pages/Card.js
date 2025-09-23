import React from "react";
import "./Card.css";

function Card() {
  // baad me yaha pe tum api se data fetch karoge
  const sampleData = [
    {
      id: 1,
      title: "Dell Inspiron 15",
      price: 55000,
      description: "Powerful laptop with i5 processor, 8GB RAM, 512GB SSD.",
      image: "https://m.media-amazon.com/images/I/71Y6eTNF8FL._SL1500_.jpg",
      rating: { rate: 4.3 },
    },
    {
      id: 2,
      title: "HP Pavilion Gaming",
      price: 72000,
      description: "Gaming laptop with Ryzen 5, 16GB RAM, RTX 3050 GPU.",
      image: "https://m.media-amazon.com/images/I/71JNTbCV0gL._SL1500_.jpg",
      rating: { rate: 4.6 },
    },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>💻 Laptops</h2>

      <div className="products-container">
        {sampleData.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p className="price">₹{item.price}</p>
            <p className="desc">{item.description}</p>
            <p className="rating">⭐ {item.rating.rate} / 5</p>

            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
