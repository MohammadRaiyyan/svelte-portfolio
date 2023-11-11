<script>
	import { Navbar, Sidebar } from '$lib';
</script>

<div class="sm:flex">
	<div class="sm:w-1/4 sm:h-screen border-r">
		<Sidebar />
	</div>

	<div class="sm:3/4 w-full sm:h-screen overflow-scroll">
		<div class=" hidden sm:block">
			<Navbar />
		</div>
		<div class="p-5">
			<slot />
		</div>
	</div>
</div>
