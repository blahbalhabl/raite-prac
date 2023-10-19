import { Link, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../utils/icons';

const Header = () => {
	const { auth, setAuth } = useAuth();
	const location = useLocation();

	const userLogout = () => {
		setAuth(null);
		sessionStorage.removeItem('auth');
	};
	return (
		<div className='bg-blue-800'>
	{ location.pathname === '/auth/signup' ? (
		<div className='h-max bg-inherit p-5 flex justify-center items-center text-white font-bold text-2xl'>
			<h3>Unkown Hospital Site</h3>
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
						className='font-light opacity-0 group-hover:opacity-100 absolute top-0 right-16 transform -translate-x-1/2 bg-black text-sm text-white px-2 py-1 w-max rounded-md transition-opacity duration-300'>
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
  )
	}
	</div>
	)
}

export default Header