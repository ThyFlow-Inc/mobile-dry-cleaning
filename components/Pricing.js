import Link from 'next/link';

const Pricing = () => {
	return (
		<div>
			<section id="pricing">
				<div className="pricing">
					<div className="pricing-text">
						<div className="slogan">Pricing</div>
					</div>

					<div className="pricing-list">
						<div className="list">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 400 500"
								preserveAspectRatio="xMinYMin meet"
							>
								<path d="M0,150 C150,200 350,0 500,120 L500,00 L0,0 Z"></path>
							</svg>
							<div className="list-title">Personal</div>
							<div className="list-price">
								<span className="dollar-sign">$</span>89
								<span className="per">/mo</span>
							</div>
							<div className="list-features">
								<ul>
									<li>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry
									</li>
									<li>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry
									</li>
									<li>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry
									</li>
									<li>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry
									</li>
								</ul>
							</div>
							<div className="list-button">
								<button>Request a Demo</button>
							</div>
						</div>

						<div className="list">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 400 500"
								preserveAspectRatio="xMinYMin meet"
							>
								<path d="M0,150 C150,200 350,0 500,120 L500,00 L0,0 Z"></path>
							</svg>
							<div className="list-title">Enterprise</div>
							<div className="list-price">
								<span className="dollar-sign">$</span>149
								<span className="per">/mo</span>
							</div>
							<div className="list-features">
								<ul>
									<li>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry
									</li>
									<li>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry
									</li>
									<li>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry
									</li>
									<li>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry
									</li>
								</ul>
							</div>
							<div className="list-button">
								<button>Request a Demo</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<style jsx>{`
				/* Blog Start */

				.pricing {
					width: 100%;
					/*height: 670px;*/
					background-color: #fff;
				}

				.pricing-text {
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-top: 50px;
				}

				.pricing-text .slogan {
					font-family: Lato;
					font-style: normal;
					font-weight: 800;
					font-size: 48px;
					line-height: 80px;
					color: #3751ff;
				}

				.pricing-list {
					display: flex;
					flex-direction: row;
					justify-content: center;
					flex-wrap: wrap;
				}

				.pricing-list svg {
					fill: #3751ff;
					stroke: none;
					position: absolute;
					top: -1px;
					width: 100%;
					height: 100%;
					border-radius: 25px;
					z-index: -1;
				}

				/*.pricing-list .list:before {
					content: '';
					display: block;
					position: absolute;
					border-radius: 100% 50%;
					width: 340px;
					height: 80px;
					background-color: #3751ff;
					right: -5px;
					top: 40px;
				}

				.pricing-list .list:after {
					content: '';
					display: block;
					position: absolute;
					border-radius: 100% 50%;
					width: 300px;
					height: 70px;
					background-color: #3751ff;
					left: 0;
					top: 27px;
				}*/

				.pricing-list .list {
					width: 370px;
					height: 600px;
					/*border: 1px solid rgba(69, 88, 128, 0.5);*/
					border: 1px solid rgba(55, 81, 255, 1);
					border-radius: 25px;
					margin: 10px;
					display: flex;
					flex-direction: column;
					align-items: center;
					position: relative;
					z-index: 1;
				}

				.pricing-list .list .list-title {
					font-family: Lato;
					font-style: normal;
					font-weight: 800;
					font-size: 24px;
					line-height: 80px;
					color: #fff;
					position: absolute;
					left: 40px;
					top: 0;
					user-select: none;
					-webkit-user-select: none;
				}

				.pricing-list .list .list-price {
					font-family: Lato;
					font-style: normal;
					font-weight: 800;
					font-size: 48px;
					line-height: 80px;
					color: #fff;
					position: absolute;
					left: 45px;
					top: 40px;
					user-select: none;
					-webkit-user-select: none;
				}

				.pricing-list .list .list-price .dollar-sign {
					position: relative;
					font-weight: bolder;
					top: -10px;
					left: -5px;
					font-size: 30px;
				}

				.pricing-list .list .list-price .per {
					position: relative;
					font-weight: 500;
					top: -10px;
					left: 5px;
					font-size: 24px;
				}

				.pricing-list .list .list-features {
					font-family: Lato;
					font-style: normal;
					font-size: 18px;
					color: #949494;
					position: relative;
					top: 170px;
				}

				.pricing-list .list .list-features ul li {
					margin-bottom: 10px;
					margin-left: 20px;
					margin-right: 10px;
				}

				.pricing-list .list .list-features ul li:before {
					content: '';
					color: #3751ff;
					display: inline-block;
					transform: rotate(45deg);
					height: 16px;
					width: 8px;
					border-bottom: 4px solid #3751ff;
					border-right: 4px solid #3751ff;
					margin-right: 10px;
				}

				.pricing-list .list .list-button {
					position: absolute;
					bottom: 30px;
				}

				.pricing-list .list .list-button button {
					width: 200px;
					height: 50px;
					background: #3751ff;
					box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
					border: 0;
					border-radius: 100px;
					font-family: Lato;
					font-style: normal;
					font-weight: 500;
					font-size: 18px;
					line-height: 110%;
					text-align: center;
					color: #fff;

					display: flex;
					justify-content: center;
					align-items: center;
				}

				@media only screen and (max-width: 320px) {
				}

				@media only screen and (max-width: 360px) {
					.pricing-list .list .list-price {
						font-size: 36px;
						left: 45px;
						top: 35px;
					}

					.pricing-list .list .list-price .dollar-sign {
						position: relative;
						font-weight: bolder;
						top: -10px;
						left: -5px;
						font-size: 25px;
					}

					.pricing-list .list .list-price .per {
						position: relative;
						font-weight: 500;
						top: -10px;
						left: 5px;
						font-size: 20px;
					}
				}

				@media only screen and (max-width: 768px) {
				}

				@media only screen and (max-width: 968px) {
				}

				@media only screen and (max-width: 1024px) {
				}

				@media only screen and (max-width: 1200px) {
				}

				/* Blog End */
			`}</style>
		</div>
	);
};

export default Pricing;
