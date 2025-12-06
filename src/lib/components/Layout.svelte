<script>
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
	<!-- <div
		class="absolute left-0 right-0 top-80 m-auto h-[310px] w-[410px] rounded
    bg-gradient-to-l from-cyan-500 via-blue-600 to-indigo-700 opacity-30 blur-[120px]"
	/> -->
</div>

<!-- Content -->
<!-- <Navbar /> -->

<div class="relative z-10 p-4">
	<slot />
	<Footer />
</div>
