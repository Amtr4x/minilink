# Minilink

- [Minilink](#minilink)
  - [Technologies](#technologies)
  - [Deploy it yourself](#deploy-it-yourself)

A minimalistic URL shortener written in SvelteKit.

## Technologies

- Typescript
- SvelteKit 5
- Tailwindcss 3
- Sqlite3 / libSql
- Drizzle ORM

## Deploy it yourself

- Clone the repo

```bash
git clone git@github.com:Amtr4x/minilink.github
```

- Go to the repo folder and use **PNPM** to install the dependencies

```bash
pnpm install
```

- Create the DB using **sqlite3**

```bash
sqlite3 dbname.db < shortlink.sql
```

- Setup your .env file

```.env
DATABASE_URL=file:dbname.db
```

- Deploy it locally

```bash
pnpm run dev --open
```
