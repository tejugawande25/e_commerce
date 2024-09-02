import React, { useEffect, useRef, useState } from "react";
import "./cart.css";
import CFooter from "../components/c-footer/c-footer";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Cart() {
  const [cart, setCart] = useState([]);
  const [sum, setSum] = useState([]);
  const [orderCart, setOrderCart] = useState([]);
  const orderSection = useRef();
  const [responseId, setResponseId] = useState("");
  const [responseState, setResponseState] = useState([]);
  const [payObject, setPayObject] = useState(true);



  useEffect(() => {
    cartProduct();
    increaseQuantity();
    getTotalSum();
    getOrderedCart();
  }, []);


  const loadScript = (src) =>{
    return new Promise((resolve) =>{
      const script = document.createElement("script");

      script.src = src;

      script.onload = function(){
        resolve(true);
      }
      script.onerror = function(){
        resolve(false);
      }

      document.body.appendChild(script);
    })
  }

  const createRazorpayOrder = (amount) =>{
    let data = JSON.stringify({
      amount : amount * 100,
      currency: 'INR',
    })

    let config ={
      method:"post",
      maxBodyLength:Infinity,
      url:"http://localhost:4000/user/orders",
      headers:{
        'Content-Type': 'application/json'
      },
      data:data
    }
    axios.request(config)
    .then((response) =>{
      // console.log(JSON.stringify(response.data))
      handleRazorpayScreen(response.data.amount)
    })
    .catch((error) =>{
      console.log("Error at", error);
    })
  }
  
  const handleRazorpayScreen= async(amount) =>{
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

    if(!res){
      alert("some error at razorpay screen loading")
      return;
    }
    const options={
      key:'rzp_test_uRlGboxzvG1DhF',
      amount:amount,
      currency:'INR',
      name:'tejas',
      description:'payment to tejas',
  
      handler: function(response){
        setResponseId(response.razorpay_payment_id)
      },
      prefill:{
        name:"tejas",
        email:"tejugawande@gmail.com"
      },
      theme:{
        color:"#F4C430"
      }
    }

    const paymentObject =  new window.Razorpay(options)
    paymentScreen(paymentObject);
    paymentObject.open();
    // console.log(payObject);
    // if(paymentObject.close()){
    //   Swal.fire({
    //     position: "top-end",
    //     icon: "success",
    //     title: "Your order placed successfully!",
    //     showConfirmButton: false,
    //     timer: 3000,
    //   });
    // }

   
  }
  const paymentScreen = (paymentObject) =>{
   setPayObject(paymentObject.open().checkoutFrame.isOpen);
   console.log(paymentObject.open().checkoutFrame.isOpen);
  //  if(payObject == false){
  //   console.log("tejas");
  //   Swal.fire({
  //         position: "top-end",
  //         icon: "success",
  //         title: "Your order placed successfully!",
  //         showConfirmButton: false,
  //         timer: 3000,
  //       });
   }
  
  


  const fetchPayment = (e) =>{
  //  e.preventDefault();
   const paymentId = e.target.paymentId.value;
   axios.post(`http://localhost:4000/user/payment`,{
    paymentId:responseId,
   })
   .then((response) =>{
    setResponseState(response.data);
   })
   .catch((error) =>{
      console.log("error occurs", error);
   })
  }




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

  const increaseQuantity = (id, pquantity) => {
    console.log(id);
    console.log(pquantity);
    axios
      .post(`http://localhost:4000/user/cart/items/increaseQuantity/${id}`, {
        quantity: pquantity + 1,
      })
      .then((item) => {
        console.log("successfully increases !");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const decreaseQuantity = (id, pquantity) => {
    console.log(id);
    axios
      .post(`http://localhost:4000/user/cart/items/decreaseQuantity/${id}`, {
        quantity: pquantity - 1,
      })
      .then((item) => {
        console.log("successfully decreases !");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTotalSum = () => {
    axios
      .get("http://localhost:4000/user/cart/items/sum")
      .then((item) => {
        console.log(item.data.totalAmount);
        setSum(item.data.totalAmount);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const getOrderedCart = () =>{
    axios
    .get("http://localhost:4000/user/orderedcart/items")
    .then((item) =>{
      setOrderCart(item.data);
    })
    .catch((error) =>{
      console.log(error);
    })
  }

  const scrollHandler = (elemRef) => {
    window.scrollTo({ top: elemRef.current.offsetTop, behavior: "smooth" });
  };

  const orderPlaced = () => {
    getOrderedCart();
    createRazorpayOrder(100);
    setTimeout(() => {
      axios
      .delete("http://localhost:4000/user/cart/deleteall")
      .then((items) => {
        console.log(items);
      })
      .catch((error) => {
        console.log(error);
      });

      scrollHandler(orderSection);
    }, 4000);
  };

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
                  <div className="cart-product-quantity">{item.quantity}</div>
                  <div
                    className="cart-product-remove"
                    onClick={() => deleteItem(item._id)}
                  >
                    REMOVE
                  </div>
                </div>
                <div className="cart-product-price">
                  <p className="cart-product-price-text">{item.price}/-</p>
                  <button
                    className="cart-product-price-add"
                    onClick={() => increaseQuantity(item._id, item.quantity)}
                  >
                    +
                  </button>
                  <button
                    className="cart-product-price-sub"
                    onClick={() => decreaseQuantity(item._id, item.quantity)}
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
              <p className="cart-product-price-text">₹ {sum}/-</p>
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
              <p className="cart-product-price-text">₹ {sum}/-</p>
            </div>
            <div className="place-order-div">
              <button
                className="place-order"
                onClick={() => {
                  orderPlaced();
                }}
              >
                PLACE ORDER
              </button>
              <button onClick={() => fetchPayment(responseId)}>Fetch Payment</button>
            </div>
            
          </div>
          <div style={{height:"100px",border:"1px solid black"}}>
            {<h5>{responseId}</h5>}
            {<p>{responseState.data}</p>}
          </div>
        </div>
      </div>
      <div className="order-tracking">
        <div className="order-tracking-heading">
          <p className="order-tracking-heading-p" ref={orderSection}>
            Orders
          </p>
        </div>
        <div className="order-tracking-items-div">
          {orderCart.map((item, i) =>{
            return(
          <div className="order-tracking-items">
            <div className="cart-product-image">
              <img src={item.src} alt={item.alt}
                className="cart-p-image"
              />
            </div>
            <div className="cart-product-desc">
              <p className="cart-product-desc-heading">{item.heading}</p>
              <p className="cart-product-desc-text">{item.alt}</p>
            </div>
            <div className="cart-product-price">
              <p className="cart-product-price-text">{item.price}/-</p>
              <p className="delivery-status">In Transit</p>
              <Link to={`/trackorder`} className="track-order-link">
                <button className="track-order-button">Track Order</button>
              </Link>
            </div>
          </div>
           )
          })}
        </div>
      </div>
      <CFooter />
    </>
  );
}

export default Cart;
