import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

const page = () => {
	return (
		<div>
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
};

export default page;
