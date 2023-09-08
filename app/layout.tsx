import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Abel, Noto_Serif, Inter, Chonburi } from "next/font/google";
import Footer from "@/components/Footer";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import ThemeContextProvider from "@/context/ThemeContext";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/ThemeSwitch";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const chonburi = Chonburi({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-chonburi",
	display: "swap",
});

const abel = Abel({
	weight: "400",
	subsets: ["latin"],
	display: "swap",
	variable: "--font-abel",
});

const noto = Noto_Serif({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-noto",
});

export const metadata: Metadata = {
	title: "Joshua Ozorji - Dev. Josh",
	description:
		"Josh is a full-stack developer still evolving in this environment",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='!scroll-smooth'>
			<body
				className={` ${inter.variable} ${abel.variable} ${noto.variable} ${chonburi.variable} bg-light-dark text-gray-950`}>
				<ThemeContextProvider>
					<ActiveSectionContextProvider>
						<Header />
						{children}
						<Footer />

						<Toaster position='bottom-right' />
						<ThemeSwitch />
					</ActiveSectionContextProvider>
				</ThemeContextProvider>
			</body>
		</html>
	);
}
