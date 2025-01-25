import matter from 'gray-matter'
import fs from 'node:fs'
import type { PageServerLoad } from './$types'
import { globby } from 'globby'

export type Post = {
	title: string
	subtitle?: string
	slug: string
	description: string
	date: string
}

export const load: PageServerLoad = async () => {
	const paths = await globby(import.meta.dirname + '/[slug]/*.md')
	const posts = []
	for (const p of paths) {
		const stream = fs.createReadStream(p, { encoding: 'utf8' })
		for await (const chunk of stream) {
			const { data, content } = matter(chunk)
			// console.log({ data, content })
			posts.push(data as Post)
			break
		}
		stream.close()
	}
	return { posts }
}
