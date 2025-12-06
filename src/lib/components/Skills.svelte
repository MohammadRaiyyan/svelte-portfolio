<script lang="ts">
	import SkillsIcon from '$lib/common/Icons/SkillsIcon/index.svelte';
	import PageTitle from '$lib/common/PageTitle/index.svelte';
	import { Skills } from '$lib/data/skills';
</script>

<section id="skills">
	<PageTitle title="Skills" />

	<div class="flex flex-wrap gap-2">
		{#each Skills as s, j (s.name)}
			<div
				class="group flex items-center gap-2 px-4 py-2 rounded bg-white/70 backdrop-blur-md
								shadow-sm hover:shadow-lg hover:scale-105 transition border-2 border-dashed"
				style="animation: fadeIn 0.4s ease forwards; animation-delay: {j * 80}ms"
			>
				<div class="w-6 h-6 flex items-center">
					{#if s.iconViaURL}
						<img alt={s.name} src={`https://skillicons.dev/icons?i=${s.iconViaURL}`} />
					{:else}
						<SkillsIcon icon={s.icon} />
					{/if}
				</div>
				<h4 class=" text-gray-700 group-hover:text-blue-600 transition">
					{s?.name}
				</h4>
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
