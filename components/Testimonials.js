import Link from 'next/link';
import { useEffect, useRef } from 'react';

const Testimonials = () => {
	const cardContainer = useRef(null);

	let moving = false;
	let mouseLastPosition = 0;
	let transform = 0;
	let lastPageX = 0;
	let transformValue = 0;

	const gestureStart = (e) => {
		moving = true;
		mouseLastPosition = e.pageX;
		transform =
			window
				.getComputedStyle(cardContainer.current)
				.getPropertyValue('transform') !== 'none'
				? window
						.getComputedStyle(cardContainer.current)
						.getPropertyValue('transform')
						.split(',')[4]
						.trim()
				: 0;
	};

	const gestureMove = (e) => {
		e.preventDefault();
		if (moving) {
			const diffX = e.pageX - mouseLastPosition;
			if (e.pageX - lastPageX > 0) {
				if (transformValue > 0) {
					return;
				}
			} else {
				if (
					Math.abs(transformValue) >
					cardContainer.current.offsetWidth - window.innerWidth
				) {
					return;
				}
			}
			transformValue = parseInt(transform) + diffX;
			cardContainer.current.style.transform = `translateX(${transformValue}px)`;
		}
		lastPageX = e.pageX;
	};

	const gestureEnd = () => {
		moving = false;
	};

	useEffect(() => {
		if (window.PointerEvent) {
			cardContainer.current.addEventListener('pointerdown', gestureStart);
			cardContainer.current.addEventListener('pointermove', gestureMove);
			cardContainer.current.addEventListener('pointerup', gestureEnd);
			return () => {
				cardContainer.current.removeEventListener('pointerdown', gestureStart);
				cardContainer.current.removeEventListener('pointermove', gestureMove);
				cardContainer.current.removeEventListener('pointerup', gestureEnd);
			};
		} else {
			cardContainer.current.addEventListener('touchdown', gestureStart);
			cardContainer.current.addEventListener('touchmove', gestureMove);
			cardContainer.current.addEventListener('touchup', gestureEnd);

			cardContainer.current.addEventListener('mousedown', gestureStart);
			cardContainer.current.addEventListener('mousemove', gestureMove);
			cardContainer.current.addEventListener('mouseup', gestureEnd);
			return () => {
				cardContainer.current.removeEventListener('touchdown', gestureStart);
				cardContainer.current.removeEventListener('touchmove', gestureMove);
				cardContainer.current.removeEventListener('touchup', gestureEnd);

				cardContainer.current.removeEventListener('mousedown', gestureStart);
				cardContainer.current.removeEventListener('mousemove', gestureMove);
				cardContainer.current.removeEventListener('mouseup', gestureEnd);
			};
		}
	}, []);

	return (
		<div>
			<section id="testimonials">
				<div className="testimonials">
					<div className="testimonials-text">
						<div className="slogan">What others are saying</div>
					</div>

					<div className="testimonials-list">
						<div className="testimonials-container" ref={cardContainer}>
							<div className="list">
								<div className="detail">
									Completely beautiful website and amazing support! This is my
									second website from this author and I love both of the sites
									so much and she has helped me so well when I needed it!
								</div>
								<div className="profile-picture">
									<img
										src="assets/Profile_Picture/image 5@3x.png"
										alt="profile picture"
									/>
								</div>

								<div className="user-title">Happy User</div>
								<div className="fullname">Yusuf Adeyemo</div>
							</div>

							<div className="list">
								<div className="detail">
									Completely beautiful website and amazing support! This is my
									second website from this author and I love both of the sites
									so much and she has helped me so well when I needed it!
								</div>
								<div className="profile-picture">
									<img
										src="assets/Profile_Picture/image 5@3x.png"
										alt="profile picture"
									/>
								</div>

								<div className="user-title">Happy User</div>
								<div className="fullname">Yusuf Adeyemo</div>
							</div>

							<div className="list">
								<div className="detail">
									Really easy to use and customize. easy to understand. Darinka
									helped me with my site! She answers very quickly, a good
									service! Thank you very much!
								</div>
								<div className="profile-picture">
									<img
										src="assets/Profile_Picture/image 6@3x.png"
										alt="profile picture"
									/>
								</div>

								<div className="user-title">Happy User</div>
								<div className="fullname">Yusuf Adeyemo</div>
							</div>

							<div className="list">
								<div className="detail">
									Really pleasing to look at! Documentation (including
									installation instructions) are clear and that is coming from a
									relatively new WordPress user.
								</div>
								<div className="profile-picture">
									<img
										src="assets/Profile_Picture/image 7@3x.png"
										alt="profile picture"
									/>
								</div>

								<div className="user-title">Happy User</div>
								<div className="fullname">Sal Sosoo</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<style jsx>{`
				/* Testimonials Start */

				.testimonials {
					width: 100%;
					background-color: #fff;
				}

				.testimonials-text {
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-top: 50px;
				}

				.testimonials-text .slogan {
					font-family: Lato;
					font-style: normal;
					font-weight: 500;
					font-size: 48px;
					line-height: 60px;
					text-align: center;
					color: #1e266d;
				}

				.testimonials-list {
					display: flex;
					overflow: hidden;
					/*padding-left: 50px;*/
				}

				.testimonials-container {
					display: flex;
				}

				.testimonials-list .list .profile-picture img {
					width: 60px;
					height: 60px;
				}

				.testimonials-list .list {
					width: 370px;
					border: 1px solid rgba(69, 88, 128, 0.2);
					border-radius: 4px;
					margin: 10px;
					display: flex;
					flex-direction: column;
					align-items: center;
					touch-action: none;

					/*flex: 0 0 33.333333%;*/
				}
				.testimonials-list .list .detail {
					font-family: Lato;
					font-style: normal;
					font-weight: normal;
					font-size: 18px;
					line-height: 180%;
					color: #455880;
					width: 80%;
					height: 100%;
					margin-top: 40px;
				}

				.testimonials-list .list .profile-picture {
					margin-top: 67px;
				}

				.testimonials-list .list .user-title {
					font-family: Lato;
					font-style: normal;
					font-weight: 500;
					font-size: 22px;
					line-height: 125%;
					text-align: center;
					color: #1e266d;
					margin-top: 30px;
				}

				.testimonials-list .list .fullname {
					font-family: Lato;
					font-style: normal;
					font-weight: normal;
					font-size: 18px;
					line-height: 180%;
					text-align: center;
					color: #455880;
					margin-bottom: 30px;
				}

				@media only screen and (max-width: 320px) {
				}

				@media only screen and (max-width: 768px) {
				}

				@media only screen and (max-width: 968px) {
				}

				@media only screen and (max-width: 1024px) {
				}

				@media only screen and (max-width: 1200px) {
				}

				/* Testimonials End */
			`}</style>
		</div>
	);
};

export default Testimonials;
