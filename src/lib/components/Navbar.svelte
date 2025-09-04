<script>
	import { onDestroy, onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { NavLinks } from '$lib';
	import GithubIcon from '$lib/common/Icons/Github.svelte';
	import Linkedin from '$lib/common/Icons/Linkedin.svelte';

	let scrollY = 0;

	function handleScroll() {
		scrollY = window.scrollY;
	}

	$: isScrolled = scrollY > 64;
	$: console.log(isScrolled);

	onMount(() => {
		if (!browser) return;
		handleScroll();
		window.addEventListener('scroll', handleScroll);
	});

	onDestroy(() => {
		if (!browser) return;
		window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="rounded-xl border-gray-200 h-16 flex items-center w-full max-w-6xl mx-auto sticky top-3 left-0 right-0 z-50 transition-all duration-300"
	class:scrolled={isScrolled}
>
	<nav class="container rounded-lg px-4 flex justify-between gap-2 w-full">
		<div class="flex gap-2 items-center flex-1">
			<NavLinks />
		</div>
		<div class="flex gap-2 items-center">
			<a href="www.linkedin.com/in/m-raiyyan" rel="noopener noreferrer" target="_blank">
				<button
					class="items-center gap-2 p-1 rounded-xl bg-white/30 backdrop-blur-md shadow-sm hover:shadow-lg hover:scale-105 border border-gray-200"
					title="GitHub"
				>
					<GithubIcon />
				</button>
			</a>
			<a href="https://github.com/MohammadRaiyyan" rel="noopener noreferrer" target="_blank">
				<button
					class="items-center gap-2 p-1 rounded-xl bg-white/30 backdrop-blur-md shadow-sm hover:shadow-lg hover:scale-105 border border-gray-200"
					title="Linkedin"
				>
					<Linkedin />
				</button>
			</a>
		</div>
	</nav>
</header>

<style>
	/* Optional shadow */
	.scrolled {
		@apply bg-white/50 backdrop-blur-md shadow-lg;
	}
</style>
