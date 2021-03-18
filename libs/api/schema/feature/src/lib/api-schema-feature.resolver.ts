import { UseGuards } from '@nestjs/common'

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CtxUser, GqlAuthGuard } from '@schema-driven/api/auth/util'
import {
  ApiSchemaDataAccessService,
  CreateSchemaEnumInput,
  CreateSchemaEntityFieldInput,
  CreateSchemaEntityInput,
  CreateSchemaEntityRelationInput,
  CreateSchemaInput,
  Entity,
  Field,
  FieldDataType,
  Relation,
  Schema,
  UpdateSchemaEnumInput,
  UpdateSchemaEntityFieldInput,
  UpdateSchemaEntityInput,
  UpdateSchemaEntityRelationInput,
  UpdateSchemaInput,
} from '@schema-driven/api/schema/data-access'
import { User } from '@schema-driven/api/user/data-access'
import { Enum } from '../../../data-access/src/lib/models/enum.model'

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

  @Query(() => [FieldDataType], { nullable: true })
  fieldDataTypes() {
    return this.data.fieldDataTypes()
  }

  @Mutation(() => Schema, { nullable: true })
  createSchema(@CtxUser() user: User, @Args('tenantId') tenantId: string, @Args('input') input: CreateSchemaInput) {
    return this.data.createSchema(user.id, tenantId, input)
  }

  @Mutation(() => Schema, { nullable: true })
  updateSchema(@CtxUser() user: User, @Args('schemaId') schemaId: string, @Args('input') input: UpdateSchemaInput) {
    return this.data.updateSchema(user.id, schemaId, input)
  }

  @Mutation(() => Entity, { nullable: true })
  createSchemaEntity(
    @CtxUser() user: User,
    @Args('schemaId') schemaId: string,
    @Args('input') input: CreateSchemaEntityInput,
  ) {
    return this.data.createSchemaEntity(user.id, schemaId, input)
  }

  @Mutation(() => Entity, { nullable: true })
  updateSchemaEntity(
    @CtxUser() user: User,
    @Args('entityId') entityId: string,
    @Args('input') input: UpdateSchemaEntityInput,
  ) {
    return this.data.updateSchemaEntity(user.id, entityId, input)
  }

  @Mutation(() => Field, { nullable: true })
  createEntityField(
    @CtxUser() user: User,
    @Args('entityId') entityId: string,
    @Args('input') input: CreateSchemaEntityFieldInput,
  ) {
    return this.data.createEntityField(user.id, entityId, input)
  }

  @Mutation(() => Field, { nullable: true })
  updateEntityField(
    @CtxUser() user: User,
    @Args('fieldId') fieldId: string,
    @Args('input') input: UpdateSchemaEntityFieldInput,
  ) {
    return this.data.updateEntityField(user.id, fieldId, input)
  }

  @Mutation(() => Field, { nullable: true })
  deleteEntityField(@CtxUser() user: User, @Args('fieldId') fieldId: string) {
    return this.data.deleteEntityField(user.id, fieldId)
  }

  @Mutation(() => Relation, { nullable: true })
  createEntityRelation(
    @CtxUser() user: User,
    @Args('entityId') entityId: string,
    @Args('input') input: CreateSchemaEntityRelationInput,
  ) {
    return this.data.createEntityRelation(user.id, entityId, input)
  }

  @Mutation(() => Relation, { nullable: true })
  updateEntityRelation(
    @CtxUser() user: User,
    @Args('relationId') relationId: string,
    @Args('input') input: UpdateSchemaEntityRelationInput,
  ) {
    return this.data.updateEntityRelation(user.id, relationId, input)
  }

  @Mutation(() => Relation, { nullable: true })
  deleteEntityRelation(@CtxUser() user: User, @Args('relationId') relationId: string) {
    return this.data.deleteEntityRelation(user.id, relationId)
  }

  @Mutation(() => Enum, { nullable: true })
  createSchemaEnum(
    @CtxUser() user: User,
    @Args('schemaId') schemaId: string,
    @Args('input') input: CreateSchemaEnumInput,
  ) {
    return this.data.createSchemaEnum(user.id, schemaId, input)
  }

  @Mutation(() => Enum, { nullable: true })
  updateSchemaEnum(@CtxUser() user: User, @Args('enumId') enumId: string, @Args('input') input: UpdateSchemaEnumInput) {
    return this.data.updateSchemaEnum(user.id, enumId, input)
  }

  @Mutation(() => Enum, { nullable: true })
  deleteSchemaEnum(@CtxUser() user: User, @Args('enumId') enumId: string) {
    return this.data.deleteSchemaEnum(user.id, enumId)
  }
}
