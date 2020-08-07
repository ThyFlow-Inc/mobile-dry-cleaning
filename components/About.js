import Link from 'next/link';

const About = () => {
	return (
		<div>
			<section id="about">
				<div className="about">
					<div className="about-text">
						<div className="slogan">
							Put your Dry Cleaning
							<br />
							on Automation
						</div>
					</div>

					<div className="about-features">
						<div className="container">
							<div className="row">
								<div className="col-md-6">
									<div className="about-image">
										<img src="assets/About/Group 6@3x.png" />
									</div>
								</div>
								<div className="col-md-6 about-list">
									<div className="list">
										<div className="row">
											<div className="col-3">
												<div className="list-image">
													<img src="assets/About/Icons/Icon@3x.png" />
												</div>
											</div>
											<div className="col-9">
												<div className="list-title">Convenient</div>
												<div className="list-detail">
													Hassle-free dry cleaning and laundry done for you when
													you need it.
												</div>
											</div>
										</div>
									</div>

									<div className="list">
										<div className="row">
											<div className="col-3">
												<div className="list-image">
													<img src="assets/About/Icons/Rectangle 3@3x.png" />
												</div>
											</div>
											<div className="col-9">
												<div className="list-title">The Process</div>
												<div className="list-detail">
													Easy three-step process to get your dry-cleaning and
													laundry done.
												</div>
											</div>
										</div>
									</div>

									<div className="list">
										<div className="row">
											<div className="col-3">
												<div className="list-image">
													<img src="assets/About/Icons/Rectangle 4@3x.png" />
												</div>
											</div>
											<div className="col-9">
												<div className="list-title">Premium Quality</div>
												<div className="list-detail">
													We have evaluated and chose to partner with the top
													local dry cleaners to ensure your clothing is in the
													best hands.
												</div>
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
				/* About Start */

				.about {
					width: 100%;
					background-color: #fff;
				}

				.about-text {
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-top: 50px;
				}

				.about-text .slogan {
					font-family: Lato;
					font-style: normal;
					font-weight: 500;
					font-size: 48px;
					line-height: 60px;
					text-align: center;
					color: #1e266d;
				}

				.about-features {
					margin-top: 120px;
				}

				.about-image img {
					width: 100%;
					margin-top: -130px;
				}

				.about-list div img {
					width: 60px;
				}

				.about-list .list {
					margin-bottom: 50px;
				}

				.about-list .list .list-title {
					font-family: Lato;
					font-style: normal;
					font-weight: 500;
					font-size: 22px;
					line-height: 125%;
					color: #1e266d;
				}

				.about-list .list .list-detail {
					font-family: Lato;
					font-style: normal;
					font-weight: normal;
					font-size: 18px;
					line-height: 27px;
					color: #455880;
					margin-top: 25px;
				}

				@media only screen and (max-width: 320px) {
				}

				/* Extra small devices (phones, 600px and down) */
				@media only screen and (max-width: 768px) {
					.about-list {
						margin-top: 50px;
					}
				}

				@media only screen and (max-width: 968px) {
				}

				@media only screen and (max-width: 1024px) {
				}

				@media only screen and (max-width: 1200px) {
				}

				/* About End */
			`}</style>
		</div>
	);
};

export default About;
