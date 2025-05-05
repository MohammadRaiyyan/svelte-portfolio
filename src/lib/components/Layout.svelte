<script>
	import { onNavigate } from '$app/navigation';
	import { Navbar } from '$lib';
	import Footer from './Footer.svelte';
</script>

<div
	class="relative overflow-auto main bg-light-pattern-gradient-radial dark:bg-dark-pattern-gradient-radial dark:text-gray-400 h-screen h-max py-2.5 sm:px-5 px-2"
>
	<div class="sticky top-0 z-50">
		<Navbar />
	</div>
	<div class="container mx-auto max-w-6xl">
		<slot />
	</div>
	<Footer />
</div>

<style>
	.main {
		background-size: 10px 10px;
	}
</style>
