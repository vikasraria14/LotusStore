import { Box } from "@mui/system";
import React from "react";
import "./Footer.css";
import logo from "./logo_dark.png"

const Footer = () => {
  return (
    <Box className="footer">
      <Box>
        <img src={logo} alt="Logo-icon"></img>
      </Box>
      <p className="footer-text">
        Lotus Store is your one stop solution to the buy the latest trending lotus items
        with Fastest Delivery to your doorstep
      </p>
    </Box>
  );
};

export default Footer;
