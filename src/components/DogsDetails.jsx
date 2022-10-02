import { Link, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'


const DogsDetails = () => {
    const [dogs,setDogs]= useState([])
    const {name} = useParams()
useEffect(() => {
	fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			console.log(data);
			setDogs(data);
		});
		},[name]);
	return (
		<>
			<Navbar />
			<div className='max-w-5xl mx-auto flex justify-center items-center '>
				{dogs.map((dog) => (
					<article
						key={dog.id}
						className='grid grid-cols-1 lg:grid-cols-2 md:place-items-center '>
						<div>
							<img
								src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
								alt={dog.name}
							/>
						</div>
						<div className='leading-loose ml-8 text-justify text-lg '>
							<h3 className='text-green-700 text-lg tracking-widest my-3 lg:text-4xl font-bold '>
								{dog.name}
							</h3>
							<p>{dog.description}</p>
							<ul>
								<li>
									<span className='font-bold'>Bred_for: </span>
									{dog.bred_for}
								</li>
								<li>
									<span className='font-bold'>Height:</span> It is{' '}
									{dog.height.metric} cm tall
								</li>
								<li>
									<span className='font-bold'>Weight:</span> Weighs about{' '}
									{dog.weight.metric} kgs
								</li>
								<li>
									<span className='font-bold'>Breed:</span>
									{dog.breed_group}
								</li>
								<li>
									{' '}
									<span className='font-bold'>LifeSpan:</span> It lives for
									about {dog.life_span}
								</li>
								
							</ul>
						</div>
						<div className='mt-8'>
							<Link
								to='/'
								className='font-bold text-green-700 pl-4 lg:text-4xl hover:text-slate-400 '>
								&larr;Back
							</Link>
						</div>
					</article>
				))}
			</div>
		</>
	);
}

export default DogsDetails
