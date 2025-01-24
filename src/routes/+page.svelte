<script lang="ts">
	import { slide } from 'svelte/transition'
	import ContactMe from './contact-me.svelte'
	import { linear } from 'svelte/easing'

	let more = $state(false)
</script>

<div class="flex max-md:flex-col">
	<div
		class="flex-y h-full w-1/2 bg-slate-50 px-4 py-4 outline-1 -outline-offset-4 outline-slate-800 md:h-96"
	>
		<h2># README</h2>
		<p>
			I'm a web developer living in Montréal. I work with startups, agencies and clients to ship
			websites which are delightful, fast and on-budget.
		</p>
		<p>
			I work mainly with front-end technologies like React and TypeScript, but I'm comfortable with
			backend languages like Python and PHP.
		</p>
		<p>I'm currently available for new projects. Feel free to reach out below.</p>
		<button class="btn mt-4 cursor-pointer self-end" onclick={() => (more = true)}
			>more about me --></button
		>
	</div>
	<img src="/portrait.png" alt="" class="w-1/2" />
</div>
{#if more}
	<div class="flex flex-row-reverse max-md:flex-col" in:slide={{ easing: linear, duration: 200 }}>
		<div
			class="flex-y h-full w-1/2 bg-slate-50 px-8 py-4 outline -outline-offset-4 outline-slate-800 md:h-96"
		>
			<h2>## IF YOU INSIST</h2>
			<p>
				I've been writing code for over 10 years. I'm a big Linux fan and I spend most of time
				inside a terminal window.
			</p>
			<p class="grow">
				Outside of coding, I'm a huge language nerd who's currently learning Ancient Greek. I also
				love board games, swimming, biking, and the occasional meditation retreat.
			</p>
			<button class="btn mt-4 self-end">more !!! --></button>
		</div>
		<img src="/landscape.png" alt="" class="w-1/2" />
	</div>
{/if}

<ContactMe class="right-12 bottom-12" />

<style lang="postcss">
	@reference '../app.css';

	h2 {
		@apply mb-2 text-2xl font-bold;
	}
	p {
		@apply indent-[1ch] leading-snug text-pretty hyphens-auto;
		hyphenate-limit-chars: 6 3 3;
	}
</style>
