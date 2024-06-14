"use client";
import React, { useEffect, useState } from "react";

const Footer = () => {
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

	useEffect(() => {
		setCurrentYear(new Date().getFullYear());
	}, []);

	return (
		<footer className='font-abel text-xs w-full px-4 md:px-0 mx-auto md:max-w-[50%] mb-2 flex items-center justify-between border-t border-gray-700 pt-3 pb-1 text-light-dark'>
			<p>&copy; {currentYear}</p>
			<div className='flex flex-row gap-4'>
				<a
					href='https://github.com/JoshuaOzorji'
					className='underline cursor-pointer'>
					GITHUB
				</a>
				<a
					href='https://www.linkedin.com/in/joshua-ozorji/'
					className='underline cursor-pointer'>
					LINKEDIN
				</a>
				<a
					href='https://wa.me/2347038514969'
					className='underline cursor-pointer'>
					WHATSAPP
				</a>
			</div>
		</footer>
	);
};

export default Footer;
