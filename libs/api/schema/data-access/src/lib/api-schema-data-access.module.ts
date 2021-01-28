import { ApiCoreDataAccessModule } from '@schema-driven/api/core/data-access'
import { Module } from '@nestjs/common'

import { ApiSchemaDataAccessService } from './api-schema-data-access.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  exports: [ApiSchemaDataAccessService],
  providers: [ApiSchemaDataAccessService],
})
export class ApiSchemaDataAccessModule {}
