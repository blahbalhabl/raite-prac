import useAuth from '../hooks/useAuth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from '../utils/icons';

const Header = () => {
	const { auth, setAuth } = useAuth();

  return (
    <div className='fixed w-full h-max p-5 px-20 flex justify-between font-extrabold font-xl text-blue-600 border-b'>
			<div>
				<FontAwesomeIcon icon={icons.home} />
			</div>
			<div>
				<h1 className='text-2xl'>Unkown Hospital Site</h1>
			</div>
			<div>
				<FontAwesomeIcon icon={icons.login} />
			</div>
		</div>
  )
}

export default Header