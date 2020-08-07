import Link from 'next/link';

const HowItWorks = () => {
	return (
		<div>
			<section id="#how-it-works">
				<div className="how-it-works">
					<div className="how-it-works-text">How It Works</div>

					<div className="how-it-works-items">
						<div className="group">
							<div className="group-image">
								<img src="assets/How_It_Works/items/1/vaadin_area-select@3x.png" />
							</div>
							<div className="group-text">Select the service you need</div>
						</div>

						<div className="group">
							<div className="group-image">
								<img src="assets/How_It_Works/items/2/ant-design_schedule-outlined@3x.png" />
							</div>
							<div className="group-text">
								Schedule a time for your items to be picked up
							</div>
						</div>

						<div className="group">
							<div className="group-image">
								<img src="assets/How_It_Works/items/3/emojione-monotone_delivery-truck@3x.png" />
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

				@media only screen and (max-width: 320px) {
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
