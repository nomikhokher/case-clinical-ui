import { ApiTenantDataAccessModule } from '@metadata/api/tenant/data-access'
import { Module } from '@nestjs/common'

import { ApiTenantAdminFeatureResolver } from './api-tenant-admin-feature.resolver'
import { ApiTenantFeatureResolver } from './api-tenant-feature.resolver'

@Module({
  imports: [ApiTenantDataAccessModule],
  providers: [ApiTenantAdminFeatureResolver, ApiTenantFeatureResolver],
})
export class ApiTenantFeatureModule {}
