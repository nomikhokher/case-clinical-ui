import { Field as GraphQLField, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Enum {
  @GraphQLField(() => ID, { nullable: true })
  id?: string

  @GraphQLField({ nullable: true })
  createdAt?: Date

  @GraphQLField({ nullable: true })
  updatedAt?: Date

  @GraphQLField({ nullable: true })
  name?: string

  @GraphQLField({ nullable: true })
  description?: string

  @GraphQLField(() => [String], { nullable: true })
  values?: string

  // Relations
  entity
  related
}
