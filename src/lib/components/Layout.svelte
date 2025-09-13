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
	<!-- Blurred radial blob with Sunset Glow -->
	<div
		class="absolute left-60 right-0 top-60 m-auto ml-0 h-[510px] w-[410px] rounded-full
    bg-gradient-to-r from-rose-400 via-orange-400 to-amber-500 opacity-30 blur-[120px]"
	/>
</div>

<!-- Content -->
<Navbar />

<div class="relative z-10">
	<slot />
	<Footer />
</div>
