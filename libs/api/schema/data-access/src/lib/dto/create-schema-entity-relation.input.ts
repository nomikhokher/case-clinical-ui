import { Field as GraphQLField, Field, InputType } from '@nestjs/graphql'
import { RelationType } from '../models/relation-type.enum'

@InputType()
export class CreateSchemaEntityRelationInput {
  @Field({ nullable: true })
  id?: string

  @GraphQLField(() => RelationType)
  type: RelationType

  @GraphQLField()
  name: string

  @GraphQLField()
  relatedId: string

  @GraphQLField({ nullable: true })
  description?: string
}
