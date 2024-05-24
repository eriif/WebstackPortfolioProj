import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	return (
		<nav className="navbar">
		<div className="navbar-container">
		<Link to="/" className="navbar-logo">Blog Platform</Link>
		<div className="navbar-links">
		<Link to="/">Home</Link>
		<Link to="/profile">Profile</Link>
		<Link to="/create-post">Create Post</Link>
		</div>
		</div>
		</nav>
	);
}

export default Navbar;
