import { User } from '@metadata/api/user/data-access'
import { Parent, ResolveField, Resolver } from '@nestjs/graphql'

@Resolver(() => User)
export class ApiUserFeatureResolver {
  @ResolveField(() => String, { nullable: true })
  name(@Parent() user: User) {
    const name = [user.firstName, user.lastName].join(' ').trim()

    return name ? name : user.username
  }
}
