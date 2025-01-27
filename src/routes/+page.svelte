<script lang="ts">
	import { slide } from 'svelte/transition'
	import ContactMe from './contact-me.svelte'
	import { linear } from 'svelte/easing'
	import Button from '$lib/components/button.svelte'

	let more = $state(false)
</script>

<div class="flex max-sm:flex-col">
	<div class="flex-y surface-light sm:w-1/2">
		<h1># README</h1>
		<p>
			I'm a web developer living in Montréal. I work with startups, agencies and clients to ship
			websites which are delightful, fast and on-budget.
		</p>
		<p>
			I work mainly with front-end technologies like React and TypeScript, but I'm comfortable with
			backend languages like Python and PHP.
		</p>
		<p>I'm currently available for new projects. Feel free to reach out below.</p>
		<Button class="btn mt-4 cursor-pointer self-end" onclick={() => (more = true)}>
			more about me
		</Button>
	</div>
	<img src="/portrait.png" alt="" class="object-cover object-right-top max-sm:h-96 sm:w-1/2" />
</div>
{#if more}
	<div class="flex flex-row-reverse max-sm:flex-col" in:slide={{ easing: linear, duration: 200 }}>
		<div class="flex-y surface-light sm:w-1/2">
			<h2>## IF YOU INSIST</h2>
			<p>
				I've been writing code for over 10 years. I'm a big Linux fan and I spend most of time
				inside a terminal window.
			</p>
			<p class="grow">
				Outside of coding, I'm a huge language nerd who's currently learning Ancient Greek. I also
				love board games, swimming, biking, and the occasional meditation retreat.
			</p>
			<Button class="btn mt-4 self-end">more !!!</Button>
		</div>
		<img src="/landscape.png" alt="" class="w-1/2" />
	</div>
{/if}
<div class="md:hidden mt-2">
	<h2 class="card-dark py-0 w-full px-2 text-lg font-bold tracking-tight uppercase">Contact me</h2>
	<form
		data-netlify="true"
		method="POST"
		name="contact"
		class="card-dark flex-y-1 w-full bg-slate-950 px-3 py-4 text-slate-100"
	>
		<label for="name">Name</label>
		<input
			type="text"
			id="name"
			name="name"
			autocomplete="name"
			placeholder="Dennis Richie"
			required
		/>
		<label for="email">Email</label>
		<input
			type="email"
			id="email"
			name="email"
			autocomplete="email"
			placeholder="dennis@bell.labs"
			required
		/>
		<label for="message">Message</label>
		<textarea id="message" name="message" rows="4" required></textarea>
		<Button type="submit" class="self-end">Send</Button>
	</form>
</div>

<ContactMe class="right-12 bottom-12 max-md:hidden" />

<style lang="postcss">
	@reference '../app.css';

	h1,
	h2 {
		@apply mb-2 text-2xl font-bold;
	}
	p {
		@apply indent-[1ch] leading-snug text-pretty hyphens-auto;
		hyphenate-limit-chars: 6 3 3;
	}
</style>
