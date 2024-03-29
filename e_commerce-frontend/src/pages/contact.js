import React from "react";
import "./contact.css";
import CFooter from "../components/c-footer/c-footer";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Checkbox } from "@mui/material";

function Contact() {
  return (
    <>
      <div className="contact">
        <div
          style={{
            width: "40%",
            height: "3rem",
            marginLeft: "13.1rem",
            fontSize: "22px",
            display: "flex",
            alignItems: "center",
            fontWeight: "500",
            color: "gray",
          }}
        >
          Contact Us
        </div>
        <div className="contact-main">
          <div className="contact-freq">
            <div className="contact-freq-heading">
              What issues are you facing?
            </div>
            <div className="contact-freq-questions">
              <div className="contact-freq-subquestion">
                <div style={{display:"flex",flexDirection:"column"}}>
                <p className="upper-p">I want to manage my order</p>
                <p className="lower-p">View,cancel or return an order</p>
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                <Checkbox style={{marginLeft:"20rem"}}/>
                </div>
              </div>
              <div className="contact-freq-subquestion">
              <div style={{display:"flex",flexDirection:"column"}}>
                <p className="upper-p">I want help with returns & refunds</p>
                <p className="lower-p">Manage and track returns</p>
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                <Checkbox style={{marginLeft:"16.8rem"}}/>
                </div>
              </div>
              <div className="contact-freq-subquestion">
              <div style={{display:"flex",flexDirection:"column"}}>
                <p className="upper-p">I want help with other issues</p>
                <p className="lower-p">Offers,payment,Cart Plus & all other issues</p>
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                <Checkbox style={{marginLeft:"16.7rem"}}/>
                </div>
              </div>
              <div className="contact-freq-subquestion">
              <div style={{display:"flex",flexDirection:"column"}}>
                <p className="upper-p">I want to contact with seller</p>
                </div>
                <div style={{display:"flex",alignItems:"center"}}>
                <Checkbox style={{marginLeft:"19.7rem"}}/>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
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
