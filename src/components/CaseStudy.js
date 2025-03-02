"use client";

import React from "react";
import Link from "next/link";
import {TiKey} from "react-icons/ti";

function CaseStudy() {
	return (
		<div className="flex flex-col items-center sticky justify-center bottom-0 z-50">
			<div className="bg-slate-50 dark:bg-zinc-900 flex flex-col justify-between items-center mb-2 px-4 py-4 mt-2 w-auto rounded-lg  ">
				<button className="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-500/50 px-4 py-2 text-sm font-semibold rounded-md">
					{" "}
					<TiKey className="text-lg" />
					<Link href="https://forms.gle/Vc2hGH6TANNdLApZA" target="_blank">
						{" "}
						Request Case Study Password
					</Link>
				</button>
			</div>
		</div>
	);
}

export default CaseStudy;
