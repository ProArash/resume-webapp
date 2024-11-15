import { ReactNode } from 'react';

const Skill = ({
	name,
	xp,
	icon,
}: {
	name: string;
	xp: number;
	icon?: ReactNode;
}) => {
	return (
		<div className="flex gap-2 items-center">
			<p className="w-[70%] flex gap-2 items-center">
				{icon && icon}
				{name}
			</p>
			<div className="bg-background w-full rounded-full h-fit">
				<div
					className={`bg-onPrimary rounded-full h-[7px]`}
					style={{
						width: `${xp}%`,
					}}
				/>
			</div>
		</div>
	);
};

export default Skill;
