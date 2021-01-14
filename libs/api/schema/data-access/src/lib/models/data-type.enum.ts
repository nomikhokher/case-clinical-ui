import { registerEnumType } from '@nestjs/graphql'
import { DataType } from '@prisma/client'

export { DataType }

registerEnumType(DataType, { name: 'DataType' })
