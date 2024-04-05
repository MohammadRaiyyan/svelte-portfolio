import { About, Github, Linkedin, Projects, Skills } from '$lib/common/Icons';

export const navbarHeaderLinks = [
	{ name: 'About', link: '/', key: 'about', icon: About },
	{ name: 'Skills', link: '/skills', key: 'skills', icon: Skills },
	{ name: 'Projects', link: '/projects', key: 'projects', icon: Projects }
];
export const navbarFooterLinks = [
	{
		name: 'Linkedin',
		target: '_blank',
		link: 'https://www.linkedin.com/in/mohammad-raiyyan-735a71152/',
		key: 'linkedin',
		icon: Linkedin
	},
	{
		name: 'Github',
		target: '_blank',
		link: 'https://github.com/MohammadRaiyyan',
		key: 'github',
		icon: Github
	}
];
