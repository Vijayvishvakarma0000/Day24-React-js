import React, { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Mycart from "./Pages/Mycart";
import Mycontext, { Callcontext } from "./context/Mycontext";

// Ye component theme ko use karega
function Mainapp({ children }) {
  const { theme } = useContext(Callcontext);

  const appStyle = {
    minHeight: "100vh",
    backgroundColor: theme === "light" ? "#f5f5f5" : "#222",
    color: theme === "light" ? "#000" : "#fff",
    transition: "all 0.3s ease",
  };

  return (
    <div style={appStyle}>
      {children}   {/* 👈 ab jo bhi andar aayega us par theme apply hogi */}
    </div>
  );
}


function App() {
  const [cart, setCart] = useState([]);

  // Add to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove from cart
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
  <Mycontext>
      {/* 👇 Mainapp ke andar pura app wrap karo */}
      <Mainapp>
        <Header />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route
            path="/mycart"
            element={<Mycart cart={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </Mainapp>
    </Mycontext>
  );
}

export default App;
