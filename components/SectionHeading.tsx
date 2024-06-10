import React from "react";

type SectionHeadingProps = {
	children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
	return <h2>{children}</h2>;
};

export default SectionHeading;
