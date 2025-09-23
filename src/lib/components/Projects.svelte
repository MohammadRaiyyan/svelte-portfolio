<script lang="js">
	import PageTitle from '$lib/common/PageTitle/index.svelte';

	import GithubIcon from '$lib/common/Icons/Github.svelte';
	import IconEye from '$lib/common/Icons/IconEye.svelte';
	import { projects } from '$lib/data/projects';
</script>

<section class="relative py-8 md:py-16" id="projects">
	<PageTitle title="Projects" />

	<div class="columns-1 sm:columns-2 md:columns-2 3xl:columns-3 gap-6 space-y-6">
		{#each projects as project, i (project?.title)}
			<div
				role="button"
				tabindex={i}
				class="break-inside-avoid overflow-hidden w-full rounded shadow-md bg-transparent backdrop-blur-[2px] relative hover:shadow-lg transition mb-6 cursor-default border border-gray-100"
			>
				<img
					class="object-fill w-full h-[200px] rounded-t-lg"
					src={project.image}
					alt={project.title + ' image'}
				/>

				<div class="p-4 pt-2 text-left space-y-2 border-t border-gray-200">
					<div class="flex justify-between items-center gap-2">
						<div class="group/title relative">
							<h4 class="font-semibold text-xl text-gray-700 mb-2">
								{project.title}
							</h4>
							<p class=" text-gray-600">{project.description}</p>
						</div>
					</div>
					<div
						class="flex gap-1 flex-wrap text-xs font-medium text-gray-600 border-t border-gray-200 pt-3"
					>
						{#each project.tags as tag}
							<span class="uppercase border px-2 py-0.5 rounded bg-blue-50/30 border-gray-200 flex"
								>{tag}</span
							>
						{/each}
					</div>
					<div class="flex items-center gap-4 border-t border-gray-200 pt-3">
						<a
							href={project.link}
							target="_blank"
							rel="noreferrer"
							class="group flex items-center justify-center gap-2 px-2 h-8 w-full rounded bg-blue-700 text-white font-medium text-base
								shadow-sm hover:shadow-lg hover:scale-105 transition"
							style="animation: fadeIn 0.4s ease forwards; animation-delay: {i * 80}ms"
							title="Live"
						>
							<IconEye />
							Demo
						</a>
						<a
							href={project.githubLink}
							target="_blank"
							rel="noreferrer"
							class="group flex items-center gap-2 justify-center px-2 h-8 w-full rounded bg-blue-50 text-blue-700 font-medium text-base
								shadow-sm hover:shadow-lg hover:scale-105 transition"
							style="animation: fadeIn 0.4s ease forwards; animation-delay: {i * 80}ms"
							title="GitHub"
						>
							<GithubIcon />
							Github
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
