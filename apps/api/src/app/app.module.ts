import { ApiAuthFeatureModule } from '@metadata/api/auth/feature'
import { ApiCoreFeatureModule } from '@metadata/api/core/feature'
import { Module } from '@nestjs/common'

@Module({
  imports: [ApiAuthFeatureModule, ApiCoreFeatureModule],
})
export class AppModule {}
