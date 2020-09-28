import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const CTA = () => {
	const typedTextSpan = useRef(null);
	const cursorSpan = useRef(null);

	const textArray = [
		'easiest',
		'safest',
		'cheapest',
		'best',
		'cleanest',
		'smartest',
	];
	const typingDelay = 200;
	const erasingDelay = 100;
	const newTextDelay = 2000;
	let textArrayIndex = 0;
	let charIndex = 0;

	function type() {
		if (charIndex < textArray[textArrayIndex].length) {
			if (!cursorSpan.current.classList.contains('typing'))
				cursorSpan.current.classList.add('typing');
			typedTextSpan.current.textContent += textArray[textArrayIndex].charAt(
				charIndex
			);
			charIndex++;
			setTimeout(type, typingDelay);
		} else {
			cursorSpan.current.classList.remove('typing');
			setTimeout(erase, newTextDelay);
		}
	}

	function erase() {
		if (charIndex > 0) {
			if (!cursorSpan.current.classList.contains('typing'))
				cursorSpan.current.classList.add('typing');
			typedTextSpan.current.textContent = textArray[textArrayIndex].substring(
				0,
				charIndex - 1
			);
			charIndex--;
			setTimeout(erase, erasingDelay);
		} else {
			cursorSpan.current.classList.remove('typing');
			textArrayIndex++;
			if (textArrayIndex >= textArray.length) textArrayIndex = 0;
			setTimeout(type, typingDelay + 1100);
		}
	}

	useEffect(() => {
		if (textArray.length) setTimeout(type, 0);
	}, []);

	return (
		<div>
			<section id="cta">
				<div className="cta">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="cta-text">
									<div className="slogan">
										Ready to oursource your dry cleaning service?
										<p>
											ThyFlow is the{' '}
											<span className="typed-text" ref={typedTextSpan}></span>
											<span className="cursor" ref={cursorSpan}>
												&nbsp;
											</span>{' '}
											way for you to clean your dry cleaning.
										</p>
									</div>
								</div>
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
													placeholder="Enter Your Email"
												/>
											</div>
											<div className="cta-button">
												<a href="#">
													<button>Get Started</button>
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
					height: 350px;
					/*background: #3751ff;*/
					background: #1a202b;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-top: 50px;
					position: relative;
				}

				.cta::before {
					content: '';
					background-image: url('/assets/CTA/Woman-with-dirty-laundry.jpg');
					background-size: cover;
					background-attachment: fixed;
					position: absolute;
					top: 0px;
					right: 0px;
					bottom: 0px;
					left: 0px;
					opacity: 0.3;
				}

				.cta .cta-text .slogan {
					font-family: Lato;
					font-style: normal;
					font-weight: 900;
					font-size: 43px;
					color: #f4af1b;
					text-align: left;
				}

				.cta .cta-text .slogan span.cursor {
					display: inline-block;
					background-color: #ccc;
					margin-left: 0.1rem;
					width: 1.5px;
					animation: blink 1s infinite;
				}

				.cta .cta-text .slogan span.cursor.typing {
					animation: none;
				}

				@keyframes blink {
					0% {
						background-color: #ccc;
					}
					49% {
						background-color: #ccc;
					}
					50% {
						background-color: transparent;
					}
					99% {
						background-color: transparent;
					}
					100% {
						background-color: #ccc;
					}
				}

				.cta .cta-text .slogan span.typed-text {
					color: #f4af1b;
					font-weight: bold;
				}

				/*.cta .cta-text .slogan span:before {
					content: '';
					animation: animate infinite 10s ease;
				}

				@keyframes animate {
					0% {
						content: 'easiest';
					}
					20% {
						content: 'safest';
					}
					40% {
						content: 'cleanest';
					}
					60% {
						content: 'smartest';
					}
					80% {
						content: 'cheapest';
					}
					100% {
						content: 'best';
					}
				}*/

				.cta .cta-text .slogan p {
					font-family: Lato;
					font-style: normal;
					font-weight: 500;
					font-size: 24px;
					color: #ffffff;
					text-align: left;
					margin-top: 10px;
				}

				.cta .cta-text {
					margin-top: 15px;
				}

				.cta .cta-img {
					display: flex;
					align-items: center;
					justify-content: center;
					height: 300px;
				}

				.cta .cta-img img {
					width: 450px;
					height: 250px;
					-webkit-border-radius: 8px;
					-moz-border-radius: 8px;
					-o-border-radius: 8px;
					border-radius: 8px;

					-webkit-box-shadow: 5px 2px 10px #ddd;
					-moz-box-shadow: 5px 2px 10px #ddd;
					-o-box-shadow: 5px 2px 10px #ddd;
					box-shadow: 5px 2px 10px #ddd;
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
					display: flex;
					margin-bottom: 15px;
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
					background: #f4af1b;
					border-radius: 6px;
					font-family: Lato;
					font-style: normal;
					font-weight: normal;
					font-size: 16px;
					color: #00154f;
					margin-left: 5px;

					display: flex;
					justify-content: center;
					align-items: center;
				}

				.cta-download .download-text button:hover {
					background: #db9d18;
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

				@media only screen and (max-width: 360px) {
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
						align-items: center;
					}

					.cta-download .download-text button {
						width: 350px;
						margin-left: 0;
						margin-top: 10px;
					}

					.cta .cta-img img {
						width: 300px;
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
					.cta .cta-text .slogan,
					.cta .cta-text .slogan p {
						text-align: center;
					}

					.cta-download .download-text {
						justify-content: center;
					}
				}

				@media only screen and (max-width: 1200px) {
					/*.cta .cta-text .slogan {
						font-size: 41px;
						text-align: center;
						margin-bottom: 30px;
					}*/
				}

				/* CTA End */
			`}</style>
		</div>
	);
};

export default CTA;
