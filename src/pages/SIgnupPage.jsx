import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TextField } from "@mui/material"
import { icons } from "../utils/icons"
import useAuth from "../hooks/useAuth"

const SIgnupPage = () => {
	const { setAuth } = useAuth();
	const navigate = useNavigate();
	const [inputs, setInputs] = useState({});

	const handleChange = (e) => {
		const {name, value} = e.target;
		setInputs((prev) => {
			return {...prev, [name]: value }
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault()
		setAuth(inputs.email);
		sessionStorage.setItem('auth', inputs.email);
		navigate('/dashboard');
	};

  return (
    <div className="h-full bg-blue-800 w-full text-white flex justify-center items-center">
			<div className="hidden relative flex justify-center flex-col items-center w-full lg:flex">
				<ul className="z-10">
					<li className="text-3xl font-extrabold">
						Unkown Hospital Site
					</li>
					<li className="flex items-center pr-10">
						<div className="p-2 m-2 mr-8 text-4xl text-white">
							<FontAwesomeIcon icon={icons.calendar} />
						</div>
						<div className="flex flex-col">
							<h2 className="font-extrabold">BOOK</h2>
							<h3 className="font-semibold">Easily connect with your Doctors</h3>
						</div>
					</li>
					<li className="flex items-center pr-10">
						<div className="p-2 m-2 mr-8 text-4xl text-yellow-400">
							<FontAwesomeIcon icon={icons.comment}/>
						</div>
						<div className="flex flex-col">
							<h2 className="font-extrabold">CONSULT</h2>
							<h3 className="font-semibold">Visit your Doctor or consult online</h3>
						</div>
					</li>
					<li className="flex items-center pr-10">
						<div className="p-2 m-2 mr-8 text-4xl text-white">
							<FontAwesomeIcon icon={icons.pills}/>
						</div>
						<div className="flex flex-col">
							<h2 className="font-extrabold">ORDER</h2>
							<h3 className="font-semibold">Your medicine delivered to you</h3>
						</div>
					</li>
				</ul>
				<span className="absolute bg-blue-500 rounded-[150px] w-[700px] h-[900px] z-0 left-0"></span>
			</div>
			<div className="flex flex-col justify-start items-center bg-white rounded-[50px] z-20 w-5/6 h-max m-2 mr-40 p-20 text-black gap-5">
				<h2 className="font-bold text-4xl">Sign up</h2>
				<p>Monitor your health for free</p>
				<form
					onSubmit={handleSubmit}
					className="flex flex-col items-center gap-10 w-full"
				>
					<TextField
						className="w-full"
						onChange={handleChange} 
						label="First Name"
						name="firstName"
						variant="filled" 
						required />
					<TextField
						className="w-full"
						onChange={handleChange}
						label="Last Name"
						name="lastName"
						variant="filled"
						required />
					<TextField
						className="w-full"
						onChange={handleChange}
						label="Email"
						name="email"
						type="email"
						variant="filled" 
						required />
					<TextField
						className="w-full"
						onChange={handleChange}
						label="Password"
						name="password"
						type="password"
						variant="filled" 
						required />
					<span className="flex">
						<input type="checkbox" required/>
						<p className="ml-2">I agree to the Terms of Servce and Privacy Policy.</p>
					</span>
					<button 
						className="bg-blue-500 rounded-md p-3 w-full font-semibold text-white hover:rounded-3xl duration-200"
						onClick={() => handleSubmit}
					>
						Create Account
					</button>
					<Link className="text-blue-600 font-semibold hover:underline" to={'/auth/login'}>Sign In</Link>
				</form>
			</div>
    </div>
  )
}

export default SIgnupPage