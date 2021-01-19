import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AdminUpdateTenantInput {
  @Field({ nullable: true })
  name?: string
}
