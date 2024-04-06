<script>
	import PageTitle from '$lib/common/PageTitle/index.svelte';
	import { Skills } from '$lib/data/skills';
</script>

<div class="space-y-5 p-5 rounded-xl">
	<PageTitle title="Skills" />
	<div class="flex flex-wrap gap-5">
		{#each Skills as skill (skill?.name)}
			<div
				class="min-w-[150px] flex-1 flex justify-center items-center flex-col gap-1 rounded-lg h-28 shadow-sm"
				style="color:{`${skill.colorTheme}`}; border-color: {`${skill.colorTheme}`}; background-color: {`${skill.colorTheme}1A`}; bac"
			>
				<span>{@html skill.icon}</span>
				<h4 class="font-semibold text-sm">{skill?.name}</h4>
			</div>
		{/each}
	</div>
</div>
