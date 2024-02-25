import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MainCarousel(){
    return <>
    <Carousel interval={3000} autoPlay={true} showThumbs={false} infiniteLoop={true} stopOnHover={false} showArrows={false} showStatus={false}>
        <div>
            <div>
            <img style={{height:"300px",width:"50%"}} src="https://rukminim2.flixcart.com/image/832/832/kpk3csw0/cargo/v/l/5/l-cs5502l-grey-cargo-sports-original-imag3rswcjycbyrt.jpeg?q=70&crop=true"/>
            </div>
        </div>
        <div>
            <div>
            <img style={{height:"300px",width:"50%"}} src="https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/m/o/t/l-st1-vebnor-original-imagmsyxhvkrfjgz.jpeg?q=70&crop=true"/>
            </div>
        </div>
    </Carousel>
    </>
};

export default MainCarousel;