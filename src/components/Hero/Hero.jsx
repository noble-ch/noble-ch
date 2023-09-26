import React, { useState } from "react";
import { HeroContainer, HeroWrapper, HeroLeft } from "./HeroElements";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
	const [showSubtitle, setShowSubtitle] = useState(false);

	return (
		<main>
			<HeroContainer>
				<HeroWrapper>
					<HeroLeft>
						<ScrollAnimation animateIn="fadeIn">
							<TypeAnimation
								cursor={false}
								sequence={[() => setShowSubtitle(true)]}
								speed={{ type: "keyStrokeDelayInMs", value: 100 }}
								wrapper="h1"
								repeat={0}
							/>
							{showSubtitle && (
								<TypeAnimation
									cursor={true}
									sequence={[
										500,
										"A Full-Stack Developer.",
										1000,
										"A problem solver.",
										1000,
										"An innovative thinker.",
										1000,
										"A....",
										1000,
										"A.... cool guy?",
										1000,
										"Ok...",
										1000,
										"Ok...  I'm running out of ideas...",
										1000,
										"Uhh...",
										1000,
										"Uhh... you can scroll down to see my projects now...",
										300,
										1000,
										"Seriously, my projects are really cool, go check them out!",
										1000,
										"You're uh...",
										1000,
										"You're uh... still here?",
										1000,
										"Ok, this has been fun, but I'm gonna restart the loop now...",
										// 1000,
										// "Or...",
										// 1000,
										// "Or... I could scroll you by force! Muahaha!",
										1000,
										"See ya! :)",
										500
									]}
									speed={50}
									deletionSpeed={65}
									wrapper="h5"
									repeat={Infinity}
								/>
							)}
						</ScrollAnimation>
					</HeroLeft>
				</HeroWrapper>
			</HeroContainer>
		</main>
	);
}

export default Hero;
