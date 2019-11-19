import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import LoginForm from './components/login/LoginForm';
import Home from './components/home/Home';
import Schools from './components/schools/Schools';
import SignUpForm from './components/signup/SignUpForm';

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

function App() {
	return (
		<div className="App">
			<div className="navbar">
				<StyledLink to="/">Home</StyledLink>
				<StyledLink to="/login">Login</StyledLink>
				<StyledLink to="/signup">Sign Up</StyledLink>
				<StyledLink to="/schools">Schools</StyledLink>
			</div>
			<Switch>
				<Route exact component={Home} path="/" />
				<Route component={LoginForm} path="/login" />
				<Route component={SignUpForm} path="/signup" />
				<Route component={Schools} path="/schools" />
			</Switch>
		</div>
	);
}

export default App;
