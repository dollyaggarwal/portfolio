import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf1, Leaf2, about } from '../assets';

const About = () => {
	return (
		<section
			id='about'
			className='flex items-center justify-center flex-col gap-12 my-12'>
			{/* title */}
			<div className='w-full flex items-center justify-center py-24'>
				<motion.div
					initial={{ opacity: 0, width: 0 }}
					animate={{ opacity: 1, width: 200 }}
					exit={{ opacity: 0, width: 0 }}
					transition={{ delay: 0.4 }}
					className='flex items-center justify-around w-52'>
					<img src={Leaf1} className='w-6 h-auto object-contain' alt='' />
					<p className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
						About
					</p>
					<img src={Leaf2} className='w-6 h-auto object-contain' alt='' />
				</motion.div>
			</div>

			{/* main content */}
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
				{/* image section */}
				<div className='w-full flex items-center justify-center px-8'>
					<div className='w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br from-primary to-secondary relative'>
						<img
							src={about}
							className='w-full rounded-md h-auto object-contain'
							alt=''
						/>
						<div className='absolute w-full h-full -top-3 -left-2 bg-gradient-to-br from-primary to-secondary rounded-md blur-[5px] -z-10'></div>
					</div>
				</div>
				{/* content section */}
				<div className='w-full px-8 flex flex-col gap-4 items-start justify-start'>
					<p className='text-texlight text-base tracking-wide text-justify'>
						I am a skilled Full Stack Developer with expertise in Java,
						JavaScript, and a range of front-end and back-end technologies.Apart from them, I always have enthusiasm
           to learn new things and I am constantly working to improve my skillsets further.
					</p>
					<p className='text-texlight text-base tracking-wide text-justify'>
						With a solid foundation in data structures and algorithms, I have
						successfully tackled approximately 90 LeetCode coding challenges, demonstrating
						my proficiency in algorithmic thinking.
					</p>
					<p className='text-texlight text-base tracking-wide text-justify'>
						Currently pursuing a course in FUll Stack Development to have an hands-on expereince in different technologies through project building.
             Holding a Master's degree in Computer Application and a Bachelor's
						in Software Development, I possesses both theoretical knowledge and practical expertise in the field.
          	</p>
            <p className='text-texlight text-base tracking-wide text-justify'>
            Beyond coding,I enjoy reading, watching podcasts, and painting. With her effective communication, rapid learning ability, 
            and collaborative nature,I bring a dynamic and adaptable approach to every project. To know more about my skillsets, my contact details and portfolio can be found on GitHub and LinkedIn.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
