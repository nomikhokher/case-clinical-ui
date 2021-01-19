import { ApiCoreDataAccessModule } from '@metadata/api/core/data-access'
import { Module } from '@nestjs/common'
import { ApiUserDataAccessService } from './api-user-data-access.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [ApiUserDataAccessService],
  exports: [ApiUserDataAccessService],
})
export class ApiUserDataAccessModule {}
