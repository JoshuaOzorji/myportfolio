"use client";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload, HiOutlineMail } from "react-icons/hi";
import { FaGithubSquare, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
	const { ref } = useSectionInView("Home", 0.5);
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

	return (
		<section
			ref={ref}
			id='home'
			className='w-full text-center scroll-mt-[100rem] mb-24'>
			<div className='mt-[6rem] md:my-28'>
				<motion.h1
					initial={{ y: 75, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.5 }}
					className='font-chonburi text-4xl md:text-6xl md:px-36 font-bold px-10 text-light-dark md:leading-[4.3rem]'>{`Hello, I'm Josh, a full-stack developer. It's been an enjoyable 1+ years in this environment - web development.`}</motion.h1>

				<motion.div
					initial={{ y: 75, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 1 }}
					className='my-6 flex flex-col md:flex-row items-center justify-center gap-2 font-abel'>
					<Link
						href='#contact'
						className='group bg-gray-900 dark:bg-gray-300 text-gray-100 dark:text-gray-900 px-4 py-1 flex items-center justify-center rounded-full outline-none focus:scale-105 hover:bg-gray-950 dark:hover:bg-gray-200 transition gap-2'
						onClick={() => {
							setActiveSection("Contact");
							setTimeOfLastClick(Date.now());
						}}>
						<p className='group-hover:text-gray-300 dark:group-hover:text-gray-600'>
							Contact me
						</p>
						<HiOutlineMail className='opacity-75 group-hover:translate-x-1 group transition duration-500 group-hover:text-gray-300 dark:group-hover:text-gray-600' />
					</Link>

					<a
						className='group bg-gray-200 dark:bg-gray-800  text-gray-950 dark:text-gray-50 px-4 py-1 flex items-center justify-center rounded-full outline-none focus:scale-105 hover:bg-gray-100 dark:hover:bg-gray-900 transition gap-2 border border-black/10 dark:border-white/10'
						href='/CV.pdf'
						download>
						{" "}
						Download CV
						<HiDownload className='group-hover:translate-y-1 transition duration-500' />
					</a>

					<div className='flex gap-2'>
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
