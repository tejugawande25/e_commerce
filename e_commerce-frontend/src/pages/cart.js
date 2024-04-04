import React, { useEffect, useState } from "react";
import "./cart.css";
import CFooter from "../components/c-footer/c-footer";
import axios from "axios";



function Cart() {
  const[cart,setCart] = useState([]);

  useEffect(() =>{
      cartProduct();
  },[])

  const cartProduct = () =>{
    axios.get("http://localhost:4000/user/cart/items")
    .then((item) =>{
      setCart(item.data);
      console.log(item.data);
    })
    .catch((error) =>{
      console.log(error);
    })
  }

  console.log(cart);
  return (
    <>
      <div className="cart-container">
        <div className="cart-item">
          {cart.map((item, i) =>{

         return <div className="cart-item-product" key={`fjnvj-${i}`}>
            <div className="cart-product-image">
              <img
                src={item.src}
                alt={item.alt}
                className="cart-p-image"
              />
            </div>
            <div className="cart-product-desc">
              <p className="cart-product-desc-heading">{item.heading}</p>
              <p className="cart-product-desc-text">{item.alt}</p>
            </div>
            <div className="cart-product-price">
              <p className="cart-product-price-text">{item.subheading} /-</p>
              <button className="cart-product-price-sub">-</button>
            </div>
          </div>
          })}
        </div>
        <div className="cart-payment">
          <div className="cart-payment-address">
            <p className="cart-payment-address-heading">DELIVERY ADDRESS</p>
            <textarea
              type="text"
              className="cart-payment-address-text"
            ></textarea>
          </div>
          <div className="cart-payment-section">
            <div className="cart-payment-section-price">
              <p className="cart-payment-section-price-text">Price (1 item)</p>
              <p className="cart-product-price-text">₹500 /-</p>
            </div>
            <div className="cart-payment-section-delivery">
              <p className="cart-payment-section-price-text">
                Delivery Charges
              </p>
              <p className="cart-product-price-text" style={{color:"green"}}>FREE</p>
            </div>
            <div className="cart-payment-section-price">
              <p className="cart-payment-section-price-text">Total Payable</p>
              <p className="cart-product-price-text">₹500 /-</p>
            </div>
            <div className="place-order-div">
              <button className="place-order">PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>
      <CFooter />
    </>
  );
}

export default Cart;
