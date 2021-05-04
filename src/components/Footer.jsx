import { faFacebook, faGithub, faInstagram, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from "react";
import Fade from 'react-reveal/Fade';
import "./../css/App.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <Fade bottom>
        <p className='text-center copyRight py-4' >
            &copy; {new Date().getFullYear()} All Rights Reserve to <a className="myName" href="https://github.com/PriontoAbdullah" rel="noopener noreferrer" target="_blank">Prionto Abdullah</a>
        </p>
        </Fade>

        {/* This is Side Nav  */}
        <motion.div
                    className="d-none d-lg-block"
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        duration:1.7
                    }}
                >
                    <div className="d-flex flex-column sticky-icon-container ">
                        <a href="https://github.com/shahed-swe" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon className="sticky-icon" icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/shahed-talukder/" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon className="sticky-icon" icon={faLinkedin} />
                        </a>
                        <a href="https://www.facebook.com/shahed.talukder32/" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon className="sticky-icon" icon={faFacebook} />
                        </a>
                        <a href="https://shahedtalukder.medium.com//" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon className="sticky-icon" icon={faMedium} />
                        </a>	
                        <a href="https://www.instagram.com/shahed.talukder01/" rel="noopener noreferrer" target="_blank">
                            <FontAwesomeIcon className="sticky-icon" icon={faInstagram} />
                        </a>
                        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=shahedtalukder51@gmail.com`} rel="noopener noreferrer"target="_blank">
                            <FontAwesomeIcon mailto="shahedtalukder51@gmail.com" className="sticky-icon" icon={faMailBulk} />
                        </a>
                        <div className="line" />
                    </div>
                </motion.div>
        </div>
    );
};

export default Footer;
