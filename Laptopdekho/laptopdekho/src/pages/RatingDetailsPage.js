import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./RatingDetailsPage.css";

const RatingDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const rating = location.state?.rating;

  if (!rating) return <p>No rating data available.</p>;

  return (
    <div className="rating-page">
      <button className="back-btn" onClick={() => navigate("/")}>⬅ Back</button>
      <div className="rating-page-content">
        <div className="product-image">
          <img src={rating.image} alt={rating.product} />
        </div>
        <div className="product-rating">
          <h2>{rating.product}</h2>
          <p>⭐ {rating.avgRating} / 5</p>
          <p>{rating.totalRatings} Ratings & {rating.totalReviews} Reviews</p>

          <div className="rating-bars">
            {[5,4,3,2,1].map(star => {
              const count = rating[`${star}Star`];
              return (
                <div key={star} className="bar-row">
                  {star}★
                  <div className="bar-container">
                    <div className="bar" style={{ width: `${(count / rating.totalRatings) * 100}%` }}></div>
                  </div>
                  {count}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingDetailsPage;
