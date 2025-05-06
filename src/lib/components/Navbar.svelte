<script>
	import { onMount, onDestroy } from 'svelte';
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
	class="h-16 flex items-center w-full fixed top-0 left-0 z-50 transition-all duration-300"
	class:scrolled={isScrolled}
>
	<nav class="container rounded-lg mx-auto px-4 max-w-6xl flex justify-between gap-2 w-full">
		<div class="flex gap-2 items-center flex-1">
			<NavLinks />
		</div>
		<div class="flex gap-2 items-center">
			<button
				class="rounded-md p-2 hover:bg-indigo-800 hover:text-indigo-50 transition-all duration-300 ease-in-out"
			>
				<GithubIcon />
			</button>
			<button
				class="rounded-md p-2 hover:bg-indigo-800 hover:text-indigo-50 transition-all duration-300 ease-in-out"
			>
				<Linkedin />
			</button>
		</div>
	</nav>
</header>

<style>
	/* Optional shadow */
	.scrolled {
		@apply bg-black/60 backdrop-blur-2xl shadow-lg;
	}
</style>
