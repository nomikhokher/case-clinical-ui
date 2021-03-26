import { AppModule } from '@schema-driven/api-app-module'
import { INestApplication } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import * as bodyParser from 'body-parser'
import { CreateTenant } from '../generated/api-sdk'
import { runGraphQLQueryAlice, uniq } from './index'

export async function getApp(): Promise<INestApplication> {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile()

  const app: INestApplication = moduleFixture.createNestApplication()
  app.use(bodyParser.json({ limit: '10mb' }))
  app.setGlobalPrefix('api')
  await app.init()

  return app
}

export async function getTenantAlice(app, prefix = 'tenant') {
  const result = await runGraphQLQueryAlice(app, CreateTenant, { input: { name: uniq(prefix) } })

  return result.body?.data?.createTenant
}
