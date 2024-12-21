<script>
	import PageTitle from '$lib/common/PageTitle/index.svelte';
	import { Skills } from '$lib/data/skills';
</script>

<div class="space-y-5 p-5 h-full overflow-y-auto no-scrollbar">
	<div class="space-y-5">
		<PageTitle title="About" />
		<p>
			I am a React.js developer with over three years of experience building dynamic and
			user-friendly web applications. I specialize in transforming design concepts into seamless web
			experiences, leveraging my expertise in TypeScript, Redux, CSS/SCSS, HTML, and Git. <br />
			<br /> With a focus on integrating APIs, visualizing data with charts and graphs, and crafting
			intuitive designs, I strive to deliver efficient and visually appealing solutions. I’m committed
			to staying updated with the latest industry trends and continuously enhancing my skills to achieve
			exceptional results. Let’s collaborate to create something impactful!
		</p>
	</div>
	<div class="space-y-5">
		<PageTitle title="Skills" />
		<div class="flex flex-wrap gap-4">
			{#each Skills as skill (skill?.name)}
				<div
					class="w-max flex justify-center items-center gap-4 rounded-lg h-max p-2 px-4 shadow-sm border border-zinc-600/20"
				>
					<span class="">{@html skill.icon}</span>
					<h4 class="font-semibold text-sm">{skill?.name}</h4>
				</div>
			{/each}
		</div>
	</div>
	<div class="space-y-5">
		<PageTitle title="Experience" />
		<div class="space-y-5">
			<div class="space-y-1">
				<h2 class="font-medium text-gray-300">Wobot AI</h2>
				<p class="text-sm text-gray-300">3 Years 2 Months</p>
				<p class="text-sm">Delhi, India</p>
			</div>
			<ul class="space-y-5 text-sm list-disc pl-5">
				<li class="space-y-1">
					<p class="text-gray-300">Frontend developer II</p>
					<p class="text-gray-300">Full-time</p>
					<p class="">July 2024 - Present &bull; 8 Months</p>
				</li>
				<li class="space-y-1">
					<p class="text-gray-300">Frontend developer I</p>
					<p class="text-gray-300">Full-time</p>
					<p class="">July 2022 - July 2024 &bull; 2 Years</p>
				</li>
				<li class="space-y-1">
					<p class="text-gray-300">Frontend developer</p>
					<p class="text-gray-300">Internship</p>
					<p>Jan 2022 - June 2022 &bull; 6 Months</p>
				</li>
			</ul>
		</div>
	</div>
	<div class="space-y-5">
		<PageTitle title="Education" />
		<div class="space-y-5">
			<div class="space-y-1">
				<h2 class="font-medium text-gray-300">
					Bachelor of Computer Application, Computer Science
				</h2>
				<p class="text-sm text-gray-300">
					Acharya Institutes of graduate studies bengaluru Karnataka
				</p>
				<p class="text-sm">Jul 2018 - Jul 2021</p>
				<p class="text-sm">Grade: 7.8 CGPA / 10</p>
			</div>
		</div>
	</div>
</div>
