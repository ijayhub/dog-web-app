import React from 'react'
import Navbar from './Navbar';
import dogs from '../assets/dogs.jpg'

const AboutDogs = () => {
  return (
		<div>
			<Navbar/>
			<section className='max-w-7xl mx-auto'>
				<h2 className='aboutdog'>
					ABOUT Dogg_ie
				</h2>
				<div className='grid grid-cols-1 lg:grid-cols-2'>
					<div>
						<img src={dogs} alt='dog' className='rounded-lg mt-28 about' width="150%" height='120%' />
					</div>
					<article className=' tracking-wide md:m-28  about-container'>
						<p className='text-justify mx-4 mt-2'>
							Dogg_ie displays the variety of dogs available. People have been
							breeding dogs since prehistoric times. The first dog breeders used
							wolves to create domestic dogs. Humans have existed since their
							inception. Dogs that have been purposefully bred to perform a
							variety of tasks. Hunting, Guarding and herding are thought to be
							among the earliest jobs. eagerly performed by the animal destined
							to be known as "man's best" friend." For thousands of years,
							humans bred dogs toward the physical and mental characteristics
							best suited to the work expected of them. The sleek Greyhounds
							were bred to hunt fast-moving prey. and the enormous mastiff
							breeds used as guard dogs and warriors two ancient examples of
							dogs bred for specific tasks As humans, As their dogs evolved, so
							did they.
						</p>
						<div className='flex items-center justify-center mt-10'>
							<a href='https://www.akc.org/dog-breeds/' target='_self'>
								<button className=' bg-green-700 text-white p-3 rounded-lg cursor-pointer'>
									Click to get more info
								</button>
							</a>
						</div>
					</article>
				</div>
			</section>
		</div>
	);
}

export default AboutDogs
