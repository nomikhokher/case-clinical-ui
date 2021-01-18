import { ApiCoreDataAccessService } from '@metadata/api/core/data-access'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { SchemaInclude } from '@prisma/client'
import { CreateSchemaInput } from './dto/create-schema.input'
import { UpdateSchemaInput } from './dto/update-schema.input'

@Injectable()
export class ApiSchemaDataAccessService {
  private readonly schemaInclude: SchemaInclude = {
    entities: {
      include: {
        keys: true,
        fields: true,
        foreignKeys: {
          include: {
            relatedEntity: {
              include: {
                ontologies: true,
              },
            },
            relatedField: true,
          },
        },
        ontologies: true,
      },
    },
  }
  constructor(private readonly data: ApiCoreDataAccessService) {}

  schemata(userId: string, tenantId: string) {
    return this.data.schema.findMany({
      include: this.schemaInclude,
      where: { tenantId, tenant: { users: { some: { userId } } } },
    })
  }

  async schema(userId: string, schemaId: string) {
    await this.ensureSchemaAccess(userId, schemaId)
    return this.data.schema.findUnique({
      where: { id: schemaId },
      include: this.schemaInclude,
    })
  }

  createSchema(userId: string, tenantId: string, input: CreateSchemaInput) {
    return this.data.schema.create({
      data: {
        tenant: { connect: { id: tenantId } },
        name: input.name,
      },
    })
  }

  async updateSchema(userId: string, schemaId: string, input: UpdateSchemaInput) {
    await this.ensureSchemaAccess(userId, schemaId)
    return this.data.schema.update({
      where: { id: schemaId },
      data: { name: input.name },
    })
  }

  private async ensureSchemaAccess(userId: string, schemaId: string): Promise<boolean> {
    const found = await this.data.schema.findFirst({ where: { id: schemaId, tenant: { users: { some: { userId } } } } })
    if (!found) {
      throw new UnauthorizedException('Access to schema denied')
    }
    return true
  }
}
