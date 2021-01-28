import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminCreateTenantInput {
  @Field()
  name: string
}
