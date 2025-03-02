"use client";

import {useState} from "react";
import Landing from "./Landing";
import AllProjects from "./AllProjects";

export default function Navigation() {
	const [activeTab, setActiveTab] = useState("Home");

	const tabs = ["Home", "Projects", "My Blog"];

	const renderComponent = () => {
		switch (activeTab) {
			case "Home":
				return <Landing />;
			case "Projects":
				return <AllProjects />;
			default:
				return <Landing />;
		}
	};

	const handleTabClick = (tab) => {
		if (tab === "My Blog") {
			window.open("https://auvik.substack.com/", "_blank");
		} else {
			setActiveTab(tab);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="bg-slate-50 dark:bg-zinc-900 flex flex-row justify-center items-center mb-4 p-2 gap-4 mt-4 w-auto rounded-lg ">
				{tabs.map((tab) => (
					<div key={tab}>
						<div
							className={`px-4 uppercase rounded-lg text-xs font-bold flex flex-row py-3 gap-4 cursor-pointer ${
								activeTab === tab
									? "dark:text-white text-zinc-950 shadow-2xl font-bold bg-white dark:bg-zinc-950"
									: "text-zinc-500"
							}`}
							onClick={() => handleTabClick(tab)}
						>
							{tab}
						</div>
					</div>
				))}
			</div>
			<div className="w-full">{renderComponent()}</div>
		</div>
	);
}
