import { ApiAuthFeatureModule } from '@metadata/api/auth/feature'
import { ApiCoreFeatureModule } from '@metadata/api/core/feature'
import { ApiSchemaFeatureModule } from '@metadata/api/schema/feature'
import { ApiTenantFeatureModule } from '@metadata/api/tenant/feature'
import { Module } from '@nestjs/common'

@Module({
  imports: [ApiAuthFeatureModule, ApiCoreFeatureModule, ApiSchemaFeatureModule, ApiTenantFeatureModule],
})
export class AppModule {}
