<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	const simulatedOutput = [
		'🌅 6:30 AM: Wake up & freshen up',
		'☀️ 7:00 AM: Morning coffee & planning the day',
		'📝 7:30 AM: Check emails, GitHub notifications, and Slack messages',
		'💪 8:00 AM: Quick workout / stretching',
		'🍳 8:30 AM: Breakfast',
		'💻 9:00 AM: Work on Portfolio Website (TypeScript + React)',
		'💻 11:00 AM: Debugging / Refactoring Svelte Todo App',
		'🍴 1:00 PM: Lunch break & short walk',
		'💻 2:00 PM: Work on Spring Boot backend for new project',
		'☕ 3:30 PM: Coffee break & quick reading (tech articles)',
		'💻 4:00 PM: Continue backend APIs, write tests',
		'🚀 5:30 PM: Deploy Todo App updates',
		'💡 6:00 PM: Explore Rust (small experiments / learning)',
		'🌇 7:00 PM: Dinner & relax',
		'📚 8:00 PM: Study new frameworks or tutorials',
		"🖊 9:00 PM: Plan next day's tasks & small coding experiments",
		'🌙 10:30 PM: Light coding / side projects',
		'💤 11:30 PM: Sleep'
	];

	let displayText = writable<string[]>([]);

	const typingSpeed = 50; // ms per character
	const lineDelay = 300; // ms between lines

	onMount(async () => {
		const output: string[] = [];
		for (const line of simulatedOutput) {
			let currentLine = '';
			for (const char of line) {
				currentLine += char;
				displayText.set([...output, currentLine]);
				await new Promise((r) => setTimeout(r, typingSpeed));
			}
			output.push(currentLine);
			await new Promise((r) => setTimeout(r, lineDelay));
		}
	});
</script>

<div class="w-full bg-black/70 backdrop-blur-md rounded shadow-md">
	<pre>
		{#each $displayText as line, i}
			{line}{i === $displayText.length - 1 ? '' : '\n'}
		{/each}
	</pre>
</div>

<style>
	pre {
		font-family: 'Fira Code', monospace;
		color: #0f0; /* classic terminal green */
		padding: 1rem;
		border-radius: 0.5rem;
		overflow-x: auto;
		white-space: pre-wrap;
	}
	.blink {
		display: inline-block;
		width: 0.8rem;
		background-color: #0f0;
		animation: blink 1s step-start infinite;
	}
	@keyframes blink {
		50% {
			background-color: transparent;
		}
	}
</style>
