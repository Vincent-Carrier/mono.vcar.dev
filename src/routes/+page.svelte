<script lang="ts">
	import { X } from 'lucide-svelte';
</script>

<div class="border-nested my-32">
	<header class="flex-y-center bg-slate-950 p-4 text-slate-50">
		<h1 class="flex gap-x-1 text-6xl font-black uppercase tracking-tighter">
			<div>Vincent</div>
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
			class="h-full w-1/2 bg-slate-50 p-8 outline outline-1 -outline-offset-4 outline-slate-800 md:h-96"
		>
			<h2 class="text-3xl font-bold"># README</h2>
			<p class="mt-2 text-xl">
				I'm a web developer living in Montréal. I work with startups, agencies and clients to ship
				websites which are delightful, fast and on-budget.
			</p>
			<p class="mt-2 text-xl">
				I'm currently available for new projects. Feel free to reach out below.
			</p>
		</div>
		<img src="/portrait.png" alt="" class="w-1/2" />
	</main>
</div>

<div class="flex-y-center fixed bottom-12 right-12">
	<h2
		class="border-nested mx-4 flex w-full bg-slate-50 px-4 text-xl font-bold uppercase text-slate-950"
	>
		Contact me
		<X class="ml-auto pt-1" />
	</h2>
	<form class="border-nested flex flex-col bg-slate-950 text-slate-100 max-md:w-full max-md:px-4">
		<div class="mt-2 flex flex-col gap-y-4 p-4">
			<div class="flex gap-4 max-md:flex-wrap">
				<div class="flex-1">
					<label for="name" class="ml-1 block text-sm font-bold">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						autocomplete="name"
						required
						class="block h-8 w-full border-2 border-slate-950 bg-base p-2 text-sm outline outline-1 -outline-offset-4 outline-slate-950"
					/>
				</div>
				<div class="flex-1">
					<label for="email" class="ml-1 block text-sm font-bold">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						autocomplete="email"
						required
						class="block h-8 w-full border-2 border-slate-950 bg-base p-2 text-sm outline outline-1 -outline-offset-4 outline-slate-950"
					/>
				</div>
			</div>
			<div>
				<label for="message" class="ml-1 block text-sm font-bold">Message</label>
				<textarea
					id="message"
					name="message"
					rows="4"
					required
					class="w-full border-2 border-slate-950 bg-base p-2 text-sm outline outline-1 -outline-offset-4 outline-slate-950"
				></textarea>
			</div>
			<button
				type="submit"
				class="ml-auto border-slate-100 bg-slate-50 px-12 py-1 text-center text-lg font-light lowercase italic tracking-tighter text-slate-950 outline outline-1 -outline-offset-4 outline-slate-800"
			>
				Send -->
			</button>
		</div>
	</form>
</div>
