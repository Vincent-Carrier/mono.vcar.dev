<script lang="ts">
	import type { PageProps } from './$types'
	import './post.css'
	const { data }: PageProps = $props()
</script>

<article id="post" class="card-light flex-y-4 m-1 px-12 py-8 text-lg">
	{@html data.post}
</article>
