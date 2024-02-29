import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../carousel/carousel.css";

function MainCarousel() {
  return (
    <>
      <Carousel
        interval={3000}
        autoPlay={true}
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
                <p style={{fontSize:"40px", fontWeight:"500", color:"#4F4F4F",marginBottom:"10px"}}>T-SHIRTS & TOPS</p>
                <p style={{marginTop:"0",fontSize:"26px", fontWeight:"400", color:"#4F4F4F",display:"flex",alignItems:"start",marginLeft:"70px"}}>under ₹600/-</p>
                <div style={{borderTop:"1px solid #4F4F4F", width:"80%",height:"100px",marginLeft:"50px", marginTop:"10px"}}></div>
            </div>
          </div>
        </div>
        <div>
          <div className="carousel-div">
            <div className="image-div">
                 <img  className="carousel-image" src="https://as2.ftcdn.net/v2/jpg/02/66/27/27/1000_F_266272744_dTgjpEkQLE0Y1AcBM5z9yiOnlKPC6WZZ.jpg" alt="image"/>
            </div>
            <div className="image-desc">
                <p style={{fontSize:"40px", fontWeight:"500", color:"#4F4F4F",marginBottom:"10px",fontFamily:"orpheus italic"}}>DENIMS & JEANS</p>
                <p style={{marginTop:"0",fontSize:"26px", fontWeight:"400", color:"#4F4F4F",display:"flex",alignItems:"start",marginLeft:"70px"}}>under ₹1200/-</p>
                <div style={{borderTop:"1px solid #4F4F4F", width:"80%",height:"100px",marginLeft:"50px", marginTop:"10px"}}></div>
            </div>
          </div>
        </div>   
      </Carousel>
    </>
  );
}

export default MainCarousel;
