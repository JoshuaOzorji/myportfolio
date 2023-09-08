"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
	},
	animate: (index: number) => ({
		opacity: 1,

		transition: {
			delay: 0.09 * index,
		},
	}),
};

const Skills = () => {
	const { ref } = useSectionInView("Skills");

	return (
		<section id='skills' ref={ref} className='padding scroll-mt-28'>
			<SectionHeading>
				<motion.p
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					viewport={{ once: true }}
					className='section-heading text-light-dark'>
					My Skills
				</motion.p>
			</SectionHeading>

			<ul className='flex items-center flex-wrap justify-center gap-4 font-abel'>
				{skillsData.map((skill, index) => (
					<motion.li
						variants={fadeInAnimationVariants}
						initial='initial'
						whileInView='animate'
						viewport={{ once: true }}
						custom={index}
						key={index}
						className='flex flex-col items-center p-2 md:p-3 rounded-md focus:scale-105 hover:scale-105 active:scale-105 border border-black/10 dark:border-white/10 cursor-default bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 hover:text-gray-950 dark:hover:text-gray-100 hover:shadow-md transition-all duration-500'>
						<p className='text-2xl md:text-5xl'>{skill.icon}</p>
						<p className='text-xs md:text-base'>{skill.name}</p>
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default Skills;
