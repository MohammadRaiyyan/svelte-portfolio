<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	const showArrow = writable(false);

	let sections: HTMLElement[] = [];

	function updateSections() {
		sections = Array.from(document.querySelectorAll('section[id]'));
	}

	function checkScroll() {
		const scrollTop = window.scrollY;
		const windowHeight = window.innerHeight;

		// Nearest section below viewport
		const nextSection = sections.find((sec) => sec.offsetTop > scrollTop + 10);

		showArrow.set(!!nextSection);
	}

	function scrollToNextSection() {
		const scrollTop = window.scrollY;
		const nextSection = sections.find((sec) => sec.offsetTop > scrollTop + 10);
		if (nextSection) {
			nextSection.scrollIntoView({ behavior: 'smooth' });
		}
	}

	onMount(() => {
		updateSections();
		checkScroll();

		window.addEventListener('scroll', checkScroll);
		window.addEventListener('resize', checkScroll);

		return () => {
			window.removeEventListener('scroll', checkScroll);
			window.removeEventListener('resize', checkScroll);
		};
	});
</script>

{#if $showArrow}
	<div class="fixed bottom-5 inset-x-0 flex justify-center">
		<button
			on:click={scrollToNextSection}
			class="text-gray-700 bg-white/70 backdrop-blur-md p-3 rounded-full shadow-lg hover:scale-110 transition transform animate-bounce"
			aria-label="Scroll down"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
			</svg>
		</button>
	</div>
{/if}
