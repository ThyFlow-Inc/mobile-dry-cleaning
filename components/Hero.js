import Link from 'next/link';

const Hero = () => {
	return (
		<div>
			<section id="hero">
				<div className="hero">
					<div className="hero-text">
						<div className="slogan">
							Mobile Dry Cleaning and Laundry When
							<br />
							You Need It!
						</div>
						<p>Premium On-Deman dry-cleaners</p>
					</div>

					<div className="hero-buttons">
						<a href="#">
							<div className="clean-button">Clean Clothes</div>
						</a>
						<a href="#">
							<div className="features-button">See the Features</div>
						</a>
					</div>

					<div className="hero-image">
						<div className="images">
							<img src="assets/Hero_Header/Group6@3x.png" />
						</div>
					</div>
				</div>
			</section>
			<style jsx>{`
				/* Hero Start */

				.hero {
					width: 100%;
					/*height: calc(100vh - 100px);*/
					height: 670px;
					background: linear-gradient(
						180deg,
						rgba(242, 249, 255, 0.12) 0%,
						#f2f9ff 100%
					);
				}

				.hero-text {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.hero-text .slogan {
					font: 56px Poppins;
					font-weight: 800;
					text-align: center;
					color: #1e266d;
					margin-top: 50px;
				}

				.hero-text p {
					font-family: Lato;
					font-style: normal;
					font-weight: normal;
					font-size: 18px;
					line-height: 150%;
					text-align: center;
					color: #455880;
					margin-top: 27px;
				}

				.hero-buttons {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: center;
					margin-top: 29px;
				}

				.hero-buttons .clean-button {
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

				.hero-buttons .features-button {
					width: 150px;
					height: 50px;
					background: #fff;
					border-radius: 100px;
					box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
					font-family: Lato;
					font-style: normal;
					font-weight: normal;
					font-size: 16px;
					color: #455880;

					display: flex;
					justify-content: center;
					align-items: center;
				}

				.hero-buttons div {
					margin-right: 22px;
				}

				.hero-image .images {
					display: flex;
					justify-content: center;
					width: 100%;
				}

				.hero-image .images img {
					width: 700px;
				}

				@media only screen and (max-width: 320px) {
					.hero-buttons .clean-button,
					.hero-buttons .features-button {
						font-size: 14px;
						width: 120px;
						height: 40px;
					}

					.hero {
						height: auto;
					}
				}

				/* Extra small devices (phones, 600px and down) */
				@media only screen and (max-width: 768px) {
					.hero-image .images {
						width: 100%;
						padding: 50px;
					}

					.hero-image .images img {
						width: 100%;
					}
				}

				@media only screen and (max-width: 968px) {
				}

				@media only screen and (max-width: 1024px) {
				}

				@media only screen and (max-width: 1200px) {
				}

				/* Hero End */
			`}</style>
		</div>
	);
};

export default Hero;
