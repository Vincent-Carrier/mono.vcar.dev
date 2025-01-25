<script lang="ts">
	import type { PageProps } from './$types'
	import './post.css'
	const { data }: PageProps = $props()
	const { post, title, subtitle } = data
</script>

<article id="post" class="surface-light flex-y-4 px-4 py-8 text-lg md:px-12">
	<h1>{title}</h1>
	{#if subtitle}
		<p class="text-detail -mt-2 self-end text-xl">{subtitle}</p>
	{/if}
	{@html post}
</article>
