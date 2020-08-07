import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => {
	return (
		<div>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
					integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
					crossorigin="anonymous"
				/>
				<script
					src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
					integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
					crossorigin="anonymous"
				></script>
				<script
					src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
					integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
					crossorigin="anonymous"
				></script>
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
			`}</style>
		</div>
	);
};

export default Layout;
