import { INestApplication } from '@nestjs/common'
import { CreateTenantInput, CreateTenant, Tenants } from '../generated/api-sdk'
import { runGraphQLQuery, uniq } from '../helpers'
import { getApp } from '../helpers/get-app'

describe('Tenant Feature (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    app = await getApp()
  })
  afterAll(() => app.close())

  describe('create-list-tenant', () => {
    const input: CreateTenantInput = {
      name: uniq('tenant'),
    }

    it('should create a tenant ', () => {
      return runGraphQLQuery(app, CreateTenant, { input })
        .expect(200)
        .expect((res) => {
          expect(res.body.data.createTenant).toBeDefined()
          Object.keys(input).forEach((key) => {
            expect(res.body.data.createTenant[key]).toEqual(input[key])
          })
        })
    })

    it('should list the tenants ', () => {
      return runGraphQLQuery(app, Tenants, { input })
        .expect(200)
        .expect((res) => {
          const tenants = res.body.data.tenants
          expect(tenants).toBeDefined()
          expect(tenants.find((t) => t.name === input.name)).toBeDefined()
        })
    })
  })
})
