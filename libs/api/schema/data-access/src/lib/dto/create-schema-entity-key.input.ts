import { Field as GraphQLField, Field, InputType } from '@nestjs/graphql'
import { KeyType } from '../models/key-type.enum'
import { CreateSchemaEntityOntologyInput } from './create-schema-entity-ontology.input'

@InputType()
export class CreateSchemaEntityKeyInput {
  @Field({ nullable: true })
  id?: string

  @Field(() => KeyType)
  keyType: KeyType

  @Field()
  isDrivingKey: boolean

  @Field()
  name: string

  @Field({ nullable: true })
  description?: string

  @GraphQLField(() => [CreateSchemaEntityOntologyInput], { nullable: true })
  ontologies?: CreateSchemaEntityOntologyInput[]
}
