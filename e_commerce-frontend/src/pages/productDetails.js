import React from "react";
import "./productDetails.css";
import CFooter from "../components/c-footer/c-footer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from '@mui/icons-material/FlashOn';

function ProductDetails(){
    return(
        
        <>
        <div className="product-details-container">
            <div className="product-image">
                <div className="product-image-upper">
                     <img className="product-item-image" src="https://rukminim2.flixcart.com/image/612/612/kjhgzgw0-0/jacket/t/z/q/m-12279410-roadster-original-imafzfnhskjpkwww.jpeg?q=70" alt="jacket-women-image" />
                </div>
                <div className="product-image-lower">
                     <button className="product-add-cart">
                        <ShoppingCartIcon style={{height:"1.4rem"}}/> ADD TO CART</button>
                     <button className="product-add-cart" style={{background:"#ff8f00"}}> <FlashOnIcon />BUY NOW</button>
                </div>
            </div>
            <div className="product-description">

            </div>
           
        </div>
        <CFooter />
        </>
       
    );
};

export default ProductDetails;