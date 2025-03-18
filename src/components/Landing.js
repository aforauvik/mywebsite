"use client";

import React from "react";

import Hero from "@/components/Hero";
import MiddleSection from "@/components/MiddleSection";
import Image from "next/image";
import BottomSection from "@/components/BottomSection";
import ThemeToggle from "@/components/ThemeToggle";
import Project from "@/components/Projects";
import NavigationTabs from "@/components/Navigation";
import Footer from "./Footer";
import Skills from "./Skills";

function Landing() {
	return (
		<>
			<Hero />
			<Skills />
			<MiddleSection />
			{/* <BottomSection /> */}
			{/* <Project /> */}

			<Footer />
		</>
	);
}

export default Landing;
