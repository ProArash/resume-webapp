import React from 'react';
import MainContainer from '../MainContainer/MainContainer';
import CareerItem from './CareerItem';
import { FaBriefcase } from 'react-icons/fa';

const Career = () => {
	return (
		<MainContainer>
			<div className="flex flex-col gap-2 w-full">
				<div>
					<h1 className="flex items-center gap-2">
						<FaBriefcase />
						Career
					</h1>
				</div>
				<CareerItem
					corpName="Hayoola Online"
					start="2023"
					end="2024"
					caption="As part of a team ive implemented RestAPI using expressJS and prismaORM to integerate the servic with ChatGPT API to generate most relevant response based on the platform data."
				/>
				<CareerItem
					corpName="FartakECU"
					start="2024"
					caption="Currently im working as Fullstack developer on a few projects (E-Commerce, Click ads) using NextJS and NestJS"
				/>
			</div>
		</MainContainer>
	);
};

export default Career;
