import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ThemeFixProvider from '../components/ThemeSwitcher/ThemeFixProvider';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Arash Ghanbari',
	description: 'Developed with love by @ProArash',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-theme="green">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeFixProvider>{children}</ThemeFixProvider>
			</body>
		</html>
	);
}
