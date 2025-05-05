<script>
	import HtmlIcon from './HtmlIcon.svelte';
	import CssIcon from './CssIcon.svelte';
	import TailwindIcon from './TailwindIcon.svelte';
	import JavascriptIcon from './JavascriptIcon.svelte';
	import TypescriptIcon from './TypescriptIcon.svelte';
	import ReactIcon from './ReactIcon.svelte';
	import SvelteIcon from './SvelteIcon.svelte';
	import ReduxIcon from './ReduxIcon.svelte';
	import GitIcon from './GitIcon.svelte';
	import PythonIcon from './PythonIcon.svelte';
	import GoIcon from './GoLang.svelte';
	import PostgressIcon from './PostgressIcon.svelte';
	import NodeIcon from './NodeIcon.svelte';
	import MongoIcon from './MongoIcon.svelte';

	export let icon;
	console.log(icon);
</script>

<span>
	{#if icon === 'html'}
		<HtmlIcon />
	{/if}
	{#if icon === 'css'}
		<CssIcon />
	{/if}
	{#if icon === 'tailwind'}
		<TailwindIcon />
	{/if}
	{#if icon === 'javascript'}
		<JavascriptIcon />
	{/if}
	{#if icon === 'typescript'}
		<TypescriptIcon />
	{/if}
	{#if icon === 'react'}
		<ReactIcon />
	{/if}
	{#if icon === 'svelte'}
		<SvelteIcon />
	{/if}
	{#if icon === 'redux'}
		<ReduxIcon />
	{/if}
	{#if icon === 'git'}
		<GitIcon />
	{/if}

	{#if icon === 'python'}
		<PythonIcon />
	{/if}
	{#if icon === 'go'}
		<GoIcon />
	{/if}
	{#if icon === 'postgress'}
		<PostgressIcon />
	{/if}
	{#if icon === 'node'}
		<NodeIcon />
	{/if}
	{#if icon === 'mongo'}
		<MongoIcon />
	{/if}
</span>
