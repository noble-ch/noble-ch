import "./projects.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const projectData = [
	{
		id: 1,
		Project_title: "Youtube-clone",
		Project_info: "clone with pure html,css,javascript",
		about_avatar: "./images/youtube-clone.jpeg",

		language_used: "html,css",
		demo_link: "https://youtube-clone-pied-theta.vercel.app/",
		project_link: "https://github.com/noble-ch/Youtube-Clone.git"
	},
	{
		id: 2,
		Project_title: "e-commerce",
		Project_info:
			"a fully interactive e-commerce website with chapa payment api integrated and much more",
		about_avatar: "./images/download.png",

		language_used: "React , django",
		demo_link: "https://demo2.com",
		project_link: "https://github.com/project2"
	}
];
const Projects = () => {
	const options = {
		margin: 30,
		responsiveClass: true,
		nav: true,
		dots: true,
		autoplay: false,
		navText: false,
		smartSpeed: 1000,
		responsive: {
			0: {
				items: 1
			},
			310: {
				items: 1
			},
			500: {
				items: 1
			},
			600: {
				items: 1
			},
			740: {
				items: 2
			},
			1000: {
				items: 2.7
			},
			1300: {
				items: 3
			},
			1440: {
				items: 3
			}
		}
	};

	return (
		<div className="mywork " id="work">
			<div className="mywork-title">
				<h2>Check Out Some Of My Projects</h2>
				<h3>My Work</h3>
			</div>
			<div className="project-row">
				<OwlCarousel className="owl-theme" {...options}>
					{projectData.map((details) => (
						<div className="project" data-aos="fade-up" key={details.id}>
							<div className="project-img">
								<img src={details.about_avatar} alt="" className="work-img" />
							</div>
							<div className="date-posted">
								<div className="who-post">
									<p className="admin">{details.language_used}</p>
								</div>
							</div>
							<div className="work-details">
								<h2>{details.Project_title}</h2>
								<p className="work-info">{details.Project_info}</p>
								<div className="project-links">
									<a
										href={details.demo_link}
										target="_blank"
										rel="noopener noreferrer">
										<h6 className="learnmore">
											<i class="fa fa-laptop" aria-hidden="true"></i>&nbsp; Live
											Demo
										</h6>
									</a>
									<a
										href={details.project_link}
										target="_blank"
										rel="noopener noreferrer">
										<h6 className="learnmore">
											<i class="fa fa-github" aria-hidden="true"></i> &nbsp;
											Source Code
										</h6>
									</a>
								</div>
							</div>
						</div>
					))}
				</OwlCarousel>
			</div>
		</div>
	);
};

export default Projects;
