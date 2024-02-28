import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {NavLink} from "react-router-dom";



export default function Header() {
  
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
          <NavLink to="/" style={{textDecoration:"none",color:"#2C3539"}}>Cart</NavLink>
          </Typography>
          <ul style={{display:"flex",color:"#2C3539",gap:"50px",textDecoration:"none",listStyleType:"none",cursor:"pointer"}}>
            <li><NavLink to="/" style={{textDecoration:"none",color:"#2C3539"}}>Home</NavLink></li>
            <li><NavLink to="about" style={{textDecoration:"none",color:"#2C3539"}}>About</NavLink></li>
            <li><NavLink to="product" style={{textDecoration:"none",color:"#2C3539"}}>Products</NavLink></li>
            <li style={{marginRight:"60px"}}><NavLink to="contact" style={{textDecoration:"none",color:"#2C3539"}}>Contacts</NavLink></li>
          </ul>
          <Button style={{color:"#2C3539",display:"flex",alignItems:"center",background:"#9bddff",marginRight:"40px"}}>Login</Button>
          <ShoppingCartIcon style={{color:"#2C3539",marginRight:"10px",cursor:"pointer"}}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
