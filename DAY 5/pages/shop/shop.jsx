import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div>
  <div className="sidebar"><center>
  <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669218444/banner_n6mzgs.png" style={{width: '100px'}} />
  <h1>Catagories</h1>
  {/* <a class="active" href="#home">Home</a> */}
  <a href="#BURGERS">Home Appliance</a>
  <a href="#PIZZA">Kitchen Appliance</a>
  <a href="#BEVRAGES">Electrical Appliance</a>
</center></div>

    
<div className="contents">
    <div className="shop">
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};
