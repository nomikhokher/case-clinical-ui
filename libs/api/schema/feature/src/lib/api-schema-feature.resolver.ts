import { ApiSchemaDataAccessService, CreateSchemaInput, Schema } from '@metadata/api/schema/data-access'

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

@Resolver()
export class ApiSchemaFeatureResolver {
  constructor(private readonly data: ApiSchemaDataAccessService) {}

  @Query(() => [Schema], { nullable: true })
  schemata() {
    return this.data.schemata()
  }

  @Query(() => Schema, { nullable: true })
  schema(@Args('schemaId') schemaId: string) {
    return this.data.schema(schemaId)
  }

  @Mutation(() => Schema, { nullable: true })
  createSchema(@Args('tenantId') tenantId: string, @Args('input') input: CreateSchemaInput) {
    return this.data.createSchema(tenantId, input)
  }
}
