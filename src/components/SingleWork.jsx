import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './../css/App.css';

const SingleWork = ({ work }) => {
	return (
		<Col className="my-3" xs={12} md={6} lg={4}>
			<Fade bottom>
				<div className="single-work">
					<div className="work-img-container">
						<img className="work-img" src={work.photo} alt={work.name} />
					</div>
					<div className="p-2">
						<h4 className="project-name py-2">{work.name}</h4>
						<p className="project-description">{work.description}</p>
					</div>

					{work.technologies.map((item, index) => (
						<div className="technologies px-2 m-1" key={index}>
							{item.name}
						</div>
					))}

					<Row>
						<Col className="text-center py-3" xs={12}>
							<a href={work.github} rel="noopener noreferrer" target="_blank">
								<FontAwesomeIcon className="work-icon" title="Go to Github" icon={faGithub} />
							</a>
							<a href={work.website} rel="noopener noreferrer" target="_blank">
								<FontAwesomeIcon className="work-icon" title="Visit Website" icon={faExternalLinkAlt} />
							</a>
						</Col>
					</Row>
				</div>
			</Fade>
		</Col>
	);
};

export default SingleWork;
