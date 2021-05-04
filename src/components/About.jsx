import React from 'react';
import about from '../images/about.svg';
import './../css/App.css';

const About = () => {
	return (
		<section className="about" id="about" data-aos="fade-up">
			<div className="container">
				<div className="common">
					<h1 className="mainHeader">About Me</h1>
					<p className="mainContent">
						Become a world's no 1 full-stack web developer. That's why I am learning and mastering web
						development using my skills. I will not stop until I become the Web Development Hero.
					</p>
					<div className="commonBorder" />
				</div>
				<div className="row alignCenter">
					<div className="col-md-4">
						<div className="about-img">
							<img src={about} alt="man" />
						</div>
					</div>
					<div className="col-md-8">
						<div className="info">
							<h3>
								Hi There
								<span role="img" aria-label="Hand waving" className="ml-2">
									✌
								</span>
							</h3>
							<div className="info-p1">
								I'm a professional and passionate Full-Stack Developer focused on efficiency and constant
								learning. Courteous and enthusiastic, I am interested in Web Applications and everything
								in its orbit. I fascinated by web programming, developing apps and building websites. I
								am gaining knowledge and ideas working in this area. I am keen to gain more experience
								in the field. My goal is to build applications that are scalable and efficient under the
								hood while providing engaging, pixel-perfect user experiences.
							</div>
							<div className="info-p1">
								For this reason, I'm looking for a company willing to offer me a placement among its
								developers. In return, I would offer my full commitment, and be a pleasant and friendly
								addition to a team. I am, therefore currently looking for a job or an internship as a
								web developer. I always want to learn more, do more, and be more. I’m also a firm
								believer that we should never settle. I’m hard working, super curious, passionate,
								committed, and also a fast learner!
							</div>
							<div className="info-p2">
								When I'm not in front of a computer screen, I'm probably watching movies, reading books,
								or crossing off another item on my bucket list.
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
