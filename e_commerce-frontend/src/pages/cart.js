import React, { useEffect, useState } from "react";
import "./cart.css";
import CFooter from "../components/c-footer/c-footer";
import axios from "axios";

function Cart() {
  const [cart, setCart] = useState([]);
  const [sum, setSum] = useState([]);
  const[quantity, setQuantity] = useState(1);

  useEffect(() => {
    cartProduct();
    getTotalSum();
  }, []);

  const cartProduct = () => {
    axios
      .get("http://localhost:4000/user/cart/items")
      .then((item) => {
        setCart(item.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteItem = (id) => {
    axios
      .delete(`http://localhost:4000/user/cart/items/${id}`)
      .then((item) => {
        console.log("successfully deleted !");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  // const increaseQuantity = (id) =>{
  //   setQuantity(quantity + 1);
  //   axios
  //     .post(`http://localhost:4000/user/cart/items/${id}`,{
  //       quantity:quantity
  //     })
  //   .then((item) =>{
  //     console.log("quantity updated successfully !");
  //   })
  //   .catch((error) =>{
  //     console.log(error);
  //   });
  // };
 

  const getTotalSum = () => {
    axios
      .get("http://localhost:4000/user/cart/items/sum")
      .then((item) => {
        setSum(item.data);
        console.log(item.data.totalAmount[0].totalAmount);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  console.log(sum);

  return (
    <>
      <div className="cart-container">
        <div className="cart-item">
          {cart.map((item, i) => {
            return (
              <div className="cart-item-product" key={`fjnvj-${i}`}>
                <div className="cart-product-image">
                  <img src={item.src} alt={item.alt} className="cart-p-image" />
                </div>
                <div className="cart-product-desc">
                  <p className="cart-product-desc-heading">{item.heading}</p>
                  <p className="cart-product-desc-text">{item.alt}</p>
                </div>
                <div className="cart-product-price">
                  <p className="cart-product-price-text">{item.price} /-</p>
                  <button className="cart-product-price-add"
                    // onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                  <button
                    className="cart-product-price-sub"
                    onClick={() => deleteItem(item.id)}
                  >
                    -
                  </button>
                </div>
              </div>
            );
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
              <p className="cart-product-price-text" style={{ color: "green" }}>
                FREE
              </p>
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
