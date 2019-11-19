import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  float: left;
  color: white;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 20px;
`;

const Header = () => (
  <nav>
    <div className="navbar">
      <a href="http://htmlpreview.github.io/?https://github.com/BW-Luncher/marketing/blob/jonathan-hanson/index.html">
        Luncher
      </a>
      <StyledLink to="/">Schools</StyledLink>
    </div>

    <div className="navbar">
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/signup">Sign Up</StyledLink>
    </div>
  </nav>
);

export default Header;
