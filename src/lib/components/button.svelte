<script lang="ts">
	let { children, class: classes = undefined, href = undefined, ...props } = $props()
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	class={[
		'cursor-pointer border-slate-100 bg-slate-50 px-4 py-1 text-center text-lg font-light tracking-tighter text-slate-950 lowercase italic outline -outline-offset-4 outline-slate-800 transition-all duration-75 ease-linear hover:-outline-offset-[6px] md:px-12',
		classes
	]}
	{href}
	data-sveltekit-preload-data={href && 'hover'}
	{...props}
>
	{@render children?.()} <span class="max-sm:hidden">--></span>
</svelte:element>
