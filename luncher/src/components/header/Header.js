import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  float: left;
  color: white;
  display: block;
  color: #1D17C7;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 20px;
`;

const Header = () => (
  <nav>
    <div className="navbar">
      <a href="https://suspicious-hermann-726996.netlify.com/index.html">
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
