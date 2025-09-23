<script>
	import GithubIcon from '$lib/common/Icons/Github.svelte';
	import Linkedin from '$lib/common/Icons/Linkedin.svelte';
</script>

<div class=" gap-2 items-center flex">
	<!-- GitHub -->
	<a href="https://github.com/MohammadRaiyyan" rel="noopener noreferrer" target="_blank">
		<button
			class="group flex items-center gap-2 p-1 md:px-3 rounded bg-blue-50/30 backdrop-blur-md
								shadow-sm hover:shadow-lg hover:scale-105 transition border border-gray-200"
			style="animation: fadeIn 0.4s ease forwards; animation-delay: {1 * 80}ms"
			title="GitHub"
		>
			<GithubIcon />
			<span
				class="hidden sm:inline-block duration-300 ease-in-out group-hover:text-blue-600 transition"
				>GitHub</span
			>
		</button>
	</a>

	<!-- LinkedIn -->
	<a href="https://www.linkedin.com/in/m-raiyyan" rel="noopener noreferrer" target="_blank">
		<button
			class="group flex items-center gap-2 p-1 md:px-3 rounded bg-blue-50/30 backdrop-blur-md
								shadow-sm hover:shadow-lg hover:scale-105 transition border border-gray-200"
			style="animation: fadeIn 0.4s ease forwards; animation-delay: {2 * 80}ms"
			title="LinkedIn"
		>
			<Linkedin />

			<span
				class="hidden sm:inline-block duration-300 ease-in-out group-hover:text-blue-600 transition"
				>LinkedIn</span
			>
		</button>
	</a>
</div>
