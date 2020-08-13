import React, { Fragment } from 'react';
import Router from 'next/router';

const GA_TRACKING_ID = 'UA-175391204-1';

// Notice how we track pageview when route is changed
const pageview = (url) => {
	window.gtag('config', GA_TRACKING_ID, {
		page_path: url,
	});
};
Router.events.on('routeChangeComplete', (url) => pageview(url));

export default ({ Component, pageProps }) => {
	return (
		<Fragment>
			<Component {...pageProps} />
		</Fragment>
	);
};
