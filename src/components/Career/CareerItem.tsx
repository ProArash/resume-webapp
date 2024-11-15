'use client';
import { ReactNode, useState } from 'react';
import { FaArrowDown, FaArrowUp, FaCalendar, FaGoogle } from 'react-icons/fa';

const CareerItem = ({
	corpName,
	corpLogo,
	start,
	end,
	caption,
}: {
	corpName: string;
	start: string;
	end?: string;
	caption: string;
	corpLogo?: ReactNode;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="flex flex-col gap-2 border border-cgreen-100 rounded-md">
			<div
				className="flex justify-between items-center hover:bg-onSecondary p-2 rounded-md transition cursor-pointer w-full  active:bg-secondary"
				onClick={() => setIsOpen(!isOpen)}>
				<p className="font-bold flex items-center">
					{corpLogo ?? <FaGoogle />}
					{corpName}
				</p>
				<div>{isOpen ? <FaArrowUp /> : <FaArrowDown />}</div>
			</div>
			<div
				className={`flex flex-col gap-1 p-2 rounded-md transition-all ${
					isOpen ? 'flex' : 'hidden'
				}`}>
				<p className="flex gap-2 text-xs">
					<FaCalendar />
					{start} - {end ? end : 'Currently working'}
				</p>
				<p className="text-justify text-sm">{caption}</p>
			</div>
		</div>
	);
};

export default CareerItem;
