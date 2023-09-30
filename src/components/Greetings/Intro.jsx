import decor3 from "../../images/decoration/Group-31.png";
import Hero from "../Hero/Hero";
import { useLottie } from "lottie-react";
import deeloperAnimation from "../Hero/deeloperAnimation6.json";
import ParticlesBg from "particles-bg";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import "./Intro.css";

const introData = [
	{
		id: 1,
		job_title: "Software Developer",
		name: "Noble  Birgu",
		par_inro: "I'm a passionate web developer...",
		hireMe_link: "nobledarm@gmail.com",
		avatar_img: "image_url_1.jpg"
	}
];

const contactDetails = [
	{
		id: 1,
		platform: "Instagram",
		link: "https://instagram.com/noba_chu?igshid=YWYwM2I1ZDdmOQ==",
		social_icon: "fa fa-instagram"
	},
	{
		id: 2,
		platform: "LinkedIn",
		link: "https://www.linkedin.com/in/noble-bi-797b85253",
		social_icon: "fa fa-linkedin"
	},
	{
		id: 3,
		platform: "Twitter",
		link: "https://twitter.com/noble/",
		social_icon: "fa fa-twitter"
	},
	{
		id: 4,
		platform: "Telegram",
		link: "https://t.me/noble_ch/",
		social_icon: "fa fa-telegram"
	}
];

const Intro = () => {
	const options = {
		animationData: deeloperAnimation,
		renderer: "svg",
		loop: true,
		autoplay: true
	};

	const { View } = useLottie(options);

	return (
		<>
			{/* <Parallax pages={1}> */}
			{/* <ParallaxLayer sticky={{ start: 1, end: 3 }} > */}
			{introData.map((detail) => (
				<section className=" intro-page zz  " id="home" key={detail.id}>
					<ParticlesBg color="#00f549" type="cobweb" bg={true} num={10} />

					<div className="decorations">
						<div className="decor-dot2">
							<img src={decor3} alt="" />
						</div>

						<div className="parcol"></div>
					</div>

					<div className="small-intro ">
						<div className="intro-row ">
							<div className="col-lg-6  col-xl-6   col-md-6 col-sm-12 intro-left container-fluid  ">
								<div className="intro-name">
									<h3
										className="hello text-center"
										data-aos="fade-down"
										data-aos-duration="1500">
										{detail.job_title}
									</h3>
									<h3
										className="name text-center"
										data-aos="fade-down"git 
										data-aos-duration="1600">
										Hey! I Am
									</h3>

									<h3
										className="job text-animate text-center  notranslate"
										data-aos="fade-down"
										data-aos-duration="1700">
										{detail.name}
									</h3>
									{/* <p
										className="myinfo"
										data-aos="fade-down"
										data-aos-duration="1800">
										{detail.par_inro}
									</p> */}
								</div>
								<div
									data-aos="fade-down"
									data-aos-duration="1800"
									className="myinfo">
									<Hero />
								</div>

								<div
									className="intro-btns d-flex justify-content-center"
									data-aos="fade-up"
									data-aos-duration="1900">
									<a
										href={`mailto:${detail.hireMe_link}`}
										className="contactMe">
										<button className="contact-me mx-auto">
											Hire me <i className="bx bx-send "></i>
										</button>
									</a>
								</div>
								<div
									className="intro-contact"
									data-aos="fade-up"
									data-aos-duration="1800">
									<span className="text-center">Follow Me:</span>
									<ul>
										<li className="socio-list d-flex justify-content-center  ">
											{contactDetails.map((data1) => (
												<a
													href={data1.link}
													className="icon-link "
													target="_blank"
													rel="noopener noreferrer"
													key={data1.id}>
													<i className={data1.social_icon}></i>
												</a>
											))}
										</li>
									</ul>
								</div>
							</div>

							<div
								className="col-lg-6 mb-4 col-xl-6  col-md-6 col-sm-12 left-img "
								data-aos="fade-down-left">
								<div
									style={{ maxWidth: "fitContent" }}
									className=" anime  img-fluid  ">
									{/* <img
										className="intro-img"
										src="./images/svg-gobbler.svg"
										alt=""
									/> */}
									{/* <img
										className="intro-img"
										src={`${img_300}${detail.avatar_img}`}
										alt=""
									/> */}
									{View}
								</div>
							</div>
						</div>
					</div>
				</section>
			))}
			{/* </ParallaxLayer> */}
			{/* </Parallax> */}
		</>
	);
};

export default Intro;
