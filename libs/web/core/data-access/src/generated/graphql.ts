import { gql } from 'apollo-angular'
import { Injectable } from '@angular/core'
import * as Apollo from 'apollo-angular'
import * as ApolloCore from '@apollo/client/core'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type AccountCreateEmailInput = {
  email: Scalars['String']
}

export type AccountUpdatePasswordInput = {
  currentPassword: Scalars['String']
  password: Scalars['String']
  verified: Scalars['String']
}

export type AccountUpdateProfileInput = {
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  dob?: Maybe<Scalars['DateTime']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
}

export type AdminCreateTenantInput = {
  name: Scalars['String']
}

export type AdminCreateUserInput = {
  email: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  role: Role
  username?: Maybe<Scalars['String']>
}

export type AdminUpdateTenantInput = {
  name?: Maybe<Scalars['String']>
}

export type AdminUpdateUserInput = {
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  role?: Maybe<Role>
  username?: Maybe<Scalars['String']>
}

export type AuthToken = {
  __typename?: 'AuthToken'
  /** JWT Bearer token */
  token: Scalars['String']
}

export type CorePaging = {
  __typename?: 'CorePaging'
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  total?: Maybe<Scalars['Int']>
}

export type CorePagingInput = {
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type CreateSchemaEntityFieldInput = {
  dataType: DataType
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  isName?: Maybe<Scalars['Boolean']>
  isNullable?: Maybe<Scalars['Boolean']>
  name: Scalars['String']
}

export type CreateSchemaEntityForeignKeyInput = {
  id?: Maybe<Scalars['String']>
  name: Scalars['String']
  relatedEntity: CreateSchemaRelatedEntityInput
  relatedField: CreateSchemaEntityFieldInput
}

export type CreateSchemaEntityInput = {
  description?: Maybe<Scalars['String']>
  fields?: Maybe<Array<CreateSchemaEntityFieldInput>>
  foreignKeys?: Maybe<Array<CreateSchemaEntityForeignKeyInput>>
  id?: Maybe<Scalars['String']>
  keys?: Maybe<Array<CreateSchemaEntityKeyInput>>
  name: Scalars['String']
  ontologies?: Maybe<Array<CreateSchemaEntityOntologyInput>>
}

export type CreateSchemaEntityKeyInput = {
  description: Scalars['String']
  id?: Maybe<Scalars['String']>
  isDrivingKey: Scalars['Boolean']
  keyType: KeyType
  name: Scalars['String']
}

export type CreateSchemaEntityOntologyInput = {
  id?: Maybe<Scalars['String']>
  key: Scalars['String']
  value: Scalars['String']
}

export type CreateSchemaInput = {
  entities?: Maybe<Array<CreateSchemaEntityInput>>
  id?: Maybe<Scalars['String']>
  name: Scalars['String']
  stage?: Maybe<Stage>
}

export type CreateSchemaRelatedEntityInput = {
  id?: Maybe<Scalars['String']>
  name: Scalars['String']
  ontologies: Array<CreateSchemaEntityOntologyInput>
}

export type CreateTenantInput = {
  name: Scalars['String']
}

export enum DataType {
  Boolean = 'Boolean',
  DateTime = 'DateTime',
  Enumeration = 'Enumeration',
  Float = 'Float',
  Integer = 'Integer',
  String = 'String',
  Text = 'Text',
}

export type Email = {
  __typename?: 'Email'
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  primary?: Maybe<Scalars['Boolean']>
  public?: Maybe<Scalars['Boolean']>
  updatedAt?: Maybe<Scalars['DateTime']>
  verified?: Maybe<Scalars['Boolean']>
}

export type Entity = {
  __typename?: 'Entity'
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  dynamicProperties?: Maybe<Scalars['JSON']>
  fields?: Maybe<Array<Field>>
  foreignKeys?: Maybe<Array<ForeignKey>>
  id?: Maybe<Scalars['ID']>
  keys?: Maybe<Array<Key>>
  keywords?: Maybe<Array<Scalars['String']>>
  name?: Maybe<Scalars['String']>
  ontologies?: Maybe<Array<Ontology>>
  publishedAt?: Maybe<Scalars['DateTime']>
  stage?: Maybe<Stage>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type EntitySummary = {
  __typename?: 'EntitySummary'
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['DateTime']>
  stage?: Maybe<Stage>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type Field = {
  __typename?: 'Field'
  createdAt?: Maybe<Scalars['DateTime']>
  dataType?: Maybe<DataType>
  description?: Maybe<Scalars['String']>
  fieldType?: Maybe<FieldType>
  id?: Maybe<Scalars['ID']>
  isName?: Maybe<Scalars['Boolean']>
  isNullable?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['DateTime']>
  stage?: Maybe<Stage>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type FieldDataType = {
  __typename?: 'FieldDataType'
  data?: Maybe<DataType>
  description?: Maybe<Scalars['String']>
  field?: Maybe<FieldType>
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}

export enum FieldType {
  Asset = 'Asset',
  Boolean = 'Boolean',
  Color = 'Color',
  Date = 'Date',
  DateTime = 'DateTime',
  Dropdown = 'Dropdown',
  Float = 'Float',
  Json = 'Json',
  Location = 'Location',
  Markdown = 'Markdown',
  MultiLineText = 'MultiLineText',
  Number = 'Number',
  Reference = 'Reference',
  RichText = 'RichText',
  SingleLineOfText = 'SingleLineOfText',
  Slug = 'Slug',
  Typeahead = 'Typeahead',
}

export type ForeignKey = {
  __typename?: 'ForeignKey'
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['DateTime']>
  relatedEntity?: Maybe<EntitySummary>
  relatedField?: Maybe<Array<Field>>
  stage?: Maybe<Stage>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type IntercomMessage = {
  __typename?: 'IntercomMessage'
  payload?: Maybe<Scalars['JSON']>
  scope?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type Key = {
  __typename?: 'Key'
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  isDrivingKey?: Maybe<Scalars['Boolean']>
  keyType?: Maybe<KeyType>
  name?: Maybe<Scalars['String']>
  stage?: Maybe<Stage>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export enum KeyType {
  Composite = 'Composite',
  Guid = 'Guid',
  Int = 'Int',
}

export type LoginInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  accountCreateEmail?: Maybe<Email>
  accountDeleteEmail?: Maybe<Email>
  accountMarkEmailPrimary?: Maybe<Email>
  accountMarkEmailPrivate?: Maybe<Email>
  accountMarkEmailPublic?: Maybe<Email>
  accountResetPassword?: Maybe<Scalars['Boolean']>
  accountUpdatePassword?: Maybe<Scalars['Boolean']>
  accountUpdateProfile?: Maybe<User>
  accountUpdateUsername?: Maybe<User>
  adminAddTenantUser?: Maybe<TenantUser>
  adminCreateTenant?: Maybe<Tenant>
  adminCreateUser?: Maybe<User>
  adminDeleteTenant?: Maybe<Tenant>
  adminDeleteUser?: Maybe<User>
  adminRemoveTenantUser?: Maybe<TenantUser>
  adminSetUserPassword?: Maybe<User>
  adminUpdateTenant?: Maybe<Tenant>
  adminUpdateTenantUserRole?: Maybe<TenantUser>
  adminUpdateUser?: Maybe<User>
  createEntityField?: Maybe<Field>
  createSchema?: Maybe<Schema>
  createSchemaEntity?: Maybe<Entity>
  createTenant?: Maybe<Tenant>
  deleteEntityField?: Maybe<Field>
  intercomPub?: Maybe<IntercomMessage>
  login?: Maybe<AuthToken>
  logout?: Maybe<Scalars['Boolean']>
  register?: Maybe<AuthToken>
  updateEntityField?: Maybe<Field>
  updateSchema?: Maybe<Schema>
  updateSchemaEntity?: Maybe<Entity>
}

export type MutationAccountCreateEmailArgs = {
  input: AccountCreateEmailInput
}

export type MutationAccountDeleteEmailArgs = {
  emailId: Scalars['String']
}

export type MutationAccountMarkEmailPrimaryArgs = {
  emailId: Scalars['String']
}

export type MutationAccountMarkEmailPrivateArgs = {
  emailId: Scalars['String']
}

export type MutationAccountMarkEmailPublicArgs = {
  emailId: Scalars['String']
}

export type MutationAccountUpdatePasswordArgs = {
  input: AccountUpdatePasswordInput
}

export type MutationAccountUpdateProfileArgs = {
  input: AccountUpdateProfileInput
}

export type MutationAccountUpdateUsernameArgs = {
  username: Scalars['String']
}

export type MutationAdminAddTenantUserArgs = {
  role: TenantRole
  tenantId: Scalars['String']
  userId: Scalars['String']
}

export type MutationAdminCreateTenantArgs = {
  input: AdminCreateTenantInput
}

export type MutationAdminCreateUserArgs = {
  input: AdminCreateUserInput
}

export type MutationAdminDeleteTenantArgs = {
  tenantId: Scalars['String']
}

export type MutationAdminDeleteUserArgs = {
  userId: Scalars['String']
}

export type MutationAdminRemoveTenantUserArgs = {
  tenantUserId: Scalars['String']
}

export type MutationAdminSetUserPasswordArgs = {
  password: Scalars['String']
  userId: Scalars['String']
}

export type MutationAdminUpdateTenantArgs = {
  input: AdminUpdateTenantInput
  tenantId: Scalars['String']
}

export type MutationAdminUpdateTenantUserRoleArgs = {
  role: TenantRole
  tenantUserId: Scalars['String']
}

export type MutationAdminUpdateUserArgs = {
  input: AdminUpdateUserInput
  userId: Scalars['String']
}

export type MutationCreateEntityFieldArgs = {
  entityId: Scalars['String']
  input: CreateSchemaEntityFieldInput
}

export type MutationCreateSchemaArgs = {
  input: CreateSchemaInput
  tenantId: Scalars['String']
}

export type MutationCreateSchemaEntityArgs = {
  input: CreateSchemaEntityInput
  schemaId: Scalars['String']
}

export type MutationCreateTenantArgs = {
  input: CreateTenantInput
}

export type MutationDeleteEntityFieldArgs = {
  fieldId: Scalars['String']
}

export type MutationIntercomPubArgs = {
  payload?: Maybe<Scalars['JSON']>
  scope?: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type MutationLoginArgs = {
  input: LoginInput
}

export type MutationRegisterArgs = {
  input: RegisterInput
}

export type MutationUpdateEntityFieldArgs = {
  fieldId: Scalars['String']
  input: UpdateSchemaEntityFieldInput
}

export type MutationUpdateSchemaArgs = {
  input: UpdateSchemaInput
  schemaId: Scalars['String']
}

export type MutationUpdateSchemaEntityArgs = {
  entityId: Scalars['String']
  input: UpdateSchemaEntityInput
}

export type Ontology = {
  __typename?: 'Ontology'
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  key?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  stage?: Maybe<Stage>
  updatedAt?: Maybe<Scalars['DateTime']>
  value?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  accountEmails?: Maybe<Array<Email>>
  accountProfile?: Maybe<User>
  accountUsernameAvailable?: Maybe<Scalars['Boolean']>
  adminCountTenants?: Maybe<CorePaging>
  adminCountUsers?: Maybe<CorePaging>
  adminTenant?: Maybe<Tenant>
  adminTenants?: Maybe<Array<Tenant>>
  adminUser?: Maybe<User>
  adminUsers?: Maybe<Array<User>>
  fieldDataTypes?: Maybe<Array<FieldDataType>>
  me?: Maybe<User>
  schema?: Maybe<Schema>
  schemata?: Maybe<Array<Schema>>
  tenant?: Maybe<Tenant>
  tenantRole?: Maybe<TenantRole>
  tenants?: Maybe<Array<Tenant>>
  uptime?: Maybe<Scalars['Float']>
}

export type QueryAccountUsernameAvailableArgs = {
  username: Scalars['String']
}

export type QueryAdminCountTenantsArgs = {
  paging?: Maybe<CorePagingInput>
}

export type QueryAdminCountUsersArgs = {
  paging?: Maybe<CorePagingInput>
}

export type QueryAdminTenantArgs = {
  tenantId: Scalars['String']
}

export type QueryAdminTenantsArgs = {
  paging?: Maybe<CorePagingInput>
}

export type QueryAdminUserArgs = {
  userId: Scalars['String']
}

export type QueryAdminUsersArgs = {
  paging?: Maybe<CorePagingInput>
}

export type QuerySchemaArgs = {
  schemaId: Scalars['String']
}

export type QuerySchemataArgs = {
  tenantId: Scalars['String']
}

export type QueryTenantArgs = {
  tenantId: Scalars['String']
}

export type QueryTenantRoleArgs = {
  tenantId: Scalars['String']
}

export type RegisterInput = {
  avatarUrl?: Maybe<Scalars['String']>
  email: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  password: Scalars['String']
  phone?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}

export enum Role {
  Admin = 'Admin',
  SuperAdmin = 'SuperAdmin',
  User = 'User',
}

export type Schema = {
  __typename?: 'Schema'
  createdAt?: Maybe<Scalars['DateTime']>
  entities?: Maybe<Array<Entity>>
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['DateTime']>
  stage?: Maybe<Stage>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export enum Stage {
  Dev = 'DEV',
  Production = 'PRODUCTION',
  Uat = 'UAT',
}

export type Subscription = {
  __typename?: 'Subscription'
  intercomSub?: Maybe<IntercomMessage>
}

export type SubscriptionIntercomSubArgs = {
  scope?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type Tenant = {
  __typename?: 'Tenant'
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  users?: Maybe<Array<TenantUser>>
}

export enum TenantRole {
  Owner = 'Owner',
  User = 'User',
}

export type TenantUser = {
  __typename?: 'TenantUser'
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['ID']>
  role?: Maybe<TenantRole>
  tenant?: Maybe<Tenant>
  updatedAt?: Maybe<Scalars['DateTime']>
  user?: Maybe<User>
}

export type UpdateSchemaEntityFieldInput = {
  description?: Maybe<Scalars['String']>
  isName?: Maybe<Scalars['Boolean']>
  isNullable?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
}

export type UpdateSchemaEntityInput = {
  description?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type UpdateSchemaInput = {
  name: Scalars['String']
}

export type User = {
  __typename?: 'User'
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  emails?: Maybe<Array<Email>>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  role?: Maybe<Role>
  updatedAt?: Maybe<Scalars['DateTime']>
  username?: Maybe<Scalars['String']>
}

export type AccountEmailsQueryVariables = Exact<{ [key: string]: never }>

export type AccountEmailsQuery = { __typename?: 'Query' } & {
  accountEmails?: Maybe<Array<{ __typename?: 'Email' } & EmailDetailsFragment>>
}

export type AccountProfileQueryVariables = Exact<{ [key: string]: never }>

export type AccountProfileQuery = { __typename?: 'Query' } & {
  accountProfile?: Maybe<
    { __typename?: 'User' } & {
      emails?: Maybe<Array<{ __typename?: 'Email' } & EmailDetailsFragment>>
    } & UserDetailsFragment
  >
}

export type AccountUsernameAvailableQueryVariables = Exact<{
  username: Scalars['String']
}>

export type AccountUsernameAvailableQuery = { __typename?: 'Query' } & Pick<Query, 'accountUsernameAvailable'>

export type AccountCreateEmailMutationVariables = Exact<{
  input: AccountCreateEmailInput
}>

export type AccountCreateEmailMutation = { __typename?: 'Mutation' } & {
  accountCreateEmail?: Maybe<{ __typename?: 'Email' } & EmailDetailsFragment>
}

export type AccountDeleteEmailMutationVariables = Exact<{
  emailId: Scalars['String']
}>

export type AccountDeleteEmailMutation = { __typename?: 'Mutation' } & {
  accountDeleteEmail?: Maybe<{ __typename?: 'Email' } & EmailDetailsFragment>
}

export type AccountMarkEmailPrimaryMutationVariables = Exact<{
  emailId: Scalars['String']
}>

export type AccountMarkEmailPrimaryMutation = { __typename?: 'Mutation' } & {
  accountMarkEmailPrimary?: Maybe<{ __typename?: 'Email' } & EmailDetailsFragment>
}

export type AccountMarkEmailPrivateMutationVariables = Exact<{
  emailId: Scalars['String']
}>

export type AccountMarkEmailPrivateMutation = { __typename?: 'Mutation' } & {
  accountMarkEmailPrivate?: Maybe<{ __typename?: 'Email' } & EmailDetailsFragment>
}

export type AccountMarkEmailPublicMutationVariables = Exact<{
  emailId: Scalars['String']
}>

export type AccountMarkEmailPublicMutation = { __typename?: 'Mutation' } & {
  accountMarkEmailPublic?: Maybe<{ __typename?: 'Email' } & EmailDetailsFragment>
}

export type AccountUpdateProfileMutationVariables = Exact<{
  input: AccountUpdateProfileInput
}>

export type AccountUpdateProfileMutation = { __typename?: 'Mutation' } & {
  accountUpdateProfile?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AccountUpdateUsernameMutationVariables = Exact<{
  username: Scalars['String']
}>

export type AccountUpdateUsernameMutation = { __typename?: 'Mutation' } & {
  accountUpdateUsername?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AccountUpdatePasswordMutationVariables = Exact<{
  input: AccountUpdatePasswordInput
}>

export type AccountUpdatePasswordMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'accountUpdatePassword'>

export type AuthTokenDetailsFragment = { __typename?: 'AuthToken' } & Pick<AuthToken, 'token'>

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = { __typename?: 'Query' } & { me?: Maybe<{ __typename?: 'User' } & UserDetailsFragment> }

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'logout'>

export type LoginMutationVariables = Exact<{
  input: LoginInput
}>

export type LoginMutation = { __typename?: 'Mutation' } & {
  login?: Maybe<{ __typename?: 'AuthToken' } & AuthTokenDetailsFragment>
}

export type RegisterMutationVariables = Exact<{
  input: RegisterInput
}>

export type RegisterMutation = { __typename?: 'Mutation' } & {
  register?: Maybe<{ __typename?: 'AuthToken' } & AuthTokenDetailsFragment>
}

export type UptimeQueryVariables = Exact<{ [key: string]: never }>

export type UptimeQuery = { __typename?: 'Query' } & Pick<Query, 'uptime'>

export type CorePagingDetailsFragment = { __typename?: 'CorePaging' } & Pick<CorePaging, 'limit' | 'skip' | 'total'>

export type IntercomDetailsFragment = { __typename?: 'IntercomMessage' } & Pick<
  IntercomMessage,
  'type' | 'scope' | 'payload'
>

export type IntercomPubMutationVariables = Exact<{
  type: Scalars['String']
  scope?: Maybe<Scalars['String']>
  payload?: Maybe<Scalars['JSON']>
}>

export type IntercomPubMutation = { __typename?: 'Mutation' } & {
  intercomPub?: Maybe<{ __typename?: 'IntercomMessage' } & IntercomDetailsFragment>
}

export type IntercomSubSubscriptionVariables = Exact<{ [key: string]: never }>

export type IntercomSubSubscription = { __typename?: 'Subscription' } & {
  intercomSub?: Maybe<{ __typename?: 'IntercomMessage' } & IntercomDetailsFragment>
}

export type SchemaDetailsFragment = { __typename?: 'Schema' } & Pick<
  Schema,
  'id' | 'createdAt' | 'updatedAt' | 'publishedAt' | 'stage' | 'name'
>

export type FieldDetailsFragment = { __typename?: 'Field' } & Pick<
  Field,
  'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'dataType' | 'fieldType' | 'isName' | 'isNullable'
>

export type KeyDetailsFragment = { __typename?: 'Key' } & Pick<Key, 'id' | 'keyType' | 'isDrivingKey' | 'name'>

export type OntologyDetailsFragment = { __typename?: 'Ontology' } & Pick<Ontology, 'id' | 'key' | 'value'>

export type ForeignKeyDetailsFragment = { __typename?: 'ForeignKey' } & Pick<ForeignKey, 'id' | 'name'> & {
    relatedField?: Maybe<Array<{ __typename?: 'Field' } & FieldDetailsFragment>>
    relatedEntity?: Maybe<{ __typename?: 'EntitySummary' } & EntitySummaryDetailsFragment>
  }

export type EntityDetailsFragment = { __typename?: 'Entity' } & Pick<
  Entity,
  'id' | 'createdAt' | 'updatedAt' | 'name' | 'description' | 'keywords'
> & {
    keys?: Maybe<Array<{ __typename?: 'Key' } & KeyDetailsFragment>>
    fields?: Maybe<Array<{ __typename?: 'Field' } & FieldDetailsFragment>>
  }

export type EntitySummaryDetailsFragment = { __typename?: 'EntitySummary' } & Pick<
  EntitySummary,
  'id' | 'createdAt' | 'updatedAt' | 'name' | 'description'
>

export type SchemataQueryVariables = Exact<{
  tenantId: Scalars['String']
}>

export type SchemataQuery = { __typename?: 'Query' } & {
  schemata?: Maybe<Array<{ __typename?: 'Schema' } & SchemaDetailsFragment>>
}

export type SchemaQueryVariables = Exact<{
  schemaId: Scalars['String']
}>

export type SchemaQuery = { __typename?: 'Query' } & {
  schema?: Maybe<
    { __typename?: 'Schema' } & {
      entities?: Maybe<Array<{ __typename?: 'Entity' } & EntityDetailsFragment>>
    } & SchemaDetailsFragment
  >
}

export type FieldDataTypesQueryVariables = Exact<{ [key: string]: never }>

export type FieldDataTypesQuery = { __typename?: 'Query' } & {
  fieldDataTypes?: Maybe<
    Array<{ __typename?: 'FieldDataType' } & Pick<FieldDataType, 'id' | 'data' | 'field' | 'name' | 'description'>>
  >
}

export type CreateSchemaMutationVariables = Exact<{
  tenantId: Scalars['String']
  input: CreateSchemaInput
}>

export type CreateSchemaMutation = { __typename?: 'Mutation' } & {
  createSchema?: Maybe<
    { __typename?: 'Schema' } & {
      entities?: Maybe<Array<{ __typename?: 'Entity' } & EntityDetailsFragment>>
    } & SchemaDetailsFragment
  >
}

export type CreateSchemaEntityMutationVariables = Exact<{
  schemaId: Scalars['String']
  input: CreateSchemaEntityInput
}>

export type CreateSchemaEntityMutation = { __typename?: 'Mutation' } & {
  createSchemaEntity?: Maybe<{ __typename?: 'Entity' } & EntityDetailsFragment>
}

export type UpdateSchemaEntityMutationVariables = Exact<{
  entityId: Scalars['String']
  input: UpdateSchemaEntityInput
}>

export type UpdateSchemaEntityMutation = { __typename?: 'Mutation' } & {
  updateSchemaEntity?: Maybe<{ __typename?: 'Entity' } & EntityDetailsFragment>
}

export type CreateEntityFieldMutationVariables = Exact<{
  entityId: Scalars['String']
  input: CreateSchemaEntityFieldInput
}>

export type CreateEntityFieldMutation = { __typename?: 'Mutation' } & {
  createEntityField?: Maybe<{ __typename?: 'Field' } & FieldDetailsFragment>
}

export type UpdateEntityFieldMutationVariables = Exact<{
  fieldId: Scalars['String']
  input: UpdateSchemaEntityFieldInput
}>

export type UpdateEntityFieldMutation = { __typename?: 'Mutation' } & {
  updateEntityField?: Maybe<{ __typename?: 'Field' } & FieldDetailsFragment>
}

export type DeleteEntityFieldMutationVariables = Exact<{
  fieldId: Scalars['String']
}>

export type DeleteEntityFieldMutation = { __typename?: 'Mutation' } & {
  deleteEntityField?: Maybe<{ __typename?: 'Field' } & FieldDetailsFragment>
}

export type TenantDetailsFragment = { __typename?: 'Tenant' } & Pick<Tenant, 'id' | 'createdAt' | 'updatedAt' | 'name'>

export type TenantUserDetailsFragment = { __typename?: 'TenantUser' } & Pick<
  TenantUser,
  'id' | 'createdAt' | 'updatedAt' | 'role'
>

export type CreateTenantMutationVariables = Exact<{
  input: CreateTenantInput
}>

export type CreateTenantMutation = { __typename?: 'Mutation' } & {
  createTenant?: Maybe<{ __typename?: 'Tenant' } & TenantDetailsFragment>
}

export type TenantsQueryVariables = Exact<{ [key: string]: never }>

export type TenantsQuery = { __typename?: 'Query' } & {
  tenants?: Maybe<Array<{ __typename?: 'Tenant' } & TenantDetailsFragment>>
}

export type TenantQueryVariables = Exact<{
  tenantId: Scalars['String']
}>

export type TenantQuery = { __typename?: 'Query' } & { role: Query['tenantRole'] } & {
  tenant?: Maybe<{ __typename?: 'Tenant' } & TenantDetailsFragment>
}

export type AdminTenantsQueryVariables = Exact<{
  paging?: Maybe<CorePagingInput>
}>

export type AdminTenantsQuery = { __typename?: 'Query' } & {
  tenants?: Maybe<Array<{ __typename?: 'Tenant' } & TenantDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminTenantQueryVariables = Exact<{
  tenantId: Scalars['String']
}>

export type AdminTenantQuery = { __typename?: 'Query' } & {
  adminTenant?: Maybe<
    { __typename?: 'Tenant' } & {
      users?: Maybe<
        Array<
          { __typename?: 'TenantUser' } & {
            user?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
          } & TenantUserDetailsFragment
        >
      >
    } & TenantDetailsFragment
  >
}

export type AdminCreateTenantMutationVariables = Exact<{
  input: AdminCreateTenantInput
}>

export type AdminCreateTenantMutation = { __typename?: 'Mutation' } & {
  adminCreateTenant?: Maybe<{ __typename?: 'Tenant' } & TenantDetailsFragment>
}

export type AdminUpdateTenantMutationVariables = Exact<{
  tenantId: Scalars['String']
  input: AdminUpdateTenantInput
}>

export type AdminUpdateTenantMutation = { __typename?: 'Mutation' } & {
  adminUpdateTenant?: Maybe<{ __typename?: 'Tenant' } & TenantDetailsFragment>
}

export type AdminDeleteTenantMutationVariables = Exact<{
  tenantId: Scalars['String']
}>

export type AdminDeleteTenantMutation = { __typename?: 'Mutation' } & {
  adminDeleteTenant?: Maybe<{ __typename?: 'Tenant' } & TenantDetailsFragment>
}

export type AdminAddTenantUserMutationVariables = Exact<{
  tenantId: Scalars['String']
  userId: Scalars['String']
  role: TenantRole
}>

export type AdminAddTenantUserMutation = { __typename?: 'Mutation' } & {
  adminAddTenantUser?: Maybe<{ __typename?: 'TenantUser' } & TenantUserDetailsFragment>
}

export type AdminUpdateTenantUserRoleMutationVariables = Exact<{
  tenantUserId: Scalars['String']
  role: TenantRole
}>

export type AdminUpdateTenantUserRoleMutation = { __typename?: 'Mutation' } & {
  adminUpdateTenantUserRole?: Maybe<{ __typename?: 'TenantUser' } & TenantUserDetailsFragment>
}

export type AdminRemoveTenantUserMutationVariables = Exact<{
  tenantUserId: Scalars['String']
}>

export type AdminRemoveTenantUserMutation = { __typename?: 'Mutation' } & {
  adminRemoveTenantUser?: Maybe<{ __typename?: 'TenantUser' } & TenantUserDetailsFragment>
}

export type UserDetailsFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'firstName' | 'lastName' | 'name' | 'username' | 'avatarUrl' | 'email' | 'location' | 'phone' | 'bio' | 'role'
>

export type EmailDetailsFragment = { __typename?: 'Email' } & Pick<
  Email,
  'id' | 'createdAt' | 'updatedAt' | 'email' | 'public' | 'primary' | 'verified'
>

export type AdminUsersQueryVariables = Exact<{
  paging?: Maybe<CorePagingInput>
}>

export type AdminUsersQuery = { __typename?: 'Query' } & {
  users?: Maybe<Array<{ __typename?: 'User' } & UserDetailsFragment>>
  count?: Maybe<{ __typename?: 'CorePaging' } & CorePagingDetailsFragment>
}

export type AdminUserQueryVariables = Exact<{
  userId: Scalars['String']
}>

export type AdminUserQuery = { __typename?: 'Query' } & {
  adminUser?: Maybe<
    { __typename?: 'User' } & {
      emails?: Maybe<Array<{ __typename?: 'Email' } & EmailDetailsFragment>>
    } & UserDetailsFragment
  >
}

export type AdminCreateUserMutationVariables = Exact<{
  input: AdminCreateUserInput
}>

export type AdminCreateUserMutation = { __typename?: 'Mutation' } & {
  adminCreateUser?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AdminUpdateUserMutationVariables = Exact<{
  userId: Scalars['String']
  input: AdminUpdateUserInput
}>

export type AdminUpdateUserMutation = { __typename?: 'Mutation' } & {
  adminUpdateUser?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AdminSetUserPasswordMutationVariables = Exact<{
  userId: Scalars['String']
  password: Scalars['String']
}>

export type AdminSetUserPasswordMutation = { __typename?: 'Mutation' } & {
  adminSetUserPassword?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export type AdminDeleteUserMutationVariables = Exact<{
  userId: Scalars['String']
}>

export type AdminDeleteUserMutation = { __typename?: 'Mutation' } & {
  adminDeleteUser?: Maybe<{ __typename?: 'User' } & UserDetailsFragment>
}

export const AuthTokenDetailsFragmentDoc = gql`
  fragment AuthTokenDetails on AuthToken {
    token
  }
`
export const CorePagingDetailsFragmentDoc = gql`
  fragment CorePagingDetails on CorePaging {
    limit
    skip
    total
  }
`
export const IntercomDetailsFragmentDoc = gql`
  fragment IntercomDetails on IntercomMessage {
    type
    scope
    payload
  }
`
export const SchemaDetailsFragmentDoc = gql`
  fragment SchemaDetails on Schema {
    id
    createdAt
    updatedAt
    publishedAt
    stage
    name
  }
`
export const OntologyDetailsFragmentDoc = gql`
  fragment OntologyDetails on Ontology {
    id
    key
    value
  }
`
export const FieldDetailsFragmentDoc = gql`
  fragment FieldDetails on Field {
    id
    createdAt
    updatedAt
    name
    description
    dataType
    fieldType
    isName
    isNullable
  }
`
export const EntitySummaryDetailsFragmentDoc = gql`
  fragment EntitySummaryDetails on EntitySummary {
    id
    createdAt
    updatedAt
    name
    description
  }
`
export const ForeignKeyDetailsFragmentDoc = gql`
  fragment ForeignKeyDetails on ForeignKey {
    id
    name
    relatedField {
      ...FieldDetails
    }
    relatedEntity {
      ...EntitySummaryDetails
    }
  }
  ${FieldDetailsFragmentDoc}
  ${EntitySummaryDetailsFragmentDoc}
`
export const KeyDetailsFragmentDoc = gql`
  fragment KeyDetails on Key {
    id
    keyType
    isDrivingKey
    name
  }
`
export const EntityDetailsFragmentDoc = gql`
  fragment EntityDetails on Entity {
    id
    createdAt
    updatedAt
    name
    description
    keys {
      ...KeyDetails
    }
    fields {
      ...FieldDetails
    }
    keywords
  }
  ${KeyDetailsFragmentDoc}
  ${FieldDetailsFragmentDoc}
`
export const TenantDetailsFragmentDoc = gql`
  fragment TenantDetails on Tenant {
    id
    createdAt
    updatedAt
    name
  }
`
export const TenantUserDetailsFragmentDoc = gql`
  fragment TenantUserDetails on TenantUser {
    id
    createdAt
    updatedAt
    role
  }
`
export const UserDetailsFragmentDoc = gql`
  fragment UserDetails on User {
    id
    firstName
    lastName
    name
    username
    avatarUrl
    email
    location
    phone
    bio
    role
  }
`
export const EmailDetailsFragmentDoc = gql`
  fragment EmailDetails on Email {
    id
    createdAt
    updatedAt
    email
    public
    primary
    verified
  }
`
export const AccountEmailsDocument = gql`
  query AccountEmails {
    accountEmails {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountEmailsGQL extends Apollo.Query<AccountEmailsQuery, AccountEmailsQueryVariables> {
  document = AccountEmailsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountProfileDocument = gql`
  query AccountProfile {
    accountProfile {
      ...UserDetails
      emails {
        ...EmailDetails
      }
    }
  }
  ${UserDetailsFragmentDoc}
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountProfileGQL extends Apollo.Query<AccountProfileQuery, AccountProfileQueryVariables> {
  document = AccountProfileDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountUsernameAvailableDocument = gql`
  query AccountUsernameAvailable($username: String!) {
    accountUsernameAvailable(username: $username)
  }
`

@Injectable({
  providedIn: 'root',
})
export class AccountUsernameAvailableGQL extends Apollo.Query<
  AccountUsernameAvailableQuery,
  AccountUsernameAvailableQueryVariables
> {
  document = AccountUsernameAvailableDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountCreateEmailDocument = gql`
  mutation AccountCreateEmail($input: AccountCreateEmailInput!) {
    accountCreateEmail(input: $input) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountCreateEmailGQL extends Apollo.Mutation<
  AccountCreateEmailMutation,
  AccountCreateEmailMutationVariables
> {
  document = AccountCreateEmailDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountDeleteEmailDocument = gql`
  mutation AccountDeleteEmail($emailId: String!) {
    accountDeleteEmail(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountDeleteEmailGQL extends Apollo.Mutation<
  AccountDeleteEmailMutation,
  AccountDeleteEmailMutationVariables
> {
  document = AccountDeleteEmailDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountMarkEmailPrimaryDocument = gql`
  mutation AccountMarkEmailPrimary($emailId: String!) {
    accountMarkEmailPrimary(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountMarkEmailPrimaryGQL extends Apollo.Mutation<
  AccountMarkEmailPrimaryMutation,
  AccountMarkEmailPrimaryMutationVariables
> {
  document = AccountMarkEmailPrimaryDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountMarkEmailPrivateDocument = gql`
  mutation AccountMarkEmailPrivate($emailId: String!) {
    accountMarkEmailPrivate(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountMarkEmailPrivateGQL extends Apollo.Mutation<
  AccountMarkEmailPrivateMutation,
  AccountMarkEmailPrivateMutationVariables
> {
  document = AccountMarkEmailPrivateDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountMarkEmailPublicDocument = gql`
  mutation AccountMarkEmailPublic($emailId: String!) {
    accountMarkEmailPublic(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountMarkEmailPublicGQL extends Apollo.Mutation<
  AccountMarkEmailPublicMutation,
  AccountMarkEmailPublicMutationVariables
> {
  document = AccountMarkEmailPublicDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountUpdateProfileDocument = gql`
  mutation AccountUpdateProfile($input: AccountUpdateProfileInput!) {
    accountUpdateProfile(input: $input) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountUpdateProfileGQL extends Apollo.Mutation<
  AccountUpdateProfileMutation,
  AccountUpdateProfileMutationVariables
> {
  document = AccountUpdateProfileDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountUpdateUsernameDocument = gql`
  mutation AccountUpdateUsername($username: String!) {
    accountUpdateUsername(username: $username) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AccountUpdateUsernameGQL extends Apollo.Mutation<
  AccountUpdateUsernameMutation,
  AccountUpdateUsernameMutationVariables
> {
  document = AccountUpdateUsernameDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AccountUpdatePasswordDocument = gql`
  mutation AccountUpdatePassword($input: AccountUpdatePasswordInput!) {
    accountUpdatePassword(input: $input)
  }
`

@Injectable({
  providedIn: 'root',
})
export class AccountUpdatePasswordGQL extends Apollo.Mutation<
  AccountUpdatePasswordMutation,
  AccountUpdatePasswordMutationVariables
> {
  document = AccountUpdatePasswordDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const MeDocument = gql`
  query me {
    me {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class MeGQL extends Apollo.Query<MeQuery, MeQueryVariables> {
  document = MeDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`

@Injectable({
  providedIn: 'root',
})
export class LogoutGQL extends Apollo.Mutation<LogoutMutation, LogoutMutationVariables> {
  document = LogoutDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      ...AuthTokenDetails
    }
  }
  ${AuthTokenDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
  document = LoginDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const RegisterDocument = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      ...AuthTokenDetails
    }
  }
  ${AuthTokenDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
  document = RegisterDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UptimeDocument = gql`
  query Uptime {
    uptime
  }
`

@Injectable({
  providedIn: 'root',
})
export class UptimeGQL extends Apollo.Query<UptimeQuery, UptimeQueryVariables> {
  document = UptimeDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const IntercomPubDocument = gql`
  mutation IntercomPub($type: String!, $scope: String, $payload: JSON) {
    intercomPub(type: $type, scope: $scope, payload: $payload) {
      ...IntercomDetails
    }
  }
  ${IntercomDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class IntercomPubGQL extends Apollo.Mutation<IntercomPubMutation, IntercomPubMutationVariables> {
  document = IntercomPubDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const IntercomSubDocument = gql`
  subscription IntercomSub {
    intercomSub {
      ...IntercomDetails
    }
  }
  ${IntercomDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class IntercomSubGQL extends Apollo.Subscription<IntercomSubSubscription, IntercomSubSubscriptionVariables> {
  document = IntercomSubDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const SchemataDocument = gql`
  query Schemata($tenantId: String!) {
    schemata(tenantId: $tenantId) {
      ...SchemaDetails
    }
  }
  ${SchemaDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class SchemataGQL extends Apollo.Query<SchemataQuery, SchemataQueryVariables> {
  document = SchemataDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const SchemaDocument = gql`
  query Schema($schemaId: String!) {
    schema(schemaId: $schemaId) {
      ...SchemaDetails
      entities {
        ...EntityDetails
      }
    }
  }
  ${SchemaDetailsFragmentDoc}
  ${EntityDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class SchemaGQL extends Apollo.Query<SchemaQuery, SchemaQueryVariables> {
  document = SchemaDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const FieldDataTypesDocument = gql`
  query FieldDataTypes {
    fieldDataTypes {
      id
      data
      field
      name
      description
    }
  }
`

@Injectable({
  providedIn: 'root',
})
export class FieldDataTypesGQL extends Apollo.Query<FieldDataTypesQuery, FieldDataTypesQueryVariables> {
  document = FieldDataTypesDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const CreateSchemaDocument = gql`
  mutation CreateSchema($tenantId: String!, $input: CreateSchemaInput!) {
    createSchema(tenantId: $tenantId, input: $input) {
      ...SchemaDetails
      entities {
        ...EntityDetails
      }
    }
  }
  ${SchemaDetailsFragmentDoc}
  ${EntityDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class CreateSchemaGQL extends Apollo.Mutation<CreateSchemaMutation, CreateSchemaMutationVariables> {
  document = CreateSchemaDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const CreateSchemaEntityDocument = gql`
  mutation CreateSchemaEntity($schemaId: String!, $input: CreateSchemaEntityInput!) {
    createSchemaEntity(schemaId: $schemaId, input: $input) {
      ...EntityDetails
    }
  }
  ${EntityDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class CreateSchemaEntityGQL extends Apollo.Mutation<
  CreateSchemaEntityMutation,
  CreateSchemaEntityMutationVariables
> {
  document = CreateSchemaEntityDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UpdateSchemaEntityDocument = gql`
  mutation UpdateSchemaEntity($entityId: String!, $input: UpdateSchemaEntityInput!) {
    updateSchemaEntity(entityId: $entityId, input: $input) {
      ...EntityDetails
    }
  }
  ${EntityDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UpdateSchemaEntityGQL extends Apollo.Mutation<
  UpdateSchemaEntityMutation,
  UpdateSchemaEntityMutationVariables
> {
  document = UpdateSchemaEntityDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const CreateEntityFieldDocument = gql`
  mutation CreateEntityField($entityId: String!, $input: CreateSchemaEntityFieldInput!) {
    createEntityField(entityId: $entityId, input: $input) {
      ...FieldDetails
    }
  }
  ${FieldDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class CreateEntityFieldGQL extends Apollo.Mutation<
  CreateEntityFieldMutation,
  CreateEntityFieldMutationVariables
> {
  document = CreateEntityFieldDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UpdateEntityFieldDocument = gql`
  mutation UpdateEntityField($fieldId: String!, $input: UpdateSchemaEntityFieldInput!) {
    updateEntityField(fieldId: $fieldId, input: $input) {
      ...FieldDetails
    }
  }
  ${FieldDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class UpdateEntityFieldGQL extends Apollo.Mutation<
  UpdateEntityFieldMutation,
  UpdateEntityFieldMutationVariables
> {
  document = UpdateEntityFieldDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const DeleteEntityFieldDocument = gql`
  mutation DeleteEntityField($fieldId: String!) {
    deleteEntityField(fieldId: $fieldId) {
      ...FieldDetails
    }
  }
  ${FieldDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class DeleteEntityFieldGQL extends Apollo.Mutation<
  DeleteEntityFieldMutation,
  DeleteEntityFieldMutationVariables
> {
  document = DeleteEntityFieldDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const CreateTenantDocument = gql`
  mutation CreateTenant($input: CreateTenantInput!) {
    createTenant(input: $input) {
      ...TenantDetails
    }
  }
  ${TenantDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class CreateTenantGQL extends Apollo.Mutation<CreateTenantMutation, CreateTenantMutationVariables> {
  document = CreateTenantDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const TenantsDocument = gql`
  query Tenants {
    tenants {
      ...TenantDetails
    }
  }
  ${TenantDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class TenantsGQL extends Apollo.Query<TenantsQuery, TenantsQueryVariables> {
  document = TenantsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const TenantDocument = gql`
  query Tenant($tenantId: String!) {
    tenant(tenantId: $tenantId) {
      ...TenantDetails
    }
    role: tenantRole(tenantId: $tenantId)
  }
  ${TenantDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class TenantGQL extends Apollo.Query<TenantQuery, TenantQueryVariables> {
  document = TenantDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminTenantsDocument = gql`
  query AdminTenants($paging: CorePagingInput) {
    tenants: adminTenants(paging: $paging) {
      ...TenantDetails
    }
    count: adminCountTenants(paging: $paging) {
      ...CorePagingDetails
    }
  }
  ${TenantDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminTenantsGQL extends Apollo.Query<AdminTenantsQuery, AdminTenantsQueryVariables> {
  document = AdminTenantsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminTenantDocument = gql`
  query AdminTenant($tenantId: String!) {
    adminTenant(tenantId: $tenantId) {
      ...TenantDetails
      users {
        ...TenantUserDetails
        user {
          ...UserDetails
        }
      }
    }
  }
  ${TenantDetailsFragmentDoc}
  ${TenantUserDetailsFragmentDoc}
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminTenantGQL extends Apollo.Query<AdminTenantQuery, AdminTenantQueryVariables> {
  document = AdminTenantDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCreateTenantDocument = gql`
  mutation AdminCreateTenant($input: AdminCreateTenantInput!) {
    adminCreateTenant(input: $input) {
      ...TenantDetails
    }
  }
  ${TenantDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCreateTenantGQL extends Apollo.Mutation<
  AdminCreateTenantMutation,
  AdminCreateTenantMutationVariables
> {
  document = AdminCreateTenantDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUpdateTenantDocument = gql`
  mutation AdminUpdateTenant($tenantId: String!, $input: AdminUpdateTenantInput!) {
    adminUpdateTenant(tenantId: $tenantId, input: $input) {
      ...TenantDetails
    }
  }
  ${TenantDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUpdateTenantGQL extends Apollo.Mutation<
  AdminUpdateTenantMutation,
  AdminUpdateTenantMutationVariables
> {
  document = AdminUpdateTenantDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminDeleteTenantDocument = gql`
  mutation AdminDeleteTenant($tenantId: String!) {
    adminDeleteTenant(tenantId: $tenantId) {
      ...TenantDetails
    }
  }
  ${TenantDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminDeleteTenantGQL extends Apollo.Mutation<
  AdminDeleteTenantMutation,
  AdminDeleteTenantMutationVariables
> {
  document = AdminDeleteTenantDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminAddTenantUserDocument = gql`
  mutation AdminAddTenantUser($tenantId: String!, $userId: String!, $role: TenantRole!) {
    adminAddTenantUser(tenantId: $tenantId, userId: $userId, role: $role) {
      ...TenantUserDetails
    }
  }
  ${TenantUserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminAddTenantUserGQL extends Apollo.Mutation<
  AdminAddTenantUserMutation,
  AdminAddTenantUserMutationVariables
> {
  document = AdminAddTenantUserDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUpdateTenantUserRoleDocument = gql`
  mutation AdminUpdateTenantUserRole($tenantUserId: String!, $role: TenantRole!) {
    adminUpdateTenantUserRole(tenantUserId: $tenantUserId, role: $role) {
      ...TenantUserDetails
    }
  }
  ${TenantUserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUpdateTenantUserRoleGQL extends Apollo.Mutation<
  AdminUpdateTenantUserRoleMutation,
  AdminUpdateTenantUserRoleMutationVariables
> {
  document = AdminUpdateTenantUserRoleDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminRemoveTenantUserDocument = gql`
  mutation AdminRemoveTenantUser($tenantUserId: String!) {
    adminRemoveTenantUser(tenantUserId: $tenantUserId) {
      ...TenantUserDetails
    }
  }
  ${TenantUserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminRemoveTenantUserGQL extends Apollo.Mutation<
  AdminRemoveTenantUserMutation,
  AdminRemoveTenantUserMutationVariables
> {
  document = AdminRemoveTenantUserDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUsersDocument = gql`
  query AdminUsers($paging: CorePagingInput) {
    users: adminUsers(paging: $paging) {
      ...UserDetails
    }
    count: adminCountUsers(paging: $paging) {
      ...CorePagingDetails
    }
  }
  ${UserDetailsFragmentDoc}
  ${CorePagingDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUsersGQL extends Apollo.Query<AdminUsersQuery, AdminUsersQueryVariables> {
  document = AdminUsersDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUserDocument = gql`
  query AdminUser($userId: String!) {
    adminUser(userId: $userId) {
      ...UserDetails
      emails {
        ...EmailDetails
      }
    }
  }
  ${UserDetailsFragmentDoc}
  ${EmailDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUserGQL extends Apollo.Query<AdminUserQuery, AdminUserQueryVariables> {
  document = AdminUserDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminCreateUserDocument = gql`
  mutation AdminCreateUser($input: AdminCreateUserInput!) {
    adminCreateUser(input: $input) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminCreateUserGQL extends Apollo.Mutation<AdminCreateUserMutation, AdminCreateUserMutationVariables> {
  document = AdminCreateUserDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminUpdateUserDocument = gql`
  mutation AdminUpdateUser($userId: String!, $input: AdminUpdateUserInput!) {
    adminUpdateUser(userId: $userId, input: $input) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminUpdateUserGQL extends Apollo.Mutation<AdminUpdateUserMutation, AdminUpdateUserMutationVariables> {
  document = AdminUpdateUserDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminSetUserPasswordDocument = gql`
  mutation AdminSetUserPassword($userId: String!, $password: String!) {
    adminSetUserPassword(userId: $userId, password: $password) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminSetUserPasswordGQL extends Apollo.Mutation<
  AdminSetUserPasswordMutation,
  AdminSetUserPasswordMutationVariables
> {
  document = AdminSetUserPasswordDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminDeleteUserDocument = gql`
  mutation AdminDeleteUser($userId: String!) {
    adminDeleteUser(userId: $userId) {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminDeleteUserGQL extends Apollo.Mutation<AdminDeleteUserMutation, AdminDeleteUserMutationVariables> {
  document = AdminDeleteUserDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

interface WatchQueryOptionsAlone<V> extends Omit<ApolloCore.WatchQueryOptions<V>, 'query' | 'variables'> {}

interface QueryOptionsAlone<V> extends Omit<ApolloCore.QueryOptions<V>, 'query' | 'variables'> {}

interface MutationOptionsAlone<T, V> extends Omit<ApolloCore.MutationOptions<T, V>, 'mutation' | 'variables'> {}

interface SubscriptionOptionsAlone<V> extends Omit<ApolloCore.SubscriptionOptions<V>, 'query' | 'variables'> {}

@Injectable({ providedIn: 'root' })
export class ApolloAngularSDK {
  constructor(
    private accountEmailsGql: AccountEmailsGQL,
    private accountProfileGql: AccountProfileGQL,
    private accountUsernameAvailableGql: AccountUsernameAvailableGQL,
    private accountCreateEmailGql: AccountCreateEmailGQL,
    private accountDeleteEmailGql: AccountDeleteEmailGQL,
    private accountMarkEmailPrimaryGql: AccountMarkEmailPrimaryGQL,
    private accountMarkEmailPrivateGql: AccountMarkEmailPrivateGQL,
    private accountMarkEmailPublicGql: AccountMarkEmailPublicGQL,
    private accountUpdateProfileGql: AccountUpdateProfileGQL,
    private accountUpdateUsernameGql: AccountUpdateUsernameGQL,
    private accountUpdatePasswordGql: AccountUpdatePasswordGQL,
    private meGql: MeGQL,
    private logoutGql: LogoutGQL,
    private loginGql: LoginGQL,
    private registerGql: RegisterGQL,
    private uptimeGql: UptimeGQL,
    private intercomPubGql: IntercomPubGQL,
    private intercomSubGql: IntercomSubGQL,
    private schemataGql: SchemataGQL,
    private schemaGql: SchemaGQL,
    private fieldDataTypesGql: FieldDataTypesGQL,
    private createSchemaGql: CreateSchemaGQL,
    private createSchemaEntityGql: CreateSchemaEntityGQL,
    private updateSchemaEntityGql: UpdateSchemaEntityGQL,
    private createEntityFieldGql: CreateEntityFieldGQL,
    private updateEntityFieldGql: UpdateEntityFieldGQL,
    private deleteEntityFieldGql: DeleteEntityFieldGQL,
    private createTenantGql: CreateTenantGQL,
    private tenantsGql: TenantsGQL,
    private tenantGql: TenantGQL,
    private adminTenantsGql: AdminTenantsGQL,
    private adminTenantGql: AdminTenantGQL,
    private adminCreateTenantGql: AdminCreateTenantGQL,
    private adminUpdateTenantGql: AdminUpdateTenantGQL,
    private adminDeleteTenantGql: AdminDeleteTenantGQL,
    private adminAddTenantUserGql: AdminAddTenantUserGQL,
    private adminUpdateTenantUserRoleGql: AdminUpdateTenantUserRoleGQL,
    private adminRemoveTenantUserGql: AdminRemoveTenantUserGQL,
    private adminUsersGql: AdminUsersGQL,
    private adminUserGql: AdminUserGQL,
    private adminCreateUserGql: AdminCreateUserGQL,
    private adminUpdateUserGql: AdminUpdateUserGQL,
    private adminSetUserPasswordGql: AdminSetUserPasswordGQL,
    private adminDeleteUserGql: AdminDeleteUserGQL,
  ) {}

  accountEmails(variables?: AccountEmailsQueryVariables, options?: QueryOptionsAlone<AccountEmailsQueryVariables>) {
    return this.accountEmailsGql.fetch(variables, options)
  }

  accountEmailsWatch(
    variables?: AccountEmailsQueryVariables,
    options?: WatchQueryOptionsAlone<AccountEmailsQueryVariables>,
  ) {
    return this.accountEmailsGql.watch(variables, options)
  }

  accountProfile(variables?: AccountProfileQueryVariables, options?: QueryOptionsAlone<AccountProfileQueryVariables>) {
    return this.accountProfileGql.fetch(variables, options)
  }

  accountProfileWatch(
    variables?: AccountProfileQueryVariables,
    options?: WatchQueryOptionsAlone<AccountProfileQueryVariables>,
  ) {
    return this.accountProfileGql.watch(variables, options)
  }

  accountUsernameAvailable(
    variables: AccountUsernameAvailableQueryVariables,
    options?: QueryOptionsAlone<AccountUsernameAvailableQueryVariables>,
  ) {
    return this.accountUsernameAvailableGql.fetch(variables, options)
  }

  accountUsernameAvailableWatch(
    variables: AccountUsernameAvailableQueryVariables,
    options?: WatchQueryOptionsAlone<AccountUsernameAvailableQueryVariables>,
  ) {
    return this.accountUsernameAvailableGql.watch(variables, options)
  }

  accountCreateEmail(
    variables: AccountCreateEmailMutationVariables,
    options?: MutationOptionsAlone<AccountCreateEmailMutation, AccountCreateEmailMutationVariables>,
  ) {
    return this.accountCreateEmailGql.mutate(variables, options)
  }

  accountDeleteEmail(
    variables: AccountDeleteEmailMutationVariables,
    options?: MutationOptionsAlone<AccountDeleteEmailMutation, AccountDeleteEmailMutationVariables>,
  ) {
    return this.accountDeleteEmailGql.mutate(variables, options)
  }

  accountMarkEmailPrimary(
    variables: AccountMarkEmailPrimaryMutationVariables,
    options?: MutationOptionsAlone<AccountMarkEmailPrimaryMutation, AccountMarkEmailPrimaryMutationVariables>,
  ) {
    return this.accountMarkEmailPrimaryGql.mutate(variables, options)
  }

  accountMarkEmailPrivate(
    variables: AccountMarkEmailPrivateMutationVariables,
    options?: MutationOptionsAlone<AccountMarkEmailPrivateMutation, AccountMarkEmailPrivateMutationVariables>,
  ) {
    return this.accountMarkEmailPrivateGql.mutate(variables, options)
  }

  accountMarkEmailPublic(
    variables: AccountMarkEmailPublicMutationVariables,
    options?: MutationOptionsAlone<AccountMarkEmailPublicMutation, AccountMarkEmailPublicMutationVariables>,
  ) {
    return this.accountMarkEmailPublicGql.mutate(variables, options)
  }

  accountUpdateProfile(
    variables: AccountUpdateProfileMutationVariables,
    options?: MutationOptionsAlone<AccountUpdateProfileMutation, AccountUpdateProfileMutationVariables>,
  ) {
    return this.accountUpdateProfileGql.mutate(variables, options)
  }

  accountUpdateUsername(
    variables: AccountUpdateUsernameMutationVariables,
    options?: MutationOptionsAlone<AccountUpdateUsernameMutation, AccountUpdateUsernameMutationVariables>,
  ) {
    return this.accountUpdateUsernameGql.mutate(variables, options)
  }

  accountUpdatePassword(
    variables: AccountUpdatePasswordMutationVariables,
    options?: MutationOptionsAlone<AccountUpdatePasswordMutation, AccountUpdatePasswordMutationVariables>,
  ) {
    return this.accountUpdatePasswordGql.mutate(variables, options)
  }

  me(variables?: MeQueryVariables, options?: QueryOptionsAlone<MeQueryVariables>) {
    return this.meGql.fetch(variables, options)
  }

  meWatch(variables?: MeQueryVariables, options?: WatchQueryOptionsAlone<MeQueryVariables>) {
    return this.meGql.watch(variables, options)
  }

  logout(variables?: LogoutMutationVariables, options?: MutationOptionsAlone<LogoutMutation, LogoutMutationVariables>) {
    return this.logoutGql.mutate(variables, options)
  }

  login(variables: LoginMutationVariables, options?: MutationOptionsAlone<LoginMutation, LoginMutationVariables>) {
    return this.loginGql.mutate(variables, options)
  }

  register(
    variables: RegisterMutationVariables,
    options?: MutationOptionsAlone<RegisterMutation, RegisterMutationVariables>,
  ) {
    return this.registerGql.mutate(variables, options)
  }

  uptime(variables?: UptimeQueryVariables, options?: QueryOptionsAlone<UptimeQueryVariables>) {
    return this.uptimeGql.fetch(variables, options)
  }

  uptimeWatch(variables?: UptimeQueryVariables, options?: WatchQueryOptionsAlone<UptimeQueryVariables>) {
    return this.uptimeGql.watch(variables, options)
  }

  intercomPub(
    variables: IntercomPubMutationVariables,
    options?: MutationOptionsAlone<IntercomPubMutation, IntercomPubMutationVariables>,
  ) {
    return this.intercomPubGql.mutate(variables, options)
  }

  intercomSub(
    variables?: IntercomSubSubscriptionVariables,
    options?: SubscriptionOptionsAlone<IntercomSubSubscriptionVariables>,
  ) {
    return this.intercomSubGql.subscribe(variables, options)
  }

  schemata(variables: SchemataQueryVariables, options?: QueryOptionsAlone<SchemataQueryVariables>) {
    return this.schemataGql.fetch(variables, options)
  }

  schemataWatch(variables: SchemataQueryVariables, options?: WatchQueryOptionsAlone<SchemataQueryVariables>) {
    return this.schemataGql.watch(variables, options)
  }

  schema(variables: SchemaQueryVariables, options?: QueryOptionsAlone<SchemaQueryVariables>) {
    return this.schemaGql.fetch(variables, options)
  }

  schemaWatch(variables: SchemaQueryVariables, options?: WatchQueryOptionsAlone<SchemaQueryVariables>) {
    return this.schemaGql.watch(variables, options)
  }

  fieldDataTypes(variables?: FieldDataTypesQueryVariables, options?: QueryOptionsAlone<FieldDataTypesQueryVariables>) {
    return this.fieldDataTypesGql.fetch(variables, options)
  }

  fieldDataTypesWatch(
    variables?: FieldDataTypesQueryVariables,
    options?: WatchQueryOptionsAlone<FieldDataTypesQueryVariables>,
  ) {
    return this.fieldDataTypesGql.watch(variables, options)
  }

  createSchema(
    variables: CreateSchemaMutationVariables,
    options?: MutationOptionsAlone<CreateSchemaMutation, CreateSchemaMutationVariables>,
  ) {
    return this.createSchemaGql.mutate(variables, options)
  }

  createSchemaEntity(
    variables: CreateSchemaEntityMutationVariables,
    options?: MutationOptionsAlone<CreateSchemaEntityMutation, CreateSchemaEntityMutationVariables>,
  ) {
    return this.createSchemaEntityGql.mutate(variables, options)
  }

  updateSchemaEntity(
    variables: UpdateSchemaEntityMutationVariables,
    options?: MutationOptionsAlone<UpdateSchemaEntityMutation, UpdateSchemaEntityMutationVariables>,
  ) {
    return this.updateSchemaEntityGql.mutate(variables, options)
  }

  createEntityField(
    variables: CreateEntityFieldMutationVariables,
    options?: MutationOptionsAlone<CreateEntityFieldMutation, CreateEntityFieldMutationVariables>,
  ) {
    return this.createEntityFieldGql.mutate(variables, options)
  }

  updateEntityField(
    variables: UpdateEntityFieldMutationVariables,
    options?: MutationOptionsAlone<UpdateEntityFieldMutation, UpdateEntityFieldMutationVariables>,
  ) {
    return this.updateEntityFieldGql.mutate(variables, options)
  }

  deleteEntityField(
    variables: DeleteEntityFieldMutationVariables,
    options?: MutationOptionsAlone<DeleteEntityFieldMutation, DeleteEntityFieldMutationVariables>,
  ) {
    return this.deleteEntityFieldGql.mutate(variables, options)
  }

  createTenant(
    variables: CreateTenantMutationVariables,
    options?: MutationOptionsAlone<CreateTenantMutation, CreateTenantMutationVariables>,
  ) {
    return this.createTenantGql.mutate(variables, options)
  }

  tenants(variables?: TenantsQueryVariables, options?: QueryOptionsAlone<TenantsQueryVariables>) {
    return this.tenantsGql.fetch(variables, options)
  }

  tenantsWatch(variables?: TenantsQueryVariables, options?: WatchQueryOptionsAlone<TenantsQueryVariables>) {
    return this.tenantsGql.watch(variables, options)
  }

  tenant(variables: TenantQueryVariables, options?: QueryOptionsAlone<TenantQueryVariables>) {
    return this.tenantGql.fetch(variables, options)
  }

  tenantWatch(variables: TenantQueryVariables, options?: WatchQueryOptionsAlone<TenantQueryVariables>) {
    return this.tenantGql.watch(variables, options)
  }

  adminTenants(variables?: AdminTenantsQueryVariables, options?: QueryOptionsAlone<AdminTenantsQueryVariables>) {
    return this.adminTenantsGql.fetch(variables, options)
  }

  adminTenantsWatch(
    variables?: AdminTenantsQueryVariables,
    options?: WatchQueryOptionsAlone<AdminTenantsQueryVariables>,
  ) {
    return this.adminTenantsGql.watch(variables, options)
  }

  adminTenant(variables: AdminTenantQueryVariables, options?: QueryOptionsAlone<AdminTenantQueryVariables>) {
    return this.adminTenantGql.fetch(variables, options)
  }

  adminTenantWatch(variables: AdminTenantQueryVariables, options?: WatchQueryOptionsAlone<AdminTenantQueryVariables>) {
    return this.adminTenantGql.watch(variables, options)
  }

  adminCreateTenant(
    variables: AdminCreateTenantMutationVariables,
    options?: MutationOptionsAlone<AdminCreateTenantMutation, AdminCreateTenantMutationVariables>,
  ) {
    return this.adminCreateTenantGql.mutate(variables, options)
  }

  adminUpdateTenant(
    variables: AdminUpdateTenantMutationVariables,
    options?: MutationOptionsAlone<AdminUpdateTenantMutation, AdminUpdateTenantMutationVariables>,
  ) {
    return this.adminUpdateTenantGql.mutate(variables, options)
  }

  adminDeleteTenant(
    variables: AdminDeleteTenantMutationVariables,
    options?: MutationOptionsAlone<AdminDeleteTenantMutation, AdminDeleteTenantMutationVariables>,
  ) {
    return this.adminDeleteTenantGql.mutate(variables, options)
  }

  adminAddTenantUser(
    variables: AdminAddTenantUserMutationVariables,
    options?: MutationOptionsAlone<AdminAddTenantUserMutation, AdminAddTenantUserMutationVariables>,
  ) {
    return this.adminAddTenantUserGql.mutate(variables, options)
  }

  adminUpdateTenantUserRole(
    variables: AdminUpdateTenantUserRoleMutationVariables,
    options?: MutationOptionsAlone<AdminUpdateTenantUserRoleMutation, AdminUpdateTenantUserRoleMutationVariables>,
  ) {
    return this.adminUpdateTenantUserRoleGql.mutate(variables, options)
  }

  adminRemoveTenantUser(
    variables: AdminRemoveTenantUserMutationVariables,
    options?: MutationOptionsAlone<AdminRemoveTenantUserMutation, AdminRemoveTenantUserMutationVariables>,
  ) {
    return this.adminRemoveTenantUserGql.mutate(variables, options)
  }

  adminUsers(variables?: AdminUsersQueryVariables, options?: QueryOptionsAlone<AdminUsersQueryVariables>) {
    return this.adminUsersGql.fetch(variables, options)
  }

  adminUsersWatch(variables?: AdminUsersQueryVariables, options?: WatchQueryOptionsAlone<AdminUsersQueryVariables>) {
    return this.adminUsersGql.watch(variables, options)
  }

  adminUser(variables: AdminUserQueryVariables, options?: QueryOptionsAlone<AdminUserQueryVariables>) {
    return this.adminUserGql.fetch(variables, options)
  }

  adminUserWatch(variables: AdminUserQueryVariables, options?: WatchQueryOptionsAlone<AdminUserQueryVariables>) {
    return this.adminUserGql.watch(variables, options)
  }

  adminCreateUser(
    variables: AdminCreateUserMutationVariables,
    options?: MutationOptionsAlone<AdminCreateUserMutation, AdminCreateUserMutationVariables>,
  ) {
    return this.adminCreateUserGql.mutate(variables, options)
  }

  adminUpdateUser(
    variables: AdminUpdateUserMutationVariables,
    options?: MutationOptionsAlone<AdminUpdateUserMutation, AdminUpdateUserMutationVariables>,
  ) {
    return this.adminUpdateUserGql.mutate(variables, options)
  }

  adminSetUserPassword(
    variables: AdminSetUserPasswordMutationVariables,
    options?: MutationOptionsAlone<AdminSetUserPasswordMutation, AdminSetUserPasswordMutationVariables>,
  ) {
    return this.adminSetUserPasswordGql.mutate(variables, options)
  }

  adminDeleteUser(
    variables: AdminDeleteUserMutationVariables,
    options?: MutationOptionsAlone<AdminDeleteUserMutation, AdminDeleteUserMutationVariables>,
  ) {
    return this.adminDeleteUserGql.mutate(variables, options)
  }
}
