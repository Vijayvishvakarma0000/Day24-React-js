



// import React from "react";
// import { Routes, Route } from "react-router-dom"; // ✅ Router remove
// import RatingCard from "./pages/RatingCard";
// import RatingDetailsPage from "./pages/RatingDetailsPage";

// function App() {
//   const productRating = {
//     product: "Apple iPhone 13 Pro",
//     image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-green-select?wid=470&hei=556&fmt=png-alpha&.v=1644969385505",
//     avgRating: 4.7,
//     totalRatings: 1601,
//     totalReviews: 122,
//     fiveStar: 1325,
//     fourStar: 163,
//     threeStar: 32,
//     twoStar: 13,
//     oneStar: 68,
//   };

//   return (
//     <Routes>
//       <Route path="/" element={<RatingCard rating={productRating} />} />
//       <Route path="/rating-details" element={<RatingDetailsPage />} />
//     </Routes>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import RatingCard from "./pages/RatingCard";
// import RatingDetailsPage from "./pages/RatingDetailsPage";

// function App() {
//   // Initial product data
//   const [productRating, setProductRating] = useState({
//     product: "Apple iPhone 13 Pro",
//     image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-green-select?wid=470&hei=556&fmt=png-alpha&.v=1644969385505",
//     avgRating: 4.7,
//     totalRatings: 1601,
//     totalReviews: 122,
//     fiveStar: 1325,
//     fourStar: 163,
//     threeStar: 32,
//     twoStar: 13,
//     oneStar: 68,
//   });

//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={<RatingCard rating={productRating} setRating={setProductRating} />}
//       />
//       <Route
//         path="/rating-details"
//         element={<RatingDetailsPage />}
//       />
//     </Routes>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import RatingCard from "./pages/RatingCard";
// import RatingDetailsPage from "./pages/RatingDetailsPage";

// function App() {
//   // Array of products
//   const initialProducts = [
//     {
//       id: 1,
//       product: "Apple iPhone 13 Pro",
//       image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-green-select?wid=470&hei=556&fmt=png-alpha&.v=1644969385505",
//       avgRating: 4.7,
//       totalRatings: 1601,
//       totalReviews: 122,
//       fiveStar: 1325,
//       fourStar: 163,
//       threeStar: 32,
//       twoStar: 13,
//       oneStar: 68,
//     },
//     {
//       id: 2,
//       product: "Samsung Galaxy S23",
//       image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-s911bzgdinu/gallery/in-galaxy-s23-ultra-s911-447376-sm-s911bzgdinu-534153874",
//       avgRating: 4.5,
//       totalRatings: 1200,
//       totalReviews: 95,
//       fiveStar: 1000,
//       fourStar: 150,
//       threeStar: 30,
//       twoStar: 10,
//       oneStar: 10,
//     },
//     // More products can be added here
//   ];

//   const [products, setProducts] = useState(initialProducts);

//   // Function to update rating of a specific product
//   const updateProductRating = (updatedProduct) => {
//     const newProducts = products.map((prod) =>
//       prod.id === updatedProduct.id ? updatedProduct : prod
//     );
//     setProducts(newProducts);
//   };

//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={
//           <div style={{ padding: "20px" }}>
//             <h2>Product Ratings</h2>
//             <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//               {products.map((prod) => (
//                 <RatingCard
//                   key={prod.id}
//                   rating={prod}
//                   setRating={updateProductRating} // Pass function to update rating
//                 />
//               ))}
//             </div>
//           </div>
//         }
//       />
//       <Route path="/rating-details" element={<RatingDetailsPage />} />
//     </Routes>
//   );
// }

// export default App;



import React from "react";
import ImageZoom from "./pages/ImageZoom";

function App() {
  const productImages = [
    "https://rukminim2.flixcart.com/image/312/312/l0igvww0/mobile/c/j/j/-original-imagca5hhzsgpycf.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/a/e/g/iphone-13-pro-mlvw3hn-a-apple-original-imag6vpcvspnzyfy.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/312/312/l0igvww0/mobile/c/j/j/-original-imagca5hhzsgpycf.jpeg?q=70",
    "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile-refurbished-fk/4/h/x/-original-imaheh53wzuuzvvs.jpeg?q=70",
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Image Zoom Example</h2>
      <ImageZoom images={productImages} />
    </div>
  );
}

export default App;
