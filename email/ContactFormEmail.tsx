import React from "react";
import {
	Html,
	Body,
	Head,
	Heading,
	Hr,
	Container,
	Preview,
	Section,
	Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
	message: string;
	senderEmail: string;
};
export default function ContactFormEmail({
	message,
	senderEmail,
}: ContactFormEmailProps) {
	return (
		<Html>
			<Head />
			<Preview>Message from portfolio site</Preview>
			<Tailwind>
				<Body>
					<Container>
						<Section className='bg-white border border-black/10 my-10 px-10 py-4 rounded-md'>
							<Heading className='leading-tight'>
								Your portfolio new message
							</Heading>
							<Text>{message}</Text>
							<Hr />
							<Text>from: {senderEmail}</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
