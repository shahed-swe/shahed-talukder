import React from 'react';
import AllServices from '../data/AllServices';
import './../css/App.css';
import SingleService from './SingleService';

const Services = () => {
	return (
		<section
			className="services-container"
			name="services"
			id="services"
			data-aos="fade-up"
		>
			<div className="container">
				<div className="row align-items center justify-content-center">
					<div className="common pt-5">
						<h1 className="mainHeader mt-5">Offering to my clients</h1>
						<p className="mainContent">I Do Front-end or Full stack Web-development with High Accuracy</p>
						<div className="commonBorder" />
					</div>
					<div className="row serviceRow" data-aos="fade-up">
						{AllServices.map((service) => <SingleService key={service.id} service={service} />)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
