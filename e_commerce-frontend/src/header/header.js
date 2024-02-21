import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background:"#EEEEFF"}}>
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
            Cart
          </Typography>
          <ul style={{display:"flex",color:"#2C3539",gap:"50px",textDecoration:"none",listStyleType:"none",cursor:"pointer"}}>
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li style={{marginRight:"60px"}}>Contacts</li>
          </ul>
          <Button style={{color:"#2C3539",display:"flex",alignItems:"center",background:"#9bddff",marginRight:"40px"}}>Login</Button>
          <ShoppingCartIcon style={{color:"#2C3539",marginRight:"10px",cursor:"pointer"}}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
