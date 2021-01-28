import { Field, InputType } from '@nestjs/graphql'
import { Stage } from '../models/stage.enum'
import { CreateSchemaEntityInput } from './create-schema-entity.input'

@InputType()
export class CreateSchemaInput {
  @Field({ nullable: true })
  id?: string

  @Field()
  name: string

  @Field(() => Stage, { nullable: true })
  stage?: Stage

  @Field(() => [CreateSchemaEntityInput], { nullable: true })
  entities?: CreateSchemaEntityInput[]
}
