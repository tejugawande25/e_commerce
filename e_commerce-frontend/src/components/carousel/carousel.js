import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../carousel/carousel.css";

function MainCarousel() {
  return (
    <>
      <Carousel
        interval={3000}
        autoPlay={false}
        showThumbs={false}
        infiniteLoop={true}
        stopOnHover={false}
        showArrows={false}
        showStatus={false}
      >
        <div>
          <div className="carousel-div">
            <div className="carousel-inner">
              <img
                className="carousel-img"
                src="https://rukminim2.flixcart.com/image/416/416/xif0q/t-shirt/q/t/3/xxl-bul-23bds-2icc-bullmer-original-imagrhfnffpewys4.jpeg?q=70&crop=true"
              />
              <div className="carousel-desc">
                <h1 style={{ color: "#50404d" }}>Bullmer</h1>
                <h2 style={{ color: "#50404d", fontFamily: "arial" }}>
                  Just ₹299/-
                </h2>
                <p style={{ fontFamily: "arial", color: "#50404d" }}>
                  Men Printed, Typography Round Neck Cotton Blend White T-Shirt
                </p>
                <p style={{ fontFamily: "arial", color: "#50404d" }}>
                  Combo Offer Buy 2 or more items save 10% See all products
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="carousel-div">
            <div className="carousel-inner">
              <img
                className="carousel-img"
                src="https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/t/o/t/m-no-rm001-hibok-original-imagm8dgqcdsxn4c.jpeg?q=70&crop=true"
              />
              <div className="carousel-desc">
                <h1 style={{ color: "#50404d" }}>Bullmer</h1>
                <h2 style={{ color: "#50404d", fontFamily: "arial" }}>
                  Just ₹299/-
                </h2>
                <p style={{ fontFamily: "arial", color: "#50404d" }}>
                  Men Printed, Typography Round Neck Cotton Blend White T-Shirt
                </p>
                <p style={{ fontFamily: "arial", color: "#50404d" }}>
                  Combo Offer Buy 2 or more items save 10% See all products
                </p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default MainCarousel;
