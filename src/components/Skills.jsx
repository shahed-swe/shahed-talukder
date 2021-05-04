import React from 'react';
import bootstrap from '../images/icon/bootstrap.png';
import cProgramming from '../images/icon/cprogram.png';
import chromeDev from '../images/icon/chromedev.png';
import css from '../images/icon/css.png';
import ecmascript6 from '../images/icon/ecma.png';
import expressjs from '../images/icon/express.png';
import figma from '../images/icon/figma.png';
import firebase from '../images/icon/firebase.png';
import git from '../images/icon/git.png';
import heroku from '../images/icon/heroku.png';
import html from '../images/icon/html.png';
import javascript from '../images/icon/js.png';
import material from '../images/icon/meta.png';
import mongodb from '../images/icon/mongo.png';
import mysql from '../images/icon/mysql.png';
import netlify from '../images/icon/netify.png';
import nodejs from '../images/icon/nodejs.png';
import npm from '../images/icon/npm.png';
import python from '../images/icon/python.png';
import reactrouter from '../images/icon/react-router.png';
import react from '../images/icon/react.png';
import reactstrap from '../images/icon/react42.png';
import redux from '../images/icon/redux.png';
import restAPI from '../images/icon/rest-api.png';
import sass from '../images/icon/sass.png';
import slack from '../images/icon/slack.png';
import tailwind from '../images/icon/tailwind.png';
import trello from '../images/icon/trello.png';
import vscode from '../images/icon/vs-code.png';
import webpack from '../images/icon/webpack.png';
import wordpress from '../images/icon/wordpress.png';
import django from '../images/icon/django-logo.png';
import aws from '../images/icon/aws.png';
import digitalocean from '../images/icon/digitalocean.png';
import azure from '../images/icon/azure.png';
import './../css/App.css';

