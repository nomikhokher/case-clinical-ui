import { ApiCoreDataAccessService, CorePaging, CorePagingInput } from '@metadata/api/core/data-access'

import { Injectable } from '@nestjs/common'
import { AdminCreateTenantInput } from './dto/admin-create-tenant.input'
import { AdminUpdateTenantInput } from './dto/admin-update-tenant.input'
import { CreateTenantInput } from './dto/create-tenant.input'
import { TenantRole } from './models/tenant-role.enum'

@Injectable()
export class ApiTenantDataAccessService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  tenants(userId: string) {
    return this.data.tenant.findMany({
      where: { users: { some: { userId } } },
    })
  }

  tenant(userId: string, tenantId: string) {
    return this.data.tenant.findFirst({ where: { id: tenantId, users: { some: { userId } } } })
  }

  createTenant(userId: string, input: CreateTenantInput) {
    return this.data.tenant.create({
      data: { ...input, users: { create: { role: TenantRole.Owner, user: { connect: { id: userId } } } } },
    })
  }

  async adminTenants(adminId: string, paging: CorePagingInput) {
    await this.data.ensureAdminUser(adminId)
    return this.data.tenant.findMany({
      take: paging.limit,
      skip: paging.skip,
    })
  }

  async adminCountTenants(adminId: string, paging: CorePagingInput): Promise<CorePaging> {
    await this.data.ensureAdminUser(adminId)
    const total = await this.data.tenant.count()
    return {
      limit: paging.limit,
      skip: paging.skip,
      total,
    }
  }

  async adminTenant(adminId: string, tenantId: string) {
    await this.data.ensureAdminUser(adminId)
    return this.data.tenant.findUnique({ where: { id: tenantId }, include: { users: { include: { user: true } } } })
  }

  async adminCreateTenant(adminId: string, input: AdminCreateTenantInput) {
    await this.data.ensureAdminUser(adminId)
    return this.data.tenant.create({
      data: {
        ...input,
      },
    })
  }

  async adminUpdateTenant(adminId: string, tenantId: string, input: AdminUpdateTenantInput) {
    await this.data.ensureAdminUser(adminId)
    return this.data.tenant.update({
      where: { id: tenantId },
      data: { ...input },
    })
  }

  async adminDeleteTenant(adminId: string, tenantId: string) {
    await this.data.ensureAdminUser(adminId)
    return this.data.tenant.delete({ where: { id: tenantId } })
  }

  async adminAddTenantUser(adminId: string, tenantId: string, userId: string, role: TenantRole) {
    await this.data.ensureAdminUser(adminId)
    const found = await this.data.tenantUser.findFirst({ where: { userId, tenantId } })

    if (found) {
      throw new Error(`This user already has access to this tenant`)
    }

    return this.data.tenantUser.create({
      data: {
        tenant: { connect: { id: tenantId } },
        user: { connect: { id: userId } },
        role,
      },
    })
  }

  async adminUpdateTenantUserRole(adminId: string, tenantUserId: string, role: TenantRole) {
    await this.data.ensureAdminUser(adminId)
    return this.data.tenantUser.update({ where: { id: tenantUserId }, data: { role } })
  }

  async adminRemoveTenantUser(adminId: string, tenantUserId: string) {
    await this.data.ensureAdminUser(adminId)
    return this.data.tenantUser.delete({ where: { id: tenantUserId } })
  }

  tenantRole(userId: string, tenantId: string): Promise<TenantRole> {
    return this.data.tenantUser.findFirst({ where: { userId, tenantId } }).then((t) => t.role)
  }
}
