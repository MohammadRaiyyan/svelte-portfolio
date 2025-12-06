<script lang="ts">
	import JavaIcon from '$lib/common/Icons/SkillsIcon/JavaIcon.svelte';
	import SpringIcon from '$lib/common/Icons/SkillsIcon/SpringIcon.svelte';
	import Projects from '../Projects.svelte';
	import ChartIcon from './ChartIcon.svelte';
	import ContextIcon from './Context.svelte';
	import CssIcon from './CssIcon.svelte';
	import D3Icon from './D3Icon.svelte';
	import DrizzleIcon from './DrizzleOrm.svelte';
	import GitIcon from './GitIcon.svelte';
	import GoIcon from './GoLang.svelte';
	import HtmlIcon from './HtmlIcon.svelte';
	import JavascriptIcon from './JavascriptIcon.svelte';
	import MongoIcon from './MongoIcon.svelte';
	import NextIcon from './NextIcon.svelte';
	import NodeIcon from './NodeIcon.svelte';
	import PostgressIcon from './PostgressIcon.svelte';
	import ReactIcon from './ReactIcon.svelte';
	import ReduxIcon from './ReduxIcon.svelte';
	import ShadcnIcon from './Shadcn.svelte';
	import SvelteIcon from './SvelteIcon.svelte';
	import TailwindIcon from './TailwindIcon.svelte';
	import TypescriptIcon from './TypescriptIcon.svelte';
	import ViteIcon from './ViteIcon.svelte';
	import WebpackIcon from './Webpack.svelte';
	import ZustandIcon from './Zustand.svelte';

	export let icon: string | undefined = undefined;

	// Component mapping
	const iconMap: Record<string, any> = {
		html: HtmlIcon,
		css: CssIcon,
		tailwind: TailwindIcon,
		javascript: JavascriptIcon,
		typescript: TypescriptIcon,
		react: ReactIcon,
		svelte: SvelteIcon,
		redux: ReduxIcon,
		context: ContextIcon,
		zustand: ContextIcon,
		next: NextIcon,
		java: JavaIcon,
		go: GoIcon,
		postgress: PostgressIcon,
		spring: SpringIcon,
		mongo: MongoIcon,
		node: NodeIcon,
		// Visualization
		d3: D3Icon,
		chartjs: ChartIcon,
		recharts: ChartIcon,
		apexcharts: ChartIcon,
		threejs: ChartIcon,
		// Dev Tools
		'github-actions': GitIcon,
		webpack: WebpackIcon,
		vite: ViteIcon,
		drizzle: DrizzleIcon,
		shadcn: ShadcnIcon,
		zustand: ZustandIcon
	};

	$: IconComponent = icon && icon in iconMap ? iconMap[icon] : null;
</script>

{#if !icon}
	<Projects />
{:else if IconComponent}
	<svelte:component this={IconComponent} />
{/if}
