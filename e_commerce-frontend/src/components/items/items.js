import React from "react";
import "./items.css";

function Items() {
  return (
    <>
      <div className="items-div">
        <div className="items-heading">
             <p>Top Selling Items</p>
        </div>
        <div style={{display:"flex",gap:"75px"}}>
        <div className="items">
          <img
            className="item-image"
            src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/m/k/l/l-200011-the-souled-store-original-imaggsyfzqx9ekze.jpeg?q=70&crop=true"
            alt="t-shirt"
          />
          <p className="heading-p">The Souled Store</p>
          <p className="subheading-p">From ₹500</p>
        </div>
        <div className="items">
          <img
            className="item-image"
            src="https://rukminim2.flixcart.com/image/832/832/xif0q/xif0q/t-shirt/9/k/i/m-13322066-roadster-bg-enhanced-original-imag3hkg5cavg9mr-bb.jpeg?q=70&crop=true"
            alt="t-shirt"
          />
          <p className="heading-p">Roadster</p>
          <p className="subheading-p">From ₹232</p>
        </div>
        <div className="items">
          <img
            className="item-image"
            src="https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/x/h/p/xl-nmnt-7004-montrez-original-imag5t3nfpbqhgrx-bb.jpeg?q=70&crop=true"
            alt="t-shirt"
          />
          <p className="heading-p">MONTREZ</p>
          <p className="subheading-p">From ₹499</p>
        </div>
        <div className="items">
          <img
            className="item-image"
            src="https://rukminim2.flixcart.com/image/832/832/ky0g58w0/shopsy-jean/8/p/y/28-black-knee-cut-jeans-comfits-original-imagaccjjya9gqzn.jpeg?q=70&crop=true"
            alt="t-shirt"
          />
          <p className="heading-p">comfits</p>
          <p className="subheading-p">From ₹349</p>
        </div>
        <div className="items">
          <img
            className="item-image"
            src="https://rukminim2.flixcart.com/image/416/416/xif0q/jean/a/d/p/m-kttladiesjeans916-kotty-original-imagajtbhqsckbhr-bb.jpeg?q=70&crop=true"
            alt="t-shirt"
          />
          <p className="heading-p">KOTTY</p>
          <p className="subheading-p">From ₹459</p>
        </div>
        </div>
      </div>
    </>
  );
}

export default Items;
