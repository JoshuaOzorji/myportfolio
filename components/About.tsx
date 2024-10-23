"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const About = () => {
	const { ref } = useSectionInView("About");
	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			ref={ref}
			id='about'
			className='text-center text-gray-900 padding scroll-mt-28 text-light-dark'>
			<SectionHeading>
				<motion.p
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					viewport={{ once: true }}
					className='section-heading text-light-dark'>
					About me
				</motion.p>
			</SectionHeading>
			<motion.p
				initial={{ opacity: 0, y: 75 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
				viewport={{ once: true }}
				className='font-abel sm-md-paragraph-text md:leading-loose'>
				My journey in web development began as a genuine
				pursuit of my interests, leading me to learn
				various programming languages and frameworks.
				<br />
				I’m dedicated to writing clean, efficient code
				and continuously strive to deepen my
				understanding of best practices. This commitment
				drives me to take on challenging projects that
				push my skills further and foster collaboration
				with like-minded professionals.
				<br />
				My adaptability and strong problem-solving
				abilities enable me to build user-friendly web
				applications that deliver real value.
				<br />I believe in the importance of personal
				and professional growth, and I’m always eager to
				learn new technologies and methodologies to stay
				ahead in this fast-evolving field.
			</motion.p>
		</motion.section>
	);
};

export default About;
