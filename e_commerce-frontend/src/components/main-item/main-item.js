import React, { useEffect, useState } from "react";
import "./main-item.css";
import {Link} from "react-router-dom";
import axios from "axios";

function MainItem() {
  const[sideUpper, setSideUpper] = useState([]);
  const[sideLower, setSideLower] = useState([]);
  const[rightOne, setRightOne] = useState([]);
  const[rightSecond, setRightSecond] = useState([]);
  

  useEffect(() =>{
    getSideUpper();
    getSideLower();
    getRightOne();
    getRightSecond();
  },[]);


  const getSideUpper = () => {
   axios.get("http://localhost:4000/user/items/sideupper?size=2")
   .then((item) =>{
    setSideUpper(item.data);
   })
   .then((error)=>{
    console.log(error);
   })
  };

  const getSideLower = () =>{
   axios.get("http://localhost:4000/user/items/sidelower?size=2")
   .then((item)=>{
    setSideLower(item.data);
   })
   .catch((error) =>{
    console.log(error);
   })
  };
  
  const getRightOne = () =>{
    axios.get("http://localhost:4000/user/items/rightone?size=1")
    .then((item) =>{
      setRightOne(item.data);
    })
    .catch((error) =>{
      console.log(error);
    })
  };

  const getRightSecond = () =>{
    axios.get("http://localhost:4000/user/items/rightsecond?size=1")
    .then((item) =>{
      setRightSecond(item.data);
    })
    .catch((error) =>{
      console.log(error);
    })
  }
  
  return (
    <>
      <div className="main-item">
        <div className="side-item">
          <div className="heading-side">
            <p>Most Viewed Items</p>
          </div>
          <div className="inside-side">
            {sideUpper.map((item,i) =>{
              return(
                <Link to={`products/${item._id}`} style={{height:"100%",width:"100%"}}
                 key={`thbjib-${i}`}
                >
                <div className="side-items" key={item.id}>
                <img className="side-image" src={item.src} alt={item.alt} />
            </div>
              </Link>
              )
            })}
          </div>
          <div className="inside-side">
          {sideLower.map((item,i) =>{
              return(
                <Link to={`products/${item._id}`} style={{height:"100%", width:"100%"}} key={`uhtnp-${i}`}>
                <div className="side-items">
                <img className="side-image" src={item.src} alt={item.alt} />
            </div>
            </Link>
              )
            })}
          </div>
        </div>
        <div className="main-image-div">
          <div className="main-image-title">
            <p>T</p>
            <p>R</p>
            <p>E</p>
            <p>N</p>
            <p>D</p>
            <p>I</p>
            <p>N</p>
            <p>G</p>
          </div>
          <div className="main-image-heading">
          <div className="men-jacket">
           {rightOne.map((item,i) =>{
            return(
              <Link to={`products/${item._id}`} key={`yndro-${i}`}>
              <img
              className="jacket-image"
              src={item.src}
              alt={item.alt}
          
            />
            </Link>
            )
           })}
          </div>
          <div className="women-jacket">
           {rightSecond.map((item,i) =>{
            return(
              <Link to={`products/${item._id}`}  key={`tsozn-${i}`}>
             <img
             className="jacket-image"
             src={item.src}
             alt={item.alt}
           />
           </Link>
            )
           })}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainItem;
