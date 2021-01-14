import { Role, TenantCreateInput, UserCreateInput } from '@prisma/client'
import { createSchema, createTenant, createUser } from './lib/helpers'

export const users: UserCreateInput[] = [
  createUser('superadmin', 'superadmin', 'superadmin@example.com', Role.SuperAdmin),
  createUser('admin', 'admin', 'admin@example.com', Role.Admin),
  createUser('user', 'user', 'user@example.com', Role.User),
]

export const tenants: TenantCreateInput[] = [
  createTenant(
    `Tenant for SuperAdmin`,
    [
      createSchema('Tenant for SuperAdmin, schema a'),
      createSchema('Tenant for SuperAdmin, schema b'),
      createSchema('Tenant for SuperAdmin, schema c'),
    ],
    ['superadmin'],
  ),
  createTenant(
    `Tenant for Admin`,
    [
      createSchema('Tenant for Admin, schema a'),
      createSchema('Tenant for Admin, schema b'),
      createSchema('Tenant for Admin, schema c'),
    ],
    ['admin'],
  ),
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
