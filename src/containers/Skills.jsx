import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Leaf1, Leaf2, about } from '../assets';
import SkillCard from '../components/SkillCard';

const Skills = () => {
	return (
		<section
			id='skills'
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
						Skills
					</p>
					<img src={Leaf2} className='w-6 h-auto object-contain' alt='' />
				</motion.div>
			</div>

			{/* main content */}
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
				{/* content section */}
				<div className='w-full px-8 flex flex-col gap-4 items-start justify-start'>
					<p className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary'>
						My Skills & Achievements
					</p>
					<p className='text-texlight text-base tracking-wide text-justify'>
						Throughout her career, I have demonstrated my capability through a
						series of impressive projects. Notably, I engineered real-time
						applications such as a Chat Application and Social Media Platform
						APIs, employing a diverse tech stack including React, NodeJs,
						ExpressJS, MongoDB, and JWT for robust authentication mechanisms.
					</p>
					<p className='text-texlight text-base tracking-wide text-justify'>
						My meticulous attention to detail and commitment to crafting
						efficient solutions shine through in my work. My projects exhibit a
						keen understanding of user needs and a dedication to delivering
						high-quality, scalable software solutions.
					</p>
					<p className='text-texlight text-base tracking-wide text-justify'>
						Beyond my technical skills, I have effective
						communication and collaborative approach.I thrive in team
						environments, leveraging my rapid learning ability to adapt to new
						challenges and contribute meaningfully to project success. Overall,
						I am a driven and accomplished developer, equipped with
						the expertise and determination to excel in any software development
						role."
					</p>
				</div>

				{/* image section */}
				<div className='w-full flex flex-col gap-4 items-center justify-center px-8'>
					<SkillCard
						skill={'HTML 5'}
						percentage={'90%'}
						color={'#FF3F3F'}
						move={true}
					/>
					<SkillCard skill={'CSS 3'} percentage={'72%'} color={'#008FFF'} />
					<SkillCard
						skill={'Javascript'}
						percentage={'80%'}
						color={'#FFB900'}
						move={true}
					/>
					<SkillCard skill={'Node JS'} percentage={'75%'} color={'#14DB00'} />
					<SkillCard
						skill={'React JS'}
						percentage={'70%'}
						color={'#00FFF3'}
						move={true}
					/>
					<SkillCard
						skill={'Mongo DB & Firebase'}
						percentage={'75%'}
						color={'#FFE400'}
					/>
				</div>
			</div>
		</section>
	);
};

export default Skills;
