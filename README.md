# metadata

An application for persisting organization metadata.

## Installation

These are the steps to get up and running after cloning the project.

- Run `docker-compose up` to start the database. You can add the `-d` parameter to run it in the background. `docker-compose down` will shut it down.
- Run `yarn install` to install the dependencies
- Copy `.env.example` to `.env` so the API can read the env vars.
- Run `yarn setup` to initialize the database.

## Usage

You can run the API with the command `yarn dev:api`.

Run the API e2e test with `yarn nx e2e api-e2e`.

Generate the GraphQL SDK with the command `yarn sdk:web`.

## Seed the database

To initialize the database with seed data, run `yarn prisma:seed`
