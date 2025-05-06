<script lang="ts">
	import PageTitle from '$lib/common/PageTitle/index.svelte';
	import { Skills } from '$lib/data/skills';
	import SkillsIcon from '$lib/common/Icons/SkillsIcon/index.svelte';
</script>

<div class="space-y-5 md:pb-28 pb-16 pt-16" id="skills">
	<PageTitle title="Stack" />
	<div class=" space-y-16">
		{#each Skills as skill (skill.title)}
			<div class="grid md:grid-cols-2 grid-cols-1 gap-4">
				<h2 class="font-extrabold md:text-4xl text-2xl uppercase dark:text-gray-300">
					{skill.title}
				</h2>
				<div class="flex flex-wrap gap-2 col-span-1">
					{#each skill.skills as s (s.name)}
						<div class="w-max flex rounded-lg justify-center items-center gap-4 h-max p-2 px-4">
							<div class="w-8 h-8 flex items-center">
								<SkillsIcon icon={s.icon} />
							</div>
							<h4 class="md:text-2xl text-lg dark:text-gray-300">{s?.name}</h4>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</div>
