<script>
	import { onNavigate } from '$app/navigation';
	import { Navbar, Sidebar } from '$lib';
	onNavigate(() => {
		if (!document.startViewTransition()) return;
		return new Promise((fulfill) => {
			document.startViewTransition(() => new Promise(fulfill));
		});
	});
</script>

<div
	class="relative main bg-light-pattern-gradient-radial dark:bg-dark-pattern-gradient-radial dark:text-gray-400 min-h-screen h-max py-10 sm:px-5 px-2"
>
	<div class="lg:container mx-auto flex gap-5 flex-col-reverse md:flex-row">
		<div class="flex gap-5 lg:w-9/12 flex-col lg:flex-row">
			<div
				class="transition-all duration-300 ease-in-out fixed z-50 lg:static bottom-0 right-0 left-0 md:w-max w-full mx-auto shadow-xl bg-white dark:bg-zinc-800 md:rounded-xl h-max p-2"
			>
				<Navbar />
			</div>
			<div
				class="lg:min-w-10/12 mb-[64px] lg:mb-0 w-auto shadow-xl rounded-xl h-max bg-white dark:bg-zinc-800"
			>
				<slot />
			</div>
		</div>
		<div
			class="mb-[64px] lg:mb-0 lg:w-3/12 w-auto rounded-xl h-max bg-white dark:bg-zinc-800 shadow-xl"
		>
			<Sidebar />
		</div>
	</div>
</div>

<style>
	.main {
		background-size: 10px 10px;
	}
</style>
