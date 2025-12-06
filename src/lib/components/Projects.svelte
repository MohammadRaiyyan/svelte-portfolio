<script lang="js">
	import GithubIcon from '$lib/common/Icons/Github.svelte';
	import IconEye from '$lib/common/Icons/IconEye.svelte';
	import PageTitle from '$lib/common/PageTitle/index.svelte';
	import { projects } from '$lib/data/projects';
</script>

<section id="projects" class="w-full mx-auto">
	<PageTitle title="Projects" />
	<div class="space-y-6">
		{#each projects as project, i (project?.title)}
			<div
				class="w-full border-2 border-dashed rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm space-y-4"
			>
				<!-- Project Header -->
				<div class="flex flex-col md:flex-row items-start justify-between gap-6">
					<div class="flex-1 order-2 md:order-1">
						<h3 class="text-2xl text-gray-700 space-mono-bold mb-2">
							{project.title}
						</h3>
						<p class="text-gray-600 leading-relaxed">
							{project.description}
						</p>
					</div>
					{#if project.image}
						<div
							class="w-full md:w-48 md:h-32 h-48 rounded-lg shadow-2xl overflow-hidden border-[3px] border-blue-200 flex-shrink-0 order-1 md:order-2 hover:border-blue-400 transition-all group"
						>
							<img
								class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
								src={project.image}
								alt={project.title}
								loading="lazy"
							/>
						</div>
					{/if}
				</div>

				<!-- Tech Stack Tags -->
				{#if project.tags && project.tags.length > 0}
					<div class="flex flex-wrap gap-2">
						{#each project.tags as tag}
							<span
								class="px-3 py-1 bg-blue-50 text-blue-700 text-sm space-mono-regular rounded-lg border border-blue-100"
							>
								{tag}
							</span>
						{/each}
					</div>
				{/if}

				<!-- Action Buttons -->
				<div class="flex items-center flex-col max-w-sm sm:flex-row gap-3 pt-2">
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center justify-center w-full gap-2 px-4 py-2 bg-blue-700 text-white space-mono-regular rounded-lg hover:bg-blue-800 transition-colors shadow-sm"
					>
						<IconEye />
						Live Demo
					</a>
					<a
						href={project.githubLink}
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center justify-center w-full gap-2 px-4 py-2 bg-gray-100 text-gray-700 space-mono-regular rounded-lg hover:bg-gray-200 transition-colors"
					>
						<GithubIcon />
						Source Code
					</a>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	/* Ensure consistent spacing */
	section {
		animation: fadeIn 0.5s ease-in;
	}

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
