import Link from 'next/link';

const CTA = () => {
	return (
		<div>
			<section id="cta">
				<div className="cta">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="cta-text">
									<div className="slogan">
										Ready to oursource
										<br />
										your dry cleaning service?
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="cta-download">
									<div className="row">
										<div className="col-md-12">
											<div className="download-text">Download Our App</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<div className="download-buttons">
												<a href="#">
													<div className="playstore-button">
														<img src="assets/CTA/iconfinder_Contat_Us_15-Send_Mail_4211845 1@3x.png" />
														Playstore
													</div>
												</a>
												<a href="#">
													<div className="playstore-button">
														<img src="assets/CTA/iconfinder_Contat_Us_15-Send_Mail_4211845 1@3x.png" />
														Playstore
													</div>
												</a>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<div className="download-suggest">
												Or, take a peek inside our <span>design studio</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<style jsx>{`
				/* CTA Start */

				.cta {
					width: 100%;
					height: 323px;
					background: #3751ff;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-top: 50px;
				}

				.cta .cta-text .slogan {
					font-family: Lato;
					font-style: normal;
					font-weight: 500;
					font-size: 48px;
					color: #ffffff;
					text-align: left;
				}

				.cta-download .row {
					margin-bottom: 20px;
				}

				.cta-download .download-buttons {
					display: flex;
					flex-direction: row;
					justify-content: center;
				}

				.cta-download .download-buttons .playstore-button img {
					width: 20px;
					position: relative;
					left: -15px;
					top: 0;
				}

				.cta-download .download-buttons .playstore-button {
					width: 160px;
					height: 50px;
					background: #ffffff;
					box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
					border-radius: 100px;
					font-family: Lato;
					font-style: normal;
					font-weight: 500;
					font-size: 18px;
					line-height: 110%;
					text-align: center;
					color: #455880;
					margin-right: 20px;

					display: flex;
					justify-content: center;
					align-items: center;
				}

				.cta-download .download-text {
					font-family: Lato;
					font-style: normal;
					font-weight: 600;
					font-size: 24px;
					line-height: 125%;
					text-align: center;
					color: #dfe0eb;
				}

				.cta-download .download-suggest {
					font-family: Lato;
					font-style: normal;
					font-weight: normal;
					font-size: 16px;
					line-height: 125%;
					text-align: center;
					color: #dfe0eb;
				}

				.cta-download .download-suggest span {
					color: #fed385;
				}

				@media only screen and (max-width: 320px) {
					.cta-download .download-buttons .playstore-button {
						width: 130px;
						height: 40px;
						margin-right: 10px;
					}
				}

				@media only screen and (max-width: 768px) {
					.cta {
						height: auto;
					}

					.cta .cta-text .slogan {
						margin-top: 40px;
						margin-bottom: 30px;
						font-size: 41px;
						text-align: center;
					}
				}

				@media only screen and (max-width: 968px) {
				}

				@media only screen and (max-width: 1024px) {
				}

				@media only screen and (max-width: 1200px) {
					.cta .cta-text .slogan {
						font-size: 41px;
						text-align: center;
						margin-bottom: 30px;
					}
				}

				/* CTA End */
			`}</style>
		</div>
	);
};

export default CTA;
