<script>
	import { page } from '$app/stores';

	import { navbarHeaderLinks } from '$lib/constants';
</script>

{#each navbarHeaderLinks as link (link.key)}
	<a
		class="flex gap-2 p-2 text-xl items-center hover:font-medium transition-all duration-300 ease-in-out rounded-lg relative"
		href={link.link}
		rel="noreferror"
		class:active-nav={$page.url.pathname === link.link}
		title={link.name}
	>
		<span class="text-sm inline-block"><svelte:component this={link.icon} /></span>
		<span class="hidden sm:inline-block transition-all duration-300 ease-in-out">{link.name}</span>
	</a>
{/each}

<!-- <div class="border-b-[0.5px] border-inherit" />
<div class="space-y-1">
	{#each navbarFooterLinks as link (link.key)}
		<a
			class="flex flex-col gap-1 w-20 p-2 items-center hover:bg-indigo-600 hover:text-white transition-all duration-300 ease-in-out rounded-lg"
			href={link.link}
			rel="noreferror"
			target="_blank"
		>
			<svelte:component this={link.icon} />
			{link.name}
		</a>
	{/each}
</div> -->
