import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto d-flex gap-3">
					<Link to="/register">
					<p>registro</p>
					</Link>
					<Link to="/login">
					<p>login</p>
					</Link>
					<Link to="/dashboard">
					<p>dashboard</p>
					</Link>
				</div>
				
			</div>
		</nav>
	);
};
