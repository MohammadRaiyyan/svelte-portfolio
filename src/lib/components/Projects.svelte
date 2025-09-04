<script lang="js">
	import PageTitle from '$lib/common/PageTitle/index.svelte';

	import { projects } from '$lib/data/projects';
	import GithubIcon from '$lib/common/Icons/Github.svelte';
	import IconEye from '$lib/common/Icons/IconEye.svelte';
</script>

<section class="py-16" id="projects">
	<PageTitle title="Projects" />

	<div class="columns-1 sm:columns-2 md:columns-2 lg:columns-3 gap-6 space-y-6">
		{#each projects as project, i (project?.title)}
			<div
				role="button"
				tabindex={i}
				class="break-inside-avoid border border-gray-200 w-full rounded-2xl shadow-md bg-white/30 backdrop-blur-md relative group/card hover:shadow-lg transition mb-6"
			>
				<img
					class="object-fill w-full h-[200px] rounded-t-lg"
					src={project.image}
					alt={project.title + ' image'}
				/>
				<div
					class="items-center gap-2 absolute top-2 right-2 hidden group-hover/card:flex transition-opacity duration-200"
				>
					<a
						href={project.link}
						target="_blank"
						rel="noreferrer"
						class="items-center gap-2 p-1 rounded-xl bg-white/70 backdrop-blur-md shadow-sm hover:shadow-lg hover:scale-105 border border-gray-200"
						title="Live"
					>
						<IconEye />
					</a>
					<a
						href={project.githubLink}
						target="_blank"
						rel="noreferrer"
						class="items-center gap-2 p-1 rounded-xl bg-white/70 backdrop-blur-md shadow-sm hover:shadow-lg hover:scale-105 border border-gray-200"
						title="GitHub"
					>
						<GithubIcon />
					</a>
				</div>
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
							<span
								class="uppercase border px-2 py-0.5 rounded-2xl bg-white/30 border-gray-200 flex"
								>{tag}</span
							>
						{/each}
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
