import { registerEnumType } from '@nestjs/graphql'
import { RelationType } from '@prisma/client'

export { RelationType }

registerEnumType(RelationType, { name: 'RelationType' })
