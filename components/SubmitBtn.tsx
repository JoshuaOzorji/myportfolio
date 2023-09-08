import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitBtn = () => {
	const { pending } = useFormStatus();
	return (
		<button
			type='submit'
			className='group flex flex-row items-center justify-start gap-1 bg-gray-800 dark:bg-gray-600 dark:border dark:border-gray-500 dark:border-opacity-80 text-white dark:text-white rounded-md transition-all duration-500  hover:bg-gray-950 dark:hover:bg-gray-800 disabled:scale-100 disabled:bg-opacity-65 p-2 sm-md-paragraph-text'
			disabled={pending}>
			{pending ? (
				<div className='h-3 w-3 md:h-5 md:w-5 animate-spin rounded-md border-b-2 border-white dark:border-gray-900'></div>
			) : (
				<>
					Submit
					<FaPaperPlane className='sm-md-paragraph-text opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 h-3 w-3 md:h-4 md:w-4 duration-500' />
				</>
			)}
		</button>
	);
};

export default SubmitBtn;
