import { Field as GraphQLField, ID, ObjectType } from '@nestjs/graphql'
import GraphQLJSON from 'graphql-type-json'
import { Field } from './field.model'
import { ForeignKey } from './foreign-key.model'
import { Key } from './key.model'
import { Ontology } from './ontology.model'
import { Relation } from './relation.model'
import { Stage } from './stage.enum'

@ObjectType()
export class Entity {
  @GraphQLField(() => ID, { nullable: true })
  id?: string

  @GraphQLField({ nullable: true })
  createdAt?: Date

  @GraphQLField({ nullable: true })
  updatedAt?: Date

  @GraphQLField({ nullable: true })
  publishedAt?: Date

  @GraphQLField(() => Stage, { nullable: true })
  stage?: Stage

  @GraphQLField({ nullable: true })
  name?: string

  @GraphQLField({ nullable: true })
  description?: string

  @GraphQLField(() => [String], { nullable: true })
  keywords?: string[]

  @GraphQLField(() => GraphQLJSON, { nullable: true })
  dynamicProperties?: Record<string, unknown>

  // Related fields
  @GraphQLField(() => [Field], { nullable: true })
  fields?: Field[]

  @GraphQLField(() => [ForeignKey], { nullable: true })
  foreignKeys?: ForeignKey[]

  @GraphQLField(() => [Key], { nullable: true })
  keys?: Key[]

  @GraphQLField(() => [Ontology], { nullable: true })
  ontologies?: Ontology[]

  @GraphQLField(() => [Relation], { nullable: true })
  relations: Relation[] = []

  @GraphQLField(() => [Relation], { nullable: true })
  related: Relation[]
  schema
}
