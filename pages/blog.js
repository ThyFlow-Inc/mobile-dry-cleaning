import Container from '../components/Container';
import Head from 'next/head';

import BlogPost from '../components/BlogPost';

const Blog = () => {
	return (
		<Container>
			<Head>
				<title>ThyFlow - Mobile Dry Cleaning Blog</title>
				<meta
					name="description"
					content="ThyFlow Mobile Dry Cleaning Service Landing Page Blog"
				/>
			</Head>
			<BlogPost />
		</Container>
	);
};

export default Blog;
