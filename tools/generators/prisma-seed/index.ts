import { logger, Tree } from '@nrwl/devkit'
import { Seeder } from './lib/seeder'
import { tenants, users } from './sample-data'
import { Schema } from './schema'

export default async function (host: Tree, schema: Schema) {
  if (!schema.confirm) {
    logger.warn(`Seeding database cancelled`)
    return
  }

  const seeder = new Seeder()

  // Clean up existing data
  await seeder.removeData([
    // These models to be listed in reversed order of dependency as Prisma doesn't support cascading deletes yet.
    // Give this issue a thumbs-up to vote for it: https://github.com/prisma/prisma/issues/4711
    'schema',
    'tenant',
    'user',
  ])

  // Create users
  await seeder.createData('user', users)

  // Create Tenants + Schemas
  await seeder.createData('tenant', tenants, { schemata: true })
}
