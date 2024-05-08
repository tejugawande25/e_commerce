import React, { useEffect, useState } from "react";
import "./productDetails.css";
import CFooter from "../components/c-footer/c-footer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast,{Toaster} from "react-hot-toast";


function ProductDetails(){
   const[oneProduct, setOneProduct] = useState([]);
   const[rating, setRating] = useState(0);
   const[isClicked, setIsClicked] = useState(false);
   const params = useParams();
   console.log(params.id);

   useEffect(() =>{
   getProduct();
   },[]);

   const getProduct = () =>{
    axios.get(`http://localhost:4000/user/products/${params.id}`)
    .then((product) =>{
        setOneProduct(product.data);
    })
    .catch((error) =>{
        console.log(error);
    })
}
const mydata = Object.keys(oneProduct).map(key =>{
    return oneProduct[key];
})
    
   const addToCart = () =>{
    setIsClicked(true);
    axios.post(`http://localhost:4000/user/cart/add/${params.id}`)
    .then((product) =>{
       console.log(product);
       toast.success("Successfully added to cart!");
    })
    .catch((error) =>{
        console.log(error);
    })
   }

   console.log(rating);
    return(
        <>
         <Toaster position="top-right" reverseOrder={false} 
         toastOptions={{
            success:{
                duration:2000,
            }
         }}
         />
        <div className="product-details-container" > 
            {mydata.map((item,i) =>{
                return(
            <><div className="product-image" key={`rhjii-${i}`}>
                        <div className="product-image-upper">
                            <img className="product-item-image" src={item.src} alt={item.alt} />
                        </div>
                        <div className="product-image-lower">
                            <Link style={{ width: "45%", textDecoration: "none" }}>
                                <button className="product-add-cart" onClick={addToCart} disabled={isClicked} >
                                    <ShoppingCartIcon style={{ height: "1.4rem" }}/> ADD TO CART</button>
                            </Link>
                            <Link to={`/cart`} style={{ width: "45%", textDecoration: "none" }}>
                                <button className="product-add-cart" style={{ background: "#ff8f00" }}> <FlashOnIcon />BUY NOW</button>
                            </Link>
                        </div>
                    </div><div className="product-description">
                            <div className="product-description-text">
                                <p className="product-desc-heading">{item.heading}</p>
                                <p className="product-desc">{item.alt}</p>
                                <p className="special">Special price</p>
                                <p className="product-price">{item.subheading}</p>
                            </div>
                            <div className="product-offers">
                                <p className="available-offers">Available Offers</p>
                                <ul className="available-offers-ol">
                                    <li>Eligible for Cart Pay Later</li>
                                    <li>Bank Offer 5% Cashback on Flipkart Axis Bank Card</li>

                                    <li>Bank Offer Extra ₹500 off on HSBC Bank Credit Card EMI Transactions on products priced ₹29,990 and above T&C</li>
                                    <li>Bank Offer Extra ₹1,500 off on Citi-branded Credit Card EMI Transactions on products priced ₹49,990 and above T&C</li>
                                    <li>Bank Offer Extra ₹1,000 off on Citi-branded Credit Card EMI Transactions on products priced ₹29,990 and above T&C</li>
                                </ul>
                            </div>
                            <div className="cash-delivery">
                                Cash on Delivery Available
                            </div>
                            <div className="product-rating">
                                <p className="product-rating-review">Rating & Reviews</p>
                                <p className="product-question">What your customers felt:</p>
                                <div className="rating-emoji">
                                    <button className="emoji" style={{ background: "#ff4949" }} onClick={() =>{setRating(rating-1)}}>Bad</button>
                                    <button className="emoji" style={{ background: "#ff8f00",}} onClick={() =>{setRating(rating+0)}}>Average</button>
                                    <button className="emoji" style={{ background: "#93e9be" }} onClick={() =>{setRating(rating+1)}}>Good</button>
                                    <button className="emoji" style={{ background: "green" }} onClick={() =>{setRating(rating+2)}}>Excellent</button>
                                </div>
                            </div>
                        </div></>
          );
        })}
        </div>
        <CFooter />
        </>
       
    );
};

export default ProductDetails;