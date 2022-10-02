import React from 'react'

const Navbar = () => {
    return (
			<header className=''>
				<div className='bg-green-800 shadow-2xl p-6 mb-20'>
					<nav className=' container mx-auto flex justify-between items-center'>
						<h1 className='text-lg text-white lg:text-4xl font-bold focus:text-black '>
							Dogg_ie
						</h1>
						<div>
							<ul className='flex'>
								<a href='/'>
									<li className='ml-4 list text-white'>
										Home
									</li>
								</a>
								<a href='AboutDogs'>
									<li className='ml-4 list text-white '>
										About-dogg_ie
									</li>
								</a>
							</ul>
						</div>
						
					</nav>
				</div>
			</header>
		);
}

export default Navbar
