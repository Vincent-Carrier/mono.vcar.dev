<script lang="ts">
	import { ExternalLink } from 'lucide-svelte'

	const projects = {
		puraterra: {
			name: 'puraterra.ca',
			description:
				'A fake marketing website to sensitize people on disinformation, commissioned by Equiterre.',
			technologies: 'Svelte, TailwindCSS',
			href: 'https://puraterra.ca/'
		},
		arboleduc: {
			name: 'arboleduc.ca',
			description: 'A marketing website for Arboleduc, a local tree care company.',
			technologies: 'Hugo, TailwindCSS',
			href: 'https://arboleduc.ca/'
		},
		oxytone: {
			name: 'oxytone.xyz',
			description:
				'Learning dead tongues the new way. A digital reading environment for Ancient Greek, built from scratch.',
			technologies: 'Python, Web Components, SASS',
			href: 'https://oxytone.xyz/'
		},
		molsoft: {
			name: 'molsoft.io',
			description: 'Marketing website for Molsoft, an eCommerce web agency.',
			technologies: 'React, NextJS, TypeScript, TailwindCSS',
			href: 'https://www.molsoft.io/'
		},
		endossed: {
			name: 'endossed.com',
			description: 'Web app for Endossed, a FinTech startup.',
			technologies: 'React, TypeScript, TailwindCSS',
			href: 'https://web.archive.org/web/20221115131319/https://endossed.com/'
		}
	}
</script>

<div class="flex-y-1 bg-slate-50 p-1">
	{#each Object.entries(projects) as [key, { name, description, technologies, href }]}
		<div class="flex-x h-60 bg-slate-50 even:flex-row-reverse">
			<div class="flex-y card-light w-full p-8">
				<h2 class="mb-4 text-2xl font-bold">
					<a {href} target="_blank">
						{name}
					</a>
					<a {href} target="_blank" class="-mb-1 inline-block w-8">
						<ExternalLink strokeWidth={1} />
					</a>
				</h2>
				<p class="max-w-sm grow text-lg">{description}</p>
				<p class="mt-2 font-light italic">{technologies}</p>
			</div>
			<a {href} target="_blank" class="w-96 p-2">
				<img src={`/${key}.png`} alt="" class="h-full object-cover" />
			</a>
		</div>
	{/each}
</div>

<style lang="postcss">
	@reference '../../app.css';
</style>
