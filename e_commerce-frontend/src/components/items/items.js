import React from "react";
import "./items.css";
import { Link } from "react-router-dom";
import{useState, useEffect} from "react";
import axios from "axios";

// const ItemsProduct = [
//   {
//     id: 1,
//     src: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/m/k/l/l-200011-the-souled-store-original-imaggsyfzqx9ekze.jpeg?q=70&crop=true",
//     alt: "t-shirt",
//     heading: "The Souled Store",
//     Subheading: "From ₹500",
//   },
//   {
//     id: 2,
//     src: "https://rukminim2.flixcart.com/image/832/832/xif0q/xif0q/t-shirt/9/k/i/m-13322066-roadster-bg-enhanced-original-imag3hkg5cavg9mr-bb.jpeg?q=70&crop=true",
//     alt: "blue-tshirt",
//     heading: "Roadster",
//     Subheading: "From ₹232",
//   },
//   {
//     id: 3,
//     src: "https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/x/h/p/xl-nmnt-7004-montrez-original-imag5t3nfpbqhgrx-bb.jpeg?q=70&crop=true",
//     alt: "denim-tshirt",
//     heading: "MONTREZ",
//     Subheading: "From ₹499",
//   },
//   {
//     id: 4,
//     src: "https://rukminim2.flixcart.com/image/832/832/ky0g58w0/shopsy-jean/8/p/y/28-black-knee-cut-jeans-comfits-original-imagaccjjya9gqzn.jpeg?q=70&crop=true",
//     alt: "men-jeans",
//     heading: "comfits",
//     Subheading: "From ₹349",
//   },
//   {
//     id: 5,
//     src: "https://rukminim2.flixcart.com/image/416/416/xif0q/jean/a/d/p/m-kttladiesjeans916-kotty-original-imagajtbhqsckbhr-bb.jpeg?q=70&crop=true",
//     alt: "kotty-jeans",
//     heading: "KOTTY",
//     Subheading: "From ₹459",
//   },
// ];



function Items() {
  const[items, setItems] = useState([]);
  
  useEffect(() =>{
    getItems();
  },[]);


  const getItems =() =>{
    axios.get("http://localhost:4000/user/items?size=5")
    .then((item) => {
      // console.log(item);
      setItems(item.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  // console.log(items);

  return (
    <>
      <div className="items-div">
        <div className="items-heading">
          <p>Top Selling Items</p>
        </div>
        <div style={{ display: "flex", gap: "75px" }}>
          {items.map((item, i) => {
            return (
              <Link
                to={`products/${item._id}`}
                style={{ textDecoration: "none", color: "black" }}
                key={`yuggi-${i}`}
              >
                <div className="items">
                  <img className="item-image" src={item.src} alt={item.alt} />
                  <p className="heading-p">{item.heading}</p>
                  <p className="subheading-p">{item.subheading}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Items;
