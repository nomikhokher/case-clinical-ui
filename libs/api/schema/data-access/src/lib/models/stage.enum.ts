import { registerEnumType } from '@nestjs/graphql'
import { Stage } from '@prisma/client'

export { Stage }

registerEnumType(Stage, { name: 'Stage' })
