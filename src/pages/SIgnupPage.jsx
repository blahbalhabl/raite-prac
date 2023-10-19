import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icons } from "../utils/icons"
import Footer from "../components/Footer"

const SIgnupPage = () => {
  return (
    <div className="h-full bg-blue-800 text-white">
			<ul className="">
				<li className="flex items-center pr-10 border-solid border-r-2 border-slate-300">
          <div className="p-2 m-2 mr-8 text-4xl text-blue-600">
            <FontAwesomeIcon icon={icons.calendar}/>
          </div>
          <div className="flex flex-col">
            <h2 className="font-extrabold">BOOK</h2>
            <h3 className="font-semibold">Easily connect with your Doctors</h3>
          </div>
        </li>
				<li className="flex items-center pr-10 border-solid border-r-2 border-slate-300">
					<div className="p-2 m-2 mr-8 text-4xl text-yellow-500">
            <FontAwesomeIcon icon={icons.comment}/>
          </div>
          <div className="flex flex-col">
            <h2 className="font-extrabold">CONSULT</h2>
            <h3 className="font-semibold">Visit your Doctor or consult online</h3>
          </div>
        </li>
				<li className="flex items-center pr-10 border-solid border-r-2 border-slate-300">
					<div className="p-2 m-2 mr-8 text-4xl text-blue-600">
            <FontAwesomeIcon icon={icons.pills}/>
          </div>
          <div className="flex flex-col">
            <h2 className="font-extrabold">ORDER</h2>
            <h3 className="font-semibold">Your medicine delivered to you</h3>
          </div>
        </li>
			</ul>
			<div className="">
				<form>

				</form>
			</div>
      {/* <Footer /> */}
    </div>
  )
}

export default SIgnupPage