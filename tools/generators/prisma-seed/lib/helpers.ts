import { Role, SchemaCreateWithoutTenantInput, TenantCreateInput, UserCreateInput } from '@prisma/client'

export function createUser(id: string, username: string, email: string, role: Role): UserCreateInput {
  return {
    id,
    username,
    email,
    role,
  }
}
export function createTenant(
  name: string,
  schemata: SchemaCreateWithoutTenantInput[],
  userIds: string[],
): TenantCreateInput {
  return {
    name,
    schemata: { create: schemata },
    users: { connect: userIds.map((id) => ({ id })) },
  }
}

export function createSchema(name: string): SchemaCreateWithoutTenantInput {
  return {
    name,
  }
}
