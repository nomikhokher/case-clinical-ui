import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateSchemaEntityOntologyInput {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  key?: string

  @Field({ nullable: true })
  value: string

  @Field({ nullable: true })
  name: string

  @Field({ nullable: true })
  description?: string

  @Field(() => [String], { nullable: true })
  keywords?: string[]
}
