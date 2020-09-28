import Container from '../components/Container';
import Head from 'next/head';

import Hero from '../components/Hero';
import Brands from '../components/Brands';
import HowItWorks from '../components/HowItWorks';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Blog2 from '../components/Blog2';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

const Index = () => {
	return (
		<Container>
			<Head>
				<title>ThyFlow - Mobile Dry Cleaning</title>
				<meta
					name="description"
					content="ThyFlow Mobile Dry Cleaning Service Landing Page"
				/>
			</Head>
			<Hero />
			<Brands />
			<HowItWorks />
			<About />
			<Testimonials />
			<Blog2 />
			<Pricing />
			<FAQ />
			<CTA />
		</Container>
	);
};

export default Index;
