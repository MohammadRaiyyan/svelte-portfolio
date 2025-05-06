<script lang="js">
	import PageTitle from '$lib/common/PageTitle/index.svelte';

	import { projects } from '$lib/data/projects';
	import GithubIcon from '$lib/common/Icons/Github.svelte';
	import IconEye from '$lib/common/Icons/IconEye.svelte';
</script>

<div class="space-y-5 md:pb-28 pb-16 pt-16" id="projects">
	<PageTitle title="Projects" />
	<div
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 py-4"
	>
		{#each projects as project, i (project?.title)}
			<div
				role="button"
				tabindex={i}
				class="w-full rounded-lg shadow backdrop-blur-md relative col-span-1 group/card"
				style="background-color: {`${project.colorTheme}3A`};"
			>
				<img
					class="object-fill w-full h-[200px] rounded-t-lg"
					src={project.image}
					alt={project.title + ' image'}
				/>
				<div class="p-4 text-left space-y-2">
					<div class="flex justify-between items-center gap-2">
						<!-- Title group -->
						<div class="group/title relative">
							<a
								href={project.link}
								target="_blank"
								rel="noreferrer"
								class="flex items-center gap-2"
								title="Live"
							>
								<h4 class="font-extrabold text-2xl dark:text-gray-300">
									{project.title}
								</h4>
								<!-- Eye icon only on title hover -->
								<span class="hidden group-hover/title:inline-block transition-opacity duration-200">
									<IconEye />
								</span>
							</a>
						</div>

						<!-- GitHub icon only on full card hover -->
						<div class="flex gap-2 justify-center items-center h-8">
							<button
								title="Github"
								class="rounded-md hidden group-hover/card:inline-block h-8 w-8 p-2 hover:bg-indigo-800 hover:text-indigo-50 transition-all duration-300 ease-in-out"
							>
								<a href={project.githubLink} target="_blank" rel="noreferrer">
									<GithubIcon />
								</a>
							</button>
						</div>
					</div>

					<div class="flex gap-2 flex-wrap">
						{#each project.tags as tag}
							<span class="uppercase text-sm">{tag}</span>
							{#if tag !== project.tags[project.tags.length - 1]} | {/if}
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
