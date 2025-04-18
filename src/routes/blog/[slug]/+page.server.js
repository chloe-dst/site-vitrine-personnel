import { error } from '@sveltejs/kit';
import { posts } from '../data.js';

export function load({ params }) {
	const post = posts.find((post) => post.slug === params.slug);
	console.log("Post" + post);

	if (!post) throw error(404);

	const index = posts.findIndex((article) => article.slug === params.slug);

	// Filter to only get the article before and the two articles after the one displayed.
	// If the article displayed is the first one, get the three articles after.
	// If the article displayed is the last one, get the three articles before. 
	let summaries;
	if (index === 0) {
		summaries = posts.slice(1, 4);
	} else if (index === posts.length - 1) {
		summaries = posts.slice(-4, -1);
	} else {
		summaries = posts.filter((_, i) => i === index - 1 || i === index + 1 || i === index + 2);
	}

	summaries = summaries.map((article) => ({
		slug: article.slug,
		title: article.title,
		image: article.image
	}));

	return {
		post,
		summaries
	};
}

export const entries = () => {
	return posts.map((post) => ({ slug: post.slug }));
};