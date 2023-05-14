import React from "react";
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
  <nav className="avenir menu-container bg-black">
    <div className="side-drawer">
    <a className="f6 f5-l link bg-animate white grow hover-bg-light-red dib pa3 ph4-l" href="/">Home</a>
    <a className="f6 f5-l link bg-animate white grow hover-bg-light-red dib pa3 ph4-l" href="/about">About</a>
    </div>
    <div>
    <a className="f6 f5-l link bg-animate white grow hover-bg-light-red dib pa3 ph4-l" href="/portfolio">Portfolio</a>
    <a className="f6 f5-l link bg-animate white grow hover-bg-light-red dib pa3 ph4-l" href="/shop">Shop</a>
    <a className="f6 f5-l link bg-animate white grow hover-bg-light-red dib pa3 ph4-l" href="/contact">Contact</a>
    </div>
  </nav>
  </div>
  );
}

export default Navbar;