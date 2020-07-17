import Navbar from './Navbar';
import Head from 'next/head';

const Layout = (props) => {
	return (
		<div>
			<Head>
				<script
					src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
					integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
					crossorigin="anonymous"
				></script>
				<script
					src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
					integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
					crossorigin="anonymous"
				></script>

				<link
					rel="stylesheet"
					href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
					integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
					crossorigin="anonymous"
				/>
			</Head>
			<Navbar />
			{props.children}
			<div className="container">
				<div className="col-md-12">
					<div className="row"></div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
