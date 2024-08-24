import React, { useEffect, useState } from "react";
import "./TrackOrder.css";
import TrackingImage from "../images/tracking.png";
import CheckMark from "../images/check-mark.png";
import CFooter from "../components/c-footer/c-footer";
import axios from "axios";


function TrackOrder(){
    const [orderData , setOrderData] = useState([]);
    const trackingNumber = 122816215025810;
        // {
        //     eventDescription:'Order Confirmed',
        //     city:'Delhi'
        // },
        // {
        //     eventDescription:'Order Shipped',
        //     city:'Mumbai'
        // },
        // {
        //     eventDescription:'Order Delivered',
        //     city:'Pune'
        // }
    // const getTrackingDetails = async() =>{
    //     try{
    //         const trackingDetails = await axios.post("http://localhost:3000/user/trackorder",{trackingNumber})
    //         console.log(trackingDetails.data);
            
    //      }catch(error){
    //         console.log(error);
    //      }
    // }

    useEffect(() =>{
        async function getTrackingDetails(){
            try{
               const trackingDetails = await axios.post("http://localhost:4000/user/trackorder",{trackingNumber})
               console.log(trackingDetails.data);
               setOrderData(trackingDetails.data);
            }catch(error){
               console.log(error);
            }
        }
        getTrackingDetails()
    },[trackingNumber]);
    // const getTrackingDetails = () =>{
    //     const trackingNumber = 122816215025810;
    //     axios
    //     .post("http://localhost:4000/user/trackorder",
    //     {trackingNumber}
    //     )
    //     .then((trackingDetails) =>{
    //         setOrderData(trackingDetails.data);
    //     })
    //     .catch((error) =>{
    //         console.log(error);
    //     })
    // }
    return(
        <>
        <div className="tracking-main-div">  
        {/* <button onClick={() =>{getTrackingDetails()}}>Click me</button>   */}
        <div className="tracking-svg">
            <img src={TrackingImage} className="tracking-logo"/>
            <p className="tracking-number">Tracking Number: {trackingNumber}</p>
        </div>
        <div className="tracking-places">
            <ol className="tracking-places-list">
              {
                orderData.map((item,index) =>(
                    <li className="tracking-places-list-items" key={index}>
                        <span className="items-span">
                            <img src={CheckMark} className="tracking-checkmark" />
                        </span>
                        <span className="list-items-description">
                        <h3 className="items-details">{item.eventDescription}</h3>
                        <p className="items-shippment">Shippment scanned at {item.city}</p>
                        </span>
                    </li>
                ))
              }
            </ol>
        </div>
        </div>
        <CFooter/>
        </>
    )
}


export default TrackOrder;