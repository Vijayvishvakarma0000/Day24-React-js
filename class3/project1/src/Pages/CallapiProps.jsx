import React from 'react'
import './CallapiProps.css';

function CallapiProps({name,image,description,price}) {
      const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    width: "250px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    margin: "10px",
    textAlign: "center"
  };
  return (
    <>
     <div className="card">
      <img src={image}  className="card-img" />
      <div className="card-body">
        <h3> Name:{name}</h3>
        <p> Description:{description}</p>
        <p> Price:{price}</p>
        <button>Read More</button>
      </div>
    </div>

    </>
  )
}

export default CallapiProps