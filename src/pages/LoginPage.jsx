import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icons } from "../utils/icons"
import Footer from "../components/Footer"

const LoginPage = () => {
	const navigate = useNavigate();
	const [ pass, setPass] = useState(true);
	const [inputs, setInputs] = useState({
		email: null,
		password: null,
	});

	const { setAuth } = useAuth();

	const handleChange = (e) => {
		const {name, value} = e.target;
		setInputs((prev) => {
			return {...prev, [name]: value }
		});
	};

	const handleSubmit = (e) => {
		setAuth(inputs.email);
		sessionStorage.setItem('auth', inputs.email);
		navigate('/dashboard');
	};

  return (
		<>
    <div className="flex flex-col justify-between items-center h-full">
			<div className="flex flex-col items-center p-5 m-5 rounded-lg w-5/6 h-3/6 shadow-xl outline outline-2 outline-blue-600 my-auto sm:w-2/3 md:w-1/3">
				<h3 
					className="font-bold"
				>
					WELCOME BACK
				</h3>
				<p>Sign In to your account to continue</p>
				<form 
					onSubmit={() => handleSubmit()}
					className="flex flex-col gap-5 w-full items-center"
				>
					<label 
						htmlFor="email"
						className="mt-2 w-full relative"
					>
						Email
						<span className="absolute text-blue-600 top-8 left-2">
							<FontAwesomeIcon icon={icons.email} />
						</span>
						<input
							className="p-2 pl-10 outline outline-1 outline-blue-600 rounded-md w-full"
							type="email" 
							name="email"
							onChange={handleChange}
							placeholder="e.g. juantamad@gmail.com" />
					</label>
					<label 
						htmlFor="email"
						className="w-full relative"
					>
						Password
						<span className="absolute text-blue-600 top-8 left-2">
							<FontAwesomeIcon icon={ pass ? icons.lock : icons.unlock } />
						</span>
						<input
							className="p-2 pl-10 outline outline-1 outline-blue-600 rounded-md w-full"
							type={ pass ? 'password' : 'text' } 
							name="password"
							onChange={handleChange} />
						<span
							className="absolute text-blue-600 top-8 right-3"
							onClick={() => setPass(!pass)}>
							<FontAwesomeIcon icon={ pass ? icons.eyeslash : icons.eye } />
						</span>
					</label>
					<button
						onClick={() => handleSubmit()}
						className="p-2 rounded-xl bg-yellow-300 border-2 border-b-5 border-blue-600 w-full font-bold text-blue-600 sm:w-3/6"
					>
						Sign In
					</button>
				</form>
				<span className="text-base text-slate-700 flex gap-2">
					<p>
						Don't have an account?
					</p> 
					<Link 
						className="underline decoration-dotted decoration-1 decoration-current text-blue-600" to={'/auth/signup'}
					>
						Sign up Now
					</Link>
				</span>
			</div>
    </div>
		<Footer />
		</>
  )
}

export default LoginPage