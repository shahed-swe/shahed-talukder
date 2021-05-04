import { motion } from 'framer-motion';
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import shahed from './../images/shahed4.png';
import './../css/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import WordsFading from './WordsFading';

const contentVariants = {
	initial: {
		translateY: '100vh',
		opacity: 0
	},

	animate: {
		translateY: '0vh',
		opacity: 1,
		transition: {
			duration: 0.8,
			when: 'beforeChildren'
			// staggerChildren: 0.4,
		}
	}
};

const Home = () => {
	return (
		<section className="home-container" id="home">
			<motion.div className="content-container" variants={contentVariants} initial="initial" animate="animate">
				<h4 className="welcome-content">WELCOME TO MY PLACE</h4>
				<h1 className="main-content">
					Hi, I’m Shahed Talukder
					<motion.span
						drag={true}
						dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
						className="hand"
						animate={{ rotate: [ 0, 20, 0, 20, 0, 0, 0, 0, 0, 0 ] }}
						transition={{ yoyo: Infinity, duration: 1.7 }}
					>
						<span role="img" aria-label="Hand waving">
							👋
						</span>
					</motion.span>
				</h1>

				<div className="skill-animation">
					<span className="skill-content">
						A <WordsFading /> Full-Stack developer
					</span>
				</div>

				<div className="button-group">
					<a
						href="https://drive.google.com/file/d/1H7u2K16gZPglouB6SEoTPlbRJWGIagp3/view?usp=sharing"
						rel="noopener noreferrer"
						target="_blank"
					>
						<button className="button btn-outline mb-2">Resume</button>
					</a>
					<button className="button btn-smart mb-2" onClick={() => scroll.scrollToBottom()}>
						<FontAwesomeIcon icon={faUser} />
					</button>
				</div>
			</motion.div>

			<motion.div
				className="svg-container"
				// animate={{ translateY: [ -20, 0, -20, 0 ] }}
				// transition={{ yoyo: Infinity, duration: 8 }}
				initial="initial"
			>
				<img className="svg" src={shahed} alt="shahed" />
			</motion.div>
		</section>
	);
};

export default Home;
