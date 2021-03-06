import { Field as GraphQLField, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateSchemaEntityRelationInput {
  @GraphQLField({ nullable: true })
  name?: string

  @GraphQLField({ nullable: true })
  description?: string
}
