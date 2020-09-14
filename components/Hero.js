import Link from 'next/link';

const Hero = () => {
	return (
		<div>
			<section id="hero">
				<div className="hero">
					<div className="hero-text">
						<div className="slogan show-on-scroll">
							Mobile Dry Cleaning and Laundry When
							<br />
							You Need It!
						</div>
						<p>Premium On-Deman Dry-Cleaners</p>
					</div>
					<div className="hero-cta">
						<form
							action="https://forms.zohopublic.com/thyflow/form/InviteForm/formperma/hhZdwWmBg5AwZ1GNN08MYEcY3tDPFStgixYihuf3PTU/htmlRecords/submit"
							method="POST"
							acceptCharset="UTF-8"
							encType="multipart/form-data"
						>
							<div className="hero-cta-group">
								<div className="hero-cta-email">
									<input
										type="email"
										name="Email"
										placeholder="Enter Your email"
										id="alt-text"
									/>
								</div>
								<div className="hero-cta-invite">
									<a href="#">
										<button type="submit">Get Started</button>
									</a>
								</div>
							</div>
						</form>
						<div className="alt-text">
							<label htmlFor="alt-text">
								Enter your email to get an invite to ThyFlow Mobile Dry Cleaning
							</label>
						</div>
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
							<img
								src="assets/Hero_Header/Group6@3x.png"
								alt="hero header"
								className="show-on-scroll"
							/>
						</div>
					</div>
				</div>
			</section>
			<style jsx>{`
				/* Hero Start */

				.hero {
					width: 100%;
					/*height: calc(100vh - 100px);*/
					/*height: 790px;*/
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

				.hero-cta {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				.hero-cta-group {
					display: flex;
					flex-direction: row;
				}

				.hero-cta .alt-text {
					position: relative;
					font: 14px Lato;
					left: -47px;
					margin-top: 5px;
					color: #1e266d;
				}

				.hero-cta .hero-cta-email input[type='email'] {
					width: 350px;
					height: 50px;
					border: 1px solid #ddd;
					padding: 5px 5px 5px 10px;
					border-radius: 6px;
					font: 16px Lato;
				}

				.hero-cta .hero-cta-invite button {
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
					margin-left: 5px;

					display: flex;
					justify-content: center;
					align-items: center;
				}

				.hero-text .slogan {
					font: 56px Poppins;
					font-weight: 800;
					text-align: center;
					color: #1e266d;
					margin-top: 50px;
					opacity: 0;
					transform: translateY(4em);
					transition: transform 2s 0.25s cubic-bezier(0, 1, 0.3, 1),
						opacity 0.3s 0.25s ease-out;
					will-change: transform, opacity;
				}

				.hero-text .slogan.is-visible {
					opacity: 1;
					transform: rotateZ(0deg);
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

				.hero-image .images img {
					opacity: 0;
					transform: translateY(4em);
					transition: transform 4s 0.25s cubic-bezier(0, 1, 0.3, 1),
						opacity 0.3s 0.25s ease-out;
					will-change: transform, opacity;
				}

				.hero-image .images img.is-visible {
					opacity: 1;
					transform: rotateZ(0deg);
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

					.hero-cta .hero-cta-email input[type='email'] {
						width: 280px;
					}

					.hero-cta .hero-cta-invite button {
						width: 280px !important;
					}

					.hero-cta .alt-text {
						margin-left: 65px;
					}
				}

				@media only screen and (max-width: 360px) {
					.hero-buttons .clean-button,
					.hero-buttons .features-button {
						font-size: 14px;
						width: 120px;
						height: 40px;
					}

					.hero-cta .hero-cta-email input[type='email'] {
						width: 300px;
					}

					.hero-cta .hero-cta-invite button {
						width: 300px !important;
					}

					.hero-cta .alt-text {
						margin-left: 55px;
					}
				}

				@media only screen and (max-width: 500px) {
					.hero-cta-group {
						flex-direction: column;
					}

					.hero-cta .hero-cta-invite button {
						width: 350px;
						margin-left: 0;
						margin-top: 10px;
					}
				}

				@media only screen and (max-width: 768px) {
					.hero-image .images {
						width: 100%;
						padding: 50px;
					}

					.hero-image .images img {
						width: 100%;
					}

					.hero-cta .alt-text {
						left: -45px;
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
