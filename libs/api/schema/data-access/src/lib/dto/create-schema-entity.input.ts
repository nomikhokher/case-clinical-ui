import { Field, InputType } from '@nestjs/graphql'
import { CreateSchemaEntityFieldInput } from './create-schema-entity-field.input'
import { CreateSchemaEntityForeignKeyInput } from './create-schema-entity-foreign-key.input'
import { CreateSchemaEntityKeyInput } from './create-schema-entity-key.input'
import { CreateSchemaEntityOntologyInput } from './create-schema-entity-ontology.input'

@InputType()
export class CreateSchemaEntityInput {
  @Field({ nullable: true })
  id?: string

  @Field()
  name: string

  @Field()
  description: string

  @Field(() => [CreateSchemaEntityFieldInput])
  fields: CreateSchemaEntityFieldInput[]

  @Field(() => [CreateSchemaEntityKeyInput])
  keys: CreateSchemaEntityKeyInput[]

  @Field(() => [CreateSchemaEntityOntologyInput])
  ontologies: CreateSchemaEntityOntologyInput[]

  @Field(() => [CreateSchemaEntityForeignKeyInput])
  foreignKeys: CreateSchemaEntityForeignKeyInput[]
}
