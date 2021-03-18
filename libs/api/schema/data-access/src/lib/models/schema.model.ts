import { Field as GraphQLField, ID, ObjectType } from '@nestjs/graphql'
import { Entity } from './entity.model'
import { Enum } from './enum.model'
import { Stage } from './stage.enum'

@ObjectType()
export class Schema {
  @GraphQLField(() => ID, { nullable: true })
  id?: string

  @GraphQLField({ nullable: true })
  createdAt?: Date

  @GraphQLField({ nullable: true })
  updatedAt?: Date

  @GraphQLField({ nullable: true })
  publishedAt?: Date

  @GraphQLField(() => Stage, { nullable: true })
  stage?: Stage

  @GraphQLField({ nullable: true })
  name?: string

  // Related fields
  @GraphQLField(() => [Entity], { nullable: true })
  entities: Entity[]

  @GraphQLField(() => [Enum], { nullable: true })
  enums: Enum[]

  tenant
  keywords
}
