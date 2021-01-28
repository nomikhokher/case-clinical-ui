import { User } from '@schema-driven/api/user/data-access'
import { Field as GraphQLField, ID, ObjectType } from '@nestjs/graphql'
import { TenantRole } from './tenant-role.enum'
import { Tenant } from './tenant.model'

@ObjectType()
export class TenantUser {
  @GraphQLField(() => ID, { nullable: true })
  id?: string

  @GraphQLField({ nullable: true })
  createdAt?: Date

  @GraphQLField({ nullable: true })
  updatedAt?: Date

  @GraphQLField(() => User, { nullable: true })
  user?: User

  @GraphQLField(() => Tenant, { nullable: true })
  tenant?: Tenant

  @GraphQLField(() => TenantRole, { nullable: true })
  role?: TenantRole
}
