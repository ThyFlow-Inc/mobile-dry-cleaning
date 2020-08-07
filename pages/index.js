import Container from '../components/Container';
import Head from 'next/head';

import Hero from '../components/Hero';
import Brands from '../components/Brands';
import HowItWorks from '../components/HowItWorks';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import CTA from '../components/CTA';

const Index = () => {
	return (
		<Container>
			<Head>
				<title>ThyFlow - Mobile Dry Cleaning</title>
			</Head>
			<Hero />
			<Brands />
			<HowItWorks />
			<About />
			<Testimonials />
			<Blog />
			<CTA />
		</Container>
	);
};

export default Index;
