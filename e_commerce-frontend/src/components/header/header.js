import * as React from "react";
import "./header.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import Modal from "@mui/material/Modal";
import LoginImg from "./login.png";
import {TextField, colors } from "@mui/material";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axios from "axios";
import toast,{Toaster} from "react-hot-toast";
import "./header.css";
import {styled} from "@mui/material/styles";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


// const NumberDiv = styled(TextField)`
//   height: 15%;
//   width: 75%;
//   border: 1xp solid black;
//   display: flex;
//   margin-left: 3.5rem;
//   justify-content: center;
// `;

const NumberDiv = styled(TextField)(({theme}) =>({
    height: "15%",
    width: "75%",
    display: "flex",
    marginLeft:"3.5rem",
    justifyContent: "center",
    alignItems:"center",

    
    
    [theme.breakpoints.down('md')]:{
      background:"white",
      justifyContent:"left",
      alignItems:"first baseline",
      marginLeft:"1.8rem",
      width:"60%",
    },

    [theme.breakpoints.up('xs')]:{
      marginLeft:"3.5rem",
      display:"flex",
      alignItems:"top",
      marginTop:"0px"
    }
}))
const Appbox = styled(Box)(({theme}) =>({
  [theme.breakpoints.down('sm')]:{
   maxwidth:"100%"
  }
}))

const AppBarMenu = styled(AppBar)(({theme}) =>({
  background: "#d6d6f8",
  height: "80px",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down('md')]:{
  }
}))
const LoginButton = styled(Button)(({theme}) =>({
  background:"#9bddff",
  color: "#2C3539",
  display: "flex",
  alignItems: "center",
  fontSize: "15px",
  marginLeft:"2.5%",
  marginRight:"2%",
  [theme.breakpoints.down('md')]:{
   fontSize:"13px",
  },
  [theme.breakpoints.down("sm")]:{
   fontSize:"10px",
  },
  [theme.breakpoints.up('xs')]:{
    fontSize:"10px",
  }
}))

const MyShoppingCart = styled(ShoppingCartIcon)(({theme}) =>({
  color: "#2C3539",
  marginRight: "2%",
  cursor: "pointer",
  fontSize: "24px", 

  [theme.breakpoints.down("sm")]:{
    fontSize:"20px"
  },
  // [theme.breakpoints.up('xs')]:{
  //   fontSize:"20px",
  //   // marginLeft:"6rem",
  //   // marginTop:"1rem"
  // }
}))

const RoleButton = styled(Button)(({theme}) =>({
  color:"black",
  marginLeft:"6rem",
  
  [theme.breakpoints.down('md')]:{
  marginLeft:"1rem",
  fontSize:"12px"
  },
  [theme.breakpoints.down('sm')]:{
    marginLeft:"0.5rem",
    fontSize:"10px"
  },
  [theme.breakpoints.up('xs')]:{
    marginLeft:"3rem",
    marginTop:"0.5rem",
  }
  
}))


