import { INestApplication } from '@nestjs/common'
import { CreateSchema, CreateSchemaInput, Schemata } from '../generated/api-sdk'
import { runGraphQLQuery, uniq } from '../helpers'
import { getApp, getTenant } from '../helpers/get-app'

describe('Schema Feature (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    app = await getApp()
  })
  afterAll(() => app.close())

  describe('create-list-schema', () => {
    const input: CreateSchemaInput = {
      name: uniq('schema'),
    }

    it('should create a schema ', async (done) => {
      const tenant = await getTenant(app)

      return runGraphQLQuery(app, CreateSchema, { input, tenantId: tenant.id })
        .expect(200)
        .expect((res) => {
          expect(res.body.data.createSchema).toBeDefined()
          Object.keys(input).forEach((key) => {
            expect(res.body.data.createSchema[key]).toEqual(input[key])
          })
          done()
        })
    })

    it('should list the schemata ', () => {
      return runGraphQLQuery(app, Schemata, { input })
        .expect(200)
        .expect((res) => {
          const schemata = res.body.data.schemata
          expect(schemata).toBeDefined()
          expect(schemata.find((t) => t.name === input.name)).toBeDefined()
        })
    })
  })
})
