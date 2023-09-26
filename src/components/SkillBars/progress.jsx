import "./progress.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import $ from "jquery";

var nav = $("body");

const skillData = [
	{
		id: 1,
		lang_name: "Pyhton",
		icon: "./images/python.svg",
		exp_level: "Intermediate"
	},
	{
		id: 2,
		lang_name: "Django",
		icon: "./images/django.svg",
		exp_level: "Advanced"
	},
	{
		id: 3,
		lang_name: "JavaScript",
		icon: "./images/javascript.svg",
		exp_level: "Intermediate"
	},
	{
		id: 4,
		lang_name: "React",
		icon: "./images/react.svg",
		exp_level: "Advanced"
	},
	{
		id: 5,
		lang_name: "Java",
		icon: "./images/java.svg",
		exp_level: "Advanced"
	},
  {
		id: 6,
		lang_name: "Mysql",
		icon: "./images/mysql.svg",
		exp_level: "Intermediate"
	},
];

if (nav.length) {
	var offsetTop = nav.offset().top;
	$(window).on("scroll", function () {
		var height = $(window).height();
		if ($(window).scrollTop() + height > offsetTop) {
			$(".fullwidth").each(function () {
				$(this)
					.find(".skill-bar")
					.animate(
						{
							width: $(this).attr("data-percent")
						},
						2000
					);
			});
		}
	});
}

const Progress = () => {

	const responsive = {
		0: {
			items: 1
		},
		380: {
			items: 1
		},
		512: {
			items: 2
		},
		665: {
			items: 3
		},
		767: {
			items: 3
		},
		870: {
			items: 4
		},
		1024: {
			items: 6
		},
		1265: {
			items: 6
		}
	};

	const items = skillData.map((skill) => (
		<div className="mylang" title={skill.lang_name} key={skill.id}>
			<div className="lang-info">
				<div className="lang-img">
					<img src={skill.icon} alt="" />
				</div>
				<h3 className="text-center">{skill.lang_name}</h3>
				<p className={`${skill.exp_level}`}>{skill.exp_level}</p>
			</div>
		</div>
	));
	return (
		<>
			<section id="skills">
				<div className="progress-container">
					<div className="progress-title">
						<h2>My Skills Progress so far</h2>

						<h3>My Skills</h3>
					</div>
					<div className="progress-row2">
						<div className="lang">
							<AliceCarousel
								infinite
								autoPlay
								disableButtonsControls
								disableDotsControls
								mouseTracking
								autoPlayInterval={1000}
								items={items}
								responsive={responsive}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Progress;
