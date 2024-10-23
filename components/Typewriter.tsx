import { motion } from "framer-motion";

interface TypewriterProps {
	text: string;
	[key: string]: any;
}

export const sentenceVariants = {
	hidden: {},
	visible: { opacity: 1, transition: { staggerChildren: 0.02 } },
};

export const letterVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { opacity: { duration: 0.01 } } },
};

export const Typewriter = ({ text, ...rest }: TypewriterProps) => (
	<motion.p
		key={text}
		variants={sentenceVariants}
		initial='hidden'
		animate='visible'
		{...rest}>
		{text.split("").map((char, i) => (
			<motion.span
				key={`${char}-${i}`}
				variants={letterVariants}>
				{char}
			</motion.span>
		))}
	</motion.p>
);
