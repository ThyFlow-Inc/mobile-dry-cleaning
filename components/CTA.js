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
									<form
										action="https://forms.zohopublic.com/thyflow/form/InviteForm/formperma/hhZdwWmBg5AwZ1GNN08MYEcY3tDPFStgixYihuf3PTU/htmlRecords/submit"
										method="POST"
										acceptCharset="UTF-8"
										encType="multipart/form-data"
									>
										<div className="download-text">
											<div className="cta-email">
												<input
													type="email"
													name="Email"
													placeholder="Your Email"
												/>
											</div>
											<div className="cta-button">
												<a href="#">
													<button>Get Invite</button>
												</a>
											</div>
										</div>
									</form>
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
					/*font-family: Lato;
					font-style: normal;
					font-weight: 600;
					font-size: 24px;
					text-align: center;
					color: #dfe0eb;*/

					display: flex;
					justify-content: center;
					align-items: center;
					height: 150px;
				}

				.cta-download .download-text a {
					text-decoration: none;
				}

				.cta-download .download-text input[type='email'] {
					width: 350px;
					height: 50px;
					border: 1px solid #ddd;
					padding: 5px 5px 5px 10px;
					border-radius: 6px;
					font: 16px Lato;
				}

				.cta-download .download-text button {
					border: 0;
					width: 130px;
					height: 50px;
					background: #fff;
					border-radius: 6px;
					font-family: Lato;
					font-style: normal;
					font-weight: normal;
					font-size: 16px;
					color: #455880;
					margin-left: 5px;

					display: flex;
					justify-content: center;
					align-items: center;
				}

				.cta-download .download-text button:hover {
					background: #ebebeb;
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
					/*.cta-download .download-buttons .playstore-button {
						width: 100px;
						height: 40px;
						margin-right: 10px;
					}

					.cta-download .download-buttons .playstore-button img {
						width: 20px;
						position: relative;
						left: -5px;
						top: 0;
					}*/

					.cta-download .download-text input[type='email'] {
						width: 300px;
					}
					.cta-download .download-text button {
						width: 300px !important;
					}
				}

				@media only screen and (max-width: 500px) {
					.cta-download .download-text {
						flex-direction: column;
					}

					.cta-download .download-text button {
						width: 350px;
						margin-left: 0;
						margin-top: 10px;
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
