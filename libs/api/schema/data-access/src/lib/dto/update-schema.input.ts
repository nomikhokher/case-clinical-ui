import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateSchemaInput {
  @Field()
  name: string
}
