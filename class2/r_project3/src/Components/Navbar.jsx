import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
      <div className="main-nav">
      <div className="navbar">
       <div className="left-section">
      <div className="logo">
      <img src="/assets/imgi_17_skillfy-loader.4528fcdf32ee7edd5025.gif" alt="Skillfy Logo" style={{width:"100px", height:"100px"}} />

      </div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Courses ▼</a>
        <a href="#">Register For Free</a>
      </nav>
    </div>
    <div className="right-section">
      <span><img src="./assets/imgi_26_support-black-icon.svg" alt width="30px" height="30px" /></span>
      <span><img src="/assets/imgi_6_user-icon.png" alt width="40px" height="40px" /></span>
    </div>
  </div>
</div>

    </div>
  )
}

export default Navbar