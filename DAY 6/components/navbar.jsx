import React from "react";
import { Link } from "react-router-dom";
import { House, ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { Home } from "@material-ui/icons";

export const Navbar = () => {
  return (
    <div className="navbar">
    <div className="link">
      <Link to="/"> LOGOUT </Link>
      </div>
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
