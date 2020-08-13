import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Fragment } from 'react';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		const isProduction = process.env.NODE_ENV === 'production';
		return { ...initialProps, isProduction };
	}
	render() {
		const { isProduction } = this.props;
		const GA_TRACKING_ID = 'UA-175391204-1';
		return (
			<Html lang="en">
				<Head />
				{/* We only want to add the scripts if in production */}
				{isProduction && (
					<Fragment>
						{/* Global Site Tag (gtag.js) - Google Analytics */}
						<script
							async
							src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
						/>
						<script
							dangerouslySetInnerHTML={{
								__html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
							}}
						/>
					</Fragment>
				)}
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
