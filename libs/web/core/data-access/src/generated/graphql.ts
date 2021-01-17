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

export const UserDetailsFragmentDoc = gql`
  fragment UserDetails on User {
    id
    firstName
    lastName
    username
    avatarUrl
    email
  }
`
export const UserTokenDetailsFragmentDoc = gql`
  fragment UserTokenDetails on UserToken {
    token
    user {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
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
export const TenantDetailsFragmentDoc = gql`
  fragment TenantDetails on Tenant {
    id
    createdAt
    updatedAt
    name
  }
`
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
      ...UserTokenDetails
    }
  }
  ${UserTokenDetailsFragmentDoc}
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
      ...UserTokenDetails
    }
  }
  ${UserTokenDetailsFragmentDoc}
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
export const CreateSchemaDocument = gql`
  mutation CreateSchema($tenantId: String!, $input: CreateSchemaInput!) {
    createSchema(tenantId: $tenantId, input: $input) {
      ...SchemaDetails
    }
  }
  ${SchemaDetailsFragmentDoc}
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
export const SchemataDocument = gql`
  query Schemata {
    schemata {
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
    }
  }
  ${SchemaDetailsFragmentDoc}
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

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

interface WatchQueryOptionsAlone<V> extends Omit<ApolloCore.WatchQueryOptions<V>, 'query' | 'variables'> {}

interface QueryOptionsAlone<V> extends Omit<ApolloCore.QueryOptions<V>, 'query' | 'variables'> {}

interface MutationOptionsAlone<T, V> extends Omit<ApolloCore.MutationOptions<T, V>, 'mutation' | 'variables'> {}

interface SubscriptionOptionsAlone<V> extends Omit<ApolloCore.SubscriptionOptions<V>, 'query' | 'variables'> {}

@Injectable({ providedIn: 'root' })
export class ApolloAngularSDK {
  constructor(
    private meGql: MeGQL,
    private logoutGql: LogoutGQL,
    private loginGql: LoginGQL,
    private registerGql: RegisterGQL,
    private uptimeGql: UptimeGQL,
    private intercomPubGql: IntercomPubGQL,
    private intercomSubGql: IntercomSubGQL,
    private createSchemaGql: CreateSchemaGQL,
    private schemataGql: SchemataGQL,
    private schemaGql: SchemaGQL,
    private createTenantGql: CreateTenantGQL,
    private tenantsGql: TenantsGQL,
    private tenantGql: TenantGQL,
  ) {}

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

  createSchema(
    variables: CreateSchemaMutationVariables,
    options?: MutationOptionsAlone<CreateSchemaMutation, CreateSchemaMutationVariables>,
  ) {
    return this.createSchemaGql.mutate(variables, options)
  }

  schemata(variables?: SchemataQueryVariables, options?: QueryOptionsAlone<SchemataQueryVariables>) {
    return this.schemataGql.fetch(variables, options)
  }

  schemataWatch(variables?: SchemataQueryVariables, options?: WatchQueryOptionsAlone<SchemataQueryVariables>) {
    return this.schemataGql.watch(variables, options)
  }

  schema(variables: SchemaQueryVariables, options?: QueryOptionsAlone<SchemaQueryVariables>) {
    return this.schemaGql.fetch(variables, options)
  }

  schemaWatch(variables: SchemaQueryVariables, options?: WatchQueryOptionsAlone<SchemaQueryVariables>) {
    return this.schemaGql.watch(variables, options)
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
}
