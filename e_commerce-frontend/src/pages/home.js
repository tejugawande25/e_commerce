import React from "react";
import MainCarousel from "../components/carousel/carousel";
import Items from "../components/items/items";
import MainItem from "../components/main-item/main-item";
import Footer from "../components/footer/footer";



function Home() {
  
  return <>
    <MainCarousel />
    <Items />
    <MainItem />
    <Footer />
  </>;
}

export default Home;
