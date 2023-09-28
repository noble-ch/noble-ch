import "./Services.css";
import React from "react";

const serviceData = [
	{
		id: 1,
		service_name: "Web Development",
		service_description:
			"Custom web application development using modern technologies.",
		icon_image: "web-development-icon.png",
		shadow_icon: "fa fa-web"
	},
	{
		id: 2,
		service_name: "Mobile App Development",
		service_description:
			"Cross-platform mobile app development for iOS and Android.",
		icon_image: "mobile-app-icon.png",
		shadow_icon: "fa fa-mobile"
	},
	{
		id: 2,
		service_name: "Api Integration",
		service_description:
			"integrate with variety of apis, like google,OpenAi,Spotify,automated email service",
		icon_image: "mobile-app-icon.png",
		shadow_icon: "fa fa-mobile"
	}
	// Add more services as needed
];

const Services = () => {

	return (
		<main className="service-page">
			<section id="services">
				<div className="service-container">
					<div className="service-title">
						<h2>What Service I Offer You</h2>
						<h3>Services</h3>
					</div>

					<div className="service-row">
						{serviceData.map((service) => (
							<div
								className="my-service"
								key={service.id}
								data-aos="zoom-in-up"
								data-aos-duration="1500">
								<div className="ser-back">
									<img src={service.icon_image} alt="" />
								</div>
								<h4 className="web">{service.service_name}</h4>
								<p className="service-info">{service.service_description}</p>
								<div className="shadow-icon">
									<i className={service.shadow_icon}></i>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
};

export default Services;
