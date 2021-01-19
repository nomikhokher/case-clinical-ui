import { CtxUser, GqlAuthAdminGuard } from '@metadata/api/auth/util'
import { CorePaging, CorePagingInput } from '@metadata/api/core/data-access'
import {
  AdminCreateUserInput,
  AdminUpdateUserInput,
  ApiUserDataAccessService,
  User,
} from '@metadata/api/user/data-access'
import { UseGuards } from '@nestjs/common'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

@UseGuards(GqlAuthAdminGuard)
@Resolver()
export class ApiUserAdminFeatureResolver {
  constructor(private readonly data: ApiUserDataAccessService) {}

  @Query(() => [User], { nullable: true })
  adminUsers(
    @CtxUser() admin: User,
    @Args({ name: 'paging', type: () => CorePagingInput, nullable: true }) paging?: CorePagingInput,
  ) {
    return this.data.adminUsers(admin.id, paging)
  }

  @Query(() => CorePaging, { nullable: true })
  adminCountUsers(
    @CtxUser() admin: User,
    @Args({ name: 'paging', type: () => CorePagingInput, nullable: true }) paging?: CorePagingInput,
  ) {
    return this.data.adminCountUsers(admin.id, paging)
  }

  @Query(() => User, { nullable: true })
  adminUser(@CtxUser() admin: User, @Args('userId') userId: string) {
    return this.data.adminUser(admin.id, userId)
  }

  @Mutation(() => User, { nullable: true })
  adminCreateUser(@CtxUser() admin: User, @Args('input') input: AdminCreateUserInput) {
    return this.data.adminCreateUser(admin.id, input)
  }

  @Mutation(() => User, { nullable: true })
  adminUpdateUser(@CtxUser() admin: User, @Args('userId') userId: string, @Args('input') input: AdminUpdateUserInput) {
    return this.data.adminUpdateUser(admin.id, userId, input)
  }

  @Mutation(() => User, { nullable: true })
  adminDeleteUser(@CtxUser() admin: User, @Args('userId') userId: string) {
    return this.data.adminDeleteUser(admin.id, userId)
  }
}
