import React from "react";

function BottomSection() {
	return (
		<section>
			<div className="px-8 mb-10 mx-auto md:px-12 lg:px-24 max-w-7xl">
				<div className="grid grid-cols-1 gap-2 lg:items-center lg:grid-cols-1 mt-12">
					<div className="grid grid-cols-1 gap-2 lg:grid-cols-2 h-full">
						<div className="bg-slate-50 dark:bg-zinc-900 rounded-2xl flex flex-col h-full justify-between relative overflow-hidden">
							<div className="p-8 relative">
								<p className="text-xs leading-normal font-bold uppercase text-accent-600">
									Portfolio
								</p>
								<h3 className="text-slate leading-normal sm:text-lg md:text-xl mt-4 font-semibold">
									Recent Projects
								</h3>
								<p className="text-sm leading-normal mt-2 font-medium">
									Schedule your integrations effortlessly and automate tasks for
									seamless workflows.
								</p>
							</div>
							<div className="lg:absolute -bottom-40 -right-2 ml-8 -mb-4">
								<img
									className="rounded-l-xl shadow-xl dark:shadow-zinc-950 lg:h-full"
									src="/screens.png"
									alt=""
								/>
							</div>
						</div>
						<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1 h-full">
							<div className="bg-slate-50 dark:bg-zinc-900 text-center rounded-2xl items-center p-8 flex h-full justify-center relative overflow-hidden">
								<div>
									<img className="h-12 mx-auto" src="/globe.svg" alt="" />
									<h3 className="text-slate leading-normal sm:text-lg md:text-xl mt-4 font-semibold">
										Connect your app
									</h3>
									<p className="text-sm leading-normal mt-2 font-medium">
										Connection secure, fast and easy. You can disconnect at any
										time.
									</p>
									<div className="mt-8 justify-center flex">
										<button className="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-gray-500 bg-white hover:text-blue-500 ring-1 ring-gray-200 focus:ring-gray-500 h-9 px-4 py-2 text-sm font-semibold rounded-md">
											See our integrations
										</button>
									</div>
								</div>
							</div>
							<div className="bg-slate-50 dark:bg-zinc-900 p-8 rounded-2xl">
								<p className="text-xs leading-normal font-bold uppercase text-accent-600">
									Tagline
								</p>
								<h3 className="text-slate leading-normal sm:text-lg md:text-xl mt-4 font-semibold">
									Easy Integration
								</h3>
								<p className="text-sm leading-normal mt-2 font-medium">
									Integrating with existing systems is smooth and hassle-free,
									thanks to our incredible flexible approach.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default BottomSection;
