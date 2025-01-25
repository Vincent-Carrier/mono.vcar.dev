import matter from 'gray-matter'
import fs from 'node:fs'
import type { PageLoad } from './$types'
import { globby } from 'globby'

export const load: PageLoad = async () => {
	const paths = await globby('*.md')
	const posts = []
	console.log(paths)
	for (const p of paths) {
		const stream = fs.createReadStream(p, { encoding: 'utf8' })
		for await (const chunk of stream) {
			const { data, content } = matter(chunk)
			console.log({ data, content })
			posts.push(data)
			break
		}
		stream.close()
	}
	return
}
