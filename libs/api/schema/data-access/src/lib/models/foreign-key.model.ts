import { Field as GraphQLField, ID, ObjectType } from '@nestjs/graphql'
import { Field } from './field.model'
import { Stage } from './stage.enum'

@ObjectType()
export class ForeignKey {
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

  @GraphQLField({ nullable: true })
  description?: string

  // Related fields
  @GraphQLField(() => [Field], { nullable: true })
  relatedField?: Field[]

  // Handled by Resolve
  relatedEntity
  ontologies
  keywords
}
