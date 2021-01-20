import { Field, InputType } from '@nestjs/graphql'
import { CreateSchemaEntityOntologyInput } from './create-schema-entity-ontology.input'

@InputType()
export class CreateSchemaRelatedEntityInput {
  @Field({ nullable: true })
  id?: string

  @Field()
  name: string

  @Field(() => [CreateSchemaEntityOntologyInput])
  ontologies: CreateSchemaEntityOntologyInput[]
}
