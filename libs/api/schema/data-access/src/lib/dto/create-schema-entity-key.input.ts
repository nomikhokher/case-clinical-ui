import { Field, InputType } from '@nestjs/graphql'
import { KeyType } from '../models/key-type.enum'

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

  @Field()
  description: string
}
