import React from "react";
import styled from "@emotion/styled";
import { Box} from "@mui/material";
import MainCarousel from "../components/carousel";



function Home() {

  const FeatureDiv = styled(Box)`
  height:400px;
  display:flex;
  flex-direction:column;
  background:#F0F8FF;
  margin-top:200px;
  `
  const ContainedDiv = styled(Box)`
  height:280px;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  gap:30px;
  `;
  const Item = styled(Box)`
  height:80%;
  width:13%;
  display:flex;
  background:#fffafa;
  align-items:center;
  justify-content:center;
  box-shadow:rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  `;

  return <>
    <MainCarousel />
    <FeatureDiv>
      <p style={{fontFamily:"arial",fontSize:"25px", fontWeight:"600", color:"#2C3539",marginLeft:"82px"}}>Best Services</p>
      <ContainedDiv>
         <Item><img src="https://rukminim2.flixcart.com/image/832/832/kpk3csw0/cargo/v/l/5/l-cs5502l-grey-cargo-sports-original-imag3rswcjycbyrt.jpeg?q=70&crop=true" style={{height:"90%",width:"87%",borderRadius:"8px"}} ></img></Item>
         <Item><img src="https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/m/o/t/l-st1-vebnor-original-imagmsyxhvkrfjgz.jpeg?q=70&crop=true"style={{height:"90%",width:"87%",borderRadius:"8px"}}/></Item>
        <Item><img src="https://rukminim2.flixcart.com/image/832/832/l2tcfbk0/t-shirt/0/b/z/s-jb-tsh-babe-llc-juneberry-original-image2r52ggvrkd4.jpeg?q=70&crop=true" style={{height:'90%',width:"87%",borderRadius:"8px"}}></img></Item>
        <Item><img src="https://rukminim2.flixcart.com/image/832/832/xif0q/jean/o/k/i/38-1729343-wrogn-original-imagkcfw9u3e29h3.jpeg?q=70&crop=true" style={{height:"90%",width:"87%",borderRadius:"8px"}} /></Item>
        <Item><img src="https://rukminim2.flixcart.com/image/832/832/k0wqwsw0/jacket/z/4/f/xl-10187141-wrogn-original-imafkh5czf5fuz7y.jpeg?q=70&crop=true" style={{height:"90%",width:"87%",borderRadius:"8px"}} /></Item>
        <Item ><img src="https://rukminim2.flixcart.com/image/832/832/xif0q/jacket/x/h/p/xl-nmnt-7004-montrez-original-imag5t3nfpbqhgrx-bb.jpeg?q=70&crop=true" style={{height:"90%",width:"87%",borderRadius:"8px"}} /></Item>
      </ContainedDiv>
    </FeatureDiv>
  </>;
}

export default Home;
