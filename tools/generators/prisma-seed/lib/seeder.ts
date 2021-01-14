import { logger } from '@nrwl/devkit'
import { PrismaClient } from '@prisma/client'

export class Seeder {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }

  async createData(model: string, collection: any[], include?) {
    return Promise.all(
      collection.map((data) =>
        this.prisma[model]
          .create({ data, include: include ? include : undefined })
          .then((item) => logger.debug(`Created ${model}: ${item.name || item.id}`)),
      ),
    )
  }

  async removeData(models: string[]) {
    for (const model of models) {
      const deleted = await this.prisma[model].deleteMany()
      logger.warn(`Deleted ${deleted.count} ${model}`)
    }
  }
}
