import React from "react";
import "./contact.css";
import CFooter from "../components/c-footer/c-footer";

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-main">
          <div className="contact-freq"></div>
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
