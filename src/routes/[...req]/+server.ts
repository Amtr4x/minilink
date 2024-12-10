import { db } from '$lib/server/db/index.js';
import * as schema from '$lib/server/db/schema.js';
import { error, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

const URL_LENGTH = 25;

/**
 * Redirect the user if the provided pathname inside
 * the requested url is stored inside the database
 * */
export async function GET({ url }) {
	const requestedLink = url.pathname.toString().slice(1);

	const obtainedLink = (
		await db
			.select({ long: schema.shortlinks.long })
			.from(schema.shortlinks)
			.where(eq(schema.shortlinks.short, requestedLink))
	)[0];

	if (obtainedLink) {
		redirect(302, obtainedLink.long?.toString() ?? '/');
	} else if (!obtainedLink || requestedLink.length !== URL_LENGTH) {
		return error(404, 'Page not found');
	}
}
