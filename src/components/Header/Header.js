import React from 'react';
import './Header.css';
import profileImage from '../../assets/img/robin.jpg';
import Navbar from '../Navbar/Navbar';

const Header = () => {
	return (
		<div className='header'>
			<div className='container'>
				<img src={profileImage} alt='MyPhoto' />
				<div className='information'>
					<h2>Christine Robinson</h2>
					<h4>Web Developer</h4>
					<button type='button'>Email Me</button>
				</div>
				<Navbar />
			</div>
		</div>
	);
};

export default Header;
