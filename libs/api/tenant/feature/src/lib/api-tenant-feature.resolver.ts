import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CtxUser, GqlAuthGuard } from '@schema-driven/api/auth/util'
import {
  ApiTenantDataAccessService,
  CreateTenantInput,
  Tenant,
  TenantRole,
} from '@schema-driven/api/tenant/data-access'
import { User } from '@schema-driven/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiTenantFeatureResolver {
  constructor(private readonly data: ApiTenantDataAccessService) {}

  @Query(() => [Tenant], { nullable: true })
  tenants(@CtxUser() user: User) {
    return this.data.tenants(user.id)
  }

  @Query(() => Tenant, { nullable: true })
  tenant(@CtxUser() user: User, @Args('tenantId') tenantId: string) {
    return this.data.tenant(user.id, tenantId)
  }

  @Query(() => TenantRole, { nullable: true })
  tenantRole(@CtxUser() user: User, @Args('tenantId') tenantId: string) {
    return this.data.tenantRole(user.id, tenantId)
  }

  @Mutation(() => Tenant, { nullable: true })
  createTenant(@CtxUser() user: User, @Args('input') input: CreateTenantInput) {
    return this.data.createTenant(user.id, input)
  }
}
