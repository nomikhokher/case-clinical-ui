import { Entity, ForeignKey } from '@metadata/api/schema/data-access'

import { Parent, ResolveField, Resolver } from '@nestjs/graphql'

@Resolver(() => ForeignKey)
export class ApiForeignKeyFeatureResolver {
  @ResolveField(() => Entity, { nullable: true })
  relatedEntity(@Parent() fk: ForeignKey) {
    return fk.relatedEntity
  }
}
