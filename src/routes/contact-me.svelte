<script lang="ts">
	import { X } from 'lucide-svelte'
	import draggable from '$lib/draggable.svelte'
	import dvdMenu from '$lib/dvd-menu.svelte'
	import { scale } from 'svelte/transition'
	import { linear } from 'svelte/easing'
	let handle = $state() as HTMLElement
	let active = $state(true)
	let closeCount = $state(0)
	let { class: className } = $props()

	$effect(() => {
		if (active && closeCount) {
			handle.dispatchEvent(new CustomEvent('draggableoff', { bubbles: true }))
			handle.dispatchEvent(
				new CustomEvent('dvdstart', { detail: { speed: closeCount * 1.5 }, bubbles: true })
			)
		}
	})

	function onclick() {
		active = false
		closeCount += 1
		setTimeout(() => {
			active = true
		}, 2000)
	}
</script>

{#if active}
	<div
		class={['flex-y-center fixed w-96', className]}
		use:draggable={{ handle }}
		use:dvdMenu
		transition:scale={{ duration: 200, easing: linear, opacity: 1.0 }}
	>
		<div class="border-nested z-10 -mb-4 flex w-80 bg-slate-50">
			<h2
				class="w-full select-none px-2 text-lg font-bold uppercase tracking-tight text-slate-950"
				bind:this={handle}
			>
				Contact me
			</h2>
			<button class="origin-center scale-[2.0] transform cursor-pointer" {onclick}>
				<X class="relative ml-auto origin-center  scale-50 transform" />
			</button>
		</div>
		<form class="border-nested flex w-full flex-col bg-slate-950 px-2 pt-2 text-slate-100">
			<div class="flex flex-col gap-y-2 py-2">
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
				<textarea
					id="message"
					name="message"
					rows="4"
					required
					class="w-full border-2 border-slate-950 bg-base p-2 text-sm outline outline-1 -outline-offset-4 outline-slate-950"
				></textarea>
				<button
					type="submit"
					class="ml-auto border-slate-100 bg-slate-50 px-12 py-1 text-center text-lg font-light lowercase italic tracking-tighter text-slate-950 outline outline-1 -outline-offset-4 outline-slate-800"
				>
					Send -->
				</button>
			</div>
		</form>
	</div>
{/if}

<style lang="postcss">
	input,
	textarea {
		@apply mb-1 block w-full border-2 border-slate-950 bg-slate-50 p-2 text-sm text-slate-950 outline outline-1 -outline-offset-4 outline-slate-950;
	}

	input {
		@apply h-10;
	}

	label {
		@apply ml-1 block text-lg font-bold leading-none;
	}
</style>
