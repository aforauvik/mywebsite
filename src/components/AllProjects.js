"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import RightProjects from "./RightProject";
import LeftProjects from "./LeftProjeect";
import ThemeToggle from "./ThemeToggle";
import Footer from "./Footer";
import CaseStudy from "./CaseStudy";
import LastProjects from "./LastProject";

function AllProjects() {
	return (
		<>
			<LeftProjects />
			<RightProjects />
			<LastProjects />
			<CaseStudy />
			<Footer />
		</>
	);
}

export default AllProjects;
