<script>
	import HeroRight from '$lib/components/HeroRight.svelte';
</script>

<div class="relative space-y-5 h-[calc(100vh-72px)] flex items-center justify-between">
	<div
		class="lg:w-1/2 w-full mx-auto lg:m-0 lg:block flex flex-col items-center justify-center lg:text-left text-center"
	>
		<p class="mb-3 text-lg md:text-xl text-gray-600">Hello, I'm</p>
		<h1 class=" uppercase text-2xl md:text-4xl font-extrabold">
			<span class="text-gray-700">Mohammad Raiyyan</span>
		</h1>
		<p class="mt-3 text-lg md:text-xl text-gray-600 uppercase">
			Detail oriented Frontend web developer
		</p>
		<!--	<div class="flex gap-6 mt-6 opacity-90 ">-->
		<!--		<div class="w-10 p-1 rounded-xl bg-orange-50/30 backdrop-blur-md shadow-md" title="React.js">-->
		<!--			<ReactIcon />-->
		<!--		</div>-->
		<!--		<div class="w-10 p-1  rounded-xl bg-orange-50/30 backdrop-blur-md shadow-md" title="TypeScript">-->
		<!--			<TypescriptIcon />-->
		<!--		</div>-->
		<!--		<div class="w-10 p-1  rounded-xl bg-orange-50/30 backdrop-blur-md shadow-md" title="Spring">-->
		<!--			<SpringIcon />-->
		<!--		</div>-->
		<!--		<div class="w-10 p-1  rounded-xl bg-orange-50/30 backdrop-blur-md shadow-md" title="Java">-->
		<!--			<JavaIcon />-->
		<!--		</div>-->
		<!--	</div>-->
		<div class="pt-4">
			<a href="#projects">
				<button
					class="relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white
  rounded-xl bg-gradient-to-r from-rose-400 via-orange-400 to-amber-500 shadow-lg shadow-orange-500/30
  transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden group"
				>
					<span class="relative z-10 flex gap-2"><span>🚀</span> View My Work</span>

					<!-- Glow effect -->
					<span
						class="absolute inset-0 rounded-xl bg-gradient-to-r from-rose-400 via-orange-400 to-amber-50
    opacity-0 blur-xl transition duration-500 group-hover:opacity-40"
					/>
				</button>
			</a>
		</div>
	</div>
	<div class="lg:w-1/2 hidden lg:block">
		<HeroRight />
	</div>
</div>
