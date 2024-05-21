import React, { useState } from "react";
import "./contact.css";
import CFooter from "../components/c-footer/c-footer";
// import { Checkbox } from "@mui/material";
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
        <div className="contact-heading" >
          Contact Us
        </div>
        <div className="contact-main">
          <div className="contact-freq">
            <div className="contact-freq-heading">
              What issues are you facing?
            </div>
            <div className="contact-freq-questions">
              <div className="contact-freq-subquestion">
                <div className="contact-freq-innerquestions">
                <p className="upper-p">I want to manage my order</p>
                <p className="lower-p">View,cancel or return an order</p>
                </div>
                <div className ="contact-checkbox-div">
                <input type="checkbox" className="checkbox-first" defaultChecked={false} />
                </div>
              </div>
              <div className="contact-freq-subquestion">
              <div className="contact-freq-innerquestions">
                <p className="upper-p">I want help with returns & refunds</p>
                <p className="lower-p">Manage and track returns</p>
                </div>
                <div className ="contact-checkbox-div">
                <input type="checkbox" className="checkbox-second"/>
                </div>
              </div>
              <div className="contact-freq-subquestion">
              <div className="contact-freq-innerquestions">
                <p className="upper-p">I want help with other issues</p>
                <p className="lower-p">Offers,payment,Cart Plus & all other issues</p>
                </div>
                <div className ="contact-checkbox-div">
                <input type="checkbox"  className="checkbox-third"/>
                </div>
              </div>
              <div className="contact-freq-subquestion">
              <div className="contact-freq-innerquestions">
                <p className="upper-p">I want to contact with seller</p>
                </div>
                <div className ="contact-checkbox-div">
                <input type="checkbox" className="checkbox-fourth"/>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <label className="label">Name: </label>
            <input type="text" className="user-input" 
            name="name"
            value={userProblem.name}
            onChange={handleInput}
            />
            <label className="label">Contact: </label>
            <input type="text" className="user-input" 
            name="contact"
            value={userProblem.contact}
            onChange={handleInput}
            />

            <label className="label">Email: </label>
            <input type="text" className="user-input" 
            name="email"
            value={userProblem.email}
            onChange={handleInput}
            />

            <label className="label">Enter your problem: </label>
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
