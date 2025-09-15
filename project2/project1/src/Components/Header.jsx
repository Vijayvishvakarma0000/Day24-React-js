import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='main-navbar'>
        <div className='logo-img'><img src="/assets/logo-bird.jpeg" alt=""/></div>
        <div>
            <ul>
                <li>Home</li>
                <li>Contact</li>
         <li><Link to="/loginpage">Login</Link></li>
                <li>Register</li>
            </ul>
        </div>

        <div>A</div>

    </div>
  )
}

export default Header