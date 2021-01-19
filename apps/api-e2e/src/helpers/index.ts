import { INestApplication } from '@nestjs/common'
import { ASTNode } from 'graphql'
import { print } from 'graphql/language/printer'
import * as request from 'supertest'

const SAMPLE_DATA_DOMAIN = 'example.com'
const SAMPLE_DATA_PASSWORD = '123SchemaDriven'

export const TOKEN_ADMIN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZG1pbiIsImlhdCI6MTYxMTAzMjU1OX0.kAXHe3Ns9CQ3PLjGhNeno0Q5Z7a1njsTjiKUcmGCluE'

export const TOKEN_ALICE =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhbGljZSIsImlhdCI6MTYxMTAzMjU1OX0.blHEj9h-WEAUNUTDlQVJeeuK3YEJ9E5jHywxdtadjZI'

export const TOKEN_BOB =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJib2IiLCJpYXQiOjE2MTEwMzI1NTl9.xNkVnQJaugTKTn0tGxrP0HBqHNtsbEQBP4TJJuE5wek'

export function sampleEmail(user) {
  return `${user}@${SAMPLE_DATA_DOMAIN}`
}

export function samplePassword() {
  return SAMPLE_DATA_PASSWORD
}
export const randomId = (size = 5) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')

export function uniq(prefix: string) {
  return `${prefix}-${randomId()}`
}

export function runGraphQLQuery(
  app: INestApplication,
  query: ASTNode,
  variables?: Record<string, unknown>,
  { token }: { token?: string } = {},
) {
  return request(app.getHttpServer())
    .post('/graphql')
    .set('Authorization', token ? `Bearer ${token}` : null)
    .send({ query: print(query), variables: variables })
}

export function runGraphQLQueryAdmin(app: INestApplication, query: ASTNode, variables?: Record<string, unknown>) {
  return runGraphQLQuery(app, query, variables, { token: TOKEN_ADMIN })
}

export function runGraphQLQueryAlice(app: INestApplication, query: ASTNode, variables?: Record<string, unknown>) {
  return runGraphQLQuery(app, query, variables, { token: TOKEN_ALICE })
}

export function runGraphQLQueryBob(app: INestApplication, query: ASTNode, variables?: Record<string, unknown>) {
  return runGraphQLQuery(app, query, variables, { token: TOKEN_BOB })
}

export function runUnexpectedQuery(
  app: INestApplication,
  query: ASTNode,
  variables?: Record<string, unknown>,
  httpCode = 200,
  message = 'Unauthorized',
) {
  return runGraphQLQuery(app, query, variables)
    .expect(httpCode)
    .expect((res) => expect(res.body.errors[0]?.message).toEqual(message))
}

export function getFutureDate() {
  return new Date(+new Date() - Math.floor(Math.random() * 10000000000))
}
