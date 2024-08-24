import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Product from "./pages/product";
import Header from "./components/header/header";
import Cart from "./pages/cart.js";
import ProductDetails from "./pages/productDetails";
import TrackOrder from "./pages/TrackOrder";

function App(){
  return(
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="product" element={<Product />} />
      <Route path="cart" element={<Cart />} />
      <Route path="trackorder" element={<TrackOrder/>} />
      <Route path="products/:id" element={<ProductDetails />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;