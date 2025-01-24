<script lang="ts">
	import ContactMe from './contact-me.svelte'

	let more = $state(false)
</script>

<div class="border-nested my-32">
	<header class="flex-y-center bg-slate-950 p-4 text-slate-50">
		<h1 class="flex-x-1 text-6xl font-black tracking-tighter uppercase">
			<div class="-mt-[6px]">Vincent</div>
			/
			<div class="mt-1">Carrier</div>
		</h1>
		<p class="mt-1 text-4xl font-bold">&lt;web-developer/&gt;</p>
		<nav class="flex-x-4 my-4 justify-center">
			{#each [{ name: 'About', href: '/about' }, { name: 'Projects', href: '/projects' }, { name: 'Blog', href: '/blog' }] as { name, href }, i}
				<a {href} class="btn">
					{i}/ {name} -->
				</a>
			{/each}
		</nav>
	</header>

	<main>
		<div class="flex max-md:flex-col">
			<div
				class="flex-y h-full w-1/2 bg-slate-50 px-4 py-4 outline-1 -outline-offset-4 outline-slate-800 md:h-96"
			>
				<h2 class="text-2xl font-bold"># README</h2>
				<p>
					I'm a web developer living in Montréal. I work with startups, agencies and clients to ship
					websites which are delightful, fast and on-budget.
				</p>
				<p>
					I work mainly with front-end technologies like React and TypeScript, but I'm comfortable
					with backend languages like Python and PHP.
				</p>
				<p>I'm currently available for new projects. Feel free to reach out below.</p>
				<button class="btn mt-4 self-end">more about me --></button>
			</div>
			<img src="/portrait.png" alt="" class="w-1/2" />
		</div>
		{#if more}
			<div class="flex flex-row-reverse max-md:flex-col">
				<div
					class="flex-y h-full w-1/2 bg-slate-50 px-8 py-4 outline -outline-offset-4 outline-slate-800 md:h-96"
				>
					<h2 class="text-2xl font-bold">## IF YOU INSIST</h2>
					<p>
						I'm a web developer living in Montréal. I work with startups, agencies and clients to
						ship websites which are delightful, fast and on-budget.
					</p>

					<p>I'm currently available for new projects. Feel free to reach out below.</p>
					<button class="btn mt-4 self-end">more about me --></button>
				</div>
				<img src="/landscape.png" alt="" class="w-1/2" />
			</div>
		{/if}
	</main>
</div>

<ContactMe class="right-12 bottom-12" />

<style lang="postcss">
	@reference '../app.css';

	main p {
		@apply indent-[1ch] leading-snug text-pretty hyphens-auto;
		hyphenate-limit-chars: 6 3 3;
	}
</style>
