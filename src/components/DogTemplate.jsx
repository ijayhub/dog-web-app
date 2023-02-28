import React from 'react'
import { Link } from 'react-router-dom';


const DogTemplate = ({dogs}) => {
    return (
			<div>
				<div className='template-container'>
					{dogs.map((dog) => (
						<Link to={`/${dog.name}`} key={dog.id}>
							<section className='card card-size shadow-2xl rounded-lg hover:bg-green-100 transition-all-200 '>
								<img
									src={dog.image.url}
									alt='dogs'
									className='rounded-t-lg img-size '
									loading="lazy"
								/>
								<div className='pl-4 leading-loose mt-8'>
									<h3 className='font-extrabold text-center lg:text-lg'>
										{dog.name}
									</h3>
								</div>
							</section>
						</Link>
					))}
				</div>
			</div>
		);
}

export default DogTemplate
