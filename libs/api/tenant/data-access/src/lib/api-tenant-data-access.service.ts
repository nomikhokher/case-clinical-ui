import { ApiCoreDataAccessService } from '@metadata/api/core/data-access'
import { Injectable } from '@nestjs/common'
import { CreateTenantInput } from './dto/create-tenant.input'

@Injectable()
export class ApiTenantDataAccessService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  tenants() {
    return this.data.tenant.findMany()
  }

  tenant(tenantId: string) {
    return this.data.tenant.findUnique({ where: { id: tenantId } })
  }

  createTenant(input: CreateTenantInput) {
    return this.data.tenant.create({ data: { ...input } })
  }
}
