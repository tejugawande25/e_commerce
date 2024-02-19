import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Product from "./components/product";

function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="product" element={<Product />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;