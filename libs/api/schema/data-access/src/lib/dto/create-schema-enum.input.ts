import { Field as GraphQLField, Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateSchemaEnumInput {
  @Field({ nullable: true })
  id?: string

  @GraphQLField()
  name: string

  @GraphQLField({ nullable: true })
  description?: string

  @GraphQLField(() => [String], { nullable: true })
  values?: string
}
