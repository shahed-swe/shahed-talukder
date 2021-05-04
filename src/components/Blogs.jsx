import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import AllBlogs from '../data/AllBlogs';
import './../css/App.css';
import SingleBlog from './SingleBlog';

SwiperCore.use([ Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual ]);

const Blogs = () => {
	const [ blogs, setBlogs ] = useState();

	useEffect(() => {
		setBlogs(AllBlogs);
	}, []);

	return (
		<section id="blogs" data-aos="fade-up">
			<Container>
				<div className="common pt-5">
					<h1 className="mainHeader mt-5">Blogs</h1>
					<div className="commonBorder" />
				</div>
				<Swiper
					spaceBetween={30}
					slidesPerView="auto"
					centeredslide="false"
					navigation
					autoplay={true}
					key={blogs && blogs.length}
				>
					{blogs &&
						blogs.map((blog, index) => (
							<SwiperSlide key={index}>
								<SingleBlog key={blog._id} blog={blog} />
							</SwiperSlide>
						))}
				</Swiper>
			</Container>
		</section>
	);
};

export default Blogs;
