import React from 'react';
import './Projects.css';
import user from '../../assets/img/user.png';

const Projects = () => {
	return (
		<section className='projects'>
			<div className='container'>
				<div className='section-title'>
					<h1>Projects</h1>
				</div>
				<div className='gallery'>
					<div className='project'>
						<img src={user} alt='project-thumbnail' />
						<h3 className='project-title'>Project 1</h3>
						<p>Project explanation goes here...</p>
					</div>
					<div className='project'>
						<img src={user} alt='' />
						<h3 className='project-title'>Project 2</h3>
						<p>Project explanation goes here...</p>
					</div>
					<div className='project'>
						<img src={user} alt='' />
						<h3 className='project-title'>Project 3</h3>
						<p>Project explanation goes here...</p>
					</div>
					<div className='project'>
						<img src={user} alt='' />
						<h3 className='project-title'>Project 4</h3>
						<p>Project explanation goes here...</p>
					</div>
					<div className='project'>
						<img src={user} alt='' />
						<h3 className='project-title'>Project 5</h3>
						<p>Project explanation goes here...</p>
					</div>
					<div className='project'>
						<img src={user} alt='' />
						<h3 className='project-title'>Project 6</h3>
						<p>Project explanation goes here...</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
