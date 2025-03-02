import React from "react";
import Link from "next/link";

function Testimonial() {
	return (
		<section>
			<div className="px-8 mx-auto md:px-12 lg:px-24 max-w-7xl">
				<div className="grid grid-cols-1 gap-2 lg:items-center lg:grid-cols-2 mt-12">
					<div className="grid grid-cols-1 gap-2 lg:grid-cols-1 h-full">
						<div className="dark:bg-zinc-900 bg-slate-50 relative p-8 rounded-2xl h-full text-center flex flex-col justify-center items-center lg:p-12 overflow-hidden">
							<div className="bg-slate-50 dark:bg-zinc-900 rounded-2xl flex flex-col h-full justify-center relative overflow-hidden">
								<div className="p-2 justify-center relative">
									<h3 className="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-4xl text-base-900 font-semibold">
										You != User
									</h3>
								</div>
							</div>
						</div>
						{/* 1st testimonial starts here */}
						<div className="grid grid-cols-1 gap-2 lg:grid-cols-2 h-full">
							<div className="dark:bg-zinc-900 bg-slate-50 relative p-8 rounded-2xl h-full text-center flex flex-col justify-center items-center lg:p-12 overflow-hidden">
								<div className="relative items-center text-balance">
									<p className="text-base leading-normal mt-2 text-base-600 font-medium">
										"I worked with Auvik in the infancy of a startup. He ran the
										UX side of things, and his miro board was one of the main
										reasons I joined the startup!"
									</p>
								</div>
							</div>
							<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 h-full">
								<div className="dark:bg-zinc-900 bg-slate-50 relative p-8 rounded-2xl h-full text-center flex flex-col justify-center items-center lg:p-12 overflow-hidden">
									<div className="relative items-center text-balance">
										<h3 className="text-slate leading-normal sm:text-lg md:text-xl font-semibold">
											Dr. Steven A.
										</h3>
										<p className="text-xs mt-2 leading-normal font-bold uppercase text-blue-500 dark:text-blue-500">
											Staff Software Engineer, Netflix
										</p>
									</div>
								</div>
								<Link href="https://dribbble.com/auvik" target="blank">
									<div className="dark:bg-zinc-900 bg-[url(/blueprint.svg)] bg-cover bg-slate-50 relative p-8 rounded-2xl h-full text-center flex flex-col justify-center items-center lg:p-12 overflow-hidden">
										<div className="m-4">
											<img
												className="rounded-l-xl  lg:h-full"
												src="/3.png"
												alt=""
											/>
										</div>
									</div>
								</Link>
							</div>
						</div>
						{/* 1st testimonial ends here */}
					</div>
					<div className="grid grid-cols-1 gap-2 lg:grid-cols-2 h-full">
						<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 h-full">
							<div className="bg-slate-50 dark:bg-zinc-900 text-center rounded-2xl items-center p-8 flex h-full justify-center relative overflow-hidden">
								<div>
									{/* <img className="h-12 mx-auto" src="/globe.svg" alt="" /> */}

									<p className="text-base leading-normal mt-2 text-base-600 text-center font-medium">
										"As the senior designer on the team, Auvik quickly emerged
										as a valuable mentor. His pedagogical style was exemplary."
									</p>
								</div>
							</div>
							<div className="dark:bg-zinc-900 bg-slate-50 relative p-8 rounded-2xl h-full text-center flex flex-col justify-center items-center overflow-hidden">
								<div className="relative items-center text-balance">
									<h3 className="text-slate leading-normal sm:text-lg md:text-xl text-center font-semibold">
										Jacklyn T.
									</h3>
									<p className="text-xs mt-2 leading-normal font-bold uppercase text-center text-blue-500 dark:text-blue-500">
										Product Designer, Pathfinder Health
									</p>
								</div>
							</div>
						</div>
						<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 h-full">
							<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 h-full">
								<div className="bg-slate-50 dark:bg-zinc-900 text-center rounded-2xl items-center p-8 flex h-full justify-center relative overflow-hidden">
									<div>
										{/* <img className="h-12 mx-auto" src="/globe.svg" alt="" /> */}

										<p className="text-base leading-normal mt-2 text-base-600 font-medium">
											"I had the pleasure of working with Auvik, and I highly
											recommend him for any Product Designer role."
										</p>
										<div className="relative items-center text-balance">
											<h3 className="text-slate leading-normal sm:text-lg md:text-xl mt-8 font-semibold">
												Steve S.
											</h3>
											<p className="text-xs mt-2 leading-normal font-bold uppercase text-blue-500 dark:text-blue-500">
												Senior Product Designer, Syniti
											</p>
										</div>
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

export default Testimonial;
