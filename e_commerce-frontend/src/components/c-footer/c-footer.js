import React from "react";
import "./c-footer.css";
import Logo from "./logo.png";
import { NavLink } from "react-router-dom";

function CFooter(){
    return<>
     <div className="c-footer">
         <div className="cart-name">
           <NavLink to="/">
            <img src={Logo} className="logo-image" />
            </NavLink>
         </div>
         <div className="footer-li">
          <ul className="c-footer-li">
            <li>Cart Group</li>
            <li>Cart Foundation</li>
          </ul>
         </div>
         <div className="footer-copyright">
              @2024 www.cart.com. All rights reserved.
         </div>
     </div>
    </>
}
export default CFooter;