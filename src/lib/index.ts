import { eq } from 'drizzle-orm';
import { db } from './server/db';
import { shortlinks } from './server/db/schema';

export const URL_LENGTH = 25;

export function isNotStored(url: string): boolean {
	const dbEntries = db.select().from(shortlinks).having(eq(shortlinks.short, url));
	return !dbEntries;
}
