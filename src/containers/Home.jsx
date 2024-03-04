import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Hero } from '../assets';
import HeroTypeWritter from '../components/HeroTypeWritter';
import HomeSocialLinks from '../components/HomeSocialLinks';
import { Socials } from '../utils/helper';

const Home = () => {
	return (
		<section
			id='home'
			className='flex items-center justify-center flex-col gap-12 relative'>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
				{/* content section */}
				<div className='w-full h-full flex flex-col items-center lg: items-start justify-center gap-4'>
					<h2 className='text-3xl lg:text-4xl text-texlight'>
						Hello, It's me
						<span className='block tracking-wider text-4xl lg:text-6xl mt-4 text-white'>
							{' '}
							Dolly Aggarwal
						</span>
					</h2>

					{/* typewritter */}
					<h2 className='text-2xl lg:text-4xl text-texlight mt-4'>
						And I'm{' '}
						<HeroTypeWritter
							speed={100}
							words={['a Developer..', 'an Engineer..', 'a Programmer..']}
						/>
					</h2>

					<p className='text-base text-texlight mt-6 text-center lg:text-left'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum
					</p>

					{/* social media links */}
					<div className='flex items-center justify-center gap-16 mt-16'>
						<AnimatePresence>
							{Socials &&
								Socials.map((item, index) => (
									<HomeSocialLinks key={index} data={item} index={index} />
								))}
						</AnimatePresence>
					</div>

					{/* hire me button */}
					<a
						href='#'
            style={{boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.3)"}}
						className='mt-12 border border-[rgba(255,255,255,0.3)] rounded-xl px-8 py-3 active:95 group hover:border-primary'>
						<p className='text-texlight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary'>
							Hire Me
						</p>
					</a>
				</div>
				{/* hero image */}
				<div className='w-full h-full flex items-start justify-center lg:item-center'>
					<motion.img
						initial={{ y: 0 }}
						animate={{ y: [-10, 10, -10] }}
						transition={{
							repeat: Infinity,
							duration: 2,
							ease: 'linear',
						}}
						src={Hero}
						className='w-auto h-auto object-contain'
					/>
				</div>
			</div>
		</section>
	);
};

export default Home;
