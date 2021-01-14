import { Field as GraphQLField, ID, ObjectType } from '@nestjs/graphql'
import { Stage } from './stage.enum'

@ObjectType()
export class Ontology {
  @GraphQLField(() => ID, { nullable: true })
  id?: string

  @GraphQLField({ nullable: true })
  createdAt?: Date

  @GraphQLField({ nullable: true })
  updatedAt?: Date

  @GraphQLField(() => Stage, { nullable: true })
  stage?: Stage

  @GraphQLField({ nullable: true })
  name?: string

  @GraphQLField({ nullable: true })
  key?: string

  @GraphQLField({ nullable: true })
  value?: string

  @GraphQLField({ nullable: true })
  description?: string

  // Related fields
  entity
  Key
  field
  foreignKey
  keywords
}
