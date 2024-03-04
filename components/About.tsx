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
			className='padding text-center scroll-mt-28 text-gray-900 text-light-dark'>
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
				{`Currently, I'm focused on writing clean codes and understanding the
				logic behind clean codes, this gives me the push to work/collaborate on
				projects more challenging than my previous.`}
				<br />
				Over the last one year, I made the choice to follow my genuine passion -
				web development. I have dedicated myself to self-learning and gaining
				expertise in programming languages, web development frameworks, and
				building user-friendly web applications. <br />
				My journey reflects my adaptability, dedication, and commitment to
				personal and professional growth. <br />
			</motion.p>
		</motion.section>
	);
};

export default About;
