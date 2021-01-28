import {
  CreateSchemaEntityFieldInput,
  CreateSchemaEntityForeignKeyInput,
  CreateSchemaEntityInput,
  CreateSchemaEntityKeyInput,
  CreateSchemaEntityOntologyInput,
} from '@schema-driven/api/schema/data-access'
import { Prisma, Stage } from '@prisma/client'

export function formatFields(fields: CreateSchemaEntityFieldInput[] = []): Prisma.FieldCreateManyWithoutEntityInput {
  if (!fields?.length) {
    return undefined
  }
  return {
    create: fields.map((field) => ({
      id: field.id,
      name: field.name,
      description: field.description,
      dataType: field.dataType,
      isName: field.isName,
      isNullable: field.isNullable,
    })),
  }
}

export function formatKeys(keys: CreateSchemaEntityKeyInput[]): Prisma.KeyCreateManyWithoutEntityInput {
  if (!keys?.length) {
    return undefined
  }
  return {
    create: keys.map((item) => {
      return {
        id: item.id,
        keyType: item.keyType,
        isDrivingKey: item.isDrivingKey,
        name: item.name,
      }
    }),
  }
}

export function formatOntologies(
  ontologies: CreateSchemaEntityOntologyInput[],
): Prisma.OntologyCreateManyWithoutEntityInput {
  if (!ontologies?.length) {
    return undefined
  }
  return {
    create: ontologies.map((item) => {
      return {
        id: item.id,
        key: item.key,
        value: item.value,
      }
    }),
  }
}

export function formatForeignKeys(
  foreignKeys: CreateSchemaEntityForeignKeyInput[],
): Prisma.ForeignKeyCreateManyWithoutRelatedEntityInput {
  if (!foreignKeys?.length) {
    return undefined
  }
  return {
    create: foreignKeys.map((item) => {
      return {
        id: item.id,
        name: item.name,
        relatedField: { create: undefined },
        relatedEntity: { create: undefined },
      }
    }),
  }
}

export function formatEntities(
  stage: Stage,
  entities: CreateSchemaEntityInput[] = [],
): Prisma.EntityCreateManyWithoutSchemaInput {
  if (!entities?.length) {
    return undefined
  }
  return {
    create: entities.map((entity) => ({
      id: entity.id,
      name: entity.name,
      description: entity.description,
      dynamicProperties: {},
      stage,
      fields: formatFields(entity.fields),
      keys: formatKeys(entity.keys),
      ontologies: formatOntologies(entity.ontologies),
      foreignKeys: formatForeignKeys(entity.foreignKeys),
    })),
  }
}
