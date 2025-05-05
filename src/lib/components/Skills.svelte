<script lang="ts">
	import PageTitle from '$lib/common/PageTitle/index.svelte';
	import { Skills } from '$lib/data/skills';
	import SkillsIcon from '$lib/common/Icons/SkillsIcon/index.svelte';
</script>

<div class="space-y-5 pb-40 pt-16" id="skills">
	<PageTitle title="My Stack" />
	<div class=" space-y-10">
		{#each Skills as skill (skill.title)}
			<div class="grid md:grid-cols-2 grid-cols-1 gap-4">
				<h2 class="font-extrabold text-4xl uppercase dark:text-gray-300">
					{skill.title}
				</h2>
				<div class="flex flex-wrap gap-2 col-span-1">
					{#each skill.skills as s (s.name)}
						<div class="w-max flex rounded-lg justify-center items-center gap-4 h-max p-2 px-4">
							<span class="w-10 h-10"><SkillsIcon icon={s.icon} /></span>
							<h4 class="text-2xl dark:text-gray-300">{s?.name}</h4>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
