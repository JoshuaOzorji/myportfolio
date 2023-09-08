"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SubmitBtn from "./SubmitBtn";

const Contact = () => {
	const { ref } = useSectionInView("Contact");
	return (
		<section ref={ref} id='contact' className='scroll-mt-28 mb-28 padding'>
			<SectionHeading>
				<motion.p
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					viewport={{ once: true }}
					className='section-heading text-light-dark'>
					Contact me
				</motion.p>
			</SectionHeading>

			<motion.p
				initial={{ opacity: 0, y: 25 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5 }}
				viewport={{ once: true }}
				className='text-gray-700 dark:text-gray-200 text-center font-abel sm-md-paragraph-text'>
				Please contact me directly at{" "}
				<a className='font-bold underline' href='mailto:ozorjijoshua@gmail.com'>
					ozorjijoshua@gmail.com
				</a>{" "}
				or through this form
			</motion.p>

			<motion.form
				initial={{ opacity: 0, y: 25 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.75 }}
				viewport={{ once: true }}
				className='mt-10 flex flex-col justify-start font-abel .sm-md-paragraph-text'
				action={async (formData) => {
					const { data, error } = await sendEmail(formData);

					if (error) {
						toast.error(error);
						return;
					}

					toast.success("Email sent successfully!");
				}}>
				<input
					className='h-12 rounded-md border border-black/10 dark:border-white/10 transition-all duration-300 p-4 dark:bg-opacity-50'
					name='senderEmail'
					type='email'
					required
					max={100}
					placeholder='Your email'
				/>
				<textarea
					className='h-52 my-3 rounded-md border border-black/10 dark:border-white/10 transition-all duration-300 p-4 dark:bg-opacity-80'
					name='message'
					placeholder='Your message'
					required
					maxLength={1000}
				/>
				<span className='inline-block'>
					<SubmitBtn />
				</span>
			</motion.form>
		</section>
	);
};

export default Contact;
