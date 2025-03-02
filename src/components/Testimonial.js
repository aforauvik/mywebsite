"use client";

import React, {useState, useEffect} from "react";

const feedback = [
	{
		number: "01 Of 03",
		comment:
			"I worked with Auvik in the infancy of a startup. He ran the UX side of things, and his miro board was one of the main reasons I joined the startup! It was ambitious. detailed and revealed a real intellectual investment on Auvik's part into the domain of the startup.",
		author: "Dr. Steven A.",
		title: "Staff Software Engineer, Netflix",
	},
	{
		number: "02 Of 03",
		comment:
			"As the senior designer on the team, Auvik quickly emerged as a valuable mentor. His guidance instilled in me key principles and best practices for wireframing, design systems, design organization, prototyping, and user testing.",
		author: "Jaclyn T.",
		title: "Product Designer, Pathfinder Health",
	},
	{
		number: "03 Of 03",
		comment:
			"I had the pleasure of working with Auvik, and I highly recommend him for any Product Designer role. During our time working together, Auvik consistently showcased his ability to solve complex problems with innovative solutions.",
		author: "Steve S.",
		title: "Senior Product Designer, Syniti",
	},
];

function Testimonial() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleClick = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % feedback.length);
	};

	return (
		<div onClick={handleClick} className="cursor-pointer">
			<p className="text-xs leading-normal font-bold uppercase text-indigo-500 dark:text-indigo-500">
				{feedback[currentIndex].number}
			</p>
			<p className="text-base leading-normal mt-4 text-base-600 font-medium">
				{feedback[currentIndex].comment}
			</p>
			<div className="relative items-center text-balance">
				<h3 className="text-slate leading-normal sm:text-lg md:text-xl mt-8 font-semibold">
					{feedback[currentIndex].author}
				</h3>
				<p className="text-xs mt-2 leading-normal font-bold uppercase text-red-500 dark:text-red-500">
					{feedback[currentIndex].title}
				</p>
			</div>
		</div>
	);
}

export default Testimonial;
