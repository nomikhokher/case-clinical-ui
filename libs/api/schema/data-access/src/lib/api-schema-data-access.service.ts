import { Injectable, UnauthorizedException } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { ApiCoreDataAccessService } from '@schema-driven/api/core/data-access'
import { formatEntities } from './api-schema-data-access.helper'
import { CreateSchemaEntityFieldInput } from './dto/create-schema-entity-field.input'
import { CreateSchemaEntityInput } from './dto/create-schema-entity.input'
import { CreateSchemaInput } from './dto/create-schema.input'
import { UpdateSchemaEntityFieldInput } from './dto/update-schema-entity-field.input'
import { UpdateSchemaInput } from './dto/update-schema.input'
import { DataType } from './models/data-type.enum'
import { FieldDataType } from './models/field-data-type.model'
import { FieldType } from './models/field-type.enum'

@Injectable()
export class ApiSchemaDataAccessService {
  private readonly schemaInclude: Prisma.SchemaInclude = {
    entities: {
      orderBy: { name: 'asc' },
      include: {
        keys: true,
        fields: { orderBy: { id: 'asc' } },
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

  fieldDataTypes(): FieldDataType[] {
    return [
      {
        data: DataType.String,
        field: FieldType.SingleLineOfText,
        name: 'Single line text',
        description: 'Headings and titles',
      },
      {
        data: DataType.String,
        field: FieldType.MultiLineText,
        name: 'Multi line text',
        description: 'Description',
      },
      {
        data: DataType.String,
        field: FieldType.Markdown,
        name: 'Markdown',
        description: 'Markdown editor',
      },
      {
        data: DataType.String,
        field: FieldType.Slug,
        name: 'Slug',
        description: 'URL friendly identifier',
      },
      {
        data: DataType.Text,
        field: FieldType.RichText,
        name: 'Rich text',
        description: 'Text editor with formatting',
      },
      {
        data: DataType.Integer,
        field: FieldType.Number,
        name: 'Number',
        description: 'ID, quantity, etc',
      },
      {
        data: DataType.Float,
        field: FieldType.Float,
        name: 'Float',
        description: 'Ratings, price, etc',
      },
      {
        data: DataType.Boolean,
        field: FieldType.Boolean,
        name: 'Boolean',
        description: 'True or false',
      },
      // We have no DataType.Date
      {
        data: DataType.DateTime,
        field: FieldType.DateTime,
        name: 'Date and time',
        description: 'Calendar date picker w/ time',
      },
      // We have no DataType.Json
      {
        data: DataType.Enumeration,
        field: FieldType.Dropdown,
        name: 'Dropdown',
        description: 'Dropdown list of values',
      },
    ].map((item) => ({ ...item, id: `${item.data}_${item.field}` }))
  }

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
        id: input.id,
        name: input.name,
        stage: input.stage,
        entities: formatEntities(input.stage, input.entities),
      },
      include: { entities: true },
    })
  }

  async updateSchema(userId: string, schemaId: string, input: UpdateSchemaInput) {
    await this.ensureSchemaAccess(userId, schemaId)
    return this.data.schema.update({
      where: { id: schemaId },
      data: { name: input.name },
    })
  }

  async createSchemaEntity(userId: string, schemaId: string, input: CreateSchemaEntityInput) {
    await this.ensureSchemaAccess(userId, schemaId)
    return this.data.entity.create({
      data: {
        schemaId,
        name: input.name,
        description: input.description,
        dynamicProperties: {},
        fields: {
          create: [
            { name: 'id', dataType: DataType.String, fieldType: FieldType.SingleLineOfText },
            { name: 'createdAt', dataType: DataType.DateTime, fieldType: FieldType.DateTime },
            { name: 'updatedAT', dataType: DataType.DateTime, fieldType: FieldType.DateTime },
          ],
        },
      },
    })
  }

  async updateSchemaEntity(userId: string, entityId: string, input: UpdateSchemaEntityFieldInput) {
    const schema = await this.data.entity.findUnique({ where: { id: entityId } }).schema()
    await this.ensureSchemaAccess(userId, schema.id)
    return this.data.entity.update({
      where: { id: entityId },
      data: {
        name: input.name,
        description: input.description,
      },
    })
  }

  async createEntityField(userId: string, entityId: string, input: CreateSchemaEntityFieldInput) {
    const schema = await this.data.entity.findUnique({ where: { id: entityId } }).schema()
    await this.ensureSchemaAccess(userId, schema.id)
    return this.data.field.create({
      data: {
        entityId,
        name: input.name,
        description: input.description,
        dataType: input.dataType,
        isName: input.isName,
        isNullable: input.isNullable,
      },
    })
  }

  async updateEntityField(userId: string, fieldId: string, input: UpdateSchemaEntityFieldInput) {
    const schema = await this.data.field
      .findUnique({ where: { id: fieldId } })
      .entity()
      .schema()
    await this.ensureSchemaAccess(userId, schema.id)

    return this.data.field.update({
      where: { id: fieldId },
      data: {
        name: input.name,
        description: input.description,
        isName: input.isName,
        isNullable: input.isNullable,
      },
    })
  }

  async deleteEntityField(userId: string, fieldId: string) {
    const schema = await this.data.field
      .findUnique({ where: { id: fieldId } })
      .entity()
      .schema()
    await this.ensureSchemaAccess(userId, schema.id)

    return this.data.field.delete({ where: { id: fieldId } })
  }

  private async ensureSchemaAccess(userId: string, schemaId: string): Promise<boolean> {
    const found = await this.data.schema.findFirst({ where: { id: schemaId, tenant: { users: { some: { userId } } } } })
    if (!found) {
      throw new UnauthorizedException('Access to schema denied')
    }
    return true
  }
}
