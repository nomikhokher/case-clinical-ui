import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateSchemaEntityFieldInput {
  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  isName?: boolean

  @Field({ nullable: true })
  isNullable?: boolean
}
