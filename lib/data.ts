import React from "react";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { DiNodejs } from "react-icons/di";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import godaddy from "@/public/godaddyLandingPage1.png";
import hotelApp from "@/public/hotelBookingApp1.png";
import byteCrafters from "@/public/byteCrafters1.png";
import byteStore from "@/public/byte-store1.png";
import portfolio from "@/public/portfolio1.png";

import {
	SiExpress,
	SiJavascript,
	SiMongodb,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "About",
		hash: "#about",
	},
	{
		name: "Skills",
		hash: "#skills",
	},

	{
		name: "Projects",
		hash: "#projects",
	},
	{
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const skillsData = [
	{
		name: "HTML",
		icon: React.createElement(AiFillHtml5),
	},
	{
		name: "CSS",
		icon: React.createElement(FaCss3Alt),
	},
	{
		name: "Javascript",
		icon: React.createElement(SiJavascript),
	},
	{
		name: "React",
		icon: React.createElement(FaReact),
	},
	{
		name: "Tailwind",
		icon: React.createElement(SiTailwindcss),
	},
	{
		name: "NextJS",
		icon: React.createElement(TbBrandNextjs),
	},
	{
		name: "TypeScript",
		icon: React.createElement(SiTypescript),
	},
	{
		name: "MongoDB",
		icon: React.createElement(SiMongodb),
	},
	{
		name: "ExpressJS",
		icon: React.createElement(SiExpress),
	},
	{
		name: "NodeJS",
		icon: React.createElement(DiNodejs),
	},
	{
		name: "GitHub",
		icon: React.createElement(AiFillGithub),
	},
] as const;

export const projectsData = [
	{
		title: "Byte Store",
		description:
			"An e-commerce store with authentication for users and secured payment system",
		tags: ["react", "auth0", "stripe", "tailwind"],
		imageUrl: byteStore,
		code: "https://github.com/JoshuaOzorji/ecommerce",
		live: "https://byte-store.netlify.app/",
	},
	{
		title: "Byte Crafters",
		description: "A simple blog web app, powered with SanityCMS backend",
		tags: ["react", "typescript", "nextjs", "tailwind", "sanitycms"],
		imageUrl: byteCrafters,
		code: "https://github.com/JoshuaOzorji/bytecrafters",
		live: "https://bytecrafters.vercel.app/",
	},
	{
		title: "Hotel App",
		description:
			"A simple hotel web app that allows users to browse available hotel rooms and filter them by maximum occupancy.",
		tags: ["react", "tailwind", "headlessui", "swiperjs"],
		imageUrl: hotelApp,
		code: "https://github.com/JoshuaOzorji/hotel-app",
		live: "https://hotel-appp.netlify.app/",
	},
	{
		title: "GoDaddy Landing Page",
		description:
			"A redesign of GoDaddy landing page developed using, React, Tailwind and React libraries e.g Swiper JS, Lazy loading etc",
		tags: ["react", "tailwind", "swiperjs"],
		imageUrl: godaddy,
		code: "https://github.com/JoshuaOzorji/godaddy_app",
		live: "https://godaddy-cloned.netlify.app/",
	},

	{
		title: "Personal Portfolio Site",
		description:
			"This page documents a mini-map of my web development journey so far",
		tags: [
			"nextjs",
			"tailwind",
			"typescript",
			"render",
			"framer-motion",
			"hot-toast",
		],
		imageUrl: portfolio,
		code: "https://github.com/JoshuaOzorji/myportfolio",
		live: "https://joshua-ozorji.vercel.app",
	},
] as const;
