import { ApiTenantDataAccessModule } from '@metadata/api/tenant/data-access'
import { Module } from '@nestjs/common'

import { ApiTenantFeatureResolver } from './api-tenant-feature.resolver'

@Module({
  imports: [ApiTenantDataAccessModule],
  providers: [ApiTenantFeatureResolver],
})
export class ApiTenantFeatureModule {}
