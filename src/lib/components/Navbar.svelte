<script>
	import { browser } from '$app/environment';
	import { NavLinks } from '$lib';
	import { onDestroy, onMount } from 'svelte';
	import ContactLink from './ContactLink.svelte';

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
	class="rounded-full h-14 flex items-center md:max-w-4xl w-[97%] mx-auto sticky top-3 left-0 right-0 z-50 transition-all duration-300"
	class:scrolled={isScrolled}
>
	<nav class=" p-4 flex justify-between gap-2 w-full">
		<div class="flex gap-2 items-center justify-evenly md:justify-start flex-1">
			<NavLinks />
		</div>
		<div class="flex items-center justify-center">
			<ContactLink />
		</div>
	</nav>
</header>

<style>
	/* Optional shadow */
	.scrolled {
		@apply bg-white/50 backdrop-blur-md shadow-md;
	}
</style>
