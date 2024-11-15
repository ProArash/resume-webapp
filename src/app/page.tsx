import Resume from '../components/Resume/Resume';
import ThemeSwitcher from '../components/ThemeSwitcher/ThemeSwitcher';

const Home = () => {
	return (
		<div className="flex flex-col gap-4 p-3 bg-background text-foreground">
			<ThemeSwitcher />
			<Resume />
		</div>
	);
};

export default Home;
