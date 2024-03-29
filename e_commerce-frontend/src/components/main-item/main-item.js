import React from "react";
import "./main-item.css";
import {Link} from "react-router-dom";

const SideItemsUpper=[
  {
    id:1,
    src:"https://rukminim2.flixcart.com/image/832/832/kjhgzgw0-0/jacket/n/g/t/xxl-12288660-roadster-original-imafzfnjresfydba.jpeg?q=70&crop=true",
    alt:"blue-denim",
  },
  {
    id:2,
    src:"https://rukminim2.flixcart.com/image/832/832/kxp0mfk0/shrug/9/q/n/m-1-seq-bow-shrug-moshe-original-imaga3dq3pvkyg5v.jpeg?q=70&crop=true",
    alt:"black-tshirt",
  },
];
const SideItemsLower =[
  {
    id:1,
    src:"https://rukminim2.flixcart.com/image/832/832/xif0q/sweatshirt/c/e/q/xl-single-ziper-hoodies-prachi-k-fashions-original-imagj9fhjagm3qya.jpeg?q=70&crop=true",
    alt:"hoodies",
  },
  {
    id:2,
    src:"https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/i/7/3/xl-1-no-12bq-blaq-ash-original-imagu4jfzrhrxumg.jpeg?q=70&crop=true",
    alt:"jacket",
  }
];

const RightItemOne = [
  {
    id:1,
    src:"https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/a/e/t/m-no-cr-cb-jkt-21-grey-caraba-original-imagxz8tqmdarh5f.jpeg?q=70&crop=true",
    alt:"left-jacket",
  }
];

const RightItemSecond = [
  {
    id:1,
    src:"https://rukminim2.flixcart.com/image/832/832/kvtuxe80/jacket/y/9/t/xs-no-14355272-roadster-original-imag8nyxbectb9f7.jpeg?q=70&crop=true",
    alt:"right-jacket",
  }
]

function MainItem() {
  return (
    <>
      <div className="main-item">
        <div className="side-item">
          <div className="heading-side">
            <p>Most Viewed Items</p>
          </div>
          <div className="inside-side">
            {SideItemsUpper.map((item,i) =>{
              return(
                <Link to="productdetails" style={{height:"100%",width:"100%"}}>
                <div className="side-items">
                <img className="side-image" src={item.src} alt={item.alt} />
            </div>
              </Link>
              )
            })}
          </div>
          <div className="inside-side">
          {SideItemsLower.map((item,i) =>{
              return(
                <Link to="productdetails" style={{height:"100%", width:"100%"}}>
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
           {RightItemOne.map((item,i) =>{
            return(
              <Link to="productdetails">
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
           {RightItemSecond.map((item,i) =>{
            return(
              <Link to="productdetails">
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
