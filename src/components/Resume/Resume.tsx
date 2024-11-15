import AboutMe from '../AboutMe/AboutMe';
import Career from '../Career/Career';
import ContactMe from '../ContactMe/ContactMe';
import Languages from '../Languages/Languages';
import ProfileBox from '../ProfileBox/ProfileBox';
import SkillBox from '../SkillBox/SkillBox';

const Resume = () => {
	return (
		<div className="grid md:grid-cols-2 grid-cols-1 gap-5">
			<ProfileBox
				mobile="+989392414124"
				email="ghanbariarash1999@gmail.com"
				name="Arash Ghanbari"
				stackName="Fullstack developer"
			/>
			<AboutMe
				aboutMeText="Im a passionate full-stack developer with a strong
        foundation in modern web technologies and a focus on
        building efficient, scalable applications. With expertise in
        Next.js and NestJS paired with Prisma ORM and TypeScript, I
        enjoy creating seamless, full-stack solutions that enhance
        user experience and streamline backend processes. A
        programming enthusiast at heart, I love diving into code and
        exploring the latest in tech. Im also a fan of Linux
        systems and have a deep appreciation for the power and
        flexibility they bring to development environments. When Im
        not coding, Im likely tinkering with computer setups or
        reading up on the latest advancements in software and
        hardware. Ready to take on new challenges, solve complex
        problems, and continue growing my knowledge in full-stack
        development."
			/>
			<SkillBox />
			<Career />
			<Languages />
			<ContactMe
				email="ghanbariarash1999@gmail.com"
				mobile="+989392414124"
				github="ProArash"
				telegram="ProArash"
				website="arashdev.top"
			/>
		</div>
	);
};

export default Resume;
