import React, { useState } from 'react'
import Header from './Component/Header'

function App() {
  const [user, setUser] = useState({
    name: "Vijay",
    age: 22,
    email: "vijay@example.com",
    city: "Indore",
  });

  

  const updateUser = () => {
    setUser({
    ...user,city: "bhopal"
    });
  }

 

  return (
    <div>
      

      <div style={{
        border: "1px solid gray",
        padding: "20px",
        width: "250px",
        marginLeft: "40%",
        backgroundColor: "yellowgreen"
      }}>
        <h2>{user.name}</h2>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
        <p>City: {user.city}</p>
      </div>

      <button onClick={updateUser}>
        Data Change
      </button>
    </div>
  );
}

export default App;
