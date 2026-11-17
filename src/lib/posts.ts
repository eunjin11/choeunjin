import { getCollection } from 'astro:content';

export async function getPublishedPosts() {
	const posts = await getCollection('blog', ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function formatDate(date: Date) {
	const y = date.getFullYear();
	const m = String(date.getMonth() + 1).padStart(2, '0');
	const d = String(date.getDate()).padStart(2, '0');
	return `${y}.${m}.${d}`;
}
