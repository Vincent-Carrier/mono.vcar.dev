<script lang="ts">
	import ContactMe from './contact-me.svelte'
</script>

<div class="border-nested my-32">
	<header class="flex-y-center bg-slate-950 p-4 text-slate-50">
		<h1 class="flex gap-x-1 text-6xl font-black uppercase tracking-tighter">
			<div class="-mt-[6px]">Vincent</div>
			/
			<div class="mt-1">Carrier</div>
		</h1>
		<p class="mt-1 text-4xl font-bold lowercase">&nbsp;&lt;Web-Developer/&gt;</p>
		<nav class="my-4 flex justify-center gap-x-6">
			{#each [{ name: 'About', href: '/about' }, { name: 'Projects', href: '/projects' }, { name: 'Blog', href: '/blog' }] as { name, href }, i}
				<a
					{href}
					class="border-slate-100 bg-slate-50 px-12 py-1 text-center text-lg font-light lowercase italic tracking-tighter text-slate-950 outline outline-1 -outline-offset-4 outline-slate-800"
				>
					{i}/ {name} -->
				</a>
			{/each}
		</nav>
	</header>

	<main class="flex max-md:flex-col">
		<div
			class="flex h-full w-1/2 flex-col gap-y-2 bg-slate-50 px-8 py-4 outline outline-1 -outline-offset-4 outline-slate-800 md:h-96"
		>
			<h2 class="text-2xl font-bold"># README</h2>
			<p>
				I'm a web developer living in Montréal. I work with startups, agencies and clients to ship
				websites which are delightful, fast and on-budget.
			</p>
			<p>I'm currently available for new projects. Feel free to reach out below.</p>
			<button
				class="mt-4 w-fit self-end border border-slate-950 bg-slate-50 px-4 py-1 text-center text-lg font-light lowercase italic tracking-tighter text-slate-950"
				>more about me --></button
			>
		</div>
		<img src="/portrait.png" alt="" class="w-1/2" />
	</main>
</div>

<ContactMe class="bottom-12 right-12" />

<style lang="postcss">
	main p {
		@apply text-lg leading-snug;
	}
</style>
