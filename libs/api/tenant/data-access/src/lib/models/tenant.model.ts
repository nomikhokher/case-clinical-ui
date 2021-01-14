import { Field as GraphQLField, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Tenant {
  @GraphQLField(() => ID, { nullable: true })
  id?: string

  @GraphQLField({ nullable: true })
  createdAt?: Date

  @GraphQLField({ nullable: true })
  updatedAt?: Date

  @GraphQLField({ nullable: true })
  name?: string

  // Related fields
  users
  schemata
}
