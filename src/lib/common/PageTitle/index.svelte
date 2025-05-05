<script lang="ts">
	export let title: String;
	import IconAstric from '$lib/common/Icons/IconAstric.svelte';
</script>

<div class="flex items-center gap-5 mb-8">
	<h3 class="text-2xl uppercase dark:text-gray-300 flex items-center gap-2">
		<IconAstric />
		{title}
	</h3>
</div>
