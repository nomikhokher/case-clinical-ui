import { Field, InputType } from '@nestjs/graphql'
import { DataType } from '../models/data-type.enum'

@InputType()
export class CreateSchemaEntityFieldInput {
  @Field({ nullable: true })
  id?: string

  @Field()
  name: string

  @Field()
  description: string

  @Field(() => DataType)
  dataType: DataType

  @Field()
  isName: boolean

  @Field()
  isNullable: boolean
}
