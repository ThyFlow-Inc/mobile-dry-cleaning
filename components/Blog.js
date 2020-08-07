import Link from 'next/link';

const Blog = () => {
	return (
		<div>
			<section id="blog">
				<div className="blog">
					<div className="blog-text">
						<div className="slogan">ThyFlow Blog</div>
					</div>

					<div className="blog-list">
						<div className="list">
							<div className="list-image">
								<img src="assets/Blog/Rectangle 17@3x.png" />
							</div>
							<div className="list-title">Dog Grooming at your fingerprint</div>
						</div>

						<div className="list">
							<div className="list-image">
								<img src="assets/Blog/Rectangle 18@3x.png" />
							</div>
							<div className="list-title">Dog Grooming at your fingerprint</div>
						</div>

						<div className="list">
							<div className="list-image">
								<img src="assets/Blog/Rectangle 19@3x.png" />
							</div>
							<div className="list-title">Dog Grooming at your fingerprint</div>
						</div>
					</div>

					<div className="blog-button">
						<a href="#">
							<div className="read-button">Read Full Blog</div>
						</a>
					</div>
				</div>
			</section>
			<style jsx>{`
				/* Blog Start */

				.blog {
					width: 100%;
					/*height: 670px;*/
					background-color: #fff;
				}

				.blog-text {
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-top: 50px;
				}

				.blog-text .slogan {
					font-family: Lato;
					font-style: normal;
					font-weight: 800;
					font-size: 48px;
					line-height: 80px;
					color: #3751ff;
				}

				.blog-list {
					display: flex;
					flex-direction: row;
					justify-content: center;
					flex-wrap: wrap;
				}

				.blog-list .list img {
					width: 342px;
					height: 284px;
					-webkit-border-radius: 10px;
					-o-border-radius: 10px;
					-moz-border-radius: 10px;
					border-radius: 10px;
				}

				.blog-list .list {
					width: 370px;
					margin: 20px;
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.blog-list .list .list-title {
					font-family: Lato;
					font-style: normal;
					font-weight: 800;
					font-size: 24px;
					color: #000000;
					margin-top: 20px;
				}

				.blog-button {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: center;
					margin-top: 50px;
				}

				.blog-button .read-button {
					width: 300px;
					height: 100px;
					background: #fed385;
					border-radius: 26px;
					font-family: Lato;
					font-style: normal;
					font-weight: bold;
					font-size: 36px;
					line-height: 80px;
					color: #3751ff;

					display: flex;
					justify-content: center;
					align-items: center;
				}

				@media only screen and (max-width: 320px) {
					.blog-list .list img {
						width: 200px;
						height: 150px;
					}

				@media only screen and (max-width: 768px) {
				}

				@media only screen and (max-width: 968px) {
				}

				@media only screen and (max-width: 1024px) {
				}

				@media only screen and (max-width: 1200px) {
				}

				/* Blog End */
			`}</style>
		</div>
	);
};

export default Blog;
