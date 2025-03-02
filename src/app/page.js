"use client";

import {useState} from "react";
import Clarity from "@microsoft/clarity";

import Hero from "@/components/Hero";
import MiddleSection from "@/components/MiddleSection";
import Image from "next/image";
import BottomSection from "@/components/BottomSection";
import ThemeToggle from "@/components/ThemeToggle";
import Project from "@/components/Projects";
import NavigationTabs from "@/components/Navigation";
import Landing from "@/components/Landing";
import AllProjects from "@/components/AllProjects";
import Navigation from "@/components/Navigation";

export default function Home() {
	const projectId = "ljqmcyq75s";

	Clarity.init(projectId);

	return <Navigation />;
}
