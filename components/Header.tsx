"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function Header() {
	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSectionContext();

	return (
		<header className='relative z-[999] font-abel text-xs md:text-base'>
			<motion.div
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				className='fixed top-0 w-full bg-gray-50 dark:bg-gray-700 py-8 sm:py-6 bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] md:top-6 md:w-[50%] md:rounded-full md:mx-auto md:left-0 md:right-0 sm:h-[3.25rem] md:border md:border-gray-300 md:dark:border-gray-600 dark:bg-opacity-80 dark:shadow-lg  dark:backdrop-blur-[0.5rem]'>
				<nav
					className='flex fixed mx-auto top-0 
				md:top-[2px] left-0 right-0 py-2 h-12 md:py-0'>
					<ul className='flex flex-wrap w-full items-center justify-center gap-y-1 md:flex-nowrap md:gap-x-3 dark:text-gray-400'>
						{links.map((link) => (
							<motion.li
								className='h-3/4 flex items-center justify-center relative'
								key={link.hash}
								initial={{ y: -100, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}>
								<Link
									className={clsx(
										"flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 dark:hover:text-gray-50 transition",
										{
											"text-gray-950 dark:text-gray-50":
												activeSection === link.name,
										},
									)}
									href={link.hash}
									onClick={() => {
										setActiveSection(link.name);
										setTimeOfLastClick(Date.now());
									}}>
									{link.name}

									{link.name === activeSection && (
										<motion.span
											className='bg-gray-200 dark:bg-gray-900 rounded-full absolute inset-0 -z-10'
											layoutId='activeSection'
											transition={{
												type: "spring",
												stiffness: 380,
												damping: 30,
											}}></motion.span>
									)}
								</Link>
							</motion.li>
						))}
					</ul>
				</nav>
			</motion.div>
		</header>
	);
}
