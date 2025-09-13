<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import 'prismjs';
	import 'prismjs/themes/prism-tomorrow.css';

	const appCode = `import Profile from "./Profile.jsx";

export default function App() {
  return (
    <div>
      <Profile
        name="Mohammad Raiyyan"
        role="Frontend Developer II"
        stack={["React", "Svelte", "TypeScript" "Spring Boot", "PostgreSQL"]}
        focus="Building scalable web apps"
      />
    </div>
  );
}`;

	const profileCode = `export default function Profile({ name, role, stack, focus }) {
  return (
    <div className="profile">
      <img src={avatar} alt={name} />
      <h1>{name}</h1>
      <p>{role}</p>
      <ul>
        {stack.map((s) => <li key={s}>{s}</li>)}
      </ul>
      <p>{focus}</p>
    </div>
  );
}`;

	const displayText = writable('');
	let typingIndex = 0;
	let phase = 'typingApp';
	let currentCode = appCode;

	function typeCode(code: string, callback: () => void) {
		displayText.set('');
		typingIndex = 0;

		const interval = setInterval(() => {
			if (typingIndex < code.length) {
				displayText.update((t) => t + code[typingIndex]);
				typingIndex++;
			} else {
				clearInterval(interval);
				setTimeout(callback, 1000);
			}
		}, 30);
	}

	onMount(() => {
		startCycle();
	});

	function startCycle() {
		phase = 'typingApp';
		currentCode = appCode;
		typeCode(appCode, () => {
			phase = 'typingProfile';
			currentCode = profileCode;
			setTimeout(startCycle, 1500);
		});
	}
</script>

<div class="editor transition-all ease-in-out">
	<div class="tabs">
		<div class="tab {phase === 'typingApp' ? 'active' : ''}">App.jsx</div>
		<div class="tab {phase === 'typingProfile' ? 'active' : ''}">Profile.jsx</div>
	</div>
	<pre class="language-js"><code class="language-js"
			>{@html Prism.highlight($displayText, Prism.languages.javascript, 'javascript')}</code
		><span class="blink" /></pre>
</div>

<style>
	.editor {
		background: rgb(30, 30, 30);
		backdrop-filter: blur(10px);
		color: #dcdcdc;
		font-family: 'Fira Code', monospace;
		padding: 1rem;
		border-radius: 8px;
		width: auto;
		height: auto;
		overflow: auto;
		position: relative;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
	}
	.tabs {
		display: flex;
		background: rgba(45, 45, 45, 0.8);
		padding: 0.5rem;
		border-radius: 8px 8px 0 0;
	}
	.tab {
		margin-right: 10px;
		padding: 5px 10px;
		border-radius: 4px;
		color: #bbb;
	}
	.active {
		background: #1e1e1e;
		color: #fff;
	}
	pre {
		margin: 0 !important;
	}

	.blink {
		display: inline-block;
		width: 10px;
		background: #fff;
		margin-left: 2px;
		animation: blink 1s infinite;
	}
	@keyframes blink {
		0%,
		50%,
		100% {
			opacity: 1;
		}
		25%,
		75% {
			opacity: 0;
		}
	}
</style>
