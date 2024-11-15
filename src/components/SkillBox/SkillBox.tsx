import React from 'react';
import Skill from '../Skill/Skill';
import MainContainer from '../MainContainer/MainContainer';
import { FaCode } from 'react-icons/fa';
import {
	SiDocker,
	SiGit,
	SiLinux,
	SiMicrosoftword,
	SiNestjs,
	SiNextdotjs,
	SiNodedotjs,
	SiPrisma,
	SiTypescript,
} from 'react-icons/si';

const SkillBox = () => {
	return (
		<MainContainer>
			<div className="flex flex-col gap-2 w-full h-full overflow-y-auto">
				<h1 className="flex items-center gap-2">
					<FaCode />
					Skills
				</h1>
				<Skill icon={<SiNestjs />} name="NestJs" xp={60} />
				<Skill icon={<SiTypescript />} name="Typescript" xp={70} />
				<Skill icon={<SiNextdotjs />} name="NextJs" xp={50} />
				<Skill icon={<SiPrisma />} name="PrismaORM" xp={70} />
				<Skill icon={<SiNodedotjs />} name="NodeJs" xp={70} />
				<Skill icon={<SiDocker />} name="Docker" xp={50} />
				<Skill icon={<SiMicrosoftword />} name="MS Office" xp={80} />
				<Skill icon={<SiLinux />} name="Linux" xp={60} />
				<Skill icon={<SiGit />} name="Git" xp={50} />
			</div>
		</MainContainer>
	);
};

export default SkillBox;
