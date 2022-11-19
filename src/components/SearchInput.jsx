import React from 'react'
import search1 from '../assets/search (2).svg';
// import {useEffect} from 'react'

const SearchInput = ({ title }) => {
	const [search, setSearch]=React.useState('')
	
	const searchForDog = () => {
		
			fetch(`https://api.thedogapi.com/v1/breeds/search?i=${search}`)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					console.log();
					setSearch(data);
				});
			}

	const handleSubmit = (e) => {
		e.preventDefault();
		
		searchForDog()
	}
	
	
    return (
			<section className='container mx-auto rounded-lg shadow-2xl mb-10 p-4 input-container'>
				<div>
					<h3 className='text-green-700 text-center font-bold tracking-widest mb-6 md:text-2xl'>
						{title}
					</h3>
				</div>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className='p-3 bg-green-100 w-full border-none outline-none rounded-md input'
					/>
				</form>
				<div className='search-container'>
					<img src={search1} alt='search' className='search-container1' />
				</div>
			</section>
		);
}

export default SearchInput
