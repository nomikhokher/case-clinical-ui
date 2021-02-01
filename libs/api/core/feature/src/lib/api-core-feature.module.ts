import { GraphQLIntercomModule } from '@kikstart-playground/graphql-intercom'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApiAccountFeatureModule } from '@schema-driven/api/account/feature'
import { ApiAuthFeatureModule } from '@schema-driven/api/auth/feature'
import { ApiSchemaFeatureModule } from '@schema-driven/api/schema/feature'
import { ApiTenantFeatureModule } from '@schema-driven/api/tenant/feature'
import { ApiUserFeatureModule } from '@schema-driven/api/user/feature'
import { PubSub } from 'graphql-subscriptions'
import { join } from 'path'

import { ApiCoreFeatureController } from './api-core-feature.controller'
import { ApiCoreFeatureResolver } from './api-core-feature.resolver'
import { ApiCoreFeatureService } from './api-core-feature.service'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'api-schema.graphql'),
      context: ({ req, res }) => ({ req, res }),
      installSubscriptionHandlers: true,
      introspection: true,
      playground: {
        settings: {
          'request.credentials': 'include',
        },
      },
      sortSchema: true,
    }),
    GraphQLIntercomModule.forRoot({ pubSub: new PubSub() }),
    ApiAccountFeatureModule,
    ApiAuthFeatureModule,
    ApiSchemaFeatureModule,
    ApiTenantFeatureModule,
    ApiUserFeatureModule,
  ],
  controllers: [ApiCoreFeatureController],
  providers: [ApiCoreFeatureResolver, ApiCoreFeatureService],
  exports: [ApiCoreFeatureService],
})
export class ApiCoreFeatureModule {}
