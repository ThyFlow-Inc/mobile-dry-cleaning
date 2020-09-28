import Link from 'next/link';

const BlogPost = () => {
	return (
		<div>
			<section id="blog-post">
				<div className="blog-post">
					<div className="post-title-section">
						<div className="post-title">ONE NIGHT AT HIMALAYA</div>

						<div className="post-details">
							<ul>
								<li>
									<i className="far fa-heart post-like-icon"></i>114 Likes
								</li>
								<li>
									<i className="far fa-comment post-comment-icon"></i>41
									Comments
								</li>
								<li>
									<i className="far fa-clock post-time-icon"></i>16 Hours Ago
								</li>
							</ul>
						</div>
					</div>
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="post-content">
									<p className="paragraph">
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the industry's
										standard dummy text ever since the 1500s, when an unknown
										printer took a galley of type and scrambled it to make a
										type specimen book. It has survived not only five centuries,
										but also the leap into electronic typesetting, remaining
										essentially unchanged. It was popularised in the 1960s with
										the release of Letraset sheets containing Lorem Ipsum
										passages, and more recently with desktop publishing software
										like Aldus PageMaker including versions of Lorem Ipsum.Where
										does it come from? Contrary to popular belief,
									</p>
								</div>

								<div className="post-share">
									<div className="social-media-text">Share</div>
									<div className="social-media-links">
										<div>
											<a
												href="https://www.facebook.com/ThyFlow-312710119426057/"
												target="_blank"
											>
												<img
													src="assets/Footer/social/icon-facebook@3x.png"
													alt="social icon"
												/>
											</a>
										</div>
										<div>
											<a
												href="https://www.instagram.com/thyflow/"
												target="_blank"
											>
												<img
													src="assets/Footer/social/icon-instagram@3x.png"
													alt="social icon"
												/>
											</a>
										</div>
										<div>
											<a href="https://twitter.com/thyflow" target="_blank">
												<img
													src="assets/Footer/social/icon-twitter@3x.png"
													alt="social icon"
												/>
											</a>
										</div>
										<div>
											<a href="#">
												<img
													src="assets/Footer/social/icon-linkedin@3x.png"
													alt="social icon"
												/>
											</a>
										</div>
									</div>
								</div>

								<div className="post-comments">
									<div className="comments">
										<div className="comment-picture">
											<img src="assets/Blog/Rectangle 18@3x.png" />
										</div>
										<div className="comment-name">John Doe</div>
										<div className="comment-date">June 1, 2020 9:00 AM</div>
										<div className="comment-comment">
											Lorem Ipsum is simply dummy text of the printing and
											typesetting industry. Lorem Ipsum has been the industry's
											standard dummy text ever since the 1500s, when an unknown
											printer took a galley of type and scrambled it to make a
											type specimen book. It has survived not only five
											centuries, but also the leap into electronic typesetting,
											remaining essentially unchanged. It was popularised in the
											1960s with the release of Letraset sheets containing Lorem
											Ipsum passages, and more recently with desktop publishing
											software like Aldus PageMaker including versions of Lorem
											Ipsum.Where does it come from? Contrary to popular belief,
										</div>
									</div>

									<div className="comments">
										<div className="comment-picture">
											<img src="assets/Blog/Rectangle 18@3x.png" />
										</div>
										<div className="comment-name">John Doe</div>
										<div className="comment-date">June 1, 2020 9:00 AM</div>
										<div className="comment-comment">
											Lorem Ipsum is simply dummy text of the printing and
											typesetting industry. Lorem Ipsum has been the industry's
											standard dummy text ever since the 1500s, when an unknown
											printer took a galley of type and scrambled it to make a
											type specimen book. It has survived not only five
											centuries, but also the leap into electronic typesetting,
											remaining essentially unchanged. It was popularised in the
											1960s with the release of Letraset sheets containing Lorem
											Ipsum passages, and more recently with desktop publishing
											software like Aldus PageMaker including versions of Lorem
											Ipsum.Where does it come from? Contrary to popular belief,
										</div>
									</div>

									<div className="comments">
										<div className="comment-picture">
											<img src="assets/Blog/Rectangle 18@3x.png" />
										</div>
										<div className="comment-name">John Doe</div>
										<div className="comment-date">June 1, 2020 9:00 AM</div>
										<div className="comment-comment">
											Lorem Ipsum is simply dummy text of the printing and
											typesetting industry. Lorem Ipsum has been the industry's
											standard dummy text ever since the 1500s, when an unknown
											printer took a galley of type and scrambled it to make a
											type specimen book. It has survived not only five
											centuries, but also the leap into electronic typesetting,
											remaining essentially unchanged. It was popularised in the
											1960s with the release of Letraset sheets containing Lorem
											Ipsum passages, and more recently with desktop publishing
											software like Aldus PageMaker including versions of Lorem
											Ipsum.Where does it come from? Contrary to popular belief,
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<style jsx>{`
				/* Blog Start */

				.blog-post {
					width: 100%;
					/*height: 670px;*/
					background-color: #fff;
				}

				.blog-post .post-image img {
					width: 100%;
					height: 400px;
					position: absolute;
				}

				.blog-post .post-title-section {
					width: 100%;
					height: 400px;
					position: relative;

					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					text-align: center;
					background-color: #3751ff;
				}

				.blog-post .post-title-section::before {
					content: '';
					background-image: url('/assets/CTA/Woman-with-dirty-laundry.jpg');
					background-size: cover;
					background-attachment: fixed;
					position: absolute;
					top: 0px;
					right: 0px;
					bottom: 0px;
					left: 0px;
					opacity: 0.2;
				}

				.blog-post .post-title {
					font-family: Lato;
					font-style: normal;
					font-weight: 800;
					font-size: 48px;
					line-height: 80px;
					/*color: #3751ff;*/
					color: #fff;
					z-index: 1;
					letter-spacing: 2px;
				}

				.blog-post .post-title-section .post-details ul li i {
					padding-right: 5px;
				}

				.blog-post .post-title-section .post-details ul {
					display: flex;
					flex-direction: row;
				}

				.blog-post .post-title-section .post-details ul li {
					margin-right: 20px;
					font-family: Lato;
					font-style: normal;
					color: #fff;
					z-index: 1;
				}

				.blog-post .post-content {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					margin-top: 50px;
				}

				.blog-post .post-content p.paragraph {
					/*width: 70%;*/
					font-family: Nunito;
					font-style: normal;
					font-weight: 500;
					color: #000;
					letter-spacing: 2px;
					line-height: 1.8;
				}

				.blog-post .post-content p.paragraph p {
					margin-top: 50px;
				}

				.blog-post .post-share {
					display: flex;
					flex-direction: column;
					position: relative;
					margin-bottom: 50px;
				}

				.blog-post .post-share .social-media-text {
					font-family: Lato;
					font-style: normal;
					font-weight: 600;
					font-size: 18px;
					line-height: 100%;
					color: #1e266d;
					margin-bottom: 5px;
				}

				.blog-post .post-share .social-media-text:after {
					content: '';
					position: absolute;
					width: 100%;
					height: 0.5px;
					background: #1e266d;
					top: 20px;
					left: 0;
				}

				.blog-post .post-share .social-media-links {
					display: flex;
					flex-direction: row;
				}

				.blog-post .post-share .social-media-links div {
					margin-right: 10px;
				}

				.blog-post .post-share .social-media-links img {
					width: 25px;
					height: 25px;
				}

				.blog-post .post-image img {
				}

				.blog-post .post-comments {
					/*background-color: red;*/
				}

				.blog-post .post-comments .comments {
					/*border: 1px solid #ddd;*/
					display: flex;
					flex-direction: column;
					position: relative;
					margin-bottom: 35px;
				}

				.blog-post .post-comments .comments:after {
					content: '';
					display; flex;
					position: relative;
					width: 100%;
					height: 0.5px;
					background: #ddd;
					top: 20px;
					left: 0;
				}

				.blog-post .post-comments .comments .comment-picture img {
					width: 75px;
					height: 75px;
					border-radius: 50%;
					-webkit-border-radius: 50%;
					-o-border-radius: 50%;
					-moz-border-radius: 50%;
				}

				.blog-post .post-comments .comments .comment-name {
					font-family: Lato;
					font-style: normal;
					font-weight: 800;
					font-size: 15px;
					margin-left: 100px;
					margin-top: -70px;
				}

				.blog-post .post-comments .comments .comment-date {
					font-family: Lato;
					font-style: normal;
					font-weight: 800;
					font-size: 12px;
					font-style: italic;
					margin-left: 100px;
					margin-top: 0;
				}

				.blog-post .post-comments .comments .comment-comment {
					font-family: Lato;
					font-style: normal;
					font-weight: 800;
					font-size: 15px;
					text-align: justify;
					padding-left: 100px;
					padding-right: 25px;
					margin-top: 15px;
				}

				/*.blog-post .post-comments .comments {
					border: 1px solid #e3e3e3;
				}*/

				@media only screen and (max-width: 320px) {
				}

				@media only screen and (max-width: 360px) {
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

export default BlogPost;
