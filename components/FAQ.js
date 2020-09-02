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
					</div>

					<div className="accordion" ref={accordionRef}>
						<div className="accordion-item">
							<div className="accordion-item-header">What We Do</div>
							<div className="accordion-item-body">
								<p>
									We pick-up, clean, press and deliver domestic dry cleaning,
									laundry and ironing for residential customers across the Bay
									Area.
								</p>
							</div>
						</div>
						<div className="accordion-item">
							<div className="accordion-item-header">Areas We Cover</div>
							<div className="accordion-item-body">
								<p>San Francisco, San Jose, San Diego, San Mateo</p>
							</div>
						</div>

						<div className="accordion-item">
							<div className="accordion-item-header">
								Do you charge a Delivery Fee?
							</div>
							<div className="accordion-item-body">
								<p>
									A $7.95 Service Fee is charged per order and includes the cost
									of both pickup and delivery.
								</p>
							</div>
						</div>

						<div className="accordion-item">
							<div className="accordion-item-header">
								What if I need to cancel my order?
							</div>
							<div className="accordion-item-body">
								<p>
									No worries, we understand if you need to cancel! Just email{' '}
									<a href="mailto:support@thyflow.com">support@thyflow.com</a>{' '}
									and let us know you need to cancel or reschedule. There are no
									cancellation penalties, just appreciation for giving us the
									heads up!
								</p>
							</div>
						</div>

						<div className="accordion-item">
							<div className="accordion-item-header">How Can I Pay?</div>
							<div className="accordion-item-body">
								<p>We accept payment by credit card only.</p>
							</div>
						</div>

						<div className="accordion-item">
							<div className="accordion-item-header">
								What Credit Cards Do You Accept?
							</div>
							<div className="accordion-item-body">
								<p>We accept Visa, Mastercard and American Express.</p>
							</div>
						</div>

						<div className="accordion-item">
							<div className="accordion-item-header">Support</div>
							<div className="accordion-item-body">
								<p>
									You can just email{' '}
									<a href="mailto:support@thyflow.com">support@thyflow.com</a>{' '}
									for any kind of problems and thoughts.
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
