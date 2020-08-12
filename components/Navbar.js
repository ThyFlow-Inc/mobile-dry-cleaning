import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Navbar = () => {
	const [hamburger, setHamburger] = useState('hamburger');
	const [navLinks, setNavLinks] = useState('navbar-nav nav-links');

	const [scrollTop, setScrollTop] = useState('scroll-top');
	const [header, setHeader] = useState('');

	const scrollRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrollTop('scroll-top open');
				setHeader('sticky');
			} else {
				setScrollTop('scroll-top');
				setHeader('');
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [scrollTop]);

	const handleHamburger = () => {
		if (hamburger === 'hamburger') {
			setHamburger('hamburger toggle');
			setNavLinks('navbar-nav nav-links active');
		} else {
			setHamburger('hamburger');
			setNavLinks('navbar-nav nav-links');
		}
	};
	return (
		<div style={{ display: 'unset' }}>
			<header id="home" className={header}>
				<img className="logo" src="assets/Logo/ThyFlow@3x.png" alt="Logo" />
				<div>
					<img
						src="assets/Dots/logo@3x.png"
						width="100"
						className="dots"
						alt="dots"
					/>
				</div>
				<nav className="navbar">
					<ul className={navLinks}>
						<li>
							<a href="#home" aria-label="Home">
								Home
							</a>
						</li>
						<li>
							<a href="#about">Features</a>
							<i className="fa fa-angle-down" aria-hidden="true"></i>
							<ul className="sub-menu">
								<li>
									<a href="#">About 1</a>
								</li>
								<li>
									<a href="#">About 2</a>
								</li>
								<li>
									<a href="#">About 3</a>
								</li>
							</ul>
						</li>
						<li>
							<Link href="#testimonials">
								<a>Testimonials</a>
							</Link>
						</li>
						<li>
							<Link href="#blog">
								<a>Blog</a>
							</Link>
						</li>
						<li>
							<Link href="#faq">
								<a>FAQ</a>
							</Link>
						</li>
						<li>
							<Link href="#footer">
								<a>Contact</a>
							</Link>
						</li>
					</ul>
				</nav>
				<a href="#" className="contact-us">
					<button>Contact Us</button>
				</a>
				<div className={hamburger} onClick={handleHamburger}>
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</div>
			</header>
			<a href="#home" aria-label="Scroll Top">
				<div className={scrollTop}>
					<i className="fa fa-angle-up" aria-hidden="true"></i>
				</div>
			</a>
			<style jsx>{`
				/* Navbar Start */

				header {
					width: 100%;
					padding: 25px 100px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					/*background-color: #6b00a9;*/
					background-color: #fff;
					transition: all 0.2s ease-out 0s;
					z-index: 4;
				}

				header .logo {
					width: 150px;
					cursor: pointer;
				}

				header .dots {
					position: absolute;
					left: 170px;
					top: 28px;
				}

				header.sticky {
					background-color: rgba(0, 136, 169, 1);
					position: -webkit-sticky;
					position: sticky !important;
					top: 0;
				}

				.navbar ul.nav-links {
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
				}

				.phone {
					font-style: normal;
					font-weight: normal;
					font-size: 16px;
					text-align: right;
					color: #1e266d;
					margin-left: auto;
					margin-right: 10px;
				}

				.nav-links {
					display: flex;
					list-style-type: none;
				}

				.nav-links > li {
					/*display: inline-block;*/
					padding: 0px 20px;
					position: relative;
				}

				.nav-links li a {
					transition: all 0.3s ease 0s;
					text-decoration: none;
					font-family: Lato;
					color: #1e266d;
				}

				.nav-links li a:hover {
					color: #ff2e69;
				}

				.nav-links i {
					margin-left: 5px;
				}

				.sub-menu {
					width: 10rem;
					display: block;
					position: absolute;
					border-top: 3px solid #eb3007;
					background-color: #24252a;
					z-index: 100;
					transition: all 650ms ease;
					visibility: hidden;
					opacity: 0;
					top: 40px;
					left: -20px;
				}

				.sub-menu li {
					line-height: 3rem;
				}

				.sub-menu::before {
					content: '';
					position: absolute;
					top: -2.5rem;
					left: 3rem;
					border: 1.2rem solid transparent;
					border-bottom-color: #eb3007;
				}

				.sub-menu .sub-menu::before {
					top: 0.9rem;
					left: -2.5rem;
					border: 1.2rem solid transparent;
					border-right-color: #eb3007;
				}

				.sub-menu .sub-menu {
					border-top: none;
					border-left: 3px solid #eb3007;
					top: 0;
					left: 100%;
				}

				.nav-links li:hover > .sub-menu {
					top: 40px;
					visibility: visible;
					opacity: 1;
				}

				.sub-menu li:hover > .sub-menu {
					top: 0;
					left: 100%;
				}

				.sub menu li:hover {
					background-color: red;
				}

				.sub-menu li a {
					color: #fff !important;
					width: 100%;
					height: 100%;
					display: block;
					padding-left: 15px;
				}

				.sub-menu li a:hover {
					background-color: #1e266d;
				}

				.contact-us button {
					padding: 8px 15px 8px 15px;
					border: 0;
					background: #3751ff;
					border-radius: 100px;
					color: #fff;
				}

				.hamburger {
					cursor: pointer;
					z-index: 2;
					display: none;
				}

				.hamburger .line {
					width: 30px;
					height: 3px;
					background-color: #000;
					-webkit-border-radius: 20px;
					border-radius: 20px;
				}

				.hamburger:hover .line {
					transition: all 0.3s ease 0s;
					background-color: #3751ff;
				}

				.hamburger .line:nth-child(2) {
					margin: 5px 0 5px 0;
				}

				.times {
					font-size: 40px;
					top: 15px;
					right: 35px;
					color: #fff;
					z-index: 3;
					position: fixed;
					cursor: pointer;
					display: none;
				}

				.nav-links.active {
					width: 100%;
				}

				.toggle {
					position: fixed;
					top: 40px;
					right: 97px;
				}

				.toggle .line {
					background-color: #fff;
				}

				.toggle div.line:nth-child(1) {
					transform: rotate(-45deg) translate(0, 0);
				}

				.toggle div.line:nth-child(3) {
					display: none;
					transition: all 0s ease 0s;
				}

				.toggle div.line:nth-child(2) {
					transform: rotate(45deg) translate(-5px, -6px);
				}

				@media only screen and (max-width: 320px) {
				}

				@media only screen and (max-width: 768px) {
				}

				@media only screen and (max-width: 968px) {
					.contact-us {
						display: none;
					}

					.hamburger {
						display: block;
					}

					.nav-links {
						background-color: #24252a;
						position: absolute;
						right: 0;
						top: 0;
						width: 0;
						height: 100%;
						display: flex;
						flex-direction: column !important;
						justify-content: flex-start !important;
						align-items: flex-start !important;
						position: fixed;
						transition: all 0.5s ease 0s;
						z-index: 2;
						overflow-y: scroll;
					}

					.nav-links li a {
						font-size: 22px;
						transition: all 0.3s ease 0s;
						color: #fff;
					}

					.nav-links > li {
						line-height: 6rem;
					}

					.nav-links li:hover > .sub-menu {
						opacity: 1;
						visibility: visible;
						max-height: initial;
					}

					.sub-menu {
						position: initial;
						border: 3px solid transparent;
						border-left-color: #eb3007;
						max-height: 0;
					}

					.sub-menu::before {
						display: none;
					}

					.sub-menu li a,
					.nav-links i {
						color: #fff;
					}
				}

				@media only screen and (max-width: 1024px) {
				}

				@media only screen and (max-width: 1200px) {
				}

				/* Navbar End */

				/* Scroll Button Start */

				.scroll-top {
					display: none;
				}

				.scroll-top.open {
					background-color: #1e266d;
					width: 50px;
					height: 50px;
					-webkit-border-radius: 50%;
					border-radius: 50%;
					display: flex;
					justify-content: center;
					align-items: center;
					position: fixed;
					bottom: 35px;
					right: 50px;
					z-index: 99;
				}

				.scroll-top.close {
					visibility: hidden;
					pointer-events: none;
				}

				.scroll-top i {
					color: #fff;
					font-size: 24px;
				}

				/* Scroll Button End */
			`}</style>
		</div>
	);
};
export default Navbar;
