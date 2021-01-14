import { Field as GraphQLField, ID, ObjectType } from '@nestjs/graphql'
import { KeyType } from './key-type.enum'
import { Stage } from './stage.enum'

@ObjectType()
export class Key {
  @GraphQLField(() => ID, { nullable: true })
  id?: string

  @GraphQLField({ nullable: true })
  createdAt?: Date

  @GraphQLField({ nullable: true })
  updatedAt?: Date

  @GraphQLField(() => Stage, { nullable: true })
  stage?: Stage

  @GraphQLField(() => KeyType, { nullable: true })
  keyType?: KeyType

  @GraphQLField({ nullable: true })
  name?: string

  @GraphQLField({ nullable: true })
  description?: string

  @GraphQLField({ nullable: true })
  isDrivingKey?: boolean

  // Related fields
  entity
  ontologies
  keywords
}
