import { Field as GraphQLField, ID, ObjectType } from '@nestjs/graphql'
import { DataType } from './data-type.enum'
import { FieldType } from './field-type.enum'
import { Stage } from './stage.enum'

@ObjectType()
export class Field {
  @GraphQLField(() => ID, { nullable: true })
  id?: string

  @GraphQLField({ nullable: true })
  createdAt?: Date

  @GraphQLField({ nullable: true })
  updatedAt?: Date

  @GraphQLField({ nullable: true })
  publishedAt?: Date

  @GraphQLField(() => Stage, { nullable: true })
  stage?: Stage

  @GraphQLField(() => FieldType, { nullable: true })
  fieldType?: FieldType

  @GraphQLField(() => DataType, { nullable: true })
  dataType?: DataType

  @GraphQLField({ nullable: true })
  name?: string

  @GraphQLField({ nullable: true })
  description?: string

  @GraphQLField({ nullable: true })
  isName?: boolean

  @GraphQLField({ nullable: true })
  isNullable?: boolean

  // Related fields
  entity
  ontologies
  foreignKeys
  keywords
}
