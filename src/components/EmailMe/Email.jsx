import  { useRef, useState } from "react";
import "./Email.css";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const contactData = [
	{
		id: 1,
		contact_name: "Phone",
		contact_info: "+2519 4938 4989",
		icon: "fa fa-phone"
	},
	{
		id: 2,
		contact_name: "Email",
		contact_info: "nobledarm@gmail.com",
		icon: "fa fa-envelope"
	},
	{
		id: 3,
		contact_name: "Location",
		contact_info: "Adama, Ethiopia",
		icon: "fa fa-map-marker"
	}
];
const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const userId = process.env.REACT_APP_USER_ID;
// const recaptchaSiteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

const Email = (e) => {
	const form = useRef();

	const [recaptchaValue, setRecaptchaValue] = useState("");

	const handleRecaptchaChange = (value) => {
		setRecaptchaValue(value);
	};
	const sendEmail = (e) => {
		e.preventDefault();
		if (!recaptchaValue) {
			console.error("Failed reCAPTCHA");
			return;
		}

		const templateParams = {
			user_name: e.target.user_name.value,
			user_email: e.target.user_email.value,
			subject: e.target.subject.value,
			message: e.target.message.value,
			"g-recaptcha-response": recaptchaValue,
			service_id: serviceId,
			template_id:  templateId 
		};

		emailjs
			.send(
				templateParams.service_id,
				templateParams.template_id,
				templateParams,
				userId 
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<>
			<div className="reachme-container">
				<div className="reachme-title2">
					<h2>I Want To Hear From You</h2>

					<h3>Contact Me</h3>
				</div>
				<div className="row">
					<div className="col-md-5">
						<div className="reachme-title">
							<div className="row">
								{contactData.map((details) => (
									<div className="contact-info" key={details.id}>
										<div className="contact-details">
											<i className={details.icon}></i>
											<div className="contact-mi">
												<h4 className="icon-name">{details.contact_name}:</h4>
												<p className="d-name">{details.contact_info}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
					<div className="col-md-6 email-me container">
						<form
							action=""
							className="contact-form"
							ref={form}
							onSubmit={sendEmail}>
							<div className="row">
								<div className="col-md-12 mb-3 hire-me-title"></div>
								<div className="col-md-6 ">
									<input
										type="text"
										name="user_name"
										id=""
										placeholder="Enter Your Name"
									/>
								</div>
								<div className="col-md-6 ">
									<input
										type="email"
										name="user_email"
										id=""
										placeholder="Enter Your Email"
									/>
								</div>
								<div className="col-md-12">
									<input
										type="text"
										name="subject"
										id=""
										placeholder="Enter Subject"
									/>
								</div>
								<div className="col-md-12 mb-2">
									<textarea
										name="message"
										id=""
										cols="60"
										rows="8"
										placeholder="Your Message"></textarea>
									<ReCAPTCHA
										sitekey="6Lcvh1IoAAAAAPKT2jxy74Z4liO7JySsYRPYxwY5"
										onChange={handleRecaptchaChange}
									/>

									<button className="hire-btn" type="submit">
										Send Message
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Email;
