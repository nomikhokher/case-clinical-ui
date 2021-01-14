import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateSchemaInput {
  @Field()
  name: string
}
