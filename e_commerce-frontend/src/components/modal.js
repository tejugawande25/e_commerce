import React, { Children } from 'react';
import {createPortal} from "react-dom";


function Modal({children}) {
  return createPortal(<div>{children}</div>,document.getElementById("modalRoot"))
}

