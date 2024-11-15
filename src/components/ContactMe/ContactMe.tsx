import React from 'react';
import MainContainer from '../MainContainer/MainContainer';
import {
	FaBlog,
	FaGithub,
	FaHeadset,
	FaInbox,
	FaMobile,
	FaTelegram,
} from 'react-icons/fa';

const ContactMe = ({
	mobile,
	telegram,
	email,
	github,
	website,
}: {
	mobile: string;
	telegram: string;
	email: string;
	github: string;
	website: string;
}) => {
	website = `https://${website}`;
	github = `https://github.com/${github}`;
	telegram = `https://t.me/${telegram}`;
	const emailHref = `mailto:${email}`;
	return (
		<MainContainer>
			<div className="flex flex-col gap-2">
				<h1 className="flex items-center gap-2">
					<FaHeadset />
					Contact me
				</h1>
				<p>
					<FaMobile />
					{mobile}
				</p>
				<p>
					<FaTelegram />
					<a target="_blank" href={telegram}>
						{telegram}
					</a>
				</p>
				<p>
					<FaInbox />
					<a target="_blank" href={emailHref}>
						{email}
					</a>
				</p>
				<p>
					<FaBlog />
					<a target="_blank" href={website}>
						{website}
					</a>
				</p>
				<p>
					<FaGithub />
					<a target="_blank" href={github}>
						{github}
					</a>
				</p>
			</div>
		</MainContainer>
	);
};

export default ContactMe;
