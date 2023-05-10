import React from "react";
import {Banner} from "./Banner"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import TypeWriterText from "./TypeWriterText";
import Navigation from "./Navigation";
import imag from "../../img/hotel.png"
import Button from "./Button";
import About from "./About.jsx"
import Team from "./Team.jsx"
import Partners from "./Partners.jsx"
import Footer from "./Footer.jsx"

const Home = () => {
	return (<>
		<div className="myback">
			<Navigation />
				<div className = "row p-5" id="home">
					<div className="jumbotron bg-light d-flex justify-content-center align-items-center rounded p-5">
						<div className="d-flex flex-column justify-content-center">
						<h1 className="display-4"><TypeWriterText/></h1>
						<p className="lead mt-2 mb-5 ">Forma parte de nosotros y administra tu hotel, podrás crear diferentes tipos de habitaciones, <br></br>
						registrar la cantidad, el estatus de cada una y más! </p>
						<p className="lead">
							<a className="btn btn-grad btn-lg" href="#" role="button"> Regístrate!</a>
						</p>
						</div>
						<div className="d-flex flex-column justify-content-center align-items-center">
						<img className="contain" style={{ width: 300, height: 300}} src={imag} alt="Hotel" />
						</div>
					</div>
				</div>
				<About/>
				<Partners/>	
				<Team/>
				<Footer/>
		</div>
		</>
	);
};

export default Home;
