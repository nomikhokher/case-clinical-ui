import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class ApiCoreDataAccessService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super()
  }

  async onModuleDestroy() {
    await this.$disconnect()
  }

  async onModuleInit() {
    await this.$connect()
  }

  findUserByEmail(email: string) {
    return this.user.findUnique({ where: { email } })
  }

  findUserById(userId: string) {
    return this.user.findUnique({ where: { id: userId } })
  }

  findUserByUsername(username: string) {
    return this.user.findUnique({ where: { username } })
  }
}
