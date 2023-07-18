import React,{ useContext ,useState} from "react";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import { ShopContext } from "../../context/shop-context";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const [ setamount] = useState('totalAmount');

  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(totalAmount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_0YI6y1BKg3OqGN",
        key_secret:"vpFaaS1e27tYekNst9dLIe63",
        amount: totalAmount *100,
        currency:"INR",
        name:"D-06 Appliance",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"DEEPAK",
          email:"deepakprabu1234@gmail.com",
          contact:"8754988838"
        },
        notes:{
          address:"Sri krishna college of Enginnering and Technology"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p value={totalAmount}onChange={(e)=>setamount(e.target.value)}> Subtotal: ₹{totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
            <button onClick={handleSubmit}>checkout</button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};