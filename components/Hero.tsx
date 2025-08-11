"use client";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload, HiOutlineMail } from "react-icons/hi";
import { FaGithubSquare, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "./Typewriter";

const Hero = () => {
	const { ref } = useSectionInView("Home", 0.5);
	const { setActiveSection, setTimeOfLastClick } =
		useActiveSectionContext();

	return (
		<section
			ref={ref}
			id='home'
			className='w-full text-center scroll-mt-[100rem] mb-24 md:mb-0 my-auto min-h-fit'>
			<div className='mt-[6rem] flex flex-col justify-between md:py-6'>
				<h1 className='md:px-32 font-bold px-4 text-light-dark leading-[2.8rem] md:leading-[4.3rem] text-4xl md:text-6xl font-chonburi'>
					<Typewriter
						text={`Hello, I'm Josh, a full-stack web developer.\nI turn ideas into engaging digital experiences, crafting innovative solutions through code.`}
					/>
				</h1>

				<motion.div
					initial={{ y: 75, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 2.5 }}
					className='flex flex-col items-center justify-center gap-3 my-6 md:flex-row md:gap-2 font-abel'>
					<Link
						href='#contact'
						className='flex items-center justify-center gap-2 px-4 py-1 text-gray-100 transition bg-gray-900 rounded-full outline-none group dark:bg-gray-300 dark:text-gray-900 focus:scale-105 hover:bg-gray-950 dark:hover:bg-gray-200'
						onClick={() => {
							setActiveSection(
								"Contact",
							);
							setTimeOfLastClick(
								Date.now(),
							);
						}}>
						<p className='group-hover:text-gray-300 dark:group-hover:text-gray-600'>
							Contact me
						</p>
						<HiOutlineMail className='transition duration-500 opacity-75 group-hover:translate-x-1 group group-hover:text-gray-300 dark:group-hover:text-gray-600' />
					</Link>

					<a
						className='flex items-center justify-center gap-2 px-4 py-1 transition bg-gray-200 border rounded-full outline-none group dark:bg-gray-800 text-gray-950 dark:text-gray-50 focus:scale-105 hover:bg-gray-100 dark:hover:bg-gray-900 border-black/10 dark:border-white/10'
						href='/JOSHUA_OZORJI_CV.pdf'
						download>
						{" "}
						Download CV
						<HiDownload className='transition duration-500 group-hover:translate-y-1' />
					</a>

					<div className='flex gap-3 md:gap-2'>
						{/* GITHUB LINK */}
						<a
							className='hero-contact-icons'
							href='https://github.com/JoshuaOzorji'
							target='_blank'>
							<FaGithubSquare />
						</a>

						{/* LINKEDIN LINK */}
						<a
							className='hero-contact-icons'
							href='https://www.linkedin.com/in/joshua-ozorji/'
							target='_blank'>
							<BsLinkedin />
						</a>

						{/* WHATSAPP LINK */}
						<a
							className='hero-contact-icons'
							href='https://wa.me/2347038514969'
							target='_blank'>
							<FaWhatsapp />
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
