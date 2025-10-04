// src/Pages/Wishlist.jsx
import React from "react";
import ProductCard from "../components/ProductCard";

function Wishlist({ wishlist, setWishlist }) {
  const handleWishlistToggle = (product) => {
    setWishlist(wishlist.filter((p) => p.id !== product.id));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "1rem"
        }}>
          {wishlist.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleCart={() => {}}
              wishlist={wishlist}
              handleWishlist={handleWishlistToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist; 
