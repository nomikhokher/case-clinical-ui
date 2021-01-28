import { ApiCoreDataAccessModule } from '@schema-driven/api/core/data-access'
import { Module } from '@nestjs/common'

import { ApiTenantDataAccessService } from './api-tenant-data-access.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  exports: [ApiTenantDataAccessService],
  providers: [ApiTenantDataAccessService],
})
export class ApiTenantDataAccessModule {}