const Skills = () => {
	return (
		<section className="skills-container" name="skills" id="skills" data-aos="zoom-in">
			<div className="common my-5 pt-5">
				<h1 className="mainHeader">What I Am Good At</h1>
				<div className="commonBorder" />
			</div>

			<div className="expertise mt-4">
				<div className="d-flex justify-content-center mb-4">
					<h3 className="pl-3"> Expertise</h3>
				</div>
				<div className="row d-flex justify-content-center align-items-center">
					<div>
						<img src={javascript} width="48px" className="mx-4 my-3" alt="skill-icon"/>
						<figcaption className="mx-2">JavaScript</figcaption>
					</div>
					<div>
						<img src={ecmascript6} width="50px" className="mx-4 my-3" alt="skill-icon"/>
						<figcaption className="mx-4 pl-2">ES 6</figcaption>
					</div>
					
					<div>
						<img src={reactstrap} width="50px" className="mx-4 my-3" alt="skill-icon"/>
						<figcaption className="mx-3">Reactstrap</figcaption>
					</div>
					<div>
						<img src={html} width="50px" className="mx-4 my-3" alt="skill-icon"/>
						<figcaption className="mx-3">HTML 5</figcaption>
					</div>
					<div>
						<img src={css} width="45px" className="mx-4 my-3" alt="skill-icon"/>
						<figcaption className="mx-4">CSS 3</figcaption>
					</div>
					<div>
						<img src={bootstrap} width="70px" className="mx-4 my-2" alt="skill-icon"/>
						<figcaption className="mx-3 mt-3">Bootstrap 5</figcaption>
					</div>
					<div>
						<img src={django} width="70px" className="mx-4 my-2" alt="skill-icon"/>
						<figcaption className="mx-3 mt-3">Django</figcaption>
					</div>
                    <div>
						<img src={python} width="40px" className="mx-4 my-3 mt-4" alt="skill-icon"/>
						<figcaption className="mx-3 mt-2">Python</figcaption>
					</div>
                    <div>
						<img src={mysql} width="50px" className="mx-4 my-3" alt="skill-icon"/>
						<figcaption className="mx-4 mt-3">MySQL</figcaption>
					</div>
				</div>
			</div>

			<div className="comfortable mt-5">
				<div className="d-flex justify-content-center mb-4 mt-5">
					<h3 className="pl-3"> Comfortable</h3>
				</div>
				<div className="row d-flex justify-content-center align-items-center">
					<div>
						<img src={material} width="50px" className="mx-4 my-3" alt="skill-icon"/>
						<figcaption className="mx-2">Material UI</figcaption>
					</div>
                    <div>
						<img src={react} width="55px" className="mx-4 my-2" alt="skill-icon"/>
						<figcaption className="mx-3 mt-3">React 17</figcaption>
					</div>
					<div>
						<img src={reactrouter} width="68px" className="mx-4 my-3" alt="skill-icon"/>
						<figcaption className="mt-4 mx-2">React Router</figcaption>
					</div>
					<div>
						<img src={sass} width="55px" className="mx-4 my-3" alt="skill-icon"/>
						<figcaption className="mx-4 pl-2">Sass</figcaption>
					</div>
					<div>
						<img src={nodejs} width="46px" className="mx-4 my-2" alt="skill-icon"/>
						<figcaption className="mx-3 mt-3">Node.js</figcaption>
					</div>
					
					<div>
						<img src={mongodb} width="58px" className="mx-4 my-2" alt="skill-icon"/>
						<figcaption className="mx-3 mt-3">MongoDB</figcaption>
					</div>
					<div>
						<img src={wordpress} width="60px" className="mx-4 my-2" alt="skill-icon"/>
						<figcaption className="mx-3 mt-3">Wordpress</figcaption>
					</div>
					
					<div>
						<img src={netlify} width="50px" className="mx-4 my-3" alt="skill-icon"/>
						<figcaption className="mx-4 mt-3">Netlify</figcaption>
					</div>
				</div>
			</div>

			<div className="familiar mt-5">
				<div className="d-flex justify-content-center mb-4 mt-5">
					<h3 className="pl-3"> Familiar</h3>
				</div>
				<div className="row d-flex justify-content-center align-items-center">
					<div>
						<img src={redux} width="50px" className="mx-4 my-3" alt="skill-icon"/>
						<figcaption className="mx-4">Redux</figcaption>
					</div>
					<div>
						<img src={tailwind} width="50px" className="mx-4 my-4" alt="skill-icon"/>
						<figcaption className="mx-3">Tailwind</figcaption>
					</div>
					<div>
						<img src={restAPI} width="100px" className="mx-4 my-3" alt="skill-icon"/>
						<figcaption className="mx-4 pl-2">REST API</figcaption>
					</div>
                    <div>
						<img src={expressjs} width="52px" className="mx-4 my-2" alt="skill-icon"/>
						<figcaption className="mx-3 mt-3">Express.js</figcaption>
					</div>
					<div>
						<img src={cProgramming} width="50px" className="mx-4 my-3 ml-5" alt="skill-icon"/>
						<figcaption className="ml-2 mt-2">C Programming</figcaption>
					</div>
					<div>
						<img src={firebase} width="48px" className="mx-4 my-3 pl-3" alt="skill-icon"/>
						<figcaption className="mx-4 mt-4">Firebase</figcaption>
					</div>
					<div>
						<img src={heroku} width="47px" className="mx-3 my-3" alt="skill-icon"/>
						<figcaption className="mx-2 mt-4">Heroku</figcaption>
					</div>
				</div>
			</div>

			<div className="tools mt-5">
				<div className="d-flex justify-content-center mb-4 mt-5">
					<h3 className="pl-3"> Tools</h3>
				</div>
				<div className="row d-flex justify-content-center align-items-center pb-3">
					<div>
						<img src={git} width="50px" className="mx-4 my-2" alt="skill-icon"/>
						<figcaption className="mx-4 pl-2 mt-3">Git</figcaption>
					</div>
					<div>
						<img src={trello} width="45px" className="mx-4 my-3" alt="skill-icon"/>
						<figcaption className="mx-4 mt-3">Trello</figcaption>
					</div>
					<div>
						<img src={slack} width="60px" className="mx-4 my-3" alt="skill-icon"/>
						<figcaption className="mx-4 pl-2">Slack</figcaption>
					</div>
					<div>
						<img src={vscode} width="45px" className="mx-4 my-3" alt="skill-icon"/>
						<figcaption className="mx-3 mt-3">VS Code</figcaption>
					</div>
					<div>
						<img src={chromeDev} width="50px" className="mx-4 my-2 ml-5" alt="skill-icon"/>
						<figcaption className="mx-2 mt-3">Chrome Dev Tools</figcaption>
					</div>
					<div>
						<img src={npm} width="65px" className="mx-4 my-4" alt="skill-icon"/>
						<figcaption className="mx-4 mt-4 pl-2">NPM</figcaption>
					</div>
					<div>
						<img src={webpack} width="60px" className="mx-4 my-2" alt="skill-icon"/>
						<figcaption className="mx-3 mt-2">Webpack</figcaption>
					</div>
					<div>
						<img src={figma} width="35px" className="mx-4 my-3 pl-2" alt="skill-icon"/>
						<figcaption className="mx-3 mt-3">Figma</figcaption>
					</div>
					<div>
						<img src={aws} width="45px" className="mx-4 my-3 pl-2" alt="skill-icon"/>
						<figcaption className="mx-3 mt-3">AWS Console</figcaption>
					</div>
					<div>
						<img src={azure} width="65px" className="mx-4 my-3 pl-2" alt="skill-icon"/>
						<figcaption className="mx-3 mt-3">Azure VM</figcaption>
					</div>
					<div>
						<img src={digitalocean} width="50px" className="mx-4 my-3 pl-2" alt="skill-icon"/>
						<figcaption className="mx-3 mt-3">Digital Ocean</figcaption>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
