import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import Image from "material-ui-image"
import { useHistory, Link } from "react-router-dom";
import "./Header.css";
import logo from "./logo_light.png"
const Header = ({ children, hasHiddenAuthButtons }) => {
  const history = useHistory();

  const routeToExplore = () => {
    history.push("/");
  };

  const routeToRegister = () => {
    history.push("/register");
  };

  const routeToLogin = () => {
    history.push("/login");
  };

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("balance");
    history.push("/");
    //tryig to reload forcefully
    window.location.reload();
  };

  const navigateToOrders=()=>{
    history.push("/orders");
  }
  const navigateToProducts=()=>{
    history.push("/landing");
  }
  if (hasHiddenAuthButtons) {
    return (
      <Box className="header">
        <Box className="header-title">
          <Link to="/">
            <img src={logo} alt="Lotus-icon"></img>
          </Link>
        </Box>

        {children}

        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={routeToExplore}
        >
          Back to explore
        </Button>
      </Box>
    );
  }

  return (
    <Box className="header">
      <Box className="header-title">
        <Link to="/">
          <img src={logo} alt="Lotus-icon"></img>
        </Link>
      </Box>
      {children}
      <Stack direction="row" spacing={1} alignItems="center">
        {localStorage.getItem("username") ? (
          <>
            <Avatar
              src="avatar.png"
              alt={localStorage.getItem("username") || "profile"}
            />

            <p className="username-text">{localStorage.getItem("username")}</p>
            {
              localStorage.getItem("userType")==='user'?
              window.location.pathname==='/'||window.location.pathname==='/landing'?<Button type="primary" onClick={navigateToOrders}>
              Orders
            </Button>
            :
            <Button type="primary" onClick={navigateToProducts}>
              Products
            </Button>
            :""
            }
            

            <Button type="primary" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button onClick={routeToLogin}>Login</Button>

            <Button variant="contained" onClick={routeToRegister}>
              Register
            </Button>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Header;
