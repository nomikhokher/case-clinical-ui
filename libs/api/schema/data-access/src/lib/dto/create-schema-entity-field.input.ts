import { Field as GraphQLField, Field, InputType } from '@nestjs/graphql'
import { FieldType } from '../models/field-type.enum'
import { DataType } from '../models/data-type.enum'
import { CreateSchemaEntityOntologyInput } from './create-schema-entity-ontology.input'

@InputType()
export class CreateSchemaEntityFieldInput {
  @Field({ nullable: true })
  id?: string

  @Field()
  name: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  foreignKeys?: string

  @Field(() => DataType)
  dataType: DataType

  @Field(() => FieldType)
  fieldType: FieldType

  @Field({ nullable: true })
  isName?: boolean

  @Field({ nullable: true })
  isNullable?: boolean

  @GraphQLField(() => [String], { nullable: true })
  keywords?: string[]

  @GraphQLField(() => [CreateSchemaEntityOntologyInput], { nullable: true })
  ontologies?: CreateSchemaEntityOntologyInput[]
}
