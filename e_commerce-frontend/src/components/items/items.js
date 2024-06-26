import React from "react";
import "./items.css";
import { Link } from "react-router-dom";
import{useState, useEffect} from "react";
import axios from "axios";


function Items() {
  const[items, setItems] = useState([]);
  
  useEffect(() =>{
    getItems();
  },[]);


  const getItems =() =>{
    axios.get("http://localhost:4000/user/items?size=5")
    .then((item) => {
      setItems(item.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  

  return (
    <>
      <div className="items-div">
        <div className="items-heading">
          <p>Top Selling Items</p>
        </div>
        <div className="items-main">
          {items.map((item, i) => {
            return (
              <Link
                to={`products/${item._id}`}
                style={{ textDecoration: "none", color: "black",width:"15%",height:"80%"}}
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
