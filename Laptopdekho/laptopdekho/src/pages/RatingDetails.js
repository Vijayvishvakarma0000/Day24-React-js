import React from "react";

function RatingDetails({ rating }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>{rating.product} - Rating Details</h2>
      <p>⭐ {rating.avgRating} / 5</p>
      <p>{rating.totalRatings} Ratings & {rating.totalReviews} Reviews</p>

      <div style={{ marginTop: "20px" }}>
        <p>5★ : {rating.fiveStar}</p>
        <p>4★ : {rating.fourStar}</p>
        <p>3★ : {rating.threeStar}</p>
        <p>2★ : {rating.twoStar}</p>
        <p>1★ : {rating.oneStar}</p>
      </div>
    </div>
  );
}

export default RatingDetails;
