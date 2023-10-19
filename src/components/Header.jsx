import { Link, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';
import { icons } from '../utils/icons';

const Header = () => {
	const { auth, setAuth } = useAuth();
	// Get current location of the user
	const location = useLocation();

	// logout function that clears auth value and sessionStorage
	const userLogout = () => {
		setAuth(null);
		sessionStorage.removeItem('auth');
	};
	// dynamically render header depending on the current location of the user
	return (
		<div className='bg-blue-800'>
		{location.pathname === '/auth/signup' 
		? (
		<div className='h-max bg-inherit p-5 flex justify-center items-center text-white font-bold text-2xl'>
			<h3>Unkown Hospital Site</h3>
		</div>
	)	: location.pathname === '/' 
		? (
		<div className='flex justify-between bg-slate-200'>
			<div className='p-5 flex items-center'>
				<Icon 
					className="text-7xl text-blue-600"
					icon={'solar:hospital-bold-duotone'} />
				<h1 className='ml-5 text-3xl font-bold text-blue-600'>Unkown Hospital Site</h1>
			</div>
			<div className='flex items-center justify-evenly gap-10 p-10 text-lg'>
				<Link
					to={'/about-us'}
					className='hidden md:flex hover:underline decoration-blue-600 decoration-2'>
						About Us
				</Link>
				<Link 
					to={'/prescriptions'}
					className='hidden md:flex hover:underline decoration-blue-600 decoration-2'>
						Prescriptions
				</Link>
				<Link 
					to={'/auth/login'}
					className='p-1 px-5 bg-blue-500 rounded-xl font-semibold hover:rounded-3xl duration-200 text-white'
				>
					Sign In
				</Link>
			</div>
		</div>
	) : (
    <div className='w-full h-max bg-white p-5 px-20 flex justify-between items-center font-extrabold text-xl text-blue-600 border-b'>
				<Link className='relative group' to={ auth ? '/dashboard' : '/'}>
					<FontAwesomeIcon icon={icons.home} />
					<span 
						className='font-light opacity-0 group-hover:opacity-100 absolute top-0 left-16 transform -translate-x-1/2 bg-black text-sm text-white px-2 py-1 rounded-md transition-opacity duration-300'>
							{ auth ? 'Dashbord' : 'Home'}
					</span>
				</Link>
			<div className='relative'>
				<h1 className='text-2xl pt-2 z-10'>Unkown Hospital Site</h1>
			</div>
			{ auth ? (
				<button
					className='relative group'
					onClick={userLogout}>
					<FontAwesomeIcon icon={icons.logout} />
					<span 
						className='font-light opacity-0 group-hover:opacity-100 absolute top-0 right-2 transform -translate-x-1/2 bg-black text-sm text-white px-2 py-1 w-max rounded-md transition-opacity duration-300'>
							Sign Out
					</span>
				</button>
			) : (
				<Link
					className='relative group'
					to={'/auth/login'}>
					<FontAwesomeIcon icon={icons.login} />
					<span 
						className='font-light opacity-0 group-hover:opacity-100 absolute top-0 right-2 transform -translate-x-1/2 bg-black text-sm text-white px-2 py-1 w-max rounded-md transition-opacity duration-300'>
							Sign In
					</span>
				</Link>
			)}
		</div>
  )}
	</div>
	)
}

export default Header