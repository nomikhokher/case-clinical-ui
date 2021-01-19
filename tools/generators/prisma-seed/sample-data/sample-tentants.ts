import { Prisma } from '@prisma/client'
import { createSchema, createTenant } from '../lib/helpers'
import { defaultEntity } from './sample-entities'

export const sampleTenants: Prisma.TenantCreateInput[] = [
  createTenant(
    `Tenant-for-Alice`,
    [
      // Schemas for Alice
      createSchema('Tenant-for-Alice, schema a', [
        // Entities for Bob's schema
        defaultEntity,
      ]),
    ],
    ['alice'],
  ),
  createTenant(
    `Tenant-for-Bob`,
    [
      // Schemas for Bob
      createSchema('Tenant-for-Bob, schema a', [
        // Entities for Bob's schema
        defaultEntity,
      ]),
    ],
    ['bob'],
  ),
]
