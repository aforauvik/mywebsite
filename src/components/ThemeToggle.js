"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {FiSun, FiMoon} from "react-icons/fi";

const ThemeToggle = () => {
	const {theme, setTheme} = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<div className="flex items-center justify-center mb-4">
			<button
				onClick={() => setTheme(theme === "light" ? "dark" : "light")}
				className="p-2 focus:outline-none flex items-center justify-center w-10 h-10 dark:bg-zinc-900  bg-slate-50 rounded-full"
				aria-label="Toggle Theme"
			>
				{theme === "light" ? (
					<FiMoon className="text-base" />
				) : (
					<FiSun className="text-base" />
				)}
			</button>
		</div>
	);
};

export default ThemeToggle;
