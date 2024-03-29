import React from "react";
import "./cart.css";
import CFooter from "../components/c-footer/c-footer";

function Cart() {
  return (
    <>
      <div className="cart-container" >
        <div className="cart-item">
          <div className="cart-item-product">
            <div className="cart-product-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDaj-3v3uVOaSF6qTEErBsx6_JZAvHyjgkqA&usqp=CAU"
                alt="cart-image"
                className="cart-p-image"
              />
            </div>
            <div className="cart-product-desc">

            </div>
            <div className="cart-product-price">
                
            </div>
          </div>
          <div className="cart-item-product"></div>

          <div className="cart-item-product"></div>
          <div className="cart-item-product"></div>
        </div>
        <div className="cart-payment"></div>
      </div>
      <CFooter />
    </>
  );
}

export default Cart;
