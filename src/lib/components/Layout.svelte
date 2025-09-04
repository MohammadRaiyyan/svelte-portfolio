<script>
	import { Navbar } from '$lib';
	import Footer from './Footer.svelte';
</script>

<!-- Background -->
<div
	class="fixed inset-0 -z-10 w-full h-full
  bg-white
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
  bg-[size:14px_24px]"
>
	<!-- Blurred radial blob -->
	<div
		class="absolute left-0 right-0 top-60 m-auto h-[510px] w-[510px] rounded-full
    bg-fuchsia-400 opacity-20 blur-[100px]"
	/>
</div>

<!-- Content -->
<Navbar />

<div class="relative z-10">
	<slot />
	<Footer />
</div>
