'use client';
import Image from 'next/image';
import avatar from '../../assets/me.jpg';
import MainContainer from '../MainContainer/MainContainer';
import { FaCode, FaInbox, FaMobile } from 'react-icons/fa';

const ProfileBox = ({
	name,
	stackName,
	mobile,
	email,
}: {
	name: string;
	stackName: string;
	mobile: string;
	email: string;
}) => {
	return (
		<MainContainer>
			<div className="flex md:flex-row flex-col gap-2 items-center">
				<div className={`flex rounded-full ring ring-onPrimary`}>
					<Image
						className="object-contain w-[150px] h-[150px] rounded-full"
						src={avatar}
						alt="Me :D"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<h1>{name}</h1>
					<p>
						<FaCode />
						{stackName}
					</p>
					<p>
						<FaMobile />
						{mobile}
					</p>
					<p>
						<FaInbox />
						{email}
					</p>
				</div>
			</div>
		</MainContainer>
	);
};

export default ProfileBox;
