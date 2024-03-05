import React from 'react';
import Header from './Header';
import Home from './Home';
import ServiceCount from './ServiceCount';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { AnimatePresence } from 'framer-motion';
import HomeSocialLinks from '../components/HomeSocialLinks';
import { Socials } from '../utils/helper';
import ParticlesContainer from './ParticlesContainer';

const App = () => {
	return (
		<div className='w-full xl:w-[1600px] py-32 px-4 lg:px-12 pr-4 lg:pr-32'>
			{/* particles container */}
			<ParticlesContainer />
			{/* header */}
			<Header />
			{/* home container */}
			<Home />
			{/* services count cards */}
			<ServiceCount />
			{/* about container */}
			<About />
			{/* skills container */}
			<Skills />
			{/* projects container */}
			<Projects />
			{/* contact container */}
			<Contact />
			{/* footer container */}
			<div className='w-full flex flex-col items-center justify-start mt-32 mb-12'>
				<p className='text-3xl tracking-wide text-texlight'>Dolly Aggarwal</p>
				<div className='flex items-center justify-center gap-16 mt-16'>
					<AnimatePresence>
						{Socials &&
							Socials.map((item, index) => (
								<HomeSocialLinks key={index} data={item} index={index} />
							))}
					</AnimatePresence>
				</div>

				<div className='w-full grid grid-cols-1 lg:grid-cols-3 mt-12'>
					<p className='text-texlight text-center'>
						Skills: Full Stack Development, JavaScript, React,
						Node.js,Express.js, MongoDB, Firebase
					</p>
					<p className='text-texlight text-center'>
						© 2024 Dolly Aggarwal. All rights reserved. <br />
						Privacy Policy | Terms of Service
						<br />
						Location: Faridabad, Haryana, India
					</p>
					<div className='w-full flex flex-col items-center justify-center gap-3'>
						<p className='text-texlight text-center'>
							dollyaggarwal1712@gmail.com
						</p>
						<p className='text-texlight text-center'>+91 80763-51049</p>
						<a
							href='/assets/CV(full stack).pdf'
							target='_blank'
							rel='noopener noreferrer'>
							<p className='text-primary text-center'>Hire Me</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
