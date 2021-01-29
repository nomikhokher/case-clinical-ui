import { Field as GraphQLField, ID, ObjectType } from '@nestjs/graphql'
import { DataType } from './data-type.enum'
import { FieldType } from './field-type.enum'

@ObjectType()
export class FieldDataType {
  @GraphQLField(() => ID, { nullable: true })
  id?: string

  @GraphQLField(() => DataType, { nullable: true })
  data?: DataType

  @GraphQLField(() => FieldType, { nullable: true })
  field?: FieldType

  @GraphQLField({ nullable: true })
  name?: string

  @GraphQLField({ nullable: true })
  description?: string
}
