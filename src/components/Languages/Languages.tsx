import React from 'react';
import MainContainer from '../MainContainer/MainContainer';
import { FaLanguage } from 'react-icons/fa';
import Skill from '../Skill/Skill';
import { US } from 'country-flag-icons/react/3x2';
import { DE } from 'country-flag-icons/react/3x2';

const Languages = () => {
	return (
		<MainContainer>
			<div className="flex flex-col gap-2 w-full">
				<h1 className="flex items-center gap-2">
					<FaLanguage />
					Languages
				</h1>
				<Skill
					name="English"
					xp={70}
					icon={<US className="w-[30px]" />}
				/>
				<Skill
					name="Deutsch"
					xp={30}
					icon={<DE className="w-[30px]" />}
				/>
			</div>
		</MainContainer>
	);
};

export default Languages;
