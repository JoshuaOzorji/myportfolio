"use client";
import React, { useState, ChangeEvent } from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SubmitBtn from "./SubmitBtn";

const Contact = () => {
	const { ref } = useSectionInView("Contact");

	// State to manage form inputs
	const [formData, setFormData] = useState({
		senderEmail: "",
		message: "",
	});

	const handleInputChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

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
				onSubmit={async (e) => {
					e.preventDefault();

					// Create a FormData object
					const formDataObject = new FormData();
					formDataObject.append("senderEmail", formData.senderEmail);
					formDataObject.append("message", formData.message);

					const { data, error } = await sendEmail(formDataObject);

					if (error) {
						toast.error(error);
						return;
					}

					toast.success("Email sent successfully!");

					// Reset form inputs after successful email send
					setFormData({
						senderEmail: "",
						message: "",
					});
				}}>
				<input
					className='h-12 rounded-md border border-black/10 dark:border-white/10 transition-all duration-300 p-4 dark:bg-opacity-50 form-focus'
					name='senderEmail'
					type='email'
					required
					max={100}
					value={formData.senderEmail}
					onChange={handleInputChange}
					placeholder='Your email'
				/>
				<textarea
					className='h-52 my-3 rounded-md border border-black/10 dark:border-white/10 transition-all duration-300 p-4 dark:bg-opacity-80 form-focus'
					name='message'
					placeholder='Your message'
					required
					maxLength={1000}
					value={formData.message}
					onChange={handleInputChange}
				/>
				<span className='inline-block'>
					<SubmitBtn />
				</span>
			</motion.form>
		</section>
	);
};

export default Contact;
