import React from 'react';

const Education = () => {
	const windowWidth = window.innerWidth;

	return (
		<section className="experience" data-aos="zoom-in">
			<div className="container">
				<div className="row d-flex align-items-center flex-column">
					<div className="common mt-5">
						<h1 className="mainHeader">Academic Qualifications</h1>
						<div className="commonBorder" />
					</div>
					<div className="experienceDetails  row">
						<div
							className="col py-5 years mr-5 px-0"
							data-aos={windowWidth > 1000 ? 'fade-right' : 'fade-up'}
							data-aos-duration="700"
							data-aos-delay="300"
						>
							<p className="text-right mt-4 firstP">SEP 2017 - AUG 2021</p>
							<p className="text-right mt-4 secondP">APR 2015 - JUL 2017</p>
							<p className="text-right mt-4 thirdP">JAN 2005 - FEB 2015</p>
						</div>
						<div className="main-line col" />
						<div
							className="experienceInfo col pt-5 pb-3 mr-2 detailsInfo"
							data-aos={windowWidth > 1000 ? 'fade-left' : 'fade-up'}
							data-aos-duration="900"
							data-aos-delay="400"
						>
							<div className="firstExp">
								<h4>B.Sc in Software Engineering</h4>
								<p>
									Daffodil International University <br />
									<li className="point">CGPA: 3.89 out of 4.00 (Current) </li>
								</p>
							</div>
							<div className="secondExp">
								<h4>Higher Secondary Certificate</h4>
								<p>
									Sristy Collage, Tangail <br />
									<li className="point">GPA: 4.50 out of 5.00 (Science Studies) </li>
								</p>
							</div>
							<div className="thirdExp">
								<h4>Secondary School Certificate</h4>
								<p>
									Bindubashini Govt. Boys High School, Tangail <br />
									<li className="point">GPA: 4.88 out of 5.00 (Science Studies) </li>
									<li className="point">Recipient of General Grade Scholarship in JSC </li>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
