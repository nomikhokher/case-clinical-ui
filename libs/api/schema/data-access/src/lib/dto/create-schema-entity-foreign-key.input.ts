import { Field, InputType } from '@nestjs/graphql'
import { CreateSchemaEntityFieldInput } from './create-schema-entity-field.input'
import { CreateSchemaEntityOntologyInput } from './create-schema-entity-ontology.input'
import { CreateSchemaRelatedEntityInput } from './create-schema-related-entity.input'

@InputType()
export class CreateSchemaEntityForeignKeyInput {
  @Field({ nullable: true })
  id?: string

  @Field()
  name: string

  @Field({ nullable: true })
  description?: string

  @Field(() => [String], { nullable: true })
  keywords?: string[]

  @Field(() => CreateSchemaEntityFieldInput, { nullable: true })
  relatedField?: CreateSchemaEntityFieldInput

  @Field(() => CreateSchemaRelatedEntityInput, { nullable: true })
  relatedEntity?: CreateSchemaRelatedEntityInput

  @Field(() => [CreateSchemaEntityOntologyInput], { nullable: true })
  ontologies?: CreateSchemaEntityOntologyInput[]
}
