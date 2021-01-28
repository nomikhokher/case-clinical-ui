import { ApiTenantDataAccessModule } from '@schema-driven/api/tenant/data-access'
import { Module } from '@nestjs/common'

import { ApiTenantFeatureAdminResolver } from './api-tenant-feature-admin.resolver'
import { ApiTenantFeatureResolver } from './api-tenant-feature.resolver'

@Module({
  imports: [ApiTenantDataAccessModule],
  providers: [ApiTenantFeatureAdminResolver, ApiTenantFeatureResolver],
})
export class ApiTenantFeatureModule {}
