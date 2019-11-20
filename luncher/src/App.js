import React, { useState } from "react";
import "./App.css";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import Routes from "./components/routes/Routes";

const StyledLink = styled(Link)`
  text-decoration: none;
  float: left;
  color: white;
  display: block;
  color: #1d17c7;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 20px;
`;

function App(props) {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  function handleLogout() {
    userHasAuthenticated(false);
    localStorage.clear();
    props.history.push("/login");
  }

  return (
    <div className="App">
      <nav>
        <div className="navbar">
          <a href="https://suspicious-hermann-726996.netlify.com/index.html">
            Luncher
          </a>
          <StyledLink to="/">Schools</StyledLink>
        </div>

        <div className="navbar">
          {isAuthenticated ? (
            <>
              <StyledLink to="/profile">Profile</StyledLink>
              <StyledLink onClick={handleLogout}>Logout</StyledLink>
            </>
          ) : (
            <>
              <StyledLink to="/login">Login</StyledLink>
              <StyledLink to="/signup">Sign Up</StyledLink>
            </>
          )}
        </div>
      </nav>
      <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
    </div>
  );
}

export default withRouter(App);

// <AppliedRoute path="/" exact component={Home} appProps={appProps} />
// <AppliedRoute path="/login" exact component={Login} appProps={appProps} />
// <Route component={NotFound} />
