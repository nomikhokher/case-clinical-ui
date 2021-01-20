import { Field, InputType } from '@nestjs/graphql'
import { CreateSchemaEntityFieldInput } from './create-schema-entity-field.input'
import { CreateSchemaRelatedEntityInput } from './create-schema-related-entity.input'

@InputType()
export class CreateSchemaEntityForeignKeyInput {
  @Field({ nullable: true })
  id?: string

  @Field()
  name: string

  @Field(() => CreateSchemaEntityFieldInput)
  relatedField: CreateSchemaEntityFieldInput

  @Field(() => CreateSchemaRelatedEntityInput)
  relatedEntity: CreateSchemaRelatedEntityInput
}
