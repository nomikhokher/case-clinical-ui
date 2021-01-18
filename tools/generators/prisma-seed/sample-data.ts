import { Role, TenantCreateInput, UserCreateInput } from '@prisma/client'
import { hashSync } from 'bcryptjs'
import { createSchema, createTenant, createUser } from './lib/helpers'

const password = hashSync('123SchemaDriven', 10)

export const users: UserCreateInput[] = [
  createUser('admin', 'admin', 'admin@example.com', password, Role.Admin),
  createUser('user', 'user', 'user@example.com', password, Role.User),
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
