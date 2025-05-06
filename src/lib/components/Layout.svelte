<script>
	import { onNavigate } from '$app/navigation';
	import { Navbar } from '$lib';
	import Footer from './Footer.svelte';
</script>

<div
	class=" bg-[url('/images/new-bg.svg')] bg-top dark:bg-[url('/images/new-bg-dark.svg')] dark:text-gray-400"
>
	<Navbar />
	<div class="backdrop-blur-3xl px-5 lg:px-0">
		<slot />
		<Footer />
	</div>
</div>
