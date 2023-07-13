import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
  <div>
  <div className="sidebar"><center>
  <img src="https://res.cloudinary.com/dggrpzdnl/image/upload/v1669218444/banner_n6mzgs.png" alt="img" style={{width: '100px'}} />
  <h1 className="Title">Catagories</h1>
  <a href="fan">Fan</a>
  <a href="light">Light</a>
  <a href="fridge">Refridgerator</a>
  <a href="TV">Television</a>
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
