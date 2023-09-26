import decor3 from "../../images/decoration/Group-31.png";

import "./Intro.css";

const introData = [
	{
		id: 1,
		job_title: "Web Developer",
		name: "Noble  Biru",
		par_inro: "I'm a passionate web developer...",
		hireMe_link: "nobledarm@gmail.com",
		avatar_img: "image_url_1.jpg"
	}
];

const contactDetails = [
	{
		id: 1,
		platform: "Instagram",
		link: "https://www.instagram.com/your_instagram_username/",
		social_icon: "fa fa-instagram"
	},
	{
		id: 2,
		platform: "LinkedIn",
		link: "https://www.linkedin.com/in/your_linkedin_username/",
		social_icon: "fa fa-linkedin"
	},
	{
		id: 3,
		platform: "Twitter",
		link: "https://twitter.com/your_twitter_username/",
		social_icon: "fa fa-twitter"
	},
	{
		id: 4,
		platform: "Telegram",
		link: "https://t.me/your_telegram_username/",
		social_icon: "fa fa-telegram"
	}
];

const Intro = () => {
	return (
		<>
			{introData.map((detail) => (
				<section className=" intro-page" id="home" key={detail.id}>
					<div className="decorations">
						<div className="decor-dot2">
							<img src={decor3} alt="" />
						</div>

						<div className="parcol"></div>
					</div>
					<div className="small-intro">
						<div className="intro-row">
							<div className="col-lg-5  col-md-6 col-sm-12 intro-left">
								<div className="intro-name">
									<h3
										className="hello"
										data-aos="fade-down"
										data-aos-duration="1500">
										{detail.job_title}
									</h3>
									<h3
										className="name"
										data-aos="fade-down"
										data-aos-duration="1600">
										Hello! my name is
									</h3>
									<h3
										className="job  text-animate notranslate"
										data-aos="fade-down"
										data-aos-duration="1700">
										{detail.name}
									</h3>
									<p
										className="myinfo"
										data-aos="fade-down"
										data-aos-duration="1800">
										{detail.par_inro}
									</p>
								</div>
								<div
									className="intro-btns"
									data-aos="fade-up"
									data-aos-duration="1900">
									<a
										href={`mailto:${detail.hireMe_link}`}
										className="contactMe">
										<button className="contact-me">
											Hire me <i className="bx bx-send "></i>
										</button>
									</a>
								</div>
								<div
									className="intro-contact"
									data-aos="fade-up"
									data-aos-duration="1800">
									<span>Follow Me:</span>
									<ul>
										<li>
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
								className="col-lg-7 col-md-6 col-sm-12 left-img "
								data-aos="fade-down-left">
								<div className="ff">
									<img
										className="intro-img"
										src="https://drive.google.com/uc?id=1iyVyaGyw5HniEugxd1-qZ54rpFpn2UTc"
										alt=""
									/>
									{/* <img
										className="intro-img"
										src={`${img_300}${detail.avatar_img}`}
										alt=""
									/> */}
								</div>
							</div>
						</div>
					</div>
				</section>
			))}
		</>
	);
};

export default Intro;
