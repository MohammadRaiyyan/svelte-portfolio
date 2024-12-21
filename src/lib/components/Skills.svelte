<script>
	import PageTitle from '$lib/common/PageTitle/index.svelte';
	import { Skills } from '$lib/data/skills';
</script>

<div class="space-y-5 p-5 rounded-xl">
	<PageTitle title="Skills" />
	<div class="flex flex-wrap gap-4">
		{#each Skills as skill (skill?.name)}
			<div
				class="w-max flex justify-center items-center gap-4 rounded-lg h-max p-2 px-4 shadow-sm border"
			>
				<span class="">{@html skill.icon}</span>
				<h4 class="font-semibold text-sm">{skill?.name}</h4>
			</div>
		{/each}
	</div>
</div>
