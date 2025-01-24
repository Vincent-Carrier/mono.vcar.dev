<script lang="ts">
	import { ExternalLink } from 'lucide-svelte'

	const projects = [
		{
			name: 'Oxytone',
			description: 'Learning dead tongues the new way',
			technologies: 'Python, Web Components',
			href: 'https://oxytone.xyz/'
		},
		{
			name: 'molsoft.io',
			description: 'Marketing website for the Molsoft eCommerce agency',
			technologies: 'React, NextJS, TypeScript, Tailwind',
			href: 'https://www.molsoft.io/'
		},
		{
			name: 'Endossed',
			description: 'Web app for Endossed, a FinTech startup',
			technologies: 'React, TypeScript, Tailwind',
			href: 'https://web.archive.org/web/20221115131319/https://endossed.com/'
		},
		{
			name: 'Greek Learns You',
			description: "Learn Greek words you didn't know you already knew",
			technologies: 'Svelte, Tailwind',
			href: 'https://greek-learns-you.netlify.app/'
		}
	]
</script>

<div class="flex flex-col max-md:flex-col">
	{#each projects as { name, description, technologies, href }, i}
		<div class="flex-x h-40 even:flex-row-reverse">
			<div
				class="flex-y w-full bg-slate-50 px-4 py-4 outline-1 -outline-offset-4 outline-slate-800"
			>
				<h2 class="text-lg font-bold">
					{name} <a {href} class="-mb-1 inline-block w-8"><ExternalLink /></a>
				</h2>
				<p class="grow">{description}</p>
				<p class="font-light italic">{technologies}</p>
			</div>
			<img src="" alt="" class="w-96 bg-slate-400" />
		</div>
	{/each}
</div>
