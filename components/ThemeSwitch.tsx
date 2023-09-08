"use client";
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			className='fixed flex items-center justify-center bottom-5 right-5 bg-white border-gray-300 w-10 h-10 bg-opacity-80 backdrop-blur-md border shadow-2xl rounded-full hover:scale-[105%] active:scale-[105%] transition-all dark:bg-gray-900 dark:border-gray-500 dark:text-gray-100'
			onClick={toggleTheme}>
			{theme === "light" ? <BsSun /> : <BsMoon />}
		</button>
	);
}
