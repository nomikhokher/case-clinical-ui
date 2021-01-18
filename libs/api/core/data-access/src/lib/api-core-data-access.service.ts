import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient, Role } from '@prisma/client'

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

  async ensureAdminUser(adminId: string): Promise<boolean> {
    const tenant = await this.findUserById(adminId)
    if (tenant.role !== Role.Admin) {
      throw new Error(`This operation needs Admin access`)
    }
    return true
  }
}
