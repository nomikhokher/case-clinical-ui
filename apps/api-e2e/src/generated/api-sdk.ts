import gql from 'graphql-tag'
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

export const AuthTokenDetails = gql`
  fragment AuthTokenDetails on AuthToken {
    token
  }
`
export const CorePagingDetails = gql`
  fragment CorePagingDetails on CorePaging {
    limit
    skip
    total
  }
`
export const IntercomDetails = gql`
  fragment IntercomDetails on IntercomMessage {
    type
    scope
    payload
  }
`
export const SchemaDetails = gql`
  fragment SchemaDetails on Schema {
    id
    createdAt
    updatedAt
    publishedAt
    stage
    name
  }
`
export const OntologyDetails = gql`
  fragment OntologyDetails on Ontology {
    id
    key
    value
  }
`
export const FieldDetails = gql`
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
export const EntitySummaryDetails = gql`
  fragment EntitySummaryDetails on EntitySummary {
    id
    createdAt
    updatedAt
    name
    description
  }
`
export const ForeignKeyDetails = gql`
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
  ${FieldDetails}
  ${EntitySummaryDetails}
`
export const KeyDetails = gql`
  fragment KeyDetails on Key {
    id
    keyType
    isDrivingKey
    name
  }
`
export const EntityDetails = gql`
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
  ${KeyDetails}
  ${FieldDetails}
`
export const TenantDetails = gql`
  fragment TenantDetails on Tenant {
    id
    createdAt
    updatedAt
    name
  }
`
export const TenantUserDetails = gql`
  fragment TenantUserDetails on TenantUser {
    id
    createdAt
    updatedAt
    role
  }
`
export const UserDetails = gql`
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
export const EmailDetails = gql`
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
export const AccountEmails = gql`
  query AccountEmails {
    accountEmails {
      ...EmailDetails
    }
  }
  ${EmailDetails}
`
export const AccountProfile = gql`
  query AccountProfile {
    accountProfile {
      ...UserDetails
      emails {
        ...EmailDetails
      }
    }
  }
  ${UserDetails}
  ${EmailDetails}
`
export const AccountUsernameAvailable = gql`
  query AccountUsernameAvailable($username: String!) {
    accountUsernameAvailable(username: $username)
  }
`
export const AccountCreateEmail = gql`
  mutation AccountCreateEmail($input: AccountCreateEmailInput!) {
    accountCreateEmail(input: $input) {
      ...EmailDetails
    }
  }
  ${EmailDetails}