export default function Header() {
  const [open, setOpen] = useState(true);
  const [login, setLogin] = useState(true);
  const [input, setInput] = useState("");
  const [activeScreen, setActiveScreen] = useState("ScreenOne");
  const[clicked, setClicked] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setActiveScreen("ScreenOne");
  };
  
  const handleMenuClick = () =>{
    setClicked(!clicked);
  }

  console.log(input);
  return (
    <Appbox sx={{ flexGrow: 2, marginBottom: "40px"}} >
      <AppBarMenu
        position="static"
        className="appbar"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ color: "#2C3539", fontWeight: "600", marginLeft: "auto"}}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#2C3539",
                fontSize: "34px",
              }}
              className="logo"
            >
              <img
                src={Logo}
                style={{
                  marginTop: "10px",
                  borderRadius: "5px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                }}
                className="logo-image"
              />
            </Link>
          </Typography>
          <div id="list-div"  className={clicked ?"list-div active" :"list-div"}>
          <ul className="list">
            <li>
              <Link
                to="/"
                className="list-items"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                className="list-items"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="product"
                className="list-items"
              >
                Products
              </Link>
            </li>
            <li >
              <Link
                to="contact"
                className="list-items"
              >
                Contacts
              </Link>
            </li>
          </ul>
          <LoginButton
            className="login-button-m"
            onClick={() => {
              setOpen(true);
            }} 
            
          >
            Login
          </LoginButton>
          <Link to="/cart" className="cartIcon">
            <MyShoppingCart className="shoppingcart-button"/>
          </Link>
          
          </div>
          <div id="menu" onClick={handleMenuClick}> 
            {
              clicked ? <CloseIcon /> : <MenuIcon />
            }
          </div>
        </Toolbar>
        <Modal
          open={open}
          onClose={handleClose}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          <div
            // style={{
            //   height: "75%",
            //   width: "48%",
            //   display: "flex",
            //   borderRadius: "10px",
            //   overflow: "hidden",
            //   border:"1px solid blue"
            // }}
            className="modal-div"
          >
            <div
              // style={{
              //   height: "100%",
              //   width: "42%",
              //   background: "#d6d6f8",
              //   display: "flex",
              //   border:"1px solid red",
              //   flexDirection: "column",
              // }}
              className="modal-heading-div"
            >
              <div
                className="heading-div"
              >
                <p
                  // style={{ fontSize: "26px", fontWeight: "500", margin: "0px" }}
                  className="modal-heading"
                >
                  {login === true ? "Login" : "Look's like you're new here!"}
                </p>
                <p className="modal-subheading">
                  Get access to your 
                  Orders,Wishlist and Recommendations
                </p>
              </div>
              <div>
                <img
                  src={LoginImg}  
                  className="modal-logo-image"
                />
              </div>
            </div>
            {activeScreen === "ScreenOne" ? (
              <ScreenOne
                setActiveScreen={setActiveScreen}
                input={input}
                setInput={setInput}
                setLogin={setLogin}
                setOpen={setOpen}
              />
            ) : activeScreen === "ScreenTwo" ? (
              <ScreenTwo
                setActiveScreen={setActiveScreen}
                input={input}
                handleClose={handleClose}
              />
            ) : (
              <ScreenThree
                input={input}
                setInput={setInput}
                setActiveScreen={setActiveScreen}
                setLogin={setLogin}
                setOpen={setOpen}
              />
            )}
          </div>
        </Modal>
      </AppBarMenu>
    </Appbox>
  );
}

function ScreenOne({ setActiveScreen, input, setInput, setLogin,setOpen }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const[role,setRole] = useState("");
  const [loginUser, setLoginUser] = useState({
    mobileNo: "",
    password: "",
  });

  

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setLoginUser({
      ...loginUser,
      [name]: value,
    });
  };

  const handleCustomerRole = (e) =>{
    setRole("Customer")
    handleClose();
    let name = e.target.value;
    
    setLoginUser({
     ...loginUser,
     [name]:"customer"
    })
 }
 const handleSellerRole = (e) =>{
  setRole("Seller")
  handleClose();
  let name = e.target.value;

  setLoginUser({
    ...loginUser,
    [name]:"seller"
  })
 };

