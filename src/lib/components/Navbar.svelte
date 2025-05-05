<script>
	import { NavLinks } from '$lib';
	import GithubIcon from '$lib/common/Icons/Github.svelte';
	import Linkedin from '$lib/common/Icons/Linkedin.svelte';
</script>

<nav
	class="container rounded-lg mx-auto max-w-6xl h-16 backdrop-blur-2xl flex justify-between gap-2 w-full"
>
	<div class="flex gap-2 items-center flex-1">
		<NavLinks />
	</div>
	<div class="flex gap-2 items-center">
		<button
			class="rounded-md text-white p-2 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 ease-in-out"
		>
			<GithubIcon />
		</button>
		<button
			class="rounded-md text-white p-2 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-300 ease-in-out"
		>
			<Linkedin />
		</button>
	</div>
</nav>
