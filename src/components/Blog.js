"use client";

import Link from "next/link";
import React from "react";
import {useState, useEffect} from "react";

const articles = [
	{
		title: "Harnessing Social Norms to Drive User Behavior",
		url: "https://auvik.substack.com/p/harnessing-social-norms-to-drive",
	},
	{
		title: "Understanding Cognitive Load in UX Design",
		url: "https://auvik.substack.com/p/understanding-cognitive-load-in-ux",
	},
	{
		title:
			"The Hippo Syndrome: When Design Decisions are Driven by the Loudest Voice",
		url: "https://auvik.substack.com/p/the-hippo-syndrome-when-design-decisions",
	},
	{
		title: "Three Need-finding Strategies",
		url: "https://auvik.substack.com/p/three-need-finding-strategies",
	},
	{
		title: "4 Types Of User Interview Questions To Avoid",
		url: "https://auvik.substack.com/p/4-types-of-user-interview-questions",
	},
	{
		title: "PMI Technique For Ideation",
		url: "https://auvik.substack.com/p/pmi-technique-for-ideation",
	},
	{
		title: "How To Tell If You Are Building A Feature Factory",
		url: "https://auvik.substack.com/p/how-to-tell-if-you-are-building-a",
	},
	{
		title: "Minimum Viable Product",
		url: "https://auvik.substack.com/p/minimum-viable-product",
	},
	{
		title: "How God Complex Leads To Feature Bloat",
		url: "https://auvik.substack.com/p/mistakes-often-made-by-first-time",
	},
	{
		title: "Dark Patterns in UX Design",
		url: "https://auvik.substack.com/p/dark-patterns-in-ux-design",
	},
	{
		title: "Embracing Accessibility: WCAG for Designers and Developers",
		url: "https://auvik.substack.com/p/embracing-accessibility-wcag-for",
	},
];

const planet = [
	"/1.png",
	"/2.png",
	"/3.png",
	"/4.png",
	"/5.png",
	"/6.png",
	"/7.png",
	"/8.png",
];

const Blog = () => {
	const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
	const [messageFade, setMessageFade] = useState(true);

	useEffect(() => {
		// Function to change message every 5 seconds
		const interval = setInterval(() => {
			setMessageFade(false);

			setTimeout(() => {
				setCurrentMessageIndex(
					(prevIndex) => (prevIndex + 1) % articles.length
				);
				setMessageFade(true);
			}, 600); // Duration of the fade-out transition
		}, 6000);

		// Stop changing messages after 100 seconds
		// setTimeout(() => {
		// 	clearInterval(interval);
		// }, 100000);

		// Clean up interval on component unmount
		return () => clearInterval(interval);
	}, [articles.length]);

	// rotating planet images starts here

	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [fade, setFade] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			// Start fade out
			setFade(false);

			// Wait for the fade-out to complete (e.g., 500ms), then update the image and fade in
			setTimeout(() => {
				setCurrentImageIndex((prevIndex) => (prevIndex + 1) % planet.length);
				setFade(true);
			}, 500); // Duration of the fade-out transition
		}, 5000);

		return () => clearInterval(interval);
	}, [planet.length]);

	// rotating planet images ends here

	return (
		<div>
			<img
				className={`h-16 mx-auto transition-opacity duration-500 ${
					fade ? "opacity-100" : "opacity-0"
				}`}
				src={planet[currentImageIndex]}
				alt=""
			/>
			<h3 className="text-slate leading-normal sm:text-lg md:text-xl mt-4 font-semibold">
				My Blog
			</h3>
			<p
				className={`text-sm leading-normal mt-2 h-16 font-medium transition-opacity duration-500 ${
					messageFade ? "opacity-100" : "opacity-0"
				}`}
			>
				{articles[currentMessageIndex].title}
			</p>
			<div className="mt-8 justify-center flex">
				<Link
					href={articles[currentMessageIndex].url}
					target="blank"
					className="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-gray-500 bg-white hover:text-indigo-500 ring-1 ring-gray-200 focus:ring-gray-500 h-9 px-4 py-2 text-sm font-semibold rounded-md"
				>
					Read More
				</Link>
			</div>
		</div>
	);
};

export default Blog;
