import React from "react";

function Hprops({ bangad, image, description, dosome }) {
  return (
    <div>
      <div className="card">
        <img src={image} className="card-img" />
        <div className="card-body">
          <h3> Name:{bangad}</h3>
          <p> Description:{description}</p>
          <p> Price:{dosome}</p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Hprops;
