import React from 'react'
import './index.scss';

const Navbar = () => {
  return (
    <header>
      <nav className="header__container">
        <div className="header__container__logo">
          <img src="./images/frontend-logo.png" alt="" />
          <a href="">FrontEnd Developers</a>
        </div>
        <button id="btn-menu"><i className="fa-solid fa-bars"></i></button>
        <ul className="header__container__list" id="menu">
          <li><a href="#">Home</a> </li>
          <li><a href="#">About</a> </li>
          <li><a href="#">Services</a> </li>
          <li><a href="#">Portfolio</a> </li>
          <li><a href="#">Pages</a> </li>
          <li><a href="#">Contact</a> </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;

