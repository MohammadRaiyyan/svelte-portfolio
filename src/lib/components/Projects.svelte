<script lang="js">
	import { projects } from '$lib/data/projects';
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

<div class="space-y-5 bg-white dark:bg-neutral-900 p-5 rounded-lg">
	<h3 class="text-xl font-semibold">Projects</h3>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
		{#each projects as project, i (project?.title)}
			<div
				role="button"
				tabindex={i}
				on:mouseenter={() => handleExtraInfo(project?.title)}
				on:mouseleave={() => handleExtraInfo(null)}
				class="w-full rounded-lg shadow-sm relative"
				style="background-color: {`${project.colorTheme}1A`}; color: {`${project.colorTheme}`};"
			>
				<img
					class="object-fill w-full h-48 rounded-t-lg"
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
						in:spin={{ duration: 1000 }}
						out:fade
						style="background-color: {`${project.colorTheme}cc`};"
						class={`backdrop-filter backdrop-blur h-max min-h-full p-4 shadow-2xl absolute scale-110 transition-all ease-linear inset-0  z-50  rounded-lg text-white`}
					>
						<div class="space-y-4 min-h-[240px] flex flex-col justify-between">
							<div class="h-full flex-1">
								<p class="text-justify text-sm">{project.description}</p>
							</div>

							<div class="space-y-2 font-semibold text-sm shadow-2xl">
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

<style>
</style>
