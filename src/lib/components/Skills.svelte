<script lang="ts">
	import PageTitle from '$lib/common/PageTitle/index.svelte';
	import { Skills } from '$lib/data/skills';
	import SkillsIcon from '$lib/common/Icons/SkillsIcon/index.svelte';
</script>

<section class="py-16" id="skills">
	<PageTitle title="Skills" />

	<div class="relative max-w-3xl mx-auto">
		<!-- vertical timeline line -->
		<div
			class="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-indigo-400 via-pink-400 to-purple-400"
		/>

		<div class="space-y-12">
			{#each Skills as skill, i (skill.title)}
				<div class="relative pl-16">
					<!-- marker dot -->
					<div
						class="absolute left-0 top-2 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg border border-indigo-100"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="w-6 h-6 text-indigo-500"
						>
							<path d="m16 18 6-6-6-6" />
							<path d="m8 6-6 6 6 6" />
						</svg>
					</div>
					<!-- Skills list -->
					<div
						class="bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition"
					>
						<h3 class="text-xl font-semibold text-gray-700 mb-4">{skill.title}</h3>

						<div class="flex flex-wrap gap-2">
							{#each skill.skills as s, j (s.name)}
								<div
									class="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 backdrop-blur-md
								shadow-sm hover:shadow-lg hover:scale-105 transition border border-gray-200"
									style="animation: fadeIn 0.4s ease forwards; animation-delay: {j * 80}ms"
								>
									<div class="w-6 h-6 flex items-center">
										<SkillsIcon icon={s.icon} />
									</div>
									<h4
										class="text-sm md:text-base text-gray-700 group-hover:text-indigo-600 transition"
									>
										{s?.name}
									</h4>
								</div>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
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
