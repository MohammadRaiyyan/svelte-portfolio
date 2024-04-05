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
	class="main bg-light-pattern-gradient-radial dark:bg-dark-pattern-gradient-radial dark:text-gray-400 h-screen p-10"
>
	<div class="flex gap-5 sm:flex-row">
		<div class="w-auto shadow-xl bg-white dark:bg-zinc-800 hidden sm:block rounded-xl h-max p-2">
			<Navbar />
		</div>
		<div class="w-9/12 shadow-xl rounded-xl h-max bg-white dark:bg-zinc-800">
			<slot />
		</div>
		<div class="w-3/12 rounded-xl h-max bg-white dark:bg-zinc-800 shadow-xl">
			<Sidebar />
		</div>
	</div>
</div>

<style>
	.main {
		background-size: 10px 10px;
	}
</style>
