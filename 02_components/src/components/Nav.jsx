import React from 'react'
import './styles/Nav.css'
const nav = () => {
  return (
   <>
   <nav className="navbar">
      <div className="logo">logo </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
   </>

  )
}

export default nav