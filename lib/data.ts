import React from "react";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { DiNodejs } from "react-icons/di";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import godaddy from "@/public/godaddyLandingPage1.png";
import hotelApp from "@/public/hotelBookingApp1.png";
import byteCrafters from "@/public/byteCrafters1.png";
import byteStore from "@/public/byte-store1.png";
import portfolio from "@/public/portfolio1.png";
import fiverr from "@/public/fiverr-app1.jpg";
import reserva from "@/public/reserva-booking.jpg";
import apposwift from "@/public/apposwift.jpg";

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
		title: "AppoSwift",
		description:
			"Food Ordering App featuring Auth0 for user authentication and registration/update functionalities. It offers comprehensive search, sort, filter, and pagination options. Users can effortlessly manage restaurants, upload images, and handle their shopping carts with Stripe integration for secure checkout, alongside a real-time order tracking status",
		tags: [
			"auth0",
			"shadcn",
			"react",
			"typescript",
			"tailwind",
			"react-form",
			"stripe",
			"express",
			"react-query",
			"nodejs",
			"mongodb",
			"cloudinary",
			"mongoose",
		],

		imageUrl: apposwift,
		code: "https://github.com/JoshuaOzorji/apposwift",
		live: "https://apposwift.vercel.app/",
	},

	{
		title: "Reserva Booking",
		description:
			"Hotel and Apartment Booking App featuring secure JWT and HTTP cookie authentication, advanced searching, sorting, and filtering, seamless pagination, Stripe-integrated payments, sophisticated forms, image uploads, and effortless hotel/apartment management",
		tags: [
			"react",
			"typescript",
			"tailwind",
			"react-form",
			"stripe",
			"express",
			"react-query",
			"nodejs",
			"mongodb",
			"cloudinary",
			"mongoose",
		],

		imageUrl: reserva,
		code: "https://github.com/JoshuaOzorji/reserva-booking",
		live: "https://reserva-booking.vercel.app",
	},

	{
		title: "Fiverr App",
		description:
			"A user-friendly Fiverr clone, built with a sleek design using React. Secured with Stripe for safe payments and Express with JsonWebToken for protecting users information",
		tags: [
			"react",
			"tailwind",
			"stripe",
			"express",
			"tanstack query",
			"nodejs",
			"mongodb",
		],

		imageUrl: fiverr,
		code: "https://github.com/JoshuaOzorji/fiverr-app",
		live: "https://fiverr-appp.netlify.app/",
	},
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
		description:
			"A simple blog app, featuring a Sanity backend for managing contents, built with Next.js, Sanity.io, React, and Tailwind CSS.",
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
			"Redesigned GoDaddy landing page project developed using, React, Tailwind and React libraries e.g Swiper JS, Lazy loading",
		tags: ["react", "tailwind", "swiperjs"],
		imageUrl: godaddy,
		code: "https://github.com/JoshuaOzorji/godaddy_app",
		live: "https://godaddy-page.netlify.app",
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
