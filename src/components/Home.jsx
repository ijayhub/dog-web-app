import React, { useEffect, useState } from 'react';
import DogTemplate from './DogTemplate';
import Footer from './Footer';
import Navbar from './Navbar';
import SearchInput from './SearchInput';
import top from '../assets/top.png'

const Home = () => {
    const [dogs, setDogs] = useState([]);
    const [error, setError] = useState(null)
    // const [name, setName] = useState('');
    const [ispending, setIsPending] = useState(true)

	useEffect(() => {
		fetch(`https://api.thedogapi.com/v1/breeds`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setDogs(data);
				setError(false);
				setIsPending(false);

				console.log(data);
			})
			.catch((err) => {
				setError(err.message);
			});
        },[]);

    return (
			<>
				<div>
					<Navbar />
				</div>
				<div>
					<div className='container mx-auto'>
						{ispending && (
							<div className='text-center font-extrabold font-mono text-slate-900 lg:text-4xl mb-6'>
								Loading....
							</div>
						)}
						<div>
							<SearchInput
								
								title='Search for a dog'
							/>
						</div>
							{dogs && <DogTemplate dogs={dogs} />}
							<p className="font-mono font-bold text-center lg:text-3xl">{dogs && <div>{error}</div>}</p>
						</div>
					</div>
					<div className='flex items-center justify-end m-10'>
						<a href='#'>
							<img src={top} alt='top' />
						</a>
					</div>
				<div>
					<Footer />
				</div>
			</>
		);
};

export default Home;
