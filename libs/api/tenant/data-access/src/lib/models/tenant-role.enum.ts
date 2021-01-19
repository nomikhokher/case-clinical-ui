import { registerEnumType } from '@nestjs/graphql'
import { TenantRole } from '@prisma/client'

export { TenantRole }

registerEnumType(TenantRole, { name: 'TenantRole' })
