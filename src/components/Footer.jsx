import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icons } from "../utils/icons"

const Footer = () => {
  return (
    <div className="p-5 px-10 bottom-0 bg-blue-600 w-full text-white sm:px-20">
			<div className="px-10 sm:px-20">
				<span>
					<FontAwesomeIcon icon={icons.hospital}/>
				</span>
			</div>
			<div className="flex flex-col gap-10 px-10 sm:flex-row sm:px-20">
				<div className="">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. In qui harum fugit doloremque provident architecto dolore facere pariatur nulla earum.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ut beatae sed mollitia minus. Ullam consectetur earum beatae vel nisi.
					</p>
					<div>
						<Link to={'/'}>
							Terms of Service
						</Link>
					</div>
				</div>
				<div className="">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. In qui harum fugit doloremque provident architecto dolore facere pariatur nulla earum.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ut beatae sed mollitia minus. Ullam consectetur earum beatae vel nisi.
					</p>
				</div>
				<div className="">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. In qui harum fugit doloremque provident architecto dolore facere pariatur nulla earum.
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ut beatae sed mollitia minus. Ullam consectetur earum beatae vel nisi.
					</p>
				</div>
			</div>
    </div>
  )
}

export default Footer