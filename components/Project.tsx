"use client";

import React from "react";
import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { FaGithubSquare } from "react-icons/fa";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
	title,
	description,
	tags,
	imageUrl,
	code,
	live,
}: ProjectProps) {
	const ref = useRef<HTMLDivElement>(null);

	return (
		<main className='group-hover-container sm-md-paragraph-text'>
			<motion.section
				initial={{ opacity: 0, y: 25 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className='flex flex-col  mb-10 rounded-md cursor-default bg-white dark:bg-gray-900 px-0 pt-6 pb-5 border border-black/10 dark:border-white/10 text-gray-900 dark:text-gray-100 md:gap-y-0 transition-all duration-500 hover:bg-gray-50 dark:hover:bg-gray-900 hover:scale-[102%] hover:shadow-md'>
				<div className='flex flex-col md:flex-row'>
					<div className='flex flex-col md:w-[50%] px-4 md:pl-6 md:pr-4 justify-evenly gap-y-2 md:gap-y-2'>
						<h2 className='font-chonburi'>{title}</h2>
						<p className='font-abel'>{description}</p>
						<ul className='flex flex-wrap gap-2 font-abel'>
							{tags.map((tag, index) => (
								<li
									key={index}
									className='block text-white rounded-lg border bg-slate-800 px-2 items-center justify-center'>
									{tag}
								</li>
							))}
						</ul>
					</div>

					<div className='hidden md:block md:w-[50%] image-container  md:rounded-l-md shadow-md order-first md:order-last'>
						<div className='image-inner md:-right-3'>
							<Image
								src={imageUrl}
								alt={title}
								quality={95}
								className='w-full object-fill image'></Image>
						</div>
					</div>
				</div>

				<div className='flex flex-row text-slate-800 dark:text-slate-300 text-left md:text-center md:mx-auto my-auto gap-x-1 md:gap-x-2 mt-3 pl-4 md:pl-0'>
					<Link href={code} target='_blank'>
						<FaGithubSquare className='w-5 h-5 md:w-6 md:h-6 hover:text-gray-950 dark:hover:text-gray-100' />
					</Link>
					<Link href={live} target='_blank'>
						<FiExternalLink className='w-5 h-5 md:w-6 md:h-6 hover:text-gray-950 dark:hover:text-gray-100' />
					</Link>
				</div>
			</motion.section>
		</main>
	);
}
