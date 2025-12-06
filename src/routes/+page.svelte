<script>
	import ArrowDown from '$lib/components/ArrowDown.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
</script>

<div class="relative container mx-auto max-w-5xl space-y-12 p-4 lg:p-8 my-4 border-2 border-dashed">
	<Hero />
	<div class="border-b-2 border-dashed w-full my-8" />

	<!-- <Experience /> -->
	<Skills />
	<div class="border-b-2 border-dashed w-full my-8" />

	<Projects />
	<ArrowDown />
</div>
