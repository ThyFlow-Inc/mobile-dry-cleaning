import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => {
	useEffect(() => {
		const scroll =
			window.requestAnimationFrame ||
			function (callback) {
				window.setTimeout(callback, 100 / 60);
			};

		const elementToShow = document.querySelectorAll('.show-on-scroll');

		function isElementInViewPort(el) {
			if (typeof jQuery === 'function' && el instanceof jQuery) {
				el = el[0];
			}

			const rect = el.getBoundingClientRect();
			return (
				(rect.top <= 0 && rect.bottom >= 0) ||
				(rect.bottom >=
					(window.innerHeight || document.documentElement.clientHeight) &&
					rect.top <=
						(window.innerHeight || document.documentElement.clientHeight)) ||
				(rect.top >= 0 &&
					rect.bottom <=
						(window.innerHeight || document.documentElement.clientHeight))
			);
		}

		function loop() {
			elementToShow.forEach(function (element) {
				if (isElementInViewPort(element)) {
					element.classList.add('is-visible');
				} else {
					element.classList.remove('is-visible');
				}
			});
			scroll(loop);
		}

		loop();
	}, []);

	return (
		<div>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf8" />
				<meta property="og:type" content="website" />
				<meta
					name="og:title"
					property="og:title"
					content="ThyFlow - Mobile Dry Cleaning"
				/>
				<meta
					name="og:description"
					property="og:description"
					content="ThyFlow Mobile Dry Cleaning Service Landing Page"
				/>
				<meta property="og:site_name" content="ThyFlow" />
				<meta
					property="og:url"
					content="https://mobile-dry-cleaning.netlify.app/"
				/>
				<meta
					property="og:image"
					content="https://mobile-dry-cleaning.netlify.app/assets/Logo/Shop-Icon.png"
					alt="ThyFlow"
				/>
				<link rel="shortcut icon" href="assets/favicon/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
					integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
					crossOrigin="anonymous"
				/>
				<script
					src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
					integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
					crossOrigin="anonymous"
				></script>
				<script
					src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
					integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
					crossOrigin="anonymous"
				></script>
				<script src="https://kit.fontawesome.com/a076d05399.js"></script>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				/>
			</Head>
			<Navbar />
			{props.children}
			<Footer />
			<style global jsx>{`
				*,
				*::before,
				*::after {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
				}

				html {
					scroll-behavior: smooth;
				}

				ul {
					list-style: none;
				}

				@font-face {
					font-family: Lato;
					src: url('assets/fonts/Lato/Lato-Regular.ttf');
				}

				@font-face {
					font-family: Poppins;
					src: url('assets/fonts/Poppins/Poppins-Regular.ttf');
				}

				@font-face {
					font-family: Nunito;
					src: url('assets/fonts/Nunito/Nunito-Regular.ttf');
				}
			`}</style>
		</div>
	);
};

export default Layout;
