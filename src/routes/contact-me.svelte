<script lang="ts">
	import { X } from 'lucide-svelte'
	import draggable from '$lib/draggable.svelte'
	import dvdMenu from '$lib/dvd-menu.svelte'
	import { scale } from 'svelte/transition'
	import { linear } from 'svelte/easing'
	let win = $state() as HTMLElement
	let handle = $state() as HTMLElement
	let active = $state(true)
	let closeCount = $state(0)
	let { class: className } = $props()

	$effect(() => {
		if (active && closeCount) {
			handle.dispatchEvent(new CustomEvent('draggableoff', { bubbles: true }))
			handle.dispatchEvent(
				new CustomEvent('dvdstart', {
					detail: { speed: closeCount * 1.5 },
					bubbles: true
				})
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
		bind:this={win}
		use:draggable={{ handle }}
		use:dvdMenu
		transition:scale={{ duration: 200, easing: linear, opacity: 1.0 }}
	>
		<div class="border-nested z-10 -mb-4 flex w-[22rem] bg-slate-50">
			<h2
				class="w-full px-2 text-lg font-bold tracking-tight text-slate-950 uppercase select-none"
				bind:this={handle}
			>
				Contact me
			</h2>
			<button class="origin-center scale-[2.0] transform cursor-pointer" {onclick}>
				<X class="relative ml-auto origin-center  scale-50 transform" />
			</button>
		</div>
		<form class="border-nested flex-y-1 w-full bg-slate-950 px-3 py-4 text-slate-100">
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
				class="bg-base w-full border-2 border-slate-950 p-2 text-sm outline-1 -outline-offset-4 outline-slate-950"
			></textarea>
			<button type="submit" class="btn self-end"> Send --> </button>
		</form>
	</div>
{/if}

<style lang="postcss">
	@reference '../app.css';

	input,
	textarea {
		@apply mb-2 block w-full border-2 border-slate-950 bg-slate-50 p-2 text-sm text-slate-950 outline -outline-offset-4 outline-slate-950;
	}

	input {
		@apply h-10;
	}

	label {
		@apply ml-1 block text-lg leading-none font-bold;
	}
</style>
