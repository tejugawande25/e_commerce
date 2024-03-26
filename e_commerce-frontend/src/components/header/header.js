import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {NavLink} from "react-router-dom";
import Logo from "./logo.png";
import Modal from "@mui/material/Modal";
import LoginImg from "./login.png";
import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import {useState} from "react";

const NumberDiv = styled(TextField)`
height:15%;
width:75%;
border:1xp solid black;
display:flex;
margin-top:3rem;
margin-left:3.5rem;
display:flex;
justify-content:center;

`;
export default function Header() {
  const[open, setOpen] = useState(false);
  const[input, setInput] = useState("");
  const[activeScreen, setActiveScreen] = useState("ScreenOne");
  const handleClose =()=>{
    setOpen(false);
  }
  console.log(input);
  return (
    <Box sx={{ flexGrow: 2, marginBottom:"40px"}} >
      <AppBar position="static" style={{background:"#d6d6f8",height:"80px",display:"flex",justifyContent:"center"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} style={{color:"#2C3539",fontWeight:"600",marginLeft:"30px"}}>
          <NavLink to="/" style={{textDecoration:"none",color:"#2C3539",fontSize:"34px"}}>
           <img src={Logo} style={{height:"3.5rem",width:'6rem',marginTop:"10px",borderRadius:"5px",marginLeft:'20px',boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}/>
          </NavLink>
          </Typography>
          <ul style={{display:"flex",color:"#2C3539",gap:"50px",textDecoration:"none",listStyleType:"none",cursor:"pointer"}}>
            <li><NavLink to="/" style={{textDecoration:"none",color:"#2C3539",fontSize:"19px"}}>Home</NavLink></li>
            <li><NavLink to="about" style={{textDecoration:"none",color:"#2C3539",fontSize:"19px"}}>About</NavLink></li>
            <li><NavLink to="product" style={{textDecoration:"none",color:"#2C3539",fontSize:"19px"}}>Products</NavLink></li>
            <li style={{marginRight:"60px"}}><NavLink to="contact" style={{textDecoration:"none",color:"#2C3539",fontSize:"19px"}}>Contacts</NavLink></li>
          </ul>
          <Button style={{color:"#2C3539",display:"flex",alignItems:"center",background:"#9bddff",marginRight:"40px",fontSize:"15px"}}  onClick={() =>{setOpen(true)}}>Login</Button>
          <ShoppingCartIcon style={{color:"#2C3539",marginRight:"10px",cursor:"pointer",fontSize:"24px"}}/>
        </Toolbar>
        <Modal 
        open={open} onClose={handleClose}
        style={{display:"flex",justifyContent:"center",alignItems:"center"}}
        >
        <div style={{height:"75%",width:"48%",display:"flex",borderRadius:"10px",overflow:"hidden"}}>
          <div style={{height:"100%", width:"42%",background:"#d6d6f8",display:"flex",flexDirection:"column"}}>
            <div style={{display:"flex",flexDirection:"column",gap:"1rem",marginLeft:"3rem",marginTop:"3rem"}}>
              <p style={{fontSize:"26px",fontWeight:"500",margin:"0px"}}>Login</p>
              <p style={{margin:"0px",fontSize:"17px"}}>Get access to your <br/>Orders,Wishlist and <br/> Recommendations</p>
            </div>
            <div>
              <img src={LoginImg} style={{height:"20rem",width:"20rem",marginTop:"1rem"}} />
            </div>
          </div>
          <div style={{background:"white",width:"100%",display:"flex", flexDirection:"column"}}>
             <NumberDiv 
             multiline
             id="filled-multiline-flexible"
             variant='standard'
              sx={{ input: { color: "#fff" } }}
             label="Enter Email/Mobile number"
             display="flex"
             alignitems="center"
             inputProps={{
              style:{
                textAlign:"start",
                color:"black",
              }
             }}
             value={input}
             onChange={(event) =>{
              setInput(event.target.value);
             }}
             />
             <div style={{height:"2rem", width:"80%",marginLeft:"3.5rem"}}>
              <p style={{fontSize:"13px"}}>By continuing,you agree to Cart's Terms of Use and privacy policy.</p>
             </div>
             <button style={{width:"75%",height:"2.7rem",marginLeft:"3.5rem",marginTop:"2.5rem",fontSize:"15px",fontWeight:"500",background:"#FFA500",border:"none",borderRadius:"5px",cursor:"pointer"}}

             >Request OTP</button>
             <div style={{marginTop:"14rem",marginLeft:"6.5rem",cursor:"pointer",}}><NavLink style={{textDecoration:"none"}}>New to Cart? Create an account</NavLink></div>
          </div>
        </div>
        </Modal>
      </AppBar>
    </Box>
  );
}
