import { db } from '$lib/server/db/index.js';
import { error, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { URL_LENGTH } from '$lib';
import { urls } from '$lib/server/db/schema.js';

/**
 * Redirect the user if the provided pathname inside
 * the requested url is stored inside the database
 * */
export async function GET({ url }) {
	const requestedLink = url.pathname.toString().slice(1);

	const obtainedLink = (
		await db.select({ long: urls.long }).from(urls).where(eq(urls.short, requestedLink))
	)[0];

	if (obtainedLink) {
		redirect(302, obtainedLink.long?.toString() ?? '/');
	} else if (!obtainedLink || requestedLink.length !== URL_LENGTH) {
		return error(404, 'Page not found');
	}
}
