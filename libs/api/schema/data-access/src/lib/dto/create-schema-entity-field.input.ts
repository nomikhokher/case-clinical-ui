import { Field, InputType } from '@nestjs/graphql'
import { DataType } from '../models/data-type.enum'

@InputType()
export class CreateSchemaEntityFieldInput {
  @Field({ nullable: true })
  id?: string

  @Field()
  name: string

  @Field({ nullable: true })
  description?: string

  @Field(() => DataType)
  dataType: DataType

  @Field({ nullable: true })
  isName?: boolean

  @Field({ nullable: true })
  isNullable?: boolean
}
