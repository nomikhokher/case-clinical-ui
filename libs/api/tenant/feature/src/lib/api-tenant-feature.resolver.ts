import { ApiTenantDataAccessService, CreateTenantInput, Tenant } from '@metadata/api/tenant/data-access'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

@Resolver()
export class ApiTenantFeatureResolver {
  constructor(private readonly data: ApiTenantDataAccessService) {}

  @Query(() => [Tenant], { nullable: true })
  tenants() {
    return this.data.tenants()
  }

  @Query(() => Tenant, { nullable: true })
  tenant(@Args('tenantId') tenantId: string) {
    return this.data.tenant(tenantId)
  }

  @Mutation(() => Tenant, { nullable: true })
  createTenant(@Args('input') input: CreateTenantInput) {
    return this.data.createTenant(input)
  }
}
