import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='navbar'>
        <ul>
            <li><Link to="/">Teacher</Link></li>
            <li><Link to="/student">Student</Link></li>
        </ul>
    </div>
  )
}

export default Header