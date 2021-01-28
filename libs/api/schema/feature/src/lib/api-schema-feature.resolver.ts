import { UseGuards } from '@nestjs/common'

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CtxUser, GqlAuthGuard } from '@schema-driven/api/auth/util'
import {
  ApiSchemaDataAccessService,
  CreateSchemaInput,
  Schema,
  UpdateSchemaInput,
} from '@schema-driven/api/schema/data-access'
import { User } from '@schema-driven/api/user/data-access'

@Resolver()
@UseGuards(GqlAuthGuard)
export class ApiSchemaFeatureResolver {
  constructor(private readonly data: ApiSchemaDataAccessService) {}

  @Query(() => [Schema], { nullable: true })
  schemata(@CtxUser() user: User, @Args('tenantId') tenantId: string) {
    return this.data.schemata(user.id, tenantId)
  }

  @Query(() => Schema, { nullable: true })
  schema(@CtxUser() user: User, @Args('schemaId') schemaId: string) {
    return this.data.schema(user.id, schemaId)
  }

  @Mutation(() => Schema, { nullable: true })
  createSchema(@CtxUser() user: User, @Args('tenantId') tenantId: string, @Args('input') input: CreateSchemaInput) {
    return this.data.createSchema(user.id, tenantId, input)
  }

  @Mutation(() => Schema, { nullable: true })
  updateSchema(@CtxUser() user: User, @Args('schemaId') schemaId: string, @Args('input') input: UpdateSchemaInput) {
    return this.data.updateSchema(user.id, schemaId, input)
  }
}
