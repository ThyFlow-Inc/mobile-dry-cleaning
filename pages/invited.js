import React, { useState, useEffect } from 'react';
import Head from 'next/head';

const Invited = () => {
	useEffect(() => {
		document.body.style = 'background: #60c1e1;';
	}, []);

	return (
		<div>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="Content-Type" content="text/html; charset=utf8" />
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
			</Head>
			<div className="invited-container">
				<div className="invited">
					<div className="logo">
						<img src="/assets/Logo/ThyFlow@3x.png" alt="logo" width="200" />
					</div>
					<div className="text">Thank you!</div>
					<div className="sub-text">We have received your email.</div>
					<div className="home-button">
						<a href="/">
							<button>Home</button>
						</a>
					</div>
				</div>
			</div>
			<style jsx>{`
				* {
					margin: 0;
					padding: 0;
				}

				html {
					width: 100vw;
					height: 100vh;
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

				.invited-container {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					/*margin-top: 35vh;*/
				}

				.invited {
					width: 500px;
					text-align: center;
				}

				.invited div {
					margin-top: 50px;
				}

				.invited .text {
					font: 58px Poppins;
				}

				.invited .sub-text {
					font: 35px Poppins;
				}

				.invited .home-button button {
					width: 180px;
					height: 50px;
					border: 2px solid #fff;
					background-color: #60c1e1;
				}
			`}</style>
		</div>
	);
};

export default Invited;
