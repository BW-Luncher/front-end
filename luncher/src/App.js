/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./App.css";
import { Link, withRouter, Route } from "react-router-dom";
import Routes from "./routes/Routes";

function App(props) {
  const isLoggedIn = localStorage.getItem("isAuthenticated");

  function handleLogout() {
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
          <Link to="/">Schools</Link>
        </div>

        <div className="navbar">
          {isLoggedIn ? (
            <>
              <Link to="/profile">Welcome User</Link>
              <Link onClick={handleLogout}>Logout</Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </div>
      </nav>
      <Route component={Routes} />
    </div>
  );
}

export default withRouter(App);
