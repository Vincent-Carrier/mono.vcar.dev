<script lang="ts">
	import type { PageProps } from './$types'

	const { data }: PageProps = $props()
</script>

<div class="flex-y-1 p-1 md:w-[48rem]">
	{#each data.posts as p}
		<div class="flex-x h-60 bg-slate-50">
			<div class="flex-y card-light w-full p-8">
				<a href={`/blog/${p.slug}`}>
					<h2 class="mb-4 text-2xl font-bold">
						{p.title}
					</h2>
				</a>
				<!-- <p class="max-w-sm grow text-lg">{description}</p> -->
			</div>
			<!-- <a {href} target="_blank" class="w-96 p-2">
				<img src={`/${key}.png`} alt="" class="h-full object-cover" />
			</a> -->
		</div>
	{/each}
</div>
