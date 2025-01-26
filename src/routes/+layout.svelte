<script lang="ts">
	import { dev } from '$app/environment'
	import { Pause, Play } from 'lucide-svelte'
	import '../app.css'
	import Button from '$lib/components/button.svelte'

	export const prerender = true
	let { children } = $props()

	let play = $state(!dev)
</script>

<button
	onclick={() => (play = !play)}
	class="surface-dark fixed top-4 right-4 cursor-pointer border-slate-800 bg-slate-800 p-1 text-slate-50 transition-colors *:fill-slate-50 hover:border-slate-950 hover:bg-slate-950 max-md:hidden"
>
	{#if play}
		<Pause />
	{:else}
		<Play />
	{/if}
</button>

<div
	data-dev={dev || undefined}
	class={[
		'bg-pattern md:morphing-diamonds h-full min-h-screen bg-slate-950 md:bg-slate-300',
		{ play }
	]}
>
	<div class="md:py-12">
		<div class="surface-dark flex-y-center mx-auto max-w-3xl text-slate-950 max-md:min-h-screen">
			<header class="flex-y-center bg-slate-950 p-4 text-slate-50">
				<p class="flex-x-1 text-5xl font-black tracking-tighter uppercase sm:text-6xl">
					<span class="-mt-[6px]">Vincent</span>
					/
					<span class="mt-1">Carrier</span>
				</p>
				<p class="mt-1 text-4xl font-medium text-slate-100">&lt;web-developer/&gt;</p>
				<nav class="flex-x-4 my-4 justify-center">
					{#each [{ name: 'About', href: '/' }, { name: 'Projects', href: '/projects' }, { name: 'Blog', href: '/blog' }] as { name, href }, i}
						<Button {href}>
							{i}/ {name}
						</Button>
					{/each}
				</nav>
			</header>

			<main class="w-full md:p-1">
				{@render children()}
			</main>
		</div>
	</div>
</div>

<style lang="postcss">
	@reference '../app.css';

	.bg-pattern {
		background-size: 6rem;
		@media (prefers-reduced-motion) {
			animation: none !important;
		}
		&.play {
			animation: bg 4000ms linear infinite;
		}
	}

	@keyframes bg {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: -6rem 6rem;
		}
	}
</style>
