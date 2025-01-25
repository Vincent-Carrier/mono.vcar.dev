import matter from 'gray-matter'
import fs from 'node:fs/promises'
import type { PageServerLoad } from './$types'
import MarkdownIt from 'markdown-it'
import highlightjs from 'markdown-it-highlightjs'
import type { Post } from '../+page.server'

const md = MarkdownIt({ html: true })
md.use(highlightjs)

export const load: PageServerLoad = async ({ params: { slug } }) => {
	const body = await fs.readFile(import.meta.dirname + `/${slug}.md`)
	const { content, data } = matter(body)
	const html = md.render(content)
	return { post: html, ...(data as Post) }
}
