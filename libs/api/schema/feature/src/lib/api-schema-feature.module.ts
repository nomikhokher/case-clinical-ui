import { ApiSchemaDataAccessModule } from '@metadata/api/schema/data-access'
import { Module } from '@nestjs/common'
import { ApiForeignKeyFeatureResolver } from './api-foreign-key-feature.resolver'

import { ApiSchemaFeatureResolver } from './api-schema-feature.resolver'

@Module({
  imports: [ApiSchemaDataAccessModule],
  providers: [ApiSchemaFeatureResolver, ApiForeignKeyFeatureResolver],
})
export class ApiSchemaFeatureModule {}
