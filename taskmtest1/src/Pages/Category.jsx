
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Slider from "./Slider";

function Category({ wishlist, setWishlist }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);

  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    category: "",
    image: ""
  });

  const itemsPerPage = 6;

  
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => {
        setProducts(res.data);
        const uniqueCats = [...new Set(res.data.map(p => p.category))];
        setCategories(uniqueCats);
      })
      .catch(err => console.error(err));
  }, []);


  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) &&
    (category ? p.category === category : true)
  );

  //  Pagination
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const displayed = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  //  Handlers
  const handleAddToWishlist = (product) => {
    if (!wishlist.find(p => p.id === product.id)) {
      setWishlist([...wishlist, product]);
      alert(`${product.title} added to Wishlist`);
    }
  };

  const handleWishlistToggle = (product) => {
    const exists = wishlist.find(p => p.id === product.id);
    setWishlist(exists ? wishlist.filter(p => p.id !== product.id) : [...wishlist, product]);
  };

  const handleNewProductChange = (e) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleAddNewProduct = () => {
    if (!newProduct.title || !newProduct.price || !newProduct.category || !newProduct.image) {
      alert("Please fill all fields!");
      return;
    }

    const id = Date.now(); // simple unique id
    const productToAdd = { ...newProduct, id };
    setProducts([productToAdd, ...products]); // add to start

    if (!categories.includes(newProduct.category)) {
      setCategories([...categories, newProduct.category]); // update categories
    }

    setNewProduct({ title: "", price: "", category: "", image: "" }); // reset form
  };

  const handleRemoveProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
    setWishlist(wishlist.filter(p => p.id !== id)); // remove from wishlist too
  };

  return (
    <div style={{ padding: "2rem",backgroundColor:"#f9f9f9, #ffffff"}}>
        <Slider/>
      <h2 id="all-cate">All categories</h2>

      {/* Add New Product */}
      <div style={{ marginBottom: "1rem", border: "1px solid #a47c7cff", padding: "1rem", borderRadius: "8px", backgroundColor:"black" }}>
        <h3>Add New Product</h3>
        <input type="text" name="title" placeholder="Title" value={newProduct.title} onChange={handleNewProductChange} style={{ marginRight: "0.5rem", padding: "0.3rem" }}/>
        <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleNewProductChange} style={{ marginRight: "0.5rem", padding: "0.3rem" }}/>
        <input type="text" name="category" placeholder="Category" value={newProduct.category} onChange={handleNewProductChange} style={{ marginRight: "0.5rem", padding: "0.3rem" }}/>
        <input type="text" name="image" placeholder="Image URL" value={newProduct.image} onChange={handleNewProductChange} style={{ marginRight: "0.5rem", padding: "0.3rem" }}/>
        <button onClick={handleAddNewProduct} style={{ padding: "0.3rem 0.6rem" }}>Add Product</button>
      </div>

      {/* Search & Filter */}
      <input 
        type="text" 
        placeholder="Search..." 
        value={search} 
        onChange={e => setSearch(e.target.value)} 
        style={{ padding: "0.5rem 1rem", marginRight: "1rem", marginBottom: "1rem" }} 
      />
      <select value={category} onChange={e => setCategory(e.target.value)} style={{ padding: "0.5rem 1rem", marginBottom: "1rem" }}>
        <option value="">All Categories</option>
        {categories.map((cat, i) => <option key={i} value={cat}>{cat}</option>)}
      </select>

      {/* Products Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem" }}>
        {displayed.map(product => (
          <div key={product.id} style={{ position: "relative" }}>
            <ProductCard 
              product={product} 
              handleCart={() => handleAddToWishlist(product)} 
              wishlist={wishlist} 
              handleWishlist={handleWishlistToggle} 
            />
            {/* Remove Button */}
            <button 
              onClick={() => handleRemoveProduct(product.id)} 
              style={{ position: "absolute", top: "5px", right: "5px", background: "red", color: "#fff", border: "none", borderRadius: "4px", padding: "0.2rem 0.4rem", cursor: "pointer" }}
            >
              X
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination currentPage={page} totalPages={totalPages} handlePageChange={setPage} />


    </div>
  );
}

export default Category;
