// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./RatingCard.css";

// function RatingCard({ rating, setRating }) {
//   const [showTooltip, setShowTooltip] = useState(false);
//   const [userRating, setUserRating] = useState(0);
//   const navigate = useNavigate();
  

//  // handleClick function
// const handleClick = () => {
//   if (userRating > 0) {
//     const totalRatingsNew = rating.totalRatings + 1;
//     const totalScore = rating.avgRating * rating.totalRatings + userRating;
//     const avgRatingNew = (totalScore / totalRatingsNew).toFixed(1);

//     const updatedRating = {
//       ...rating,
//       avgRating: parseFloat(avgRatingNew),
//       totalRatings: totalRatingsNew,
//       totalReviews: rating.totalReviews + 1,
//       [`${userRating}Star`]: rating[`${userRating}Star`] + 1,
//     };

//     setRating(updatedRating); // App.js me correct product update hoga
//     navigate("/rating-details", { state: { rating: updatedRating } });
//   } else {
//     alert("Please select a rating first!");
//   }
// };


//   return (
//     <div
//       className="rating-wrapper"
//       onMouseEnter={() => setShowTooltip(true)}
//       onMouseLeave={() => setShowTooltip(false)}
//     >
//       <div className="rating-btn-wrapper">
//         <select
//           value={userRating}
//           onChange={(e) => setUserRating(parseInt(e.target.value))}
//         >
//           <option value={0}>Rate Product</option>
//           <option value={5}>5 ★</option>
//           <option value={4}>4 ★</option>
//           <option value={3}>3 ★</option>
//           <option value={2}>2 ★</option>
//           <option value={1}>1 ★</option>
//         </select>
//         <button className="rating-btn" onClick={handleClick}>
//           Submit
//         </button>
//       </div>

//       {showTooltip && (
//         <div className="rating-tooltip">
//           <h3 className="tooltip-title">{rating.product}</h3>
//           <p>⭐ <b>{rating.avgRating}</b> / 5</p>
//           <p>{rating.totalRatings} Ratings & {rating.totalReviews} Reviews</p>

//           <div className="rating-bars">
//             {[5,4,3,2,1].map(star => (
//               <div key={star}>
//                 {star}★
//                 <div className="bar-container">
//                   <div className="bar" style={{ width: `${(rating[`${star}Star`] / rating.totalRatings) * 100}%` }}></div>
//                 </div>
//                 {rating[`${star}Star`]}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default RatingCard;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RatingCard.css";

function RatingCard({ rating, setRating }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [localRating, setLocalRating] = useState(rating); // local copy for immediate tooltip effect
  const navigate = useNavigate();

  // Update localRating immediately when user selects rating
  useEffect(() => {
    if (userRating > 0) {
      const totalRatingsNew = rating.totalRatings + 1;
      const totalScore = rating.avgRating * rating.totalRatings + userRating;
      const avgRatingNew = (totalScore / totalRatingsNew).toFixed(1);

      const updatedRating = {
        ...rating,
        avgRating: parseFloat(avgRatingNew),
        totalRatings: totalRatingsNew,
        totalReviews: rating.totalReviews + 1,
        [`${userRating}Star`]: rating[`${userRating}Star`] + 1,
      };

      setLocalRating(updatedRating); // Tooltip me update dikhaye
    } else {
      setLocalRating(rating); // Agar zero rating selected
    }
  }, [userRating, rating]);

  const handleClick = () => {
    if (userRating > 0) {
      const totalRatingsNew = rating.totalRatings + 1;
      const totalScore = rating.avgRating * rating.totalRatings + userRating;
      const avgRatingNew = (totalScore / totalRatingsNew).toFixed(1);

      const updatedRating = {
        ...rating,
        avgRating: parseFloat(avgRatingNew),
        totalRatings: totalRatingsNew,
        totalReviews: rating.totalReviews + 1,
        [`${userRating}Star`]: rating[`${userRating}Star`] + 1,
      };

      setRating(updatedRating); // App.js me update
      navigate("/rating-details", { state: { rating: updatedRating } });
    } else {
      alert("Please select a rating first!");
    }
  };

  return (
    <div
      className="rating-wrapper"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className="rating-btn-wrapper">
        <select
          value={userRating}
          onChange={(e) => setUserRating(parseInt(e.target.value))}
        >
          <option value={0}>Rate Product</option>
          <option value={5}>5 ★</option>
          <option value={4}>4 ★</option>
          <option value={3}>3 ★</option>
          <option value={2}>2 ★</option>
          <option value={1}>1 ★</option>
        </select>
        <button className="rating-btn" onClick={handleClick}>
          Submit
        </button>
      </div>

      {showTooltip && (
        <div className="rating-tooltip">
          <h3 className="tooltip-title">{localRating.product}</h3>
          <p>⭐ <b>{localRating.avgRating}</b> / 5</p>
          <p>{localRating.totalRatings} Ratings & {localRating.totalReviews} Reviews</p>

          <div className="rating-bars">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star}>
                {star}★
                <div className="bar-container">
                  <div
                    className="bar"
                    style={{
                      width: `${(localRating[`${star}Star`] / localRating.totalRatings) * 100}%`,
                      background: userRating === star ? "#ffb400" : "#36aab9", // user selected star highlight
                    }}
                  ></div>
                </div>
                {localRating[`${star}Star`]}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default RatingCard;

