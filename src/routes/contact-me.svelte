<script lang="ts">
	import { X } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import draggable from '$lib/draggable.svelte';
	let dx = $state(2);
	let dy = $state(2);
	let width = $state(0);
	let height = $state(0);

	// onMount(() => {
	// 	const interval = setInterval(() => {
	// 		if (!dragging) {
	// 			x += dx;
	// 			y += dy;

	// 			// Bounce off window edges
	// 			if (x <= 0 || x >= window.innerWidth - width) dx *= -1;
	// 			if (y <= 0 || y >= window.innerHeight - height) dy *= -1;
	// 		}
	// 	}, 16); // ~60fps

	// 	return () => clearInterval(interval);
	// });
</script>

<div class="flex-y-center fixed" bind:clientWidth={width} bind:clientHeight={height} use:draggable>
	<h2
		class="border-nested z-10 -mb-4 flex w-full cursor-grab select-none bg-slate-50 px-2 text-lg font-bold uppercase tracking-tight text-slate-950 active:cursor-grabbing"
	>
		Contact me
		<X class="ml-auto pt-1" />
	</h2>
	<form class="border-nested flex flex-col bg-slate-950 px-2 text-slate-100 max-md:w-full">
		<div class="flex flex-col gap-y-2 py-2">
			<div class="flex gap-4 max-md:flex-wrap">
				<div class="flex-1">
					<label for="name">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						autocomplete="name"
						placeholder="Dennis Richie"
						required
						class="h-8"
					/>
				</div>
				<div class="flex-1">
					<label for="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						autocomplete="email"
						placeholder="dennis@bell.labs"
						required
						class="h-8"
					/>
				</div>
			</div>
			<div>
				<label for="message">Message</label>
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

<style lang="postcss">
	input,
	textarea {
		@apply block w-full border-2 border-slate-950 bg-base p-2 text-sm text-slate-950 outline outline-1 -outline-offset-4 outline-slate-950;
	}

	label {
		@apply ml-1 block text-sm font-bold;
	}
</style>
