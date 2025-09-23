<script lang="ts">
	import PageTitle from '$lib/common/PageTitle/index.svelte';

	const experiences = [
		{
			role: 'Frontend Developer II',
			company: 'Wobot Intelligence Pvt Ltd',
			duration: 'July 2024 – Present'
		},
		{
			role: 'Frontend Developer I',
			company: 'Wobot Intelligence Pvt Ltd',
			duration: 'July 2022 – July 2024'
		},
		{
			role: 'Frontend Developer Intern',
			company: 'Wobot Intelligence Pvt Ltd',
			duration: 'Jan 2022 – June 2022'
		}
	];
</script>

<section class="py-8 md:py-16" id="experience">
	<PageTitle title="Experience" />

	<div class="relative">
		<!-- Timeline line -->
		<div
			class="absolute md:left-6 left-2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-600 to-indigo-700 rounded"
		/>

		<div class="space-y-12">
			{#each experiences as exp, idx}
				<div
					class="relative md:pl-16 pl-10 opacity-0 animate-fade-in"
					style="animation-delay: {idx * 300}ms"
				>
					<!-- Icon -->
					<div
						class="absolute -left-2.5 md:left-1.5 top-2 w-10 h-10 flex items-center justify-center rounded bg-white shadow-lg border border-blue-100"
					>
						<svg
							class="w-5 h-5 text-blue-500"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M12 12h.01" />
							<path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
							<path d="M22 13a18.15 18.15 0 0 1-20 0" />
							<rect width="20" height="14" x="2" y="6" rx="2" />
						</svg>
					</div>

					<!-- Card -->
					<div
						class="bg-transparent backdrop-blur-[2px] md:p-6 p-4 rounded shadow-md border border-gray-100 hover:shadow-lg transition"
					>
						<h3 class="text-xl font-semibold text-gray-700">{exp.role}</h3>
						<p class="text-blue-600 font-medium">{exp.company}</p>
						<p class="text-gray-500 text-sm mt-1">{exp.duration}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateX(-40px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 0.6s ease-out forwards;
	}
</style>
