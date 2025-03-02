import React from "react";
import Image from "next/image";
import Link from "next/link";
import Blog from "./Blog";
import ThemeToggle from "./ThemeToggle";

function Hero() {
	return (
		<section>
			<div className="px-8 mx-auto md:px-12 lg:px-24 max-w-7xl">
				<div className="grid grid-cols-1 gap-2 lg:items-center lg:grid-cols-2 mt-10">
					<div className="dark:bg-zinc-900 bg-slate-50 relative p-8 rounded-2xl h-full text-center flex flex-col justify-center items-center lg:p-12 overflow-hidden">
						<div className="relative items-center text-balance">
							<ThemeToggle />
							<p className="text-xs leading-normal font-bold uppercase text-indigo-500 dark:text-indigo-500">
								Hello there
							</p>
							<h3 className="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold">
								I am Auvik Mir
							</h3>
							<p className="text-base leading-normal mt-2 text-base-600 font-medium">
								A UX, IxD, UI designer, and front-end developer with 8+ years of
								design experience guiding products through every stage—from
								discovery to launch. I like to design human-centered,
								minimalist, and most importantly functional products. I believe
								design is an iterative process and design decisions should be
								data-driven.
							</p>
							<div className="flex flex-wrap justify-center items-center gap-2 mx-auto mt-8">
								<Link className="" target="blank" href="mailto:email@auvik.me">
									<button className="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500/50 h-9 px-4 py-2 text-sm font-semibold rounded-md">
										Hire Me
									</button>
								</Link>
								{/* <button className="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-gray-500 bg-white hover:text-indigo-500 ring-1 ring-gray-200 focus:ring-gray-500 h-9 px-4 py-2 text-sm font-semibold rounded-md">
									Learn more
								</button> */}
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 gap-2 lg:grid-cols-2 h-full">
						<Link href="/projects" target="blank">
							<div className="bg-slate-50 dark:bg-zinc-900 rounded-2xl flex flex-col h-full justify-between relative overflow-hidden">
								<div className="p-8 relative">
									<p className="text-xs leading-normal font-bold uppercase text-indigo-500 dark:text-indigo-500">
										Portfolio
									</p>
									<h3 className="text-slate leading-normal sm:text-lg md:text-xl mt-4 font-semibold">
										Recent Projects
									</h3>
									<p className="text-sm leading-normal mt-2 font-medium">
										Some of the recent projects I have worked on.
									</p>
								</div>
								<div className="lg:absolute -bottom-6 -right-12 ml-8 -mb-4">
									<Image
										className="rounded-l-xl shadow-xl dark:shadow-zinc-950"
										src="/portfolio.png"
										alt=""
										width={1500}
										height={2000}
									></Image>
								</div>
							</div>
						</Link>
						<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 h-full">
							<div className="bg-slate-50 dark:bg-zinc-900 text-center rounded-2xl items-center p-8 flex h-full justify-center relative overflow-hidden">
								<Blog />
								{/* <div>
									<img className="h-12 mx-auto" src="/7.png" alt="" />
									<h3 className="text-slate leading-normal sm:text-lg md:text-xl mt-4 font-semibold">
										My Blog
									</h3>
									<p className="text-sm leading-normal mt-2 font-medium">
										Connection secure, fast and easy. You can disconnect at any
										time.
									</p>
									<div className="mt-8 justify-center flex">
										<button className="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-gray-500 bg-white hover:text-indigo-500 ring-1 ring-gray-200 focus:ring-gray-500 h-9 px-4 py-2 text-sm font-semibold rounded-md">
											Read More
										</button>
									</div>
								</div> */}
							</div>
							<div className="bg-slate-50 dark:bg-zinc-900 p-8 rounded-2xl">
								<p className="text-xs leading-normal font-bold uppercase text-indigo-500">
									Located In
								</p>
								<h3 className="text-slate leading-normal sm:text-lg md:text-xl mt-4 font-semibold">
									North Carolina
								</h3>
								<p className="text-sm leading-normal mt-2 font-medium">
									I'm open to relocating to Charlotte, Seattle, Salt Lake City,
									upstate NY or near the DC area.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
