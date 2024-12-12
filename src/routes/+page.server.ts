import type { Actions } from './$types';
import { nanoid } from 'nanoid';
import { URL_LENGTH } from '$lib';
import { db } from '$lib/server/db';
import { urls } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { error } from '@sveltejs/kit';

export const actions = {
	save: async ({ request }) => {
		const data = await request.formData();
		const long = data.get('url') as string;
		const short = nanoid(URL_LENGTH);

		try {
			if (long) {
				await db.insert(urls).values({ short: short, long: long }).onConflictDoNothing();
				const savedShort = await db
					.select({ short: urls.short })
					.from(urls)
					.where(eq(urls.long, long));
				const host = request.headers.get('host');
				const shortenedUrl = `https://${host}/${savedShort.at(0)?.short}`;

				return { success: true, shortenedUrl };
			}
		} catch (err) {
			console.error(err);
			error(502, 'Failed to short your url :(');
		}
	}
} satisfies Actions;
