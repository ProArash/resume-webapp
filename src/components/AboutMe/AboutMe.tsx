import React from 'react';
import MainContainer from '../MainContainer/MainContainer';
import { FaStackExchange } from 'react-icons/fa';

const AboutMe = ({ aboutMeText }: { aboutMeText: string }) => {
	return (
		<MainContainer>
			<div className="flex flex-col gap-2">
				<h1 className="flex gap-2 items-center">
					<FaStackExchange />
					About me
				</h1>
				<p className="text-justify text-sm">{aboutMeText}</p>
			</div>
		</MainContainer>
	);
};

export default AboutMe;
