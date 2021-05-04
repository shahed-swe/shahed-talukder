import React, { useEffect, useState } from 'react';
import { Container, Nav, Row } from 'react-bootstrap';
import AllProjects from '../data/Allprojects';
import './../css/App.css';
import SingleWork from './SingleWork';

const Portfolio = () => {
	const [ allWorks, setAllWorks ] = useState([]);

	useEffect(() => {
		const featuredProjects = AllProjects.filter((item) => item.status === 'featured');
		setAllWorks(featuredProjects);
	}, []);

	const handleFilterBtnClick = (e) => {
		const selectedProjects = AllProjects.filter((item) => item.category === e.target.value);
		setAllWorks(selectedProjects);
	};

	const handleAllBtnClick = (e) => {
		setAllWorks(AllProjects);
	};

	return (
		<section className="portfolio-container" name="portfolio" id="portfolio">
			<div className="common pt-5" data-aos="fade-up">
				<h1 className="mainHeader mt-5">Projects I have Built</h1>
				<div className="commonBorder" />
			</div>

			<Nav className="projects-container" data-aos="fade-up">
				<div className="project-button-container mb-5">
					<button value="all" onClick={handleAllBtnClick}>
						All <span className="badge">{AllProjects.length}</span>
					</button>
					<button value="full-stack" onClick={handleFilterBtnClick}>
						Full Stack
					</button>
					<button value="front-end" onClick={handleFilterBtnClick}>
						Front End
					</button>
					<button value="landing-page" onClick={handleFilterBtnClick}>
						Landing Page
					</button>
					<button value="others" onClick={handleFilterBtnClick}>
						Others
					</button>
				</div>
			</Nav>

			<Container>
				<Row>{allWorks.map((work) => <SingleWork work={work} />)}</Row>
			</Container>
		</section>
	);
};

export default Portfolio;
