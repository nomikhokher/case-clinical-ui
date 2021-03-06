import { Field as GraphQLField, ID, ObjectType } from '@nestjs/graphql'
import { RelationType } from './relation-type.enum'

@ObjectType()
export class Relation {
  @GraphQLField(() => ID, { nullable: true })
  id?: string

  @GraphQLField({ nullable: true })
  createdAt?: Date

  @GraphQLField({ nullable: true })
  updatedAt?: Date

  @GraphQLField(() => RelationType, { nullable: true })
  type?: RelationType

  @GraphQLField({ nullable: true })
  name?: string

  @GraphQLField({ nullable: true })
  description?: string

  // Relations
  entity
  related
}
