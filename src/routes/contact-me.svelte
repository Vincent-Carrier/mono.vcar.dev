<script lang="ts">
	import { X } from 'lucide-svelte';
	let dragging = $state(false);
	let x = $state(0);
	let y = $state(0);

	function handleMouseMove(ev: MouseEvent) {
		if (dragging) {
			x += ev.movementX;
			y += ev.movementY;
		}
	}
</script>

<svelte:window onmouseup={() => (dragging = false)} onmousemove={handleMouseMove} />

<div class="flex-y-center fixed bottom-8 right-8" style:transform={`translate(${x}px, ${y}px)`}>
	<h2
		class="border-nested z-10 -mb-4 flex w-full cursor-grab select-none bg-slate-50 px-2 text-lg font-bold uppercase tracking-tight text-slate-950 active:cursor-grabbing"
		onmousedown={() => (dragging = true)}
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
