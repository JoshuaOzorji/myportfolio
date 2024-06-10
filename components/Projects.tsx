"use client";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const Projects = () => {
	const { ref } = useSectionInView("Projects", 0.3);
	return (
		<section id='projects' ref={ref} className='scroll-mt-28 padding '>
			<SectionHeading>
				<motion.p
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					viewport={{ once: true }}
					className='section-heading text-light-dark'>
					My Projects
				</motion.p>
			</SectionHeading>
			<div>
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
};

export default Projects;
