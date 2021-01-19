import { ApiAuthFeatureModule } from '@metadata/api/auth/feature'
import { ApiCoreFeatureModule } from '@metadata/api/core/feature'
import { ApiSchemaFeatureModule } from '@metadata/api/schema/feature'
import { ApiTenantFeatureModule } from '@metadata/api/tenant/feature'
import { ApiUserFeatureModule } from '@metadata/api/user/feature'
import { Logger, Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { ensureDirSync, existsSync, writeFileSync } from 'fs-extra'
import { join } from 'path'

const rootPath = join(__dirname, '..', 'web')

@Module({
  imports: [
    ApiAuthFeatureModule,
    ApiCoreFeatureModule,
    ApiSchemaFeatureModule,
    ApiTenantFeatureModule,
    ApiUserFeatureModule,
    ServeStaticModule.forRoot({
      rootPath,
      exclude: ['/api/*', '/graphql'],
    }),
  ],
})
export class AppModule {
  constructor() {
    if (!existsSync(rootPath)) {
      ensureDirSync(rootPath)
      writeFileSync(join(rootPath, 'index.html'), `<pre>Run 'yarn build:web' to build the frontend.</pre>`)
      Logger.verbose(`Created static root path ${rootPath}`)
    }
  }
}
