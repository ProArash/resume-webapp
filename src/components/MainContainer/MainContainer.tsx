import React, { ReactNode } from 'react';

const MainContainer = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={`flex gap-5 w-full bg-primary rounded-md p-3 ${className}`}>
			{children}
		</div>
	);
};

export default MainContainer;
