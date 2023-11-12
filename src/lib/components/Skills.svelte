<script>
	import { Skills } from '$lib/data/skills';
</script>

<div class="space-y-5 bg-white dark:bg-neutral-900 p-5 rounded-lg">
	<h3 class="text-xl font-semibold">Skills</h3>
	<div class="flex gap-5 flex-wrap">
		{#each Skills as skill (skill?.name)}
			<div
				class=" flex flex-grow justify-center items-center flex-col gap-1 rounded-lg h-28 w-full sm:w-40 shadow-sm"
				style="color:{`${skill.colorTheme}`}; border-color: {`${skill.colorTheme}`}; background-color: {`${skill.colorTheme}1A`}; bac"
			>
				<span>{@html skill.icon}</span>
				<h4 class="font-semibold text-sm">{skill?.name}</h4>
			</div>
		{/each}
	</div>
</div>
