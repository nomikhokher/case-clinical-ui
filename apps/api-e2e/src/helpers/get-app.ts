import { AppModule } from '@metadata/api-app-module'
import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { CreateTenant } from '../generated/api-sdk'
import { runGraphQLQueryAlice, uniq } from './index'

export async function getApp(): Promise<INestApplication> {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile()

  const app: INestApplication = moduleFixture.createNestApplication()
  app.setGlobalPrefix('api')
  await app.init()

  return app
}

export async function getTenantAlice(app) {
  const result = await runGraphQLQueryAlice(app, CreateTenant, { input: { name: uniq('tenant') } })

  return result.body?.data?.createTenant
}
