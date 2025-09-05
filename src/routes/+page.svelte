<script>
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import ArrowDown from '$lib/components/ArrowDown.svelte';
</script>

<div class="container mx-auto max-w-6xl px-3 lg:p-0">
	<Hero />
	<About />
	<Experience />
	<Skills />
	<Projects />
	<ArrowDown />
</div>
