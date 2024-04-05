<script>
	import PageTitle from '$lib/common/PageTitle/index.svelte';
	import { Skills } from '$lib/data/skills';
</script>

<div class="space-y-5 p-5 rounded-xl">
	<PageTitle title="Skills" />
	<div class="grid gap-5 grid-cols-4">
		{#each Skills as skill (skill?.name)}
			<div
				class="col-span-1 flex flex-grow justify-center items-center flex-col gap-1 rounded-lg h-28 w-full shadow-sm"
				style="color:{`${skill.colorTheme}`}; border-color: {`${skill.colorTheme}`}; background-color: {`${skill.colorTheme}1A`}; bac"
			>
				<span>{@html skill.icon}</span>
				<h4 class="font-semibold text-sm">{skill?.name}</h4>
			</div>
		{/each}
	</div>
</div>
