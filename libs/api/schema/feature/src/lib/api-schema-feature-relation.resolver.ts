import { UseGuards } from '@nestjs/common'

import { Parent, ResolveField, Resolver } from '@nestjs/graphql'
import { GqlAuthGuard } from '@schema-driven/api/auth/util'
import { Entity, Relation } from '@schema-driven/api/schema/data-access'

@Resolver(() => Relation)
@UseGuards(GqlAuthGuard)
export class ApiSchemaFeatureRelationResolver {
  @ResolveField(() => Entity, { nullable: true })
  entity(@Parent() relation: Relation) {
    return relation.entity
  }

  @ResolveField(() => Entity, { nullable: true })
  related(@Parent() relation: Relation) {
    return relation.related
  }
}
