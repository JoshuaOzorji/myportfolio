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
import twitter from "@/public/twitter-app.jpg";
import expenseTracker from "@/public/expense-tracker-thumbnail.jpg";
import pandas from "@/public/pandas-clothing.jpeg";

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
		title: "Expense Tracker",
		description:
			"A MERN stack expense tracker that enables users to record and manage their transactions, monitor spending patterns, and edit or remove entries. It offers a user-friendly platform for organizing finances and overseeing personal budgets",
		tags: [
			"reactjs",
			"typescript",
			"tailwindcss",
			"tanstack-query",
			"shadcn",
			"expressjs",
			"nodejs",
			"mongodb",
			"cloudinary",
			"mongoose",
		],

		imageUrl: expenseTracker,
		code: "https://github.com/JoshuaOzorji/expense-tracker-app",
		live: "https://expense-trackker-app.vercel.app/",
	},

	{
		title: "Social Hub",
		description:
			"A social media application built with the MERN stack. Inspired by Twitter, it enables users to create and delete posts, view others' posts, follow and unfollow users, like and comment on posts, manage user profiles, and receive notifications",
		tags: [
			"reactjs",
			"typescript",
			"tailwindcss",
			"tanstack-query",
			"daisyui",
			"expressjs",
			"nodejs",
			"mongodb",
			"cloudinary",
			"mongoose",
		],

		imageUrl: twitter,
		code: "https://github.com/JoshuaOzorji/twitter-app",
		live: "https://twitter-appp.vercel.app/",
	},

	{
		title: "AppoSwift",
		description:
			"Food Ordering App. It offers comprehensive search, sort, filter, and pagination options. Users can effortlessly manage restaurants, upload images, and handle shopping carts with Stripe integration for secure checkout, alongside a real-time order tracking status",
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
			"Hotel/Apartment Booking App. Inspired by Booking.com featuring advanced searching, sorting, and filtering, seamless pagination, Stripe-integrated payments, sophisticated forms, image uploads, and effortless hotel/apartment management",
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
		title: "Online marketplace",
		description:
			"Online marketplace - Fiverr inspired. Developed with features including - accounts for sellers and buyers, real-time chat, sellers can create and manage gigs, & users can also review gigs/services. Built using the MERN stack",
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
			"An ecommerce store built using using React, Auth0 for authentication, and Stripe for payment. React context and reducers was deployed for managing states and Axios for fetching data.",
		tags: ["react", "auth0", "stripe", "tailwindcss", "axios"],
		imageUrl: byteStore,
		code: "https://github.com/JoshuaOzorji/ecommerce",
		live: "https://byte-store.netlify.app/",
	},

	{
		title: "Byte Crafters",
		description:
			"A simple blog app, featuring a Sanity backend for managing contents. Developed with Next.js, SanityCMS, React, and TailwindCSS",
		tags: [
			"react",
			"typescript",
			"nextjs",
			"tailwind",
			"sanitycms",
		],
		imageUrl: byteCrafters,
		code: "https://github.com/JoshuaOzorji/bytecrafters",
		live: "https://bytecrafters.vercel.app/",
	},

	{
		title: "Hotel App",
		description:
			"A simple hotel web app that allows users to browse available hotel rooms and filter them by maximum occupancy",
		tags: ["react", "tailwind", "headlessui", "swiperjs"],
		imageUrl: hotelApp,
		code: "https://github.com/JoshuaOzorji/hotel-app",
		live: "https://hotel-appp.netlify.app/",
	},

	{
		title: "Panda Clothing Landing Page",
		description:
			"A modern and minimalist landing page for a clothing store, built with React, Tailwind CSS, and TypeScript. It features a sleek design to showcase the brand and attract customers with a clean, responsive interface",
		tags: ["react", "tailwindcss", "typescript"],
		imageUrl: pandas,
		code: "https://github.com/JoshuaOzorji/hng-stage-two",
		live: "https://pandas-clothing.vercel.app/",
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

	{
		title: "GoDaddy Landing Page",
		description:
			"Everyone remembers their first. This is my first! And after then, the journey has been memorable. Just a redesign of GoDaddy Landing Page",
		tags: ["react", "tailwind", "swiperjs"],
		imageUrl: godaddy,
		code: "https://github.com/JoshuaOzorji/godaddy_app",
		live: "https://godaddy-page.netlify.app",
	},
] as const;
