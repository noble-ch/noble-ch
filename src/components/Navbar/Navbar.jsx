import "./Navbar.css";
import { Link } from "react-router-dom";
import Main from "./nav";
import GoogleTranslateComponent from "../GoogleTranslateComponent";

const Navbar = () => {
	return (
		<>
			<Main />
			<button type="button" className="mobile-nav-toggle d-lg-none">
				<i className="icofont-navigation-menu"></i>
			</button>
			<header id="header" className="fixed-top ">
				<div className="container-fluid  navbur">
					<div className="navi">
						<div className="col-xl-12 d-flex align-items-center lefty">
							<h5 className="ld-flex mr-auto devman">
								<div className=" logo mr-2 ">
									<img
										className=" m-2"
										src="./images/noble-logo.png"
										alt=""
									/>
								</div>
								<span className="noble">N O B L E</span>{" "}
								<span className="blink">_</span>
							</h5>

							<nav className="nav-menu  mainMenu">
								<ul>
									<li
										className="active"
										data-aos="fade-down"
										data-aos-duration="300">
										<a href="#home"> Home</a>
									</li>
									<li data-aos="fade-down" data-aos-duration="600">
										<a href="#about">About</a>
									</li>
									<li data-aos="fade-down" data-aos-duration="900">
										<a href="#services">Services</a>
									</li>
									<li data-aos="fade-down" data-aos-duration="1200">
										<a href="#skills">Skills</a>
									</li>

									<li data-aos="fade-down" data-aos-duration="1500">
										<a href="#work">My Work</a>
									</li>

									<li data-aos="fade-down" data-aos-duration="1800">
										<a href="#contact">Contact</a>
									</li>
									<li data-aos="fade-down" data-aos-duration="2100">
										<div className=" translate">
											<GoogleTranslateComponent />
										</div>
									</li>
								</ul>
							</nav>
							<div className="nav-social">
								<a href="https://github.com/noble-ch">
									<i className="fa fa-github"></i>
								</a>
							</div>
							<div className="left-btns">
								<div className=" " id="theme-button2">
									<input id="toggle" className="toggle" type="checkbox"></input>
								</div>
								<div>
									<div className="CvMe">
										<button className="my-cv">Contact Me</button>
									</div>
								</div>
								<div className=" " id="theme-button">
									<Link to="#" className="menuBtn">
										<span className="lines"></span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
