import Link from 'next/link';

const Brands = () => {
	return (
		<div>
			<section id="brands">
				<div className="brands">
					<div className="brands-text">
						Trusted by forward-thinking software teams around the world
					</div>
					<div className="first-row">
						<div>
							<img
								src="assets/Brands/DrawKit/logo-2@3x.png"
								alt="brand image"
							/>
						</div>
						<div>
							<img
								src="assets/Brands/Cinemax/logo-4@3x.png"
								alt="brand image"
							/>
						</div>
						<div>
							<img src="assets/Brands/Disney/logo-7@3x.png" alt="brand image" />
						</div>
					</div>
					<div className="second-row">
						<div>
							<img
								src="assets/Brands/Netflix/logo-1@3x.png"
								alt="brand image"
							/>
						</div>
						<div>
							<img src="assets/Brands/Figma/logo-3@3x.png" alt="brand image" />
						</div>
						<div>
							<img src="assets/Brands/Stripe/logo-5@3x.png" alt="brand image" />
						</div>
						<div>
							<img src="assets/Brands/Google/logo-6@3x.png" alt="brand image" />
						</div>
					</div>
				</div>
			</section>
			<style jsx>{`
				/* Brands Start */

				.brands {
					margin-top: 60px;
					height: 300px;
					background-color: #fff;
				}

				.brands .first-row img,
				.brands .second-row img {
					width: 100px;
				}

				.brands .first-row {
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					margin-top: 50px;
				}

				.brands .second-row {
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					margin-top: 40px;
				}

				.brands-text {
					font: 16px Lato;
					text-align: center;
					font-style: normal;
					font-weight: normal;
					line-height: 50px;
					color: rgba(69, 88, 128, 0.5);
				}

				@media only screen and (max-width: 320px) {
					.brands-text {
						margin-top: -100px;
					}
				}

				/* Extra small devices (phones, 600px and down) */
				@media only screen and (max-width: 768px) {
				}

				@media only screen and (max-width: 968px) {
					.brands .first-row img,
					.brands .second-row img {
						width: 70px;
					}
				}

				@media only screen and (max-width: 1024px) {
				}

				@media only screen and (max-width: 1200px) {
				}

				/* Brands End */
			`}</style>
		</div>
	);
};

export default Brands;
