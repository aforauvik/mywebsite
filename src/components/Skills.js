"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const stats = [
	{
		id: 1,
		number: "8+",
		text: "Years Of Experience",
	},
	{
		id: 2,
		number: "25",
		text: "Projects Completed",
	},
	{
		id: 3,
		number: "7",
		text: "Web App Launched",
	},
	{
		id: 4,
		number: "5",
		text: "Mobile App Launched",
	},
];

function Skills() {
	return (
		<section>
			<div className="px-8 mb-10 mx-auto mt-10 md:px-12 lg:px-24 max-w-7xl">
				<div className="grid grid-cols-1 gap-2 lg:items-center lg:grid-cols-1 mt-4">
					<div className="grid grid-cols-1 gap-2 lg:grid-cols-4 h-full bg-slate-50 dark:bg-zinc-900 rounded-2xl">
						{stats.map((data) => (
							<div
								key={data.id}
								className="  flex flex-col justify-between relative overflow-hidden"
							>
								<div className="px-16 py-8 flex flex-row justify-center items-center gap-4">
									<h3 className="text-slate leading-normal text-5xl font-semibold">
										{data.number}
									</h3>
									<p className="text-sm text-zinc-500 leading-normal font-medium">
										{data.text}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
