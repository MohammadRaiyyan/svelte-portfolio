<script>
	import { navbarFooterLinks } from '$lib/constants';
</script>

<aside
	class="p-5 space-y-10 flex flex-col justify-center items-center h-max dark:text-gray-300 w-full"
>
	<div class=" space-y-8 flex flex-col justify-center items-center text-center">
		<div class="">
			<img class="rounded-full w-40 h-40" src="/Dp.jpg" alt="coverpicture" />
		</div>

		<div class="space-y-4">
			<h2 class="font-semibold text-2xl">Mohammad Raiyyan</h2>
			<h4 class=" dark:bg-zinc-700/30 bg-zinc-50 rounded-lg inline-block px-4 py-1">
				Frontend Developer
			</h4>
			<p>Hyderabad, India</p>
			<div class="flex justify-center items-center gap-5">
				{#each navbarFooterLinks as link (link.key)}
					<a
						class={`dark:bg-zinc-700/30 bg-zinc-50 flex flex-col gap-1 w-max p-2 items-center hover:text-indigo-700  transition-all duration-300 ease-in-out rounded-lg `}
						href={link.link}
						rel="noreferror"
						target="_blank"
					>
						<svelte:component this={link.icon} />
					</a>
				{/each}
			</div>
		</div>
	</div>
	<!-- <div class="grid grid-flow-row gap-[0.5px] w-full rounded-lg overflow-hidden">
		<div class="dark:bg-zinc-700/30 bg-zinc-50 p-3 flex items-center gap-2">
			<span class="dark:bg-zinc-700/30 bg-zinc-50 p-2 rounded-lg"><Phone /></span>
			<span>+91 8887634517</span>
		</div>
		<div class="dark:bg-zinc-700/30 bg-zinc-50 p-3 flex items-center gap-2">
			<span class="dark:bg-zinc-700/30 bg-zinc-50 p-2 rounded-lg"><Envelop /></span><span
				>inforaiyyan@gmail.com</span
			>
		</div>
		<div class="dark:bg-zinc-700/30 bg-zinc-50 p-3 flex items-center gap-2">
			<span class="dark:bg-zinc-700/30 bg-zinc-50 p-2 rounded-lg"><Location /> </span><span
				>Hyderabad India</span
			>
		</div>
	</div> -->
</aside>
