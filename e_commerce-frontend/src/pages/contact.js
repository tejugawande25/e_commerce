import React from "react";
import "./contact.css";
import CFooter from "../components/c-footer/c-footer";

function Contact() {
  return (
    <>
      <div className="contact">
        <div style={{width:"40%",height:"3rem",marginLeft:"13.1rem",fontSize:"22px",display:"flex",alignItems:"center",fontWeight:"500",color:"gray"}}>Contact Us</div>
        <div className="contact-main">
          <div className="contact-freq">
          <div className="contact-freq-heading">
             What issues are you facing?
          </div>
          <div className="contact-freq-questions">
          <div className="contact-freq-subquestion">
             
          </div>
          <div className="contact-freq-subquestion">
            
          </div>
          <div className="contact-freq-subquestion">
            
          </div>
          <div className="contact-freq-subquestion">
            
          </div>
          </div>
          </div>
          <div className="contact-form" >
            <label>Name: </label>
            <input type="text" className="user-input" />
            <label>Contact: </label>
            <input type="text" className="user-input" />

            <label>Email: </label>
            <input type="text" className="user-input" />

            <label>Enter your problem: </label>
            <textarea type="text" className="problem-text" />

            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </div>
        <CFooter />
      </div>
    </>
  );
}

export default Contact;
