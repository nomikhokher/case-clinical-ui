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

export type CreateSchemaInput = {
  name: Scalars['String']
}

export type CreateTenantInput = {
  name: Scalars['String']
}

export enum DataType {
  Boolean = 'Boolean',
  DateTime = 'DateTime',
  Enumeration = 'Enumeration',
  Integer = 'Integer',
  String = 'String',
  Text = 'Text',
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

export type Field = {
  __typename?: 'Field'
  createdAt?: Maybe<Scalars['DateTime']>
  dataType?: Maybe<DataType>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  isName?: Maybe<Scalars['Boolean']>
  isNullable?: Maybe<Scalars['Boolean']>
  keyType?: Maybe<FieldType>
  name?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['DateTime']>
  stage?: Maybe<Stage>
  updatedAt?: Maybe<Scalars['DateTime']>
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
  relatedEntity?: Maybe<Entity>
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
  createSchema?: Maybe<Schema>
  createTenant?: Maybe<Tenant>
  intercomPub?: Maybe<IntercomMessage>
  login?: Maybe<UserToken>
  logout?: Maybe<Scalars['Boolean']>
  register?: Maybe<UserToken>
}

export type MutationCreateSchemaArgs = {
  input: CreateSchemaInput
  tenantId: Scalars['String']
}

export type MutationCreateTenantArgs = {
  input: CreateTenantInput
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
  me?: Maybe<User>
  schema?: Maybe<Schema>
  schemata?: Maybe<Array<Schema>>
  tenant?: Maybe<Tenant>
  tenants?: Maybe<Array<Tenant>>
  uptime?: Maybe<Scalars['Float']>
}

export type QuerySchemaArgs = {
  schemaId: Scalars['String']
}

export type QueryTenantArgs = {
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

/** User role */
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
}

export type User = {
  __typename?: 'User'
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  role?: Maybe<Role>
  updatedAt?: Maybe<Scalars['DateTime']>
  username?: Maybe<Scalars['String']>
}

export type UserToken = {
  __typename?: 'UserToken'
  /** JWT Bearer token */
  token: Scalars['String']
  user: User
}

export type UserTokenDetailsFragment = { __typename?: 'UserToken' } & Pick<UserToken, 'token'> & {
    user: { __typename?: 'User' } & UserDetailsFragment
  }

export type UserDetailsFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'firstName' | 'lastName' | 'username' | 'avatarUrl' | 'email'
>

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = { __typename?: 'Query' } & { me?: Maybe<{ __typename?: 'User' } & UserDetailsFragment> }

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'logout'>

export type LoginMutationVariables = Exact<{
  input: LoginInput
}>

export type LoginMutation = { __typename?: 'Mutation' } & {
  login?: Maybe<{ __typename?: 'UserToken' } & UserTokenDetailsFragment>
}

export type RegisterMutationVariables = Exact<{
  input: RegisterInput
}>

export type RegisterMutation = { __typename?: 'Mutation' } & {
  register?: Maybe<{ __typename?: 'UserToken' } & UserTokenDetailsFragment>
}

export type UptimeQueryVariables = Exact<{ [key: string]: never }>

export type UptimeQuery = { __typename?: 'Query' } & Pick<Query, 'uptime'>

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

export type CreateSchemaMutationVariables = Exact<{
  tenantId: Scalars['String']
  input: CreateSchemaInput
}>

export type CreateSchemaMutation = { __typename?: 'Mutation' } & {
  createSchema?: Maybe<{ __typename?: 'Schema' } & SchemaDetailsFragment>
}

export type SchemataQueryVariables = Exact<{ [key: string]: never }>

export type SchemataQuery = { __typename?: 'Query' } & {
  schemata?: Maybe<Array<{ __typename?: 'Schema' } & SchemaDetailsFragment>>
}

export type SchemaQueryVariables = Exact<{
  schemaId: Scalars['String']
}>

export type SchemaQuery = { __typename?: 'Query' } & {
  schema?: Maybe<{ __typename?: 'Schema' } & SchemaDetailsFragment>
}

export type TenantDetailsFragment = { __typename?: 'Tenant' } & Pick<Tenant, 'id' | 'createdAt' | 'updatedAt' | 'name'>

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

export type TenantQuery = { __typename?: 'Query' } & {
  tenant?: Maybe<{ __typename?: 'Tenant' } & TenantDetailsFragment>
}

export const UserDetails = gql`
  fragment UserDetails on User {
    id
    firstName
    lastName
    username
    avatarUrl
    email
  }
`
export const UserTokenDetails = gql`
  fragment UserTokenDetails on UserToken {
    token
    user {
      ...UserDetails
    }
  }
  ${UserDetails}
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
export const TenantDetails = gql`
  fragment TenantDetails on Tenant {
    id
    createdAt
    updatedAt
    name
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
      ...UserTokenDetails
    }
  }
  ${UserTokenDetails}
`
export const Register = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      ...UserTokenDetails
    }
  }
  ${UserTokenDetails}
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
export const CreateSchema = gql`
  mutation CreateSchema($tenantId: String!, $input: CreateSchemaInput!) {
    createSchema(tenantId: $tenantId, input: $input) {
      ...SchemaDetails
    }
  }
  ${SchemaDetails}
`
export const Schemata = gql`
  query Schemata {
    schemata {
      ...SchemaDetails
    }
  }
  ${SchemaDetails}
`
export const Schema = gql`
  query Schema($schemaId: String!) {
    schema(schemaId: $schemaId) {
      ...SchemaDetails
    }
  }
  ${SchemaDetails}
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
  }
  ${TenantDetails}
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
