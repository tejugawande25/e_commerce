import React from "react";
import "./main-item.css";

function MainItem() {
  return (
    <>
      <div className="main-item" style={{border:"1px solid red"}}>
        <div className="side-item">
          <div className="heading-side">
            <p>Most Viewed Items</p>
          </div>
          <div className="inside-side">
            <div className="side-items">
                <img className="side-image" src="https://rukminim2.flixcart.com/image/832/832/kjhgzgw0-0/jacket/n/g/t/xxl-12288660-roadster-original-imafzfnjresfydba.jpeg?q=70&crop=true" />
            </div>
            <div className="side-items">
            <img className="side-image" src="https://rukminim2.flixcart.com/image/832/832/kxp0mfk0/shrug/9/q/n/m-1-seq-bow-shrug-moshe-original-imaga3dq3pvkyg5v.jpeg?q=70&crop=true" />
            </div>
          </div>
          <div className="inside-side">
            <div className="side-items">
            <img className="side-image" src="https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/c/e/q/xl-single-ziper-hoodies-prachi-k-fashions-original-imagj9fhjagm3qya.jpeg?q=70&crop=true" />
            </div>
            <div className="side-items">
            <img className="side-image" src="https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/i/7/3/xl-1-no-12bq-blaq-ash-original-imagu4jfzrhrxumg.jpeg?q=70&crop=true" />
            </div>
          </div>
        </div>
        <div className="main-image-div">
          <div className="men-jacket">
            <img
              className="jacket-image"
              src="https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/a/e/t/m-no-cr-cb-jkt-21-grey-caraba-original-imagxz8tqmdarh5f.jpeg?q=70&crop=true"
              alt="jacket"
            />
          </div>
          <div className="women-jacket">
            <img
              className="jacket-image"
              src="https://rukminim2.flixcart.com/image/832/832/kvtuxe80/jacket/y/9/t/xs-no-14355272-roadster-original-imag8nyxbectb9f7.jpeg?q=70&crop=true"
              alt="jacket"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainItem;
