import React from "react";
import "./c-footer.css";
import Logo from "./logo.png";

function CFooter(){
    return<>
     <div className="c-footer">
         <div className="cart-name">
            <img src={Logo} className="logo-image"/>
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