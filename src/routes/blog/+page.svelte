<script lang="ts">
	import type { PageProps } from './$types'

	const { data }: PageProps = $props()
</script>

<svelte:head>
	<title>Blog — Vincent Carrier</title>
</svelte:head>

<div class="flex-y-1 md:gap-y-2">
	{#each data.posts as { title, subtitle, description, slug, date }}
		<a href={`/blog/${slug}`} class="flex-x-1 h-32 bg-slate-50 p-1 even:flex-row-reverse md:h-48">
			<div class="flex-y card-light w-full">
				<h2 class="mb-1 text-lg leading-tight font-bold md:text-2xl">
					{title}
				</h2>
				{#if subtitle}
					<p class="text-detail mb-2">{subtitle}</p>
				{/if}
				<p class="max-w-lg grow text-base tracking-tight max-md:hidden">{description}</p>
				<p class="text-detail mt-auto self-end text-sm">{date}</p>
			</div>
			<img src={`/${slug}.png`} alt="" class="h-full border border-slate-950 object-cover" />
		</a>
	{/each}
</div>
