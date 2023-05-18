import React from "react";

import TypeWriterText from "./TypeWriterText";
import Navigation from "./Navigation";
import imag from "../../img/hotel.png"
import Button from "./Button";
import About from "./About.jsx"
import Team from "./Team.jsx"
import Partners from "./Partners.jsx"
import Footer from "./Footer.jsx"
import { Link } from "react-router-dom";

const Home = () => {
	return (<>
		<div className="myback">
			<Navigation />
				<div className = "row p-5" id="home">
					<div className="jumbotron bg-light d-flex justify-content-center align-items-center rounded p-5">
						<div className="d-flex flex-column justify-content-center">
						<h1 className="display-4"><TypeWriterText/></h1>
						<p className="lead mt-2 mb-5 homep">Forma parte de nosotros y administra tu hotel, podrás crear diferentes tipos de habitaciones, <br></br>
						registrar la cantidad, el estatus de cada una y más! </p>
						<p className="lead">
						<Link className="btn btn-grad btn-lg homeb" to="/register" role="button"> Regístrate!</Link>
						</p>
						</div>
						<div className="d-flex flex-column justify-content-center align-items-center col-2 col-sm-12 col-lg-2 col-md-6 ms-5">
						<img className="contain"  src={imag} alt="Hotel" />
						</div>
					</div>
				</div>
				<About/>
				<Partners/>	
				<Team/>
				<Footer />
				
		</div>
		</>
	);
};

export default Home;
