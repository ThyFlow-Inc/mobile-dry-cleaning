import Link from 'next/link';

const HowItWorks = () => {
	return (
		<div>
			<section id="#how-it-works">
				<div className="how-it-works">
					<div className="how-it-works-text">How It Works</div>

					<div className="how-it-works-items">
						<div className="group show-on-scroll">
							<div className="group-image">
								<img
									src="assets/How_It_Works/items/1/vaadin_area-select@3x.png"
									alt="how it works item"
								/>
							</div>
							<div className="group-text">Select the service you need</div>
						</div>

						<div className="group show-on-scroll">
							<div className="group-image">
								<img
									src="assets/How_It_Works/items/2/ant-design_schedule-outlined@3x.png"
									alt="how it works item"
								/>
							</div>
							<div className="group-text">
								Schedule a time for your items to be picked up
							</div>
						</div>

						<div className="group show-on-scroll">
							<div className="group-image">
								<img
									src="assets/How_It_Works/items/3/emojione-monotone_delivery-truck@3x.png"
									alt="how it works item"
								/>
							</div>
							<div className="group-text">
								Get it Delivered between 7:00 PM - 10:00 PM
							</div>
						</div>
					</div>

					<div className="how-it-works-text2">
						<div className="slogan">
							Premium Dry-Cleaning, at your Fingertips
						</div>
						<p>
							highly personalized, convenient,
							<br />
							on-demand dry-cleaning and laundry service.
						</p>
					</div>

					<div className="how-it-works-button">
						<a href="#">
							<div className="get-started-button">Get Started</div>
						</a>
					</div>

					<div className="how-it-works-signup">
						<form
							action="https://forms.zohopublic.com/thyflow/form/SignupProcess/formperma/x_HU6B2P9O-STSVBcMWvj0eSIefzqmyupC2ooGNVdJQ/htmlRecords/submit"
							name="form"
							id="form"
							method="POST"
							acceptCharset="UTF-8"
							encType="multipart/form-data"
						>
							<div className="signup-email">
								<input type="email" name="Email" placeholder="Your Email" />
							</div>
							<div className="signup-city">
								<input type="text" name="SingleLine" placeholder="Your City" />
							</div>
							<div className="signup-submit">
								<button type="submit">Sign Up</button>
							</div>
						</form>
					</div>
				</div>
			</section>
			<style jsx>{`
				/* How It Works Start */

				.how-it-works {
					background: #fff9ea;
					width: 100%;
					height: auto;
				}

				.how-it-works-text {
					display: flex;
					justify-content: center;
					font-family: Lato;
					font-style: normal;
					font-weight: bold;
					font-size: 48px;
					color: #000000;
				}

				.how-it-works-items {
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					margin-top: 60px;
				}

				.how-it-works-items div img {
					width: 60px;
				}

				.how-it-works-items .group {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					opacity: 0;
					transform: translateY(4em);
					transition: transform 4s 0.25s cubic-bezier(0, 1, 0.3, 1),
						opacity 0.3s 0.25s ease-out;
					will-change: transform, opacity;
				}

				.how-it-works-items .group.is-visible {
					opacity: 1;
					transform: rotateZ(0deg);
				}

				.how-it-works-items .group-image {
					width: 100px;
					height: 100px;
					background-color: #3751ff;
					display: flex;
					justify-content: center;
					align-items: center;

					-webkit-border-radius: 50%;
					-o-border-radius: 50%;
					-moz-border-radius: 50%;
					border-radius: 50%;
				}

				.how-it-works-items .group-text {
					font-family: Lato;
					font-style: normal;
					font-weight: bold;
					font-size: 26px;
					color: #000000;
					width: 300px;
					height: 100px;
					text-align: center;
					margin-top: 20px;
				}

				.how-it-works-text2 .slogan {
					font-family: Lato;
					font-style: normal;
					font-weight: 500;
					font-size: 48px;
					line-height: 60px;
					text-align: center;
					color: #1e266d;
					margin-top: 80px;
				}

				.how-it-works-text2 p {
					font-family: Lato;
					font-style: normal;
					font-weight: normal;
					font-size: 18px;
					line-height: 150%;
					text-align: center;
					color: #455880;
					margin-top: 40px;
				}

				.how-it-works-button {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: center;
					margin-top: 50px;
				}

				.how-it-works-button .get-started-button {
					width: 150px;
					height: 50px;
					background: #3751ff;
					border-radius: 100px;
					font-family: Lato;
					font-style: normal;
					font-weight: normal;
					font-size: 16px;
					color: #fff;

					display: flex;
					justify-content: center;
					align-items: center;
				}

				.how-it-works-signup {
					display: flex;
					flex-direction: row;
					justify-content: center;
					margin-top: 15px;
				}

				.how-it-works-signup div {
					margin-right: 5px;
				}

				.how-it-works-signup form {
					display: flex;
					flex-direction: row;
				}

				.how-it-works-signup form input {
					width: 350px;
					height: 50px;
					border: 1px solid #ddd;
					padding: 5px 5px 5px 10px;
					border-radius: 6px;
					font: 16px Lato;
				}

				.how-it-works-signup form button {
					border: 0;
					width: 130px;
					height: 50px;
					background: #3751ff;
					border-radius: 6px;
					font-family: Lato;
					font-style: normal;
					font-weight: normal;
					font-size: 16px;
					color: #fff;

					display: flex;
					justify-content: center;
					align-items: center;
				}

				@media only screen and (max-width: 320px) {
				}

				@media only screen and (max-width: 850px) {
					.how-it-works-signup form {
						flex-direction: column;
					}

					.how-it-works-signup form div {
						margin-bottom: 10px;
					}

					.how-it-works-signup form button,
					.how-it-works-signup form input {
						width: 450px;
					}
				}

				@media only screen and (max-width: 470px) {
					.how-it-works-signup form button,
					.how-it-works-signup form input {
						width: 350px;
					}
				}

				@media only screen and (max-width: 360px) {
					.how-it-works-signup form button,
					.how-it-works-signup form input {
						width: 280px;
					}
				}

				/* Extra small devices (phones, 600px and down) */
				@media only screen and (max-width: 768px) {
					.how-it-works-items {
						flex-direction: column;
					}

					.how-it-works {
						height: auto;
						padding-bottom: 20px;
					}
				}

				@media only screen and (max-width: 968px) {
					.how-it-works-items .group-text {
						width: 150px;
						height: 200px;
					}
				}

				@media only screen and (max-width: 1024px) {
				}

				@media only screen and (max-width: 1200px) {
				}

				/* How It Works End */
			`}</style>
		</div>
	);
};

export default HowItWorks;
