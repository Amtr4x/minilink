import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const shortlinks = sqliteTable('urls', {
	short: text('short').primaryKey(),
	long: text('long')
});
