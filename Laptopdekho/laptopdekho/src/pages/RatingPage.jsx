// RatingPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";

const RatingPage = () => {
  const { state } = useLocation();
  const data = state?.ratingData;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Rating Details</h2>
      {data ? (
        <div>
          <h3>Average Rating: {data.average} ★</h3>
          <p>{data.totalRatings} Ratings & {data.totalReviews} Reviews</p>
          <ul>
            {data.breakdown.map((item, index) => (
              <li key={index}>
                {item.stars} ★ - {item.count}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No rating data available.</p>
      )}
    </div>
  );
};

export default RatingPage;
