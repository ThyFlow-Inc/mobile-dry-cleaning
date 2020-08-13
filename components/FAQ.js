import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const FAQ = () => {
	const accordionRef = useRef(null);

	useEffect(() => {
		const accordionItemHeaders = accordionRef['current']['childNodes'];
		accordionItemHeaders.forEach((header) => {
			header['childNodes'][0].addEventListener('click', (event) => {
				header['childNodes'][0].classList.toggle('active');
				if (header['childNodes'][0].classList.contains('active')) {
					header[
						'childNodes'
					][1].style.maxHeight = `${header['childNodes'][1].scrollHeight}px`;
				} else {
					header['childNodes'][1].style.maxHeight = 0;
				}
			});
		});
	}, [accordionRef]);

	return (
		<div>
			<section id="faq">
				<div className="faq">
					<div className="faq-intro">
						<div className="faq-button">F.A.Q.</div>
						<div className="faq-header">Frequently Asked Questions</div>
						<div className="faq-alt-text">
							Fusce placerat pretium mauris, vel sollicitudin elit lacinia
							vitae. Quisque sit amet
							<br />
							nisi erat.
						</div>
					</div>

					<div className="accordion" ref={accordionRef}>
						<div className="accordion-item">
							<div className="accordion-item-header">
								<span>Question 1</span>
							</div>
							<div className="accordion-item-body">
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but
									also the leap into electronic typesetting, remaining
									essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop publishing software
									like Aldus PageMaker including versions of Lorem Ipsum.
								</p>
							</div>
						</div>

						<div className="accordion-item">
							<div className="accordion-item-header">Question 2</div>
							<div className="accordion-item-body">
								<p>
									Lorem Ipsum is simply dummy text of the printing and
									typesetting industry. Lorem Ipsum has been the industry's
									standard dummy text ever since the 1500s, when an unknown
									printer took a galley of type and scrambled it to make a type
									specimen book. It has survived not only five centuries, but
									also the leap into electronic typesetting, remaining
									essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum
									passages, and more recently with desktop publishing software
									like Aldus PageMaker including versions of Lorem Ipsum. Lorem
									Ipsum is simply dummy text of the printing and typesetting
									industry. Lorem Ipsum has been the industry's standard dummy
									text ever since the 1500s, when an unknown printer took a
									galley of type and scrambled it to make a type specimen book.
									It has survived not only five centuries, but also the leap
									into electronic typesetting, remaining essentially unchanged.
									It was popularised in the 1960s with the release of Letraset
									sheets containing Lorem Ipsum passages, and more recently with
									desktop publishing software like Aldus PageMaker including
									versions of Lorem Ipsum.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<style jsx>{`
				.faq {
					width: 100%;
					margin-top: 80px;
				}

				.faq .faq-intro {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.faq .faq-intro div:not(:nth-child(3)) {
					margin-bottom: 20px;
				}
				.faq .faq-intro .faq-button {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 200px;
					height: 30px;
					background: #e3f6de;
					border-radius: 16px;

					font-family: Nunito;
					font-style: normal;
					font-weight: normal;
					font-size: 11px;
					line-height: 15px;
					text-align: center;
					letter-spacing: 0.785714px;
					color: #228006;
				}

				.faq .faq-intro .faq-header {
					font-family: Nunito;
					font-style: normal;
					font-weight: normal;
					font-size: 32px;
					line-height: 42px;
					text-align: center;
					letter-spacing: 1.2px;
					color: #1e2022;
				}

				.faq .faq-intro .faq-alt-text {
					font-family: Nunito;
					font-style: normal;
					font-weight: normal;
					font-size: 17px;
					line-height: 27px;
					text-align: center;
					letter-spacing: 0.6px;
					color: #77838f;
				}

				.accordion {
					width: 100%;
					margin: 2rem auto;
					max-width: 1000px;
					/*position: relative;*/
				}

				.accordion-item {
					background-color: #fff;
					color: #111;
					margin: 1rem 0;
					border-radius: 6px;
					border: 1px solid #edeefd;
				}

				.accordion-item-header {
					display: flex;
					align-items: center;
					cursor: pointer;
					position: relative;
					user-select: none;
					width: 100%;

					font-family: Nunito;
					font-style: normal;
					font-weight: normal;
					font-size: 18px;
					letter-spacing: 0.675px;
					color: #1e2022;
					padding: 15px;
				}

				.accordion-item-header::after {
					content: '▾';
					font-size: 26px;
					position: absolute;
					right: 10px;
					color: #000;
					transition: transform 0.2s ease-in-out;
				}

				.accordion-item-header.active::after {
					transform: rotate(180deg);
				}

				.accordion-item-body {
					max-height: 0;
					overflow: hidden;
					transition: max-height 0.2s ease-out;
					padding: 0 15px 0 15px;
				}

				.accordion-item-body p {
					padding-top: 10px;
					border-top: 1px solid #edeefd;
					line-height: 1.5rem;

					font-family: Nunito;
					font-style: normal;
					font-weight: normal;
					font-size: 17px;
					line-height: 27px;
					letter-spacing: 0.6px;
					color: #77838f;
				}
				@media only screen and (max-width: 968px) {
					.faq {
						padding: 0 10px 0 10px;
					}
				}
			`}</style>
		</div>
	);
};

export default FAQ;
