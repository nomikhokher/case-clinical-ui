import { getGravatarUrl, hashPassword } from '@metadata/api/auth/util'
import { ApiCoreDataAccessService } from '@metadata/api/core/data-access'
import { Injectable } from '@nestjs/common'
import { UserCreateInput } from '@prisma/client'
import { Role } from './models/role.enum'

@Injectable()
export class ApiUserDataAccessService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  async createUser(input: Partial<UserCreateInput>) {
    const submittedPassword = !!input.password
    const password = input.password
    const hashedPassword = hashPassword(password)
    const email = input.email.trim()
    const username = input.username || email

    return this.data.user.create({
      data: {
        firstName: input.firstName,
        lastName: input.lastName,
        email,
        phone: input.phone,
        username,
        avatarUrl: input.avatarUrl || getGravatarUrl(input.email.toLowerCase()),
        password: hashedPassword,
        role: Role.User,
      },
    })
  }
}
