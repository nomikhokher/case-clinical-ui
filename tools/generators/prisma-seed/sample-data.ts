import { Role, TenantCreateInput, UserCreateInput } from '@prisma/client'
import { createSchema, createTenant, createUser } from './lib/helpers'

export const users: UserCreateInput[] = [
  createUser('superadmin', 'superadmin', 'superadmin@example.com', Role.Admin),
  createUser('user', 'user', 'user@example.com', Role.User),
]

export const tenants: TenantCreateInput[] = [
  createTenant(
    `Tenant for User`,
    [
      createSchema('Tenant for User, schema a'),
      createSchema('Tenant for User, schema b'),
      createSchema('Tenant for User, schema c'),
    ],
    ['user'],
  ),
]
