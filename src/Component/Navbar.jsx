import React from 'react'
import "../Css/Navbar.css"
export const Navbar = () => {
  
 return (
  <nav className='Navbar'>
    <div className="navleft">
    <i className="fa-solid fa-bars"></i>
    </div >
      <div className="navright">
        <div className='navright_items'>
        <i className="fa-solid fa-arrows-rotate"></i>
        <i className="fa-regular fa-sun"></i>
         <i  className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
  </nav>
  )
}