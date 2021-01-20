import { INestApplication } from '@nestjs/common'
import { CreateSchema, CreateSchemaInput, Schemata, Stage } from '../generated/api-sdk'
import { runGraphQLQueryAlice, uniq } from '../helpers'
import { getApp, getTenantAlice } from '../helpers/get-app'

describe('Schema Feature (e2e)', () => {
  let app: INestApplication
  let tenant

  beforeAll(async () => {
    app = await getApp()
    tenant = await getTenantAlice(app)
  })
  afterAll(() => app.close())

  describe('create-list-schema', () => {
    const input: CreateSchemaInput = {
      name: uniq('schema'),
      stage: Stage.Dev,
      entities: [],
    }

    it('should create a schema ', async (done) => {
      return runGraphQLQueryAlice(app, CreateSchema, { input, tenantId: tenant.id })
        .expect(200)
        .expect((res) => {
          expect(res.body).toBeDefined()
          expect(res.body.data).toBeDefined()
          expect(res.body.data.createSchema).toBeDefined()
          expect(res.body.data.createSchema).toBeDefined()
          Object.keys(input).forEach((key) => {
            expect(res.body.data.createSchema[key]).toEqual(input[key])
          })
          done()
        })
    })

    it('should list the schemata with this name', () => {
      return runGraphQLQueryAlice(app, Schemata, { input, tenantId: tenant.id })
        .expect(200)
        .expect((res) => {
          expect(res.body.data).toBeDefined()
          const schemata = res.body.data.schemata
          expect(schemata).toBeDefined()
          expect(schemata.find((t) => t.name === input.name)).toBeDefined()
        })
    })
  })
})
