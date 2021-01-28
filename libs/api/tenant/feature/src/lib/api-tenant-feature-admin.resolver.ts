import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { CtxUser, GqlAuthAdminGuard } from '@schema-driven/api/auth/util'
import { CorePaging, CorePagingInput } from '@schema-driven/api/core/data-access'
import {
  AdminCreateTenantInput,
  AdminUpdateTenantInput,
  ApiTenantDataAccessService,
  Tenant,
  TenantRole,
  TenantUser,
} from '@schema-driven/api/tenant/data-access'
import { User } from '@schema-driven/api/user/data-access'

@UseGuards(GqlAuthAdminGuard)
@Resolver(() => Tenant)
export class ApiTenantFeatureAdminResolver {
  constructor(private readonly data: ApiTenantDataAccessService) {}

  @Query(() => [Tenant], { nullable: true })
  adminTenants(
    @CtxUser() admin: User,
    @Args({ name: 'paging', type: () => CorePagingInput, nullable: true }) paging?: CorePagingInput,
  ) {
    return this.data.adminTenants(admin.id, paging)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountTenants(
    @CtxUser() admin: User,
    @Args({ name: 'paging', type: () => CorePagingInput, nullable: true }) paging?: CorePagingInput,
  ) {
    return this.data.adminCountTenants(admin.id, paging)
  }

  @Query(() => Tenant, { nullable: true })
  adminTenant(@CtxUser() admin: User, @Args('tenantId') tenantId: string) {
    return this.data.adminTenant(admin.id, tenantId)
  }

  @Mutation(() => Tenant, { nullable: true })
  adminCreateTenant(@CtxUser() admin: User, @Args('input') input: AdminCreateTenantInput) {
    return this.data.adminCreateTenant(admin.id, input)
  }

  @Mutation(() => Tenant, { nullable: true })
  adminUpdateTenant(
    @CtxUser() admin: User,
    @Args('tenantId') tenantId: string,
    @Args('input') input: AdminUpdateTenantInput,
  ) {
    return this.data.adminUpdateTenant(admin.id, tenantId, input)
  }

  @Mutation(() => Tenant, { nullable: true })
  adminDeleteTenant(@CtxUser() admin: User, @Args('tenantId') tenantId: string) {
    return this.data.adminDeleteTenant(admin.id, tenantId)
  }

  @Mutation(() => TenantUser, { nullable: true })
  adminAddTenantUser(
    @CtxUser() admin: User,
    @Args('tenantId') tenantId: string,
    @Args('userId') userId: string,
    @Args({ name: 'role', type: () => TenantRole }) role: TenantRole,
  ) {
    return this.data.adminAddTenantUser(admin.id, tenantId, userId, role)
  }

  @Mutation(() => TenantUser, { nullable: true })
  adminUpdateTenantUserRole(
    @CtxUser() admin: User,
    @Args('tenantUserId') tenantUserId: string,
    @Args({ name: 'role', type: () => TenantRole }) role: TenantRole,
  ) {
    return this.data.adminUpdateTenantUserRole(admin.id, tenantUserId, role)
  }

  @Mutation(() => TenantUser, { nullable: true })
  adminRemoveTenantUser(@CtxUser() admin: User, @Args('tenantUserId') tenantUserId: string) {
    return this.data.adminRemoveTenantUser(admin.id, tenantUserId)
  }

  @ResolveField(() => [TenantUser], { nullable: true })
  users(@Parent() tenant: Tenant) {
    return tenant?.users
  }
}