const handleLogin = () =>{

  axios
  .post("http://localhost:4000/user/login",{
    user:loginUser,
  })
  .then((item) =>{
    setOpen(false);
    console.log("user login successfully!");
    console.log(item);
    sessionStorage.setItem('jwtToken',item.data.jwtToken)

  })
  .catch((error) =>{
    setOpen(true);
    console.log(error);
    toast.error("Invalid Credentials!");
  })
}

  console.log(loginUser);

  return (
    <>
     <Toaster position="top-right" reverseOrder={false} 
         toastOptions={{
            success:{
                duration:2000,
            }
         }}
         />
      {" "}
      <div
        // style={{
        //   background: "white",
        //   width: "100%",
        //   display: "flex",
        //   flexDirection: "column",
        //   gap: "0px",
        //   alignitems: "center",
        //   border:"1px solid red"
        // }}
        className="authentication-div"
      >
        <NumberDiv
          className="username-div"
          required
          id="standard-basic"
          variant="standard"
          sx={{ input: { color: "#fff" }}}
          label="Enter Mobile number"
          size="normal"
          name="mobileNo"
          value={loginUser.mobileNo}
          // display="flex"
          // alignitems="start"
          // style={{ marginTop: "3.5rem" }}
          onChange={handleInput}
        ></NumberDiv>
        <NumberDiv
          required
          id="standard-basic"
          variant="standard"
          sx={{ input: { color: "#fff" } }}
          label="Enter Password"
          name="password"
          value={loginUser.password}
          // display="flex"
          // alignitems="center"
          // inputProps={{
          //   style: {
          //     textAlign: "start",
          //     color: "black",
          //   },
          // }}
          onChange={handleInput}
        ></NumberDiv>
        <div>
          <div style={{ display: "flex", flexDirection: "row"}}>
            <RoleButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              // style={{ color: "black", marginLeft: "6rem" }}
              required
            >
              Role
              <ArrowDropDownIcon />
            </RoleButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleCustomerRole} name="role">Customer</MenuItem>
              <MenuItem onClick={handleSellerRole} name="role">Seller</MenuItem>
            </Menu>
            <div
              // style={{width: "8rem",height:"2rem",marginLeft:"1rem",border:"1px solid gray",display:"flex",justifyContent:"center",alignitems:"end",padding:"0px", fontSize:"17px"}}
              value={role}
              name="role"
              className="role-div"
            >{role}</div>
          </div>
        </div>

        <div className="auth-guidelines">
          <p className="auth-guidelines-p">
            By continuing,you agree to Cart's Terms of Use and privacy policy.
          </p>
        </div>
        <button
          // style={{
          //   width: "75%",
          //   height: "2.7rem",
          //   marginLeft: "3.5rem",
          //   marginTop: "2.5rem",
          //   fontSize: "17px",
          //   fontWeight: "500",
          //   background: "#FFA500",
          //   border: "none",
          //   borderRadius: "5px",
          //   cursor: "pointer",
          //   boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          // }}
          className="auth-guidelines-button"
          onClick={() => {
            // setActiveScreen("ScreenTwo");
            handleLogin();
          }}
        >
          Login
        </button>
        <div
          // style={{
          //   marginTop: "4rem",
          //   marginLeft: "6.5rem",
          //   cursor: "pointer",
          //   border:"1px solid blue"
          // }}
          className="auth-newuser"
        >
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => {
              setActiveScreen("ScreenThree");
              setLogin(false);
            }}
          >
            New to Cart? Create an account
          </Link>
        </div>
      </div>
    </>
  );
}

