import { ApiCoreDataAccessService } from '@metadata/api/core/data-access'
import { Injectable } from '@nestjs/common'
import { SchemaInclude } from '@prisma/client'
import { CreateSchemaInput } from './dto/create-schema.input'

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

  schemata() {
    return this.data.schema.findMany({ include: this.schemaInclude })
  }

  schema(schemaId: string) {
    return this.data.schema.findUnique({
      where: { id: schemaId },
      include: this.schemaInclude,
    })
  }

  createSchema(tenantId: string, input: CreateSchemaInput) {
    return this.data.schema.create({
      data: {
        tenant: { connect: { id: tenantId } },
        name: input.name,
      },
    })
  }
}
