import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const urls = sqliteTable('urls', {
	short: text('short').primaryKey().unique(),
	long: text('long').unique()
});
