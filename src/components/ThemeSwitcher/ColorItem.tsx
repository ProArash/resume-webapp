'use client';
import { useTheme } from 'next-themes';
import React from 'react';

type ColorVariant = 'blue' | 'green' | 'red';

const variants = {
	red: ['bg-cred-400', 'bg-cred-200'],
	green: ['bg-cgreen-400', 'bg-cgreen-200'],
	blue: ['bg-cblue-400', 'bg-cblue-200'],
};

const ColorItem = ({ color }: { color: ColorVariant }) => {
	const { setTheme } = useTheme();
	return (
		<div
			className={`flex rounded-full w-[30px] h-[30px] overflow-hidden ring`}
			onClick={() => setTheme(color)}>
			<div className={`${variants[color][0]} w-full h-full`}></div>
			<div className={`${variants[color][1]} w-full h-full`}></div>
		</div>
	);
};

export default ColorItem;
