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
	import ContextIcon from './Context.svelte';
	import NextIcon from './NextIcon.svelte';

	import D3Icon from './D3Icon.svelte';

	import WebpackIcon from './Webpack.svelte';
	import ViteIcon from './ViteIcon.svelte';

	import ChartIcon from './ChartIcon.svelte';
	import Projects from '../Projects.svelte';

	export let icon;
</script>

{#if !icon}
	<Projects />
{/if}
{#if icon === 'html'} <HtmlIcon /> {/if}
{#if icon === 'css'} <CssIcon /> {/if}
{#if icon === 'tailwind'} <TailwindIcon /> {/if}
{#if icon === 'javascript'} <JavascriptIcon /> {/if}
{#if icon === 'typescript'} <TypescriptIcon /> {/if}
{#if icon === 'react'} <ReactIcon /> {/if}
{#if icon === 'svelte'} <SvelteIcon /> {/if}
{#if icon === 'redux'} <ReduxIcon /> {/if}
{#if icon === 'context' || icon === 'zustand'} <ContextIcon /> {/if}
{#if icon === 'next'} <NextIcon /> {/if}

{#if icon === 'python'} <PythonIcon /> {/if}
{#if icon === 'go'} <GoIcon /> {/if}
{#if icon === 'postgress'} <PostgressIcon /> {/if}
{#if icon === 'node'} <NodeIcon /> {/if}
{#if icon === 'mongo'} <MongoIcon /> {/if}

<!-- Visualization -->
{#if icon === 'd3'} <D3Icon /> {/if}
{#if icon === 'chartjs'} <ChartIcon /> {/if}
{#if icon === 'recharts'} <ChartIcon /> {/if}
{#if icon === 'apexcharts'} <ChartIcon /> {/if}
{#if icon === 'threejs'} <ChartIcon /> {/if}

<!-- Dev Tools -->
{#if icon === 'github-actions'} <GitIcon /> {/if}
{#if icon === 'webpack'} <WebpackIcon /> {/if}
{#if icon === 'vite'} <ViteIcon /> {/if}
