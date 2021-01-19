# metadata

An application for persisting organization metadata.

## Installation

These are the steps to get up and running after cloning the project.

- Run `docker-compose up` to start the database. You can add the `-d` parameter to run it in the background. `docker-compose down` will shut it down.
- Run `yarn install` to install the dependencies
- Copy `.env.example` to `.env` so the API can read the env vars.
- Run `yarn setup` to initialize the database.

## Database Maintenance Tasks

- Run `yarn prisma:apply` to push new migrations to your local database.
- Run `yarn prisma:studio` to launch a ui viewer to put some sample data in the database.

## Usage

You can run the API with the command `yarn dev:api`.

Run the API e2e test with `yarn nx e2e api-e2e`.

Generate the GraphQL SDK with the command `yarn sdk:web`.

While developing, use `yarn dev:web` to run the web assets.

Then when ready to build for Production `yarn build:web`.

## Seed the database

To initialize the database with seed data, run `yarn prisma:seed`
