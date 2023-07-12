import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div>
  <div className="sidebar"><center>
  <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669218444/banner_n6mzgs.png" style={{width: '100px'}} />
  <h1 className="Title">Catagories</h1>
  {/* <a class="active" href="#home">Home</a> */}
  <a href="fan">Fan</a>
  <a href="light">Light</a>
  <a href="fridge">Refridgement</a>
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
