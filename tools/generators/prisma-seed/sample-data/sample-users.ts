import { Prisma, Role } from '@prisma/client'
import { hashSync } from 'bcryptjs'

import { createUser } from '../lib/helpers'

const password = hashSync('123SchemaDriven', 10)

export const sampleUsers: Prisma.UserCreateInput[] = [
  createUser('admin', 'admin', 'admin@example.com', password, Role.Admin),
  createUser('alice', 'alice', 'alice@example.com', password, Role.User),
  createUser('bob', 'bob', 'bob@example.com', password, Role.User),
]
