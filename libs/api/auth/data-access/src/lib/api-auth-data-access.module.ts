import { ApiCoreDataAccessModule } from '@metadata/api/core/data-access'
import { ApiCoreFeatureModule } from '@metadata/api/core/feature'
import { ApiUserDataAccessModule } from '@metadata/api/user/data-access'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { ApiAuthDataAccessService } from './api-auth-data-access.service'
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
  imports: [
    ApiCoreDataAccessModule,
    ApiCoreFeatureModule,
    ApiUserDataAccessModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({ secret: process.env.JWT_SECRET }),
  ],
  exports: [ApiAuthDataAccessService],
  providers: [ApiAuthDataAccessService, JwtStrategy],
})
export class ApiAuthDataAccessModule {}
