import { registerEnumType } from '@nestjs/graphql'
import { KeyType } from '@prisma/client'

export { KeyType }

registerEnumType(KeyType, { name: 'KeyType' })
