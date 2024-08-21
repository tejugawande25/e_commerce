import React from "react";
import "./about.css";
import peopleImage from "../images/people.jpg";
import modelImage from "../images/model.jpg";
import CFooter from "../components/c-footer/c-footer";



function About(){
    return<>
    <div className="about" style={{border:"1px solid red"}}>
        <div className="about-header">
            <div className="about-header-image">
               <img src={peopleImage} className="about-header-img" />
            </div>
            <div className="about-header-description">
              <p className="about-header-desc-heading">The Cart Group</p>
              <p className="about-p">The Cart Group is one India's Growing digital commerce entity.<br></br>Where you can find new fashions & always ready to give you service.</p>
              <button className="about-button">ABOUT US</button>
            </div>
        </div>
        <div className="about-middle"> 
            <div className="middle-desc">
                <div className="middle-desc-inner">
                  <p className="middle-desc-heading">TECHNOLOGY AT CART</p>
                  <p className="middle-desc-subheading">FASHION INNOVATION</p>
                  <p className="middle-desc-details">Cart technology drives path-breaking, customer-focused innovation <br></br> that makes high quality products accessible to Indian shoppers,<br></br> besides making the online shopping experience convenient, intuitive <br></br>and seamless.</p>
                  <button className="learn-more">READ MORE</button>
                  </div>
            </div>
            <div className="middle-image">
               <img src={modelImage} className="model-image" />
            </div>
        </div>
         <CFooter />
    </div>
    </>
}

export default About;