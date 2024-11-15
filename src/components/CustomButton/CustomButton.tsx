import { ButtonHTMLAttributes, ReactNode } from 'react';

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	icon?: ReactNode;
};

const CustomButton = ({
	children,
	className,
	icon,
	...props
}: CustomButtonProps) => {
	return (
		<button
			className={`flex bg-secondary items-center gap-2 justify-center p-2 text-background rounded-md active:bg-background transition ${className}`}
			{...props}>
			{icon && icon}
			<p>{children}</p>
		</button>
	);
};

export default CustomButton;
