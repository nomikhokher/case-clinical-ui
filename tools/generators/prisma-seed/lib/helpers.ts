import { Prisma, Role, TenantRole } from '@prisma/client'
import { createHash } from 'crypto'

const getHash = (str) => createHash('md5').update(str).digest('hex')
export const getGravatarUrl = (email = '') => `https://www.gravatar.com/avatar/${getHash(email)}?s=460&d=mp`

export function createUser(
  id: string,
  username: string,
  email: string,
  password: string,
  role: Role,
): Prisma.UserCreateInput {
  return {
    id,
    username,
    email,
    role,
    password,
    avatarUrl: getGravatarUrl(email),
  }
}

export function createTenant(
  name: string,
  schemata: Prisma.SchemaCreateWithoutTenantInput[],
  userIds: string[],
): Prisma.TenantCreateInput {
  return {
    name,
    schemata: { create: schemata },
    users: {
      create: userIds.map((userId) => ({
        role: TenantRole.Owner,
        user: { connect: { id: userId } },
      })),
    },
  }
}

export function createSchema(name: string): Prisma.SchemaCreateWithoutTenantInput {
  return { name }
}