`
export const AccountDeleteEmail = gql`
  mutation AccountDeleteEmail($emailId: String!) {
    accountDeleteEmail(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetails}
`
export const AccountMarkEmailPrimary = gql`
  mutation AccountMarkEmailPrimary($emailId: String!) {
    accountMarkEmailPrimary(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetails}
`
export const AccountMarkEmailPrivate = gql`
  mutation AccountMarkEmailPrivate($emailId: String!) {
    accountMarkEmailPrivate(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetails}
`
export const AccountMarkEmailPublic = gql`
  mutation AccountMarkEmailPublic($emailId: String!) {
    accountMarkEmailPublic(emailId: $emailId) {
      ...EmailDetails
    }
  }
  ${EmailDetails}
`
export const AccountUpdateProfile = gql`
  mutation AccountUpdateProfile($input: AccountUpdateProfileInput!) {
    accountUpdateProfile(input: $input) {
      ...UserDetails
    }
  }
  ${UserDetails}
`
export const AccountUpdateUsername = gql`
  mutation AccountUpdateUsername($username: String!) {
    accountUpdateUsername(username: $username) {
      ...UserDetails
    }
  }
  ${UserDetails}
`
export const AccountUpdatePassword = gql`
  mutation AccountUpdatePassword($input: AccountUpdatePasswordInput!) {
    accountUpdatePassword(input: $input)
  }
`
export const Me = gql`
  query me {
    me {
      ...UserDetails
    }
  }
  ${UserDetails}
`
export const Logout = gql`
  mutation Logout {
    logout
  }
`
export const Login = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      ...AuthTokenDetails
    }
  }
  ${AuthTokenDetails}
`
export const Register = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      ...AuthTokenDetails
    }
  }
  ${AuthTokenDetails}
`
export const Uptime = gql`
  query Uptime {
    uptime
  }
`
export const IntercomPub = gql`
  mutation IntercomPub($type: String!, $scope: String, $payload: JSON) {
    intercomPub(type: $type, scope: $scope, payload: $payload) {
      ...IntercomDetails
    }
  }
  ${IntercomDetails}
`
export const IntercomSub = gql`
  subscription IntercomSub {
    intercomSub {
      ...IntercomDetails
    }
  }
  ${IntercomDetails}
`
export const Schemata = gql`
  query Schemata($tenantId: String!) {
    schemata(tenantId: $tenantId) {
      ...SchemaDetails
    }
  }
  ${SchemaDetails}
`
export const Schema = gql`
  query Schema($schemaId: String!) {
    schema(schemaId: $schemaId) {
      ...SchemaDetails
      entities {
        ...EntityDetails
      }
    }
  }
  ${SchemaDetails}
  ${EntityDetails}
`
export const FieldDataTypes = gql`
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
export const CreateSchema = gql`
  mutation CreateSchema($tenantId: String!, $input: CreateSchemaInput!) {
    createSchema(tenantId: $tenantId, input: $input) {
      ...SchemaDetails
      entities {
        ...EntityDetails
      }
    }
  }
  ${SchemaDetails}
  ${EntityDetails}
`
export const CreateSchemaEntity = gql`
  mutation CreateSchemaEntity($schemaId: String!, $input: CreateSchemaEntityInput!) {
    createSchemaEntity(schemaId: $schemaId, input: $input) {
      ...EntityDetails
    }
  }
  ${EntityDetails}
`
export const UpdateSchemaEntity = gql`
  mutation UpdateSchemaEntity($entityId: String!, $input: UpdateSchemaEntityInput!) {
    updateSchemaEntity(entityId: $entityId, input: $input) {
      ...EntityDetails
    }
  }
  ${EntityDetails}
`
export const CreateEntityField = gql`
  mutation CreateEntityField($entityId: String!, $input: CreateSchemaEntityFieldInput!) {
    createEntityField(entityId: $entityId, input: $input) {
      ...FieldDetails
    }
  }
  ${FieldDetails}
`
export const UpdateEntityField = gql`
  mutation UpdateEntityField($fieldId: String!, $input: UpdateSchemaEntityFieldInput!) {
    updateEntityField(fieldId: $fieldId, input: $input) {
      ...FieldDetails
    }
  }
  ${FieldDetails}
`
export const DeleteEntityField = gql`
  mutation DeleteEntityField($fieldId: String!) {
    deleteEntityField(fieldId: $fieldId) {
      ...FieldDetails
    }
  }
  ${FieldDetails}
`
export const CreateTenant = gql`
  mutation CreateTenant($input: CreateTenantInput!) {
    createTenant(input: $input) {
      ...TenantDetails
    }
  }
  ${TenantDetails}
`
export const Tenants = gql`
  query Tenants {
    tenants {
      ...TenantDetails
    }
  }
  ${TenantDetails}
`
export const Tenant = gql`
  query Tenant($tenantId: String!) {
    tenant(tenantId: $tenantId) {
      ...TenantDetails
    }
    role: tenantRole(tenantId: $tenantId)
  }
  ${TenantDetails}
`
export const AdminTenants = gql`
  query AdminTenants($paging: CorePagingInput) {
    tenants: adminTenants(paging: $paging) {
      ...TenantDetails
    }
    count: adminCountTenants(paging: $paging) {
      ...CorePagingDetails
    }
  }
  ${TenantDetails}
  ${CorePagingDetails}
`
export const AdminTenant = gql`
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
  ${TenantDetails}
  ${TenantUserDetails}
  ${UserDetails}
`
export const AdminCreateTenant = gql`
  mutation AdminCreateTenant($input: AdminCreateTenantInput!) {
    adminCreateTenant(input: $input) {
      ...TenantDetails
    }
  }
  ${TenantDetails}
`
export const AdminUpdateTenant = gql`
  mutation AdminUpdateTenant($tenantId: String!, $input: AdminUpdateTenantInput!) {
    adminUpdateTenant(tenantId: $tenantId, input: $input) {
      ...TenantDetails
    }
  }
  ${TenantDetails}
`
export const AdminDeleteTenant = gql`
  mutation AdminDeleteTenant($tenantId: String!) {
    adminDeleteTenant(tenantId: $tenantId) {
      ...TenantDetails
    }
  }
  ${TenantDetails}
`
export const AdminAddTenantUser = gql`
  mutation AdminAddTenantUser($tenantId: String!, $userId: String!, $role: TenantRole!) {
    adminAddTenantUser(tenantId: $tenantId, userId: $userId, role: $role) {
      ...TenantUserDetails
    }
  }
  ${TenantUserDetails}
`
export const AdminUpdateTenantUserRole = gql`
  mutation AdminUpdateTenantUserRole($tenantUserId: String!, $role: TenantRole!) {
    adminUpdateTenantUserRole(tenantUserId: $tenantUserId, role: $role) {
      ...TenantUserDetails
    }
  }
  ${TenantUserDetails}
`
export const AdminRemoveTenantUser = gql`
  mutation AdminRemoveTenantUser($tenantUserId: String!) {
    adminRemoveTenantUser(tenantUserId: $tenantUserId) {
      ...TenantUserDetails
    }
  }
  ${TenantUserDetails}
`
export const AdminUsers = gql`
  query AdminUsers($paging: CorePagingInput) {
    users: adminUsers(paging: $paging) {
      ...UserDetails
    }
    count: adminCountUsers(paging: $paging) {
      ...CorePagingDetails
    }
  }
  ${UserDetails}
  ${CorePagingDetails}
`
export const AdminUser = gql`
  query AdminUser($userId: String!) {
    adminUser(userId: $userId) {
      ...UserDetails
      emails {
        ...EmailDetails
      }
    }
  }
  ${UserDetails}
  ${EmailDetails}
`
export const AdminCreateUser = gql`
  mutation AdminCreateUser($input: AdminCreateUserInput!) {
    adminCreateUser(input: $input) {
      ...UserDetails
    }
  }
  ${UserDetails}
`
export const AdminUpdateUser = gql`
  mutation AdminUpdateUser($userId: String!, $input: AdminUpdateUserInput!) {
    adminUpdateUser(userId: $userId, input: $input) {
      ...UserDetails
    }
  }
  ${UserDetails}
`
export const AdminSetUserPassword = gql`
  mutation AdminSetUserPassword($userId: String!, $password: String!) {
    adminSetUserPassword(userId: $userId, password: $password) {
      ...UserDetails
    }
  }
  ${UserDetails}
`
export const AdminDeleteUser = gql`
  mutation AdminDeleteUser($userId: String!) {
    adminDeleteUser(userId: $userId) {
      ...UserDetails
    }
  }
  ${UserDetails}
`

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[]
  }
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
}
export default result
