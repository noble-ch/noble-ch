import "./AboutMe.css";
import decor1 from "../../images/decoration/dots-1.png";
import reactagle from "../../images/decoration/Rectangle-7.png";
import shady from "../../images/decoration/dots.png";

const AboutMe = () => {
	return (
		<>
			<main id="about">
				<div className="aboutMe-container">
					<div className="about-decor">
						<div className="about-dots">
							<img src={decor1} alt="" />
						</div>
						<div className="about-rect">
							<img src={reactagle} alt="" />
						</div>
						<div className="about-shady">
							<img src={shady} alt="" />
						</div>
					</div>
					<div className="abouMe-row">
						<div
							className=" col-lg-4 col-md-5 col-sm-12 about-img "
							data-aos="fade-up-right">
							<img
								className="imaag "
								src="./images/nob2.png"
								alt=""
							/>
						</div>
						<div
							className=" col-lg-8 col-md-7  col-sm-12 about_myinfo"
							data-aos="fade-up-left">
							<div className="title">
								<h2>ABOUT ME</h2>
								<h3>WHY YOU SHOULD HIRE ME FOR YOUR NEXT PROJECT</h3>
							</div>
							<div className="about-description">
								<div id="foo" unselectable="on" class="unselectable">
									<div />
									<p>
										I'm a 21-year-old Computer Science and Engineering student
										at Adama Science and Technology University. I specialize in
										Full-stack Web Development, with expertise in Python,
										Django, JavaScript, React, and Java.
										<br />
										<br />
										As a detail-oriented problem solver, I thrive on tackling
										complex challenges and crafting innovative web solutions. I
										have a strong passion for staying up-to-date with the latest
										technologies and adapting quickly to industry trends.
										<br />
										<br />
										Collaboration is central to my approach, and I enjoy working
										with diverse teams to deliver high-quality projects. Fluent
										in English, Amharic, and Oromic, I value effective
										communication and connection with others.
										<br />
										<br />
										I'm dedicated to creating impactful digital experiences and
										excited to contribute my skills to the ever-evolving tech
										world.
									</p>
								</div>
							</div>

							{/* <div className="itscv">
								<a
									href="https://drive.google.com/file/d/127RCSy1lUZE2sS8IgkxxPcUqbw1rYMOR/view"
									download="RESUME.pdf"
									target="_blank"
									rel="noopener noreferrer">
									<button className="download-cv">
										Download Cv <i class="bx bx-download"></i>
									</button>
								</a>
							</div> */}
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default AboutMe;
