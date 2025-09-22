<script>
	import { page } from '$app/stores';

	import { navbarHeaderLinks } from '$lib/constants';
</script>

{#each navbarHeaderLinks as link, i (link.key)}
	<a
		class="group flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50/30 backdrop-blur-md
								shadow-sm hover:shadow-lg hover:scale-105 transition border border-gray-200"
		style="animation: fadeIn 0.4s ease forwards; animation-delay: {i * 80}ms"
		href={link.link}
		rel="noreferror"
		class:active-nav={$page.url.pathname === link.link}
		title={link.name}
	>
		<span class="text-sm inline-block"><svelte:component this={link.icon} /></span>
		<span
			class="hidden sm:inline-block duration-300 ease-in-out group-hover:text-blue-600 transition"
			>{link.name}</span
		>
	</a>
{/each}

<!-- <div class="border-b-[0.5px] border-inherit" />
<div class="space-y-1">
	{#each navbarFooterLinks as link (link.key)}
		<a
			class="flex flex-col gap-1 w-20 p-2 items-center hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out rounded-lg"
			href={link.link}
			rel="noreferror"
			target="_blank"
		>
			<svelte:component this={link.icon} />
			{link.name}
		</a>
	{/each}
</div> -->
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
