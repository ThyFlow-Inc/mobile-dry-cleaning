import Link from 'next/link';

const Footer = () => {
	return (
		<div>
			<section id="footer">
				<div className="footer">
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<div className="company">
									<div className="company-text">ThyFlow</div>
									<div className="company-description">
										The team behind ThyFlow Services, enjoy collaborating to
										create excellent products and services that will unite
										people.The team behind ThyFlow Services, enjoy collaborating
										to create excellent products and services that will unite
										people.
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="pages">
									<div className="pages-text">Pages</div>
									<div>
										<a href="#">Home</a>
									</div>
									<div>
										<a href="#">About</a>
									</div>
									<div>
										<a href="#">News</a>
									</div>
									<div>
										<a href="#">Pricing</a>
									</div>
									<div>
										<a href="#">Contact</a>
									</div>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="social-media">
									<div className="social-media-text">Social Handles</div>
									<div className="social-media-links">
										<div>
											<a href="#">
												<img
													src="assets/Footer/social/icon-facebook@3x.png"
													alt="social icon"
												/>
											</a>
										</div>
										<div>
											<a href="#">
												<img
													src="assets/Footer/social/icon-instagram@3x.png"
													alt="social icon"
												/>
											</a>
										</div>
										<div>
											<a href="#">
												<img
													src="assets/Footer/social/icon-twitter@3x.png"
													alt="social icon"
												/>
											</a>
										</div>
										<div>
											<a href="#">
												<img
													src="assets/Footer/social/icon-linkedin@3x.png"
													alt="social icon"
												/>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<hr className="line" />
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6">
								<div className="copyright">Copyright © 2020 thyflow.com</div>
							</div>
							<div className="col-lg-6">
								<div className="policy-links">
									<div className="link">
										<a href="#">Privacy Policy</a>
									</div>
									<div className="link">
										<a href="#">Term of Use</a>
									</div>
									<div className="link">
										<a href="#">GDPR</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<style jsx>{`
				/* Footer Start */

				.footer {
					width: 100%;
					background-color: #fff;
					padding-top: 50px;
					padding-bottom: 50px;
				}

				.footer .company-text,
				.footer .pages-text,
				.footer .social-media-text {
					font-family: Lato;
					font-style: normal;
					font-weight: 600;
					font-size: 25.1444px;
					line-height: 100%;
					color: #1e266d;
				}

				.footer .company-description {
					font-family: Lato;
					font-style: normal;
					font-weight: normal;
					font-size: 18px;
					line-height: 1.8;
					color: #455880;
				}

				.footer .col-lg-4 {
					display: flex;
					justify-content: center;
				}

				.footer .pages a {
					font-family: Lato;
					font-style: normal;
					font-weight: normal;
					font-size: 18px;
					color: #455880;
				}

				.footer .pages a:hover {
					/*text-decoration: underline !important;*/
					color: #ff2e69;
				}

				.footer .social-media-links {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
				}

				.footer .social-media-links img {
					width: 20px;
					height: 20px;
				}

				.footer .company div:not(:nth-child(1)) {
					margin-top: 30px;
				}

				.footer .pages div:not(:nth-child(1)) {
					margin-top: 22px;
				}

				.footer .social-media-links {
					margin-top: 20px;
				}

				.footer .line {
					border: 1px solid rgba(135, 146, 161, 0.08);
					margin-bottom: 20px;
				}

				.footer .copyright {
					font-family: Lato;
					font-style: normal;
					font-weight: normal;
					font-size: 14px;
					line-height: 27px;
					color: rgba(69, 88, 128, 0.5);
				}

				.footer .policy-links {
					display: flex;
					flex-direction: row;
					justify-content: flex-end;
				}

				.footer .policy-links a {
					font-family: Lato;
					font-style: normal;
					font-weight: normal;
					font-size: 14px;
					line-height: 27px;
					text-align: right;
					color: #455880;
				}

				.footer .policy-links a:hover {
					color: #ff2e69;
				}

				.footer .policy-links div {
					margin-right: 15px;
				}

				@media only screen and (max-width: 320px) {
				}

				/* Extra small devices (phones, 600px and down) */
				@media only screen and (max-width: 768px) {
					.footer .col-lg-4 {
						justify-content: flex-start;
					}
				}

				@media only screen and (max-width: 968px) {
				}

				@media only screen and (max-width: 1024px) {
				}

				@media only screen and (max-width: 1200px) {
					.footer .company,
					.footer .pages,
					.footer .social-media {
						padding-bottom: 50px;
					}

					.footer .copyright,
					.footer .policy-links {
						display: flex;
						justify-content: center;
					}
				}

				/* Footer End */
			`}</style>
		</div>
	);
};

export default Footer;
