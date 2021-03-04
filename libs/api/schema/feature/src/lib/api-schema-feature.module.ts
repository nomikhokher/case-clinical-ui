import { ApiSchemaDataAccessModule } from '@schema-driven/api/schema/data-access'
import { Module } from '@nestjs/common'
import { ApiSchemaFeatureRelationResolver } from './api-schema-feature-relation.resolver'

import { ApiSchemaFeatureResolver } from './api-schema-feature.resolver'

@Module({
  imports: [ApiSchemaDataAccessModule],
  providers: [ApiSchemaFeatureResolver, ApiSchemaFeatureRelationResolver],
})
export class ApiSchemaFeatureModule {}
