import React, { useState } from "react";
import "./contact.css";
import CFooter from "../components/c-footer/c-footer";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Checkbox } from "@mui/material";
import axios from "axios";

function Contact() {

  const[userProblem, setUserProblem] = useState({
    name:"",
    contact:"",
    email:"",
    problem:""
  });

  const[defaultChecked , setDefaultChecked] = useState(false);

  const handleInput = (e) =>{

    let name = e.target.name;
    let value = e.target.value;

    setUserProblem({
      ...userProblem,
      [name] : value,
    })
  }

  const handleUserProblem = () =>{
    setUserProblem({
      name:"",
      contact:"",
      email:"",
      problem:""
    })
    axios
    .post("http://localhost:4000/user/contact",{
      userProblem:userProblem,
    })
    .then((data) =>{
      console.log(data);
    })
    .catch((error) =>{
      console.log(error);
    })
  }
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
                <Checkbox style={{marginLeft:"20rem"}} defaultChecked={false} />
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
            <input type="text" className="user-input" 
            name="name"
            value={userProblem.name}
            onChange={handleInput}
            />
            <label>Contact: </label>
            <input type="text" className="user-input" 
            name="contact"
            value={userProblem.contact}
            onChange={handleInput}
            />

            <label>Email: </label>
            <input type="text" className="user-input" 
            name="email"
            value={userProblem.email}
            onChange={handleInput}
            />

            <label>Enter your problem: </label>
            <textarea type="text" className="problem-text" 
            name="problem"
            value={userProblem.problem}
            onChange={handleInput}
            />

            <button type="submit" className="submit-button" onClick={handleUserProblem}>
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
