import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleCart, wishlist, handleWishlist }) => {
  const inWishlist = wishlist.find((p) => p.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      
      <button onClick={() => handleCart(product)}>Add to Cart</button>
      
      <button onClick={() => handleWishlist(product)}>
        {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
      </button>
    </div>
  );
};

export default ProductCard;
