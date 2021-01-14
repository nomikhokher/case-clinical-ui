import { INestApplication } from '@nestjs/common'
import { ASTNode } from 'graphql'
import { print } from 'graphql/language/printer'
import * as request from 'supertest'

export function uniq(prefix: string) {
  return `${prefix}${Math.floor(Math.random() * 10000000)}`
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

export function getFutureDate() {
  return new Date(+new Date() - Math.floor(Math.random() * 10000000000))
}
