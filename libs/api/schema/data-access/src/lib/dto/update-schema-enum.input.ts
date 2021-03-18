import { Field as GraphQLField, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateSchemaEnumInput {
  @GraphQLField({ nullable: true })
  name?: string

  @GraphQLField({ nullable: true })
  description?: string

  @GraphQLField(() => [String], { nullable: true })
  values?: string
}
