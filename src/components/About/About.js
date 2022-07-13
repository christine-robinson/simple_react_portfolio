import React from 'react';
import './About.css';

const About = () => {
	return (
		<section className='about'>
			<div className='container'>
				<div className='section-title'>
					<h1>About Me</h1>
				</div>
				<div className='box-container'>
					<div className='box personal-details-box'>
						<h1 className='box-heading'>Personal Details</h1>
						<ul>
							<li>Christine Robinson</li>
							<li>02 March 2001</li>
							<li>Thoothukudi, Tamilnadu - 628801</li>
							<li>+91 7871 990 380</li>
						</ul>
					</div>
					<div className='box education-skillset-box'>
						<h1 className='box-heading'>Education & Skillset</h1>
						<ul>
							<li>BSc (IT)</li>
							<li>HTML, CSS, Bootstrap, Javascript</li>
							<li>ReactJS </li>
							<li>NodeJS, ExpressJS, MongoDB</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
