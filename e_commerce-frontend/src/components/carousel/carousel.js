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
            <div className="image-div">
                 <img  className="carousel-image" src="https://img.freepik.com/free-photo/stylish-tender-young-woman-sunglasses-looking-dreamy_176420-21453.jpg?t=st=1709150431~exp=1709154031~hmac=a3e063db3cd3da636acbaa9f242827ea4d9b2a2851918062285a873d5901b036&w=996" alt="image"/>
            </div>
            <div className="image-desc">
                <p className="first-heading">T-SHIRTS & TOPS</p>
                <p className="subheading">under ₹600/-</p>
                <div className="last-border"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="carousel-div">
            <div className="image-div">
                 <img  className="carousel-image" src="https://as2.ftcdn.net/v2/jpg/02/66/27/27/1000_F_266272744_dTgjpEkQLE0Y1AcBM5z9yiOnlKPC6WZZ.jpg" alt="image"/>
            </div>
            <div className="image-desc">
                <p className="second-heading">DENIMS & JEANS</p>
                <p className="subheading">under ₹1200/-</p>
                <div className="last-border"></div>
            </div>
          </div>
        </div>   
      </Carousel>
    </>
  );
}

export default MainCarousel;
