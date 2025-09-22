<script>
	import ArrowDown from '$lib/components/ArrowDown.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
</script>

<div class="container mx-auto max-w-5xl px-3 lg:p-0">
	<Hero />
	<Experience />
	<Skills />
	<Projects />
	<ArrowDown />
</div>
