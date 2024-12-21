<script lang="js">
	import PageTitle from '$lib/common/PageTitle/index.svelte';

	import { projects } from '$lib/data/projects';
	import { flip } from 'svelte/animate';
	import { linear } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	/**
	 * @type {string | null}
	 */
	let showExtraInfoId;
	const handleExtraInfo = (/** @type {string | null} */ name) => {
		showExtraInfoId = name;
	};
	// @ts-ignore
	function spin(node, { duration }) {
		return {
			duration,
			css: (t) => {
				const eased = linear(t);

				return `
					transform: scale(${eased});
					`;
			}
		};
	}
</script>

<div class="space-y-5 p-5 overflow-auto h-screen">
	<PageTitle title="Projects" />
	<div
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 py-4"
	>
		{#each projects as project, i (project?.title)}
			<div
				role="button"
				tabindex={i}
				on:mouseenter={() => handleExtraInfo(project?.title)}
				on:mouseleave={() => handleExtraInfo(null)}
				class="w-full rounded-lg shadow-sm relative col-span-1 h-max"
				style="background-color: {`${project.colorTheme}1A`}; color: {`${project.colorTheme}`};"
				animate:flip
			>
				<img
					class="object-fill w-full h-auto rounded-t-lg"
					src={project.image}
					alt={project.title + 'image'}
				/>
				<div class="p-4 text-center space-y-2">
					<h4 class="font-semibold text-sm">
						{project.title}
					</h4>
				</div>
				{#if project?.title === showExtraInfoId}
					<div
						in:fade
						out:fade
						style="background-color: {`${project.colorTheme}cc`};"
						class={`backdrop-filter backdrop-blur h-max min-h-full p-4 shadow-2xl absolute transition-all ease-linear inset-0  z-50  rounded-lg text-white flex items-center justify-center`}
					>
						<div class="space-y-4 h-max">
							<div class="space-y-2 font-medium text-sm shadow-2xl">
								<button
									style="background-color: {`${project.colorTheme}`};"
									class="w-full border-white border py-1 rounded-md text-white"
								>
									<a href={project.githubLink} target="_blank" rel="norefferror">Github</a>
								</button>
								<button
									class="bg-white rounded-md py-1 w-full"
									style="color: {`${project.colorTheme}`};"
								>
									<a href={project.link} target="_blank" rel="norefferror">Demo</a>
								</button>
							</div>
						</div>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>
