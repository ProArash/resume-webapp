import React from 'react';
import ColorItem from './ColorItem';

const ThemeSwitcher = () => {
	return (
		<div className="flex gap-3 items-center">
			<ColorItem color="blue" />
			<ColorItem color="green" />
			<ColorItem color="red" />
		</div>
	);
};

export default ThemeSwitcher;
