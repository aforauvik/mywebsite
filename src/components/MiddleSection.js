import React from "react";
import Link from "next/link";
import Testimonial from "./Testimonial";

function MiddleSection() {
	return (
		<section>
			<div className="px-8 mx-auto md:px-12 lg:px-24 max-w-7xl">
				<div className="grid grid-cols-1 gap-2 lg:items-center lg:grid-cols-2 mt-12">
					<div className="grid grid-cols-1 gap-2 lg:grid-cols-1 h-full">
						<div className="dark:bg-zinc-900 bg-slate-50 relative p-8 rounded-2xl h-full text-center flex flex-col justify-center items-center lg:p-8 overflow-hidden">
							<div className="bg-slate-50 dark:bg-zinc-900 rounded-2xl flex flex-col h-full justify-center relative overflow-hidden">
								<div className="justify-center relative">
									<h3 className="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-4xl text-base-900 font-semibold">
										You != User
									</h3>
								</div>
							</div>
						</div>
						{/* 1st testimonial starts here */}
						<div className="grid grid-cols-1 gap-2 lg:grid-cols-2 h-full">
							<div className="dark:bg-zinc-900 bg-slate-50 relative p-8 rounded-2xl lg:h-[550] h-full text-center flex flex-col justify-center items-center lg:p-12 overflow-hidden">
								<Testimonial />
								{/* <div>
									<img className="h-12 mx-auto" src="/globe.svg" alt="" />

									<p className="text-base leading-normal mt-2 text-base-600 font-medium">
										I worked with Auvik in the infancy of a startup. He ran the
										UX side of things, and his miro board was one of the main
										reasons I joined the startup! It was ambitious. detailed and
										revealed a real intellectual investment on Auvik's part into
										the domain of the startup.
									</p>
									<div className="relative items-center text-balance">
										<h3 className="text-slate leading-normal sm:text-lg md:text-xl mt-8 font-semibold">
											Dr. Steven A.
										</h3>
										<p className="text-xs mt-2 leading-normal font-bold uppercase text-red-500 dark:text-red-500">
											Staff Software Engineer, Netflix
										</p>
									</div>
								</div> */}
							</div>
							<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 h-full">
								<div className="dark:bg-zinc-900 bg-slate-50 relative p-8 rounded-2xl h-full text-center flex flex-col justify-center items-center lg:p-12 overflow-hidden">
									<div>
										<p className="text-3xl leading-normal mt-2 text-zinc-500 text-left font-normal">
											Helped to secure $1.4 million in funding for my
											early-stage startup clients
										</p>
									</div>
								</div>
							</div>
						</div>
						{/* 1st testimonial ends here */}
					</div>
					<div className="grid grid-cols-1 gap-2 lg:grid-cols-2 h-full">
						<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 h-full">
							<Link href="https://dribbble.com/auvik" target="blank">
								<div className="bg-slate-50 dark:hover:bg-[rgb(227,92,103)]/15 hover:bg-[rgb(227,92,103)]/15  dark:bg-zinc-900 text-center rounded-2xl items-center p-14 flex h-full justify-center relative overflow-hidden clickable">
									<div className="m-4">
										<img
											className="rounded-l-xl lg:h-full"
											src="/dribbble.png"
											alt=""
										/>
									</div>
								</div>
							</Link>
							<div className="dark:bg-zinc-900 bg-slate-50 relative p-8 rounded-2xl h-full text-center flex flex-col justify-center items-center overflow-hidden">
								<div>
									<p className="text-8xl leading-normal text-ceter font-regular">
										🎓
									</p>
									<p className="text-4xl leading-normal mt-2 text-ceter font-regular">
										OnDeck <br />
										Design <br /> Fellow
									</p>
								</div>
							</div>
						</div>
						<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 h-full">
							<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 h-full">
								<div className="bg-slate-50 dark:bg-zinc-900 text-left rounded-2xl items-center p-8 flex h-full justify-center relative overflow-hidden">
									<div>
										<p className="text-lg uppercase leading-normal mt-2 text-base-600 text-left font-semibold">
											The UX-Files
										</p>
										<p className="text-4xl leading-normal mt-2 text-base-600 text-left font-semibold">
											The MVP Is Out There!
										</p>
										<p className="text-base text-left leading-normal mt-2 font-medium">
											Book a free UX workshop to help launch your app idea, no
											strings attached!
										</p>

										<Link href="https://cal.com/auvik" target="blank">
											<button className="flex mt-6 items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500/50 h-9 px-4 py-2 text-sm font-semibold rounded-md">
												Book Now
											</button>
										</Link>

										<img className="lg:h-1/2 mt-8" src="/ufo.png" alt="" />
									</div>
								</div>
								{/* <div className="dark:bg-zinc-900 bg-slate-50 relative p-8 rounded-2xl h-full text-center flex flex-col justify-center items-center lg:p-12 overflow-hidden">
									<div className="relative items-center text-balance">
										<h3 className="text-slate leading-normal sm:text-lg md:text-xl mt-4 font-semibold">
											Steve S.
										</h3>
										<p className="text-xs mt-2 leading-normal font-bold uppercase text-orange-400 dark:text-orange-400">
											Senior Product Designer, Syniti
										</p>
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default MiddleSection;
