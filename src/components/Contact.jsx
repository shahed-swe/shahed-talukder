import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import ContactInfo from '../data/ContactInfo';
import './../css/App.css';

const Contact = () => {
	const windowSize = window.innerWidth;
	const [ successMessage, SetSuccessMessage ] = useState(false);
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_wk3ie95', 'template_6536sjf', e.target, 'user_ChRNV7zZacvHHGVWHe4CX').then(
			(result) => {
				console.log(result.text);
				if (result) {
					SetSuccessMessage(true);
				}
			},
			(error) => {
				console.log(error.text);
			}
		);
		e.target.reset();
	};

	return (
		<section className="contact" id="contact">
			<div className="container">
				<div className="common">
					<h1 className="mainHeader">Contact Me</h1>
					<p className="mainContent">Let's Work Together</p>
					<div className="commonBorder" />
				</div>
				<div className="row">
					{ContactInfo.map((contact) => (
						<div
							className="col-md-4 contact-details d-flex flex-column align-items-center"
							data-aos={
								(contact.id === 1 && windowSize > 1000 ? 'fade-up-right' : 'fade-up') ||
								(contact.id === 2 && 'fade-up') ||
								(contact.id === 3 && windowSize > 1000 ? 'fade-up-left' : 'fade-up')
							}
							key={contact.id}
						>
							<p className="blockIcon">
								<FontAwesomeIcon icon={contact.icon} />
							</p>
							<h4>{contact.name}</h4>
							<p>{contact.address}</p>
						</div>
					))}
				</div>
				<div className="contactForm my-5" data-aos="fade-down" >
					<h3 className="text-center">Have You Something to Say ?</h3>
					<p className="text-center">Feel free to message me</p>
					{successMessage && (
						<h4 className="text-center text-white">Your message SuccessFully Send to Prionto</h4>
					)}
					<Form onSubmit={sendEmail}>
						<Form.Group controlId="formGroupName">
							<Form.Control type="text" placeholder="Enter Your Full Name" name="name" />
						</Form.Group>
						<Form.Group controlId="formGroupEmail">
							<Form.Control type="email" placeholder="Enter your Valid Email " name="email" />
						</Form.Group>
						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Control as="textarea" rows={3} placeholder="Write Your Message Here" name="message" />
						</Form.Group>
						<button type="submit" className="button btn-outline py-2">
							Send
						</button>
					</Form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
