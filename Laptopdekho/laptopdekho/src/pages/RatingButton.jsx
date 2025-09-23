// RatingButton.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RatingButton.css";

const RatingButton = ({ ratingData }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/rating-page", { state: { ratingData } });
  };

  return (
    <div
      className="rating-wrapper"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      <button className="rating-btn">{ratingData.average} ★</button>

      {hover && (
        <div className="rating-card">
          <h3>{ratingData.average} ★</h3>
          <p>{ratingData.totalRatings} Ratings & {ratingData.totalReviews} Reviews</p>
          <ul>
            {ratingData.breakdown.map((item, index) => (
              <li key={index}>
                {item.stars} ★ - <span>{item.count}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RatingButton;
