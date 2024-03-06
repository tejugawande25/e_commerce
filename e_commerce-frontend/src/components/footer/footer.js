import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-item">
          <h1 className="footer-heading">Cart</h1>
          <div style={{ borderBottom: "1px solid white" }}>
            <input
              className="email-input"
              type="text"
              placeholder="Enter Your Email*"
            />
          </div>
          <button className="subscribe-button">Subscribe</button>
          <p className="p-text">
            Get monthly updates and free resourses on email.
          </p>
        </div>
        <div className="footer-item">
          <p className="sub-heading">MOBIRISE</p>
          <p className="p-text">phone: +1 (0) 000 0000 001</p>
          <p className="p-text">Email:youremail@gmail.com</p>
          <p className="p-text">Address:1234 Street Name City,AA 9999</p>
        </div>
        <div className="footer-item">
          <p className="sub-heading">ABOUT</p>
          <p className="p-text">About Us</p>
          <p className="p-text">Contact Us</p>
          <p className="p-text">Get In Touch</p>
        </div>
        <div className="footer-item">
          <p className="sub-heading">LINKS</p>
          <p className="p-text">Instagram: _tejasgawande_</p>
          <p className="p-text">Whatsapp: 8482978893</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
