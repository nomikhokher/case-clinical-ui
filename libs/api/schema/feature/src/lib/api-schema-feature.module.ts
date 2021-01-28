import { ApiSchemaDataAccessModule } from '@schema-driven/api/schema/data-access'
import { Module } from '@nestjs/common'

import { ApiSchemaFeatureResolver } from './api-schema-feature.resolver'

@Module({
  imports: [ApiSchemaDataAccessModule],
  providers: [ApiSchemaFeatureResolver],
})
export class ApiSchemaFeatureModule {}
