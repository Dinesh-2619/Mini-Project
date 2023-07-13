import React from "react";
import { Link } from "react-router-dom";
import { House, ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
      <Link to="/home">
            <House size={28} /> </Link> 
        <Link to="/shop"> SHOP </Link>
        <Link to="/contact"> CONTACT </Link>
        <Link to="/"> LOGIN </Link>
        <Link to="/Signup"> REGISTER </Link>
        <Link to="/cart">
            <ShoppingCart size={28} /> </Link>
      </div>
    </div>
  );
};
