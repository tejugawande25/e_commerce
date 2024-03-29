import React from "react";
import "./cart.css";
import CFooter from "../components/c-footer/c-footer";

function Cart() {
  return (
    <>
      <div className="cart-container">
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
              <p className="cart-product-desc-heading">Roadster</p>
              <p className="cart-product-desc-text">Modern T-shirt</p>
            </div>
            <div className="cart-product-price">
              <p className="cart-product-price-text">₹500 /-</p>
              <button className="cart-product-price-sub">-</button>
            </div>
          </div>
          <div className="cart-item-product"></div>

          <div className="cart-item-product"></div>
          <div className="cart-item-product"></div>
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
