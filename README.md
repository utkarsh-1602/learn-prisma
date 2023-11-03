# Learn Prisma

This repository is a learning resource for Prisma, a powerful and flexible database toolkit for TypeScript and Node.js. Prisma simplifies database access, allowing you to work with databases using a type-safe and auto-generated query builder.

## Prerequisites

Before you get started with this repository, make sure you have the following prerequisites in place:

1. **Node.js**: Make sure you have Node.js installed on your system.

2. **PostgreSQL**: You'll need a PostgreSQL database. You can set it up locally or use a hosted service.

3. **Prisma CLI**: Install the Prisma CLI globally using the following command:

   ```bash
   npm install -g prisma

## Files
Here's an overview of the major files in this repository:

script.ts: This TypeScript file contains a basic script that demonstrates how to use Prisma to interact with a PostgreSQL database. It creates a user and their user preferences and logs the result.

schema.prisma: This is your Prisma schema file. It defines the data model for your application, including the User, UserPreference, Post, and Category models, along with their relationships and attributes.

package.json: This file contains your project's dependencies and scripts for running and managing your application. It includes dependencies like Prisma, TypeScript, and nodemon for development.

## Getting Started
Follow these steps to get started with this repository:
- Clone the repository and install dependencies to your local machine:
```
git clone <repository_url>
npm install
```

- Create a .env file and define your PostgreSQL database connection URL. You can use the .env.example as a template:

```
DATABASE_URL=your_postgresql_connection_url
```

- Set up the Prisma client by running the following command:
```
npx prisma generate
```

- Run the script to create a user and their user preferences in your database:
```
npm run dev
```


## Prisma CLI Commands
- Here are some useful Prisma CLI commands you can use to manage your database:
```
npx prisma migrate save --name <migration-name>: Create a new database migration.

npx prisma migrate up: Apply pending migrations to the database.

npx prisma studio: Open Prisma Studio, an interactive database editor to explore your data.

npx prisma db seed: Seed your database with initial data.

npx prisma generate: Regenerate the Prisma client to reflect changes in your schema.
```
