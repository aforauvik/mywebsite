"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

function LeftProjects() {
	return (
		<section>
			<div className="px-8 mb-10 mx-auto mt-10 md:px-12 lg:px-24 max-w-7xl">
				<div className="grid grid-cols-1 gap-2 lg:items-center lg:grid-cols-1 mt-4">
					<div className="grid grid-cols-1 gap-2 lg:grid-cols-2 h-full">
						{/* left col starts here */}

						<Link href="/AIXR.pdf" target="_blank">
							<div className="bg-slate-50 dark:bg-zinc-900 rounded-2xl flex flex-col h-[500] justify-between relative overflow-hidden">
								<div className="p-8 relative">
									<p className="text-xs leading-normal font-bold uppercase text-indigo-500 dark:text-indigo-500">
										Web App • UX/UI
									</p>
									<h3 className="text-slate leading-normal sm:text-lg md:text-xl mt-4 font-semibold">
										AIXR
									</h3>
									<p className="text-sm leading-normal mt-2 font-medium">
										AIXR is a global platform dedicated to fostering
										connections, education, and business opportunities for AR
										and VR professionals.
									</p>

									{/* <button className="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500/50 h-9 px-4 py-2 text-sm font-semibold rounded-md mt-6">
									View All Projects
								</button> */}
								</div>
								<div className="lg:absolute top-52 -right-2 ml-8 -mb-4">
									<Image
										className="rounded-l-xl shadow-xl dark:shadow-zinc-950 lg:h-full"
										src="/screens.png"
										width={1000}
										height={1490}
										alt=""
									></Image>
								</div>
							</div>
						</Link>

						{/* left col ends here  */}

						{/* right two col starts here */}
						<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-2 h-full">
							<Link href="/Topio.pdf" target="_blank">
								<div className="bg-slate-50 dark:bg-zinc-900 rounded-2xl flex flex-col h-full justify-between relative overflow-hidden">
									<div className="p-8 relative">
										<p className="text-xs leading-normal font-bold uppercase text-indigo-500 dark:text-indigo-500">
											IOS/Android • UX/UI
										</p>
										<h3 className="text-slate leading-normal sm:text-lg md:text-xl mt-4 font-semibold">
											Topio
										</h3>
										<p className="text-sm leading-normal mt-2 font-medium">
											An AI powered travel planning mobile app.
										</p>
									</div>
									<div className="lg:absolute -bottom-12 -right-10 ml-8 -mb-4">
										<Image
											className="rounded-l-xl shadow-xl dark:shadow-zinc-950"
											src="/topio.png"
											alt=""
											width={1000}
											height={1490}
										></Image>
									</div>
								</div>
							</Link>

							<Link href="/Clubfunders.pdf" target="_blank">
								<div className="bg-slate-50 dark:bg-zinc-900 rounded-2xl flex flex-col h-full justify-between relative overflow-hidden">
									<div className="p-8 relative">
										<p className="text-xs leading-normal font-bold uppercase text-indigo-500 dark:text-indigo-500">
											IOS • UX/UI
										</p>
										<h3 className="text-slate leading-normal sm:text-lg md:text-xl mt-4 font-semibold">
											Club Funders
										</h3>
										<p className="text-sm leading-normal mt-2 font-medium">
											Turn everyday spending into ongoing charity.
										</p>
									</div>
									<div className="lg:absolute -bottom-12 -right-10 ml-8 -mb-4">
										<Image
											className="rounded-l-xl shadow-xl dark:shadow-zinc-950"
											src="/clubfunders.png"
											alt=""
											width={1000}
											height={1490}
										></Image>
									</div>
								</div>
							</Link>
						</div>

						{/* right two col ends here */}
					</div>
				</div>
			</div>
		</section>
	);
}

export default LeftProjects;
