import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
		<div>
			<div className="flex flex-col bg-slate-200 p-20 rounded-b-[40px] gap-20">
				<div className="flex flex-col justify-around lg:flex-row">
					<div className="lg:w-3/6">
						<h1 className="text-4xl md:text-7xl">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quaerat?
						</h1>
					</div>
					<div className="mt-20 flex flex-col gap-10 font-semibold md:w-3/6 lg:w-1/6 lg:mt-0">
						<span>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, suscipit.</p>
							<p>Download Our App through Play Store or App Store Today.</p>
						</span>
						<div className="flex justify-between items-center">
							<button className="bg-blue-500 rounded-full p-1 px-5 text-white hover:underline">
								Download App
							</button>
							<Link className="text-blue-600 hover:underline">Learn More</Link>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-10 justify-evenly lg:flex-row">
					<div className="lg:w-3/6">
						<h3 className="font-bold text-3xl mb-10">Lorem, ipsum.</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates harum quasi nam, temporibus blanditiis similique, nisi necessitatibus dolor impedit nobis numquam, explicabo corporis eaque illo tempora! Rerum suscipit eaque sit doloremque sint. Ab quia sint perspiciatis voluptatem alias sit illum suscipit voluptate minus, quisquam perferendis mollitia ex quis maxime optio exercitationem explicabo cumque? Quam magni, sapiente sint ipsam hic aspernatur voluptates culpa beatae laborum itaque quo rerum perferendis modi eveniet quidem vel amet ullam suscipit reiciendis nam! Animi totam repellendus, laborum veniam tempore ipsum cum, voluptates aliquid, possimus deserunt fugit iure suscipit numquam eius laboriosam amet eum quasi perferendis impedit.
						</p>
					</div>
					<div className="bg-white rounded-2xl p-10 lg:w-1/6 shadow-lg">
						<div className="flex w-full">
							<div className="rounded-full w-max h-max p-2 bg-slate-200 outline outline-2 outline-white">
								<Icon
									className="text-2xl"
									icon={'solar:user-bold-duotone'}/>
							</div>
							<div className="rounded-full w-max h-max p-2 bg-slate-200 outline outline-2 outline-white">
								<Icon
									className="text-2xl"
									icon={'solar:user-bold-duotone'}/>
							</div>
							<div className="rounded-full w-max h-max p-2 bg-slate-200 outline outline-2 outline-white">
								<Icon
									className="text-2xl"
									icon={'solar:user-bold-duotone'}/>
							</div>
							<Icon className="ml-5 rounded-full w-max h-max p-1 bg-blue-500 outline outline-2 outline-white text-[2.3rem] text-white" icon={'lucide:arrow-up-right'}/>
						</div>
						<h3 className="text-2xl font-semibold">Our Patients</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam consequatur repudiandae quo cum dolorum aut alias molestiae atque voluptate quaerat?</p>
					</div>
					<div className="bg-white rounded-2xl p-10 lg:w-1/6 shadow-lg">
						<div className="flex w-full">
							<div className="rounded-full w-max h-max p-2 bg-slate-200 outline outline-2 outline-white">
								<Icon
									className="text-2xl"
									icon={'solar:user-bold-duotone'}/>
							</div>
							<div className="rounded-full w-max h-max p-2 bg-slate-200 outline outline-2 outline-white">
								<Icon
									className="text-2xl"
									icon={'solar:user-bold-duotone'}/>
							</div>
							<div className="rounded-full w-max h-max p-2 bg-slate-200 outline outline-2 outline-white">
								<Icon
									className="text-2xl"
									icon={'solar:user-bold-duotone'}/>
							</div>
							<Icon className="ml-5 rounded-full w-max h-max p-1 bg-blue-500 outline outline-2 outline-white text-[2.3rem] text-white" icon={'lucide:arrow-up-right'}/>
						</div>
						<h3 className="text-2xl font-semibold">Our Patients</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam consequatur repudiandae quo cum dolorum aut alias molestiae atque voluptate quaerat?</p>
					</div>
				</div>
			</div>
			<Footer />	
		</div>
  )
}

export default HomePage