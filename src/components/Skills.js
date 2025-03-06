"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Skills() {
	return (
		<section>
			<div className="px-8 mb-10 mx-auto mt-10 md:px-12 lg:px-24 max-w-7xl">
				<div className="grid grid-cols-1 gap-2 lg:items-center lg:grid-cols-1 mt-4">
					<div className="grid grid-cols-1 gap-2 lg:grid-cols-3 h-full">
						{/* left col starts here */}

						<Link href="https://dayplanner.auvik.me/" target="_blank">
							<div className="bg-slate-50 dark:bg-zinc-900 rounded-2xl flex flex-col justify-between relative overflow-hidden">
								<div className="p-8 relative">
									<p className="text-xs leading-normal font-bold uppercase text-indigo-500 dark:text-indigo-500">
										Skills
									</p>
									<h3 className="text-slate leading-normal sm:text-base md:text-base mt-4 font-semibold">
										Design
									</h3>
									<p className="text-sm leading-normal mt-2 font-medium">
										Design Thinking • User Research • User Interview • User
										Journey Map • User Personas • Information Architecture •
										Affinity Mapping • Wireframe • UI Design • Prototype •
										Heuristic Evaluation • Usability Test • A/B Test
									</p>

									<h3 className="text-slate leading-normal sm:text-base md:text-base mt-4 font-semibold">
										Coding
									</h3>
									<p className="text-sm leading-normal mt-2 font-medium">
										HTML • CSS • JavaScript • React.js • Next.js • GitHub •
										Supabase • Vercel
									</p>

									<h3 className="text-slate leading-normal sm:text-base md:text-base mt-4 font-semibold">
										Tools
									</h3>
									<p className="text-sm leading-normal mt-2 font-medium">
										Figma • Sketch • Miro • VSCode • Adobe XD • InVision •
										Zeplin • Asana • ClickUp • Linear
									</p>

									{/* <button className="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500/50 h-9 px-4 py-2 text-sm font-semibold rounded-md mt-6">
									View All Projects
								</button> */}
								</div>
								{/* <div className=" -bottom-0 -right-2 ml-8 -mb-2">
									<Image
										className="rounded-l-xl shadow-xl dark:shadow-zinc-950 lg:h-full"
										src="/simple-dayplanner.png"
										width={1000}
										height={1490}
										alt=""
									></Image>
								</div> */}
							</div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
