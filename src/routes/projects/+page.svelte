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
			description: 'A digital reading environment for Ancient Greek, built from scratch.',
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

<div class="flex-y-1 md:gap-y-2">
	{#each Object.entries(projects) as [key, { name, description, technologies, href }]}
		<a {href} target="_blank" class="flex-x-1 h-60 bg-slate-50 p-1 even:flex-row-reverse">
			<div class="flex-y card-light md:p-8">
				<h2 class="text-lg font-bold sm:mb-4 sm:text-2xl">
					{name}
					<ExternalLink class="inline-block w-4 stroke-1 md:-mb-1 md:w-8" />
				</h2>
				<p class="grow md:pr-12 md:text-lg">{@html description}</p>
				<p class="text-detail mt-2 self-end">{technologies}</p>
			</div>
			<img src={`/${key}.png`} alt="" class="h-full border border-slate-950 object-cover" />
		</a>
	{/each}
</div>
