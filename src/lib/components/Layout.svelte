<script>
	import { Footer, Navbar, Sidebar } from '$lib';
</script>

<div class="flex flex-col-reverse sm:flex-row dark:bg-zinc-950 bg-gray-100 dark:text-gray-400">
	<div class="sm:flex-1 w-full sm:h-screen overflow-y-auto">
		<div class="hidden sm:block">
			<Navbar />
		</div>
		<div class="p-5">
			<slot />
		</div>
		<Footer />
	</div>
	<div class="sm:w-[350px] sm:h-screen overflow-y-auto">
		<Sidebar />
	</div>
</div>
