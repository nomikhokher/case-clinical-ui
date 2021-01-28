import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateSchemaEntityOntologyInput {
  @Field({ nullable: true })
  id?: string

  @Field()
  key: string

  @Field()
  value: string
}
