import { DataType, Prisma, Role, TenantRole } from '@prisma/client'
import { createHash } from 'crypto'

const ucFirst = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
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
    firstName: ucFirst(username),
    lastName: 'Example',
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

export function createSchema(
  name: string,
  entities: Prisma.EntityCreateWithoutSchemaInput[],
): Prisma.SchemaCreateWithoutTenantInput {
  return { name, entities: { create: entities } }
}

export function createField(
  dataType: DataType,
  name: string,
  isName: boolean,
  isNullable: boolean,
  description: string,
): Prisma.FieldCreateWithoutEntityInput {
  return {
    name,
    isName,
    dataType,
    description,
    isNullable,
  }
}

export function createOntology(key: string, value: string): Prisma.OntologyCreateWithoutEntityInput {
  return {
    key,
    value,
    name: `Default name for ${key}`,
    description: `Default description for ${key}`,
  }
}

export function createEntity(
  name: string,
  description: string,
  keywords: string[],
  {
    keys,
    fields,
    foreignKeys,
    ontologies,
  }: {
    keys?: Prisma.KeyCreateWithoutEntityInput[]
    fields?: Prisma.FieldCreateWithoutEntityInput[]
    foreignKeys?: Prisma.ForeignKeyCreateWithoutRelatedEntityInput[]
    ontologies?: Prisma.OntologyCreateWithoutEntityInput[]
  },
): Prisma.EntityCreateWithoutSchemaInput {
  return {
    name,
    description,
    dynamicProperties: {},
    keywords,
    keys: { create: keys },
    fields: { create: fields },
    foreignKeys: { create: foreignKeys },
    ontologies: { create: ontologies },
  }
}
