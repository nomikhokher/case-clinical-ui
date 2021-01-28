import { registerEnumType } from '@nestjs/graphql'
import { FieldType } from '@prisma/client'

export { FieldType }

registerEnumType(FieldType, { name: 'FieldType' })
