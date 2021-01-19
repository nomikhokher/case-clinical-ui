import { INestApplication } from '@nestjs/common'
import {
  AdminAddTenantUser,
  AdminRemoveTenantUser,
  AdminTenant,
  AdminUpdateTenantUserRole,
  CreateTenant,
  CreateTenantInput,
  Tenant,
  TenantRole,
  Tenants,
} from '../generated/api-sdk'
import { runGraphQLQueryAdmin, runGraphQLQueryAlice, runUnexpectedQuery, uniq } from '../helpers'
import { getApp, getTenantAlice } from '../helpers/get-app'

describe('Tenant Feature (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    app = await getApp()
  })
  afterAll(() => app.close())

  describe('expected behavior', () => {
    describe('create-list-tenant', () => {
      const input: CreateTenantInput = {
        name: uniq('tenant'),
      }
      let tenantId: string

      it('should create a tenant ', () => {
        return runGraphQLQueryAlice(app, CreateTenant, { input })
          .expect(200)
          .expect((res) => {
            expect(res.body.data.createTenant).toBeDefined()
            Object.keys(input).forEach((key) => {
              expect(res.body.data.createTenant[key]).toEqual(input[key])
            })
          })
      })

      it('should list the new tenant ', () => {
        return runGraphQLQueryAlice(app, Tenants, { input })
          .expect(200)
          .expect((res) => {
            const tenants = res.body.data.tenants
            expect(tenants).toBeDefined()
            const findNewTenant = tenants.find((t) => t.name === input.name)
            tenantId = findNewTenant.id
            expect(findNewTenant).toBeDefined()
          })
      })

      it('should retrieve the new tenant as the owner', () => {
        return runGraphQLQueryAlice(app, Tenant, { tenantId })
          .expect(200)
          .expect((res) => {
            const tenant = res.body.data.tenant
            expect(tenant).toBeDefined()
            const role = res.body.data.role
            expect(role).toEqual(TenantRole.Owner)
          })
      })
    })

    describe('tenant-ownership', () => {
      let tenant
      let tenantUserId
      it('should create new tenant and have user as owner ', async () => {
        tenant = await getTenantAlice(app)
        return runGraphQLQueryAdmin(app, AdminTenant, { tenantId: tenant.id })
          .expect(200)
          .expect((res) => {
            expect(res.body.data).toBeDefined()
            expect(res.body.data.adminTenant).toBeDefined()
            expect(res.body.data.adminTenant?.users?.length).toEqual(1)
            expect(res.body.data.adminTenant?.users?.find((user) => user?.user?.id === 'alice')?.role).toEqual('Owner')
          })
      })

      it('admin should be able to add user to tenant ', async () => {
        await runGraphQLQueryAdmin(app, AdminAddTenantUser, { tenantId: tenant.id, userId: 'bob', role: 'User' })
          .expect(200)
          .expect((res) => {
            expect(res.body.data).toBeDefined()
            expect(res.body.data.adminAddTenantUser).toBeDefined()
          })

        return runGraphQLQueryAdmin(app, AdminTenant, { tenantId: tenant.id })
          .expect(200)
          .expect((res) => {
            expect(res.body.data.adminTenant).toBeDefined()
            expect(res.body.data.adminTenant?.users?.length).toEqual(2)
            expect(res.body.data.adminTenant?.users?.find((user) => user?.user?.id === 'alice')?.role).toEqual('Owner')
            expect(res.body.data.adminTenant?.users?.find((user) => user?.user?.id === 'bob')?.role).toEqual('User')
            tenantUserId = res.body.data.adminTenant?.users?.find((user) => user?.user?.id === 'bob').id
          })
      })

      it('admin should be able to change a users role in a tenant ', async () => {
        await runGraphQLQueryAdmin(app, AdminUpdateTenantUserRole, { tenantUserId, role: 'Owner' })
          .expect(200)
          .expect((res) => {
            expect(res.body.data).toBeDefined()
            expect(res.body.data.adminUpdateTenantUserRole).toBeDefined()
          })

        return runGraphQLQueryAdmin(app, AdminTenant, { tenantId: tenant.id })
          .expect(200)
          .expect((res) => {
            expect(res.body.data.adminTenant).toBeDefined()
            expect(res.body.data.adminTenant?.users?.length).toEqual(2)
            expect(res.body.data.adminTenant?.users?.find((user) => user?.user?.id === 'alice')?.role).toEqual('Owner')
            expect(res.body.data.adminTenant?.users?.find((user) => user?.user?.id === 'bob')?.role).toEqual('Owner')
          })
      })

      it('admin should be able to remove a user from a  tenant ', async () => {
        await runGraphQLQueryAdmin(app, AdminRemoveTenantUser, { tenantUserId })
          .expect(200)
          .expect((res) => {
            expect(res.body.data).toBeDefined()
            expect(res.body.data.adminRemoveTenantUser).toBeDefined()
          })

        return runGraphQLQueryAdmin(app, AdminTenant, { tenantId: tenant.id })
          .expect(200)
          .expect((res) => {
            expect(res.body.data.adminTenant).toBeDefined()
            expect(res.body.data.adminTenant?.users?.length).toEqual(1)
            expect(res.body.data.adminTenant?.users?.find((user) => user?.user?.id === 'alice')?.role).toEqual('Owner')
          })
      })
    })
  })

  describe('unexpected behavior', () => {
    describe('not authenticated', () => {
      it('should not list tenants', () => {
        return runUnexpectedQuery(app, Tenants)
      })
      it('should not retrieve tenant', () => {
        return runUnexpectedQuery(app, Tenant, { tenantId: 'SomeTenantId' })
      })
    })

    describe('missing parameters', () => {
      it('should not retrieve a tenant without tenantId ', () => {
        return runUnexpectedQuery(
          app,
          Tenant,
          {},
          400,
          `Variable "$tenantId" of required type "String!" was not provided.`,
        )
      })
      it('should not create a tenant without input ', () => {
        return runUnexpectedQuery(
          app,
          CreateTenant,
          {},
          400,
          `Variable "$input" of required type "CreateTenantInput!" was not provided.`,
        )
      })
    })
  })
})
