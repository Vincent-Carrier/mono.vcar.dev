<script lang="ts">
	import { ExternalLink } from 'lucide-svelte'

	const projects = {
		oxytone: {
			name: 'oxytone.xyz',
			description:
				'Learning dead tongues the new way. A digital reading environment for Ancient Greek, built from scratch.',
			technologies: 'Python, Web Components',
			href: 'https://oxytone.xyz/'
		},
		molsoft: {
			name: 'molsoft.io',
			description: 'Marketing website for the Molsoft eCommerce agency',
			technologies: 'React, NextJS, TypeScript, TailwindCSS',
			href: 'https://www.molsoft.io/'
		},
		endossed: {
			name: 'Endossed',
			description: 'Web app for Endossed, a FinTech startup',
			technologies: 'React, TypeScript, TailwindCSS',
			href: 'https://web.archive.org/web/20221115131319/https://endossed.com/'
		},
		greekLearnsYou: {
			name: 'Greek Learns You',
			description: "Learn Greek words you didn't know you already knew",
			technologies: 'Svelte, TailwindCSS',
			href: 'https://greek-learns-you.netlify.app/'
		}
	}
</script>

<div class="flex flex-col max-md:flex-col">
	{#each Object.entries(projects) as [key, { name, description, technologies, href }]}
		<div class="flex-x h-60 bg-slate-50 even:flex-row-reverse">
			<div class="flex-y card-dark w-full justify-center">
				<h2 class="text-xl font-bold">
					{name} <a {href} class="-mb-1 inline-block w-8"><ExternalLink /></a>
				</h2>
				<p>{description}</p>
				<p class="mt-2 font-light italic">{technologies}</p>
			</div>
			<a {href} class="w-96 p-2">
				<img src={`/${key}.png`} alt="" class="h-full object-cover" />
			</a>
		</div>
	{/each}
</div>
