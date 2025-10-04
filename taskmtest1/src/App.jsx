import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Category from "./Pages/Category";
import Wishlist from "./Pages/Wishlist";
import Home from './Pages/Home';

function App() {
  const [wishlist, setWishlist] = useState([]); // Wishlist state
  const [cart, setCart] = useState([]); 

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/category"
          element={
            <Category
              wishlist={wishlist}
              setWishlist={setWishlist}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              setWishlist={setWishlist}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
