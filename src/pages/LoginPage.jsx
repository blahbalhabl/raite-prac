import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { TextField } from "@mui/material"
import useAuth from "../hooks/useAuth"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Icon } from "@iconify/react"
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
		e.preventDefault();
		setAuth(inputs.email);
		sessionStorage.setItem('auth', inputs.email);
		navigate('/dashboard');
	};

  return (
		<>
    <div className="relative flex flex-col justify-between items-center h-full bg-slate-100">
			<div className="flex flex-col items-center p-16 m-5 bg-white rounded-2xl w-5/6 h-max gap-10 shadow-xl my-auto sm:w-2/3 lg:px-20 md:w-1/3 z-10">
				<div className="text-center">
					<Icon
						className="text-7xl text-blue-600 text-center w-full"
						icon={'solar:hospital-bold-duotone'} />
					<h3 
						className="font-bold text-2xl"
					>
						WELCOME BACK
					</h3>
					<p>Sign In to your account to continue</p>
				</div>
				<form 
					onSubmit={handleSubmit}
					className="flex flex-col gap-10 w-full items-center"
				>
					<TextField
						className="w-full"
						onChange={handleChange}
						type="email"
						label="Email"
						name="email"
						variant="outlined" 
						required />
						<div className="relative w-full">
							<TextField
								className="w-full"
								onChange={handleChange} 
								type={ pass ? 'password' : 'text' }
								label="Password"
								name="password"
								variant="outlined" 
								required />
							<span
								className="absolute text-blue-500 top-4 right-5"
								onClick={() => setPass(!pass)}>
								<FontAwesomeIcon icon={ pass ? icons.eyeslash : icons.eye } />
							</span>
						</div>
					<button
						onClick={handleSubmit}
						className="p-2 rounded-md bg-blue-500 font-semibold text-white select-none sm:w-3/6 hover:rounded-3xl duration-200"
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
			<span className="absolute bg-blue-500 rounded-[50px] w-[500px] h-[500px] z-0 left-10 top-10 hidden md:block"></span>
			<span className="absolute bg-blue-300 rounded-[50px] w-[250px] h-[250px] z-0 left-[350px] top-[250px] rotate-45 hidden md:block"></span>
			<span className="absolute bg-blue-500 rounded-[50px] w-[500px] h-[500px] z-0 right-10 bottom-10 rotate-45 hidden md:block"></span>
			<span className="absolute bg-blue-300 rounded-[50px] w-[250px] h-[250px] z-0 right-[100px] bottom-[400px] hidden md:block"></span>
    </div>
		<Footer />
		</>
  )
}

export default LoginPage