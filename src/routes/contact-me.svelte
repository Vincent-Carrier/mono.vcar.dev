<script lang="ts">
	import { X } from 'lucide-svelte'
	import draggable from '$lib/draggable.svelte'
	import dvdMenu from '$lib/dvd-menu.svelte'
	import { scale } from 'svelte/transition'
	import { linear } from 'svelte/easing'
	import ContactForm from './contact-form.svelte'
	let handle = $state() as HTMLElement
	let active = $state(true)
	let closeCount = $state(0)
	let { class: className } = $props()

	function onclick() {
		active = false
		closeCount += 1
		setTimeout(() => {
			active = true
		}, 2000)
	}
</script>

{#if closeCount == 0}
	<div
		use:draggable={{ handle }}
		class={['flex-y-center fixed w-96', className]}
		transition:scale={{ duration: 200, easing: linear, opacity: 1.0 }}
	>
		{@render contactMe()}
	</div>
{:else if active}
	<div
		use:dvdMenu={{ speed: closeCount * 1.5 }}
		class={['flex-y-center fixed w-96', className]}
		transition:scale={{ duration: 200, easing: linear, opacity: 1.0 }}
	>
		{@render contactMe()}
	</div>
{/if}

{#snippet contactMe()}
	<div class="surface-dark z-10 -mb-4 flex w-[22rem] bg-slate-50">
		<h2
			class="w-full px-2 text-lg font-bold tracking-tight text-slate-950 uppercase select-none"
			bind:this={handle}
		>
			Contact me
		</h2>
		<button class="origin-center scale-[2.0] transform cursor-pointer" {onclick}>
			<X class="relative ml-auto origin-center scale-50  transform text-slate-950" />
		</button>
	</div>
	<ContactForm />
{/snippet}
