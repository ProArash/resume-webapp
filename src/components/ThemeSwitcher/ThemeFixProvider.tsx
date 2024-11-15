'use client';
import { ThemeProvider } from 'next-themes';
import React, { ReactNode, useEffect, useState } from 'react';

const ThemeFixProvider = ({ children }: { children: ReactNode }) => {
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);
	if (!mounted) {
		return null;
	}
	return <ThemeProvider themes={['green', 'blue']}>{children}</ThemeProvider>;
};

export default ThemeFixProvider;