function ScreenTwo({ handleClose }) {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <div
          style={{
            height: "15%",
            width: "75%",
            marginTop: "2.5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: "17px" }}>
            Please enter the OTP sent to number.
          </p>
        </div>
        <div
          style={{
            height: "10%",
            width: "60%",
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            alignItems: "center",
            marginTop: "0.6rem",
          }}
        >
          <input
            style={{
              height: "80%",
              width: "16%",
              border: "none",
              outline: "none",
              borderBottom: "1px solid gray",
              fontSize: "24px",
              fontWeight: "400",
            }}
          />

          <input
            style={{
              height: "80%",
              width: "16%",
              border: "none",
              outline: "none",
              borderBottom: "1px solid gray",
              fontSize: "24px",
              fontWeight: "400",
            }}
          />

          <input
            style={{
              height: "80%",
              width: "16%",
              border: "none",
              outline: "none",
              borderBottom: "1px solid gray",
              fontSize: "24px",
              fontWeight: "400",
            }}
          />
          <input
            style={{
              height: "80%",
              width: "16%",
              border: "none",
              outline: "none",
              borderBottom: "1px solid gray",
              fontSize: "24px",
              fontWeight: "400",
            }}
          />
        </div>

        <button
          style={{
            fontSize: "17px",
            height: "2.5rem",
            width: "80%",
            fontWeight: "500",
            background: "#FFA500",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => {
            handleClose(true);
          }}
        >
          Verify
        </button>
        <div
          style={{
            height: "2rem",
            width: "80%",
            display: "flex",
            justifyContent: "center",
            margin: "0px",
          }}
        >
          <p>
            Not received your code?{" "}
            <Link style={{ textDecoration: "none", fontWeight: "500" }}>
              Resend code{" "}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

function ScreenThree({ input, setInput, setActiveScreen, setLogin, setOpen}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const[role,setRole] = useState("");
  const [signupUser, setSignupUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    mobileNo: "",
  });

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setSignupUser({
      ...signupUser,
      [name]: value,
    });
  };

  const handleCustomerRole = (e) => {
    setRole("Customer");
    handleClose();
    let name = e.target.value;

    setSignupUser({
      ...signupUser,
      [name]: "customer",
    });
  };

  const handleSellerRole = (e) => {
    setRole("Seller");
    handleClose();
    let name = e.target.value;

    setSignupUser({
      ...signupUser,
      [name]: "seller",
    });
  };

  const handleSignup = () => {
  
    axios
      .post("http://localhost:4000/user/signup", {
        user: signupUser,
      })
      .then((item) => {
        setOpen(false);
        console.log("user signup successfully!");
        console.log(item);
      })
      .catch((error) => {
        setOpen(true);
        console.log(error);
        toast.error("Invalid Credentials!")

      });
  };

  console.log(signupUser);

  return (
    <>
    <Toaster position="top-right" reverseOrder={false}
       toastOptions={{
        success:{
          duration:2000,
        }
       }}
       />
      <div
        style={{
          height: "100%",
          width: "100%",
          background: "white",
          // border:"1px solid red",
          // position:"absolute",
          // overflow:"scroll"
        }}
        className="second-screen-div"
      >
        <NumberDiv
          multiline
          required
          id="filled-multiline-flexible"
          variant="standard"
          style={{ marginTop: "0px" }}
          sx={{ input: { color: "#fff" } }}
          label="Enter Username"
          name="username"
          value={signupUser.username}
          display="flex"
          alignitems="center"
          inputProps={{
            style: {
              textAlign: "start",
              color: "black",
            },
          }}
          onChange={handleInput}
        ></NumberDiv>
        <NumberDiv
          multiline
          required
          id="filled-multiline-flexible"
          variant="standard"
          sx={{ input: { color: "#fff" } }}
          label="Enter Password"
          name="password"
          value={signupUser.password}
          display="flex"
          alignitems="center"
          inputProps={{
            style: {
              textAlign: "start",
              color: "black",
            },
          }}
          onChange={handleInput}
        ></NumberDiv>
        <NumberDiv
          multiline
          required
          id="filled-multiline-flexible"
          variant="standard"
          sx={{ input: { color: "#fff" } }}
          label="Confirm Password"
          name="confirmPassword"
          value={signupUser.confirmPassword}
          display="flex"
          alignitems="center"
          inputProps={{
            style: {
              textAlign: "start",
              color: "black",
            },
          }}
          onChange={handleInput}
        ></NumberDiv>
        <NumberDiv
          multiline
          required
          id="filled-multiline-flexible"
          variant="standard"
          sx={{ input: { color: "#fff", height: "1rem" } }}
          label="Enter Mobile Number"
          name="mobileNo"
          value={signupUser.mobileNo}
          display="flex"
          alignitems="center"
          inputProps={{
            style: {
              textAlign: "start",
              color: "black",
            },
          }}
          onChange={handleInput}
        ></NumberDiv>
        <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <RoleButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            // style={{
            //   color: "black",
            //   marginLeft: "7.2rem",
            //   marginBottom: "0px",
            // }}
            required
          >
            Role
            <ArrowDropDownIcon />
          </RoleButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleCustomerRole} name="role">
              Customer
            </MenuItem>
            <MenuItem onClick={handleSellerRole} name="role">
              Seller
            </MenuItem>
          </Menu>
          <div
              // style={{width: "8rem",height:"2rem",marginLeft:"1rem",border:"1px solid gray",display:"flex",justifyContent:"center",alignitems:"end",padding:"0px", fontSize:"17px"}}
              value={role}
              name="role"
              className="role-div"
            >{role}</div>
        </div>
        </div>
        <div
          className="auth-guidelines"
        >
          <p className="auth-guidelines-p">
            By continuing,you agree to Cart's Terms of Use and privacy policy.
          </p>
        </div>
        <div className="signup-existing-user">
        <button
          // style={{
          //   width: "75%",
          //   height: "2.7rem",
          //   marginLeft: "3.5rem",
          //   marginTop: "1rem",
          //   fontSize: "17px",
          //   fontWeight: "500",
          //   background: "#FFA500",
          //   border: "none",
          //   borderRadius: "5px",
          //   cursor: "pointer",
          //   boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          // }}
          className="auth-guidelines-button-signup"
          onClick={() => {
            // setActiveScreen("ScreenTwo");
            handleSignup();
          }}
        >
          Signup
        </button>
        <button
          // style={{
          //   width: "75%",
          //   height: "2.7rem",
          //   marginLeft: "3.5rem",
          //   fontSize: "16px",
          //   fontWeight: "500",
          //   background: "white",
          //   boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          //   marginTop: "0.5rem",
          //   border: "none",
          //   borderRadius: "5px",
          //   cursor: "pointer",
          // }}
          className="auth-signup-existing"
          onClick={() => {
            setActiveScreen("ScreenOne");
            setLogin(true);
          }}
        >
          Existing User? Log in
        </button>
        </div>
      </div>
    </>
  );
}
