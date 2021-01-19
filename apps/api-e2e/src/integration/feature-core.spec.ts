import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { getApp } from '../helpers/get-app'

describe('CoreModule (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    app = await getApp()
  })
  afterAll(() => app.close())

  it('/graphql (POST)', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({ query: `query { uptime }` })
      .expect(200)
      .expect((res) => {
        const body = res.body

        if (!body.data) {
          throw Error(`Data prop not found`)
        }

        if (!body.data.uptime) {
          throw Error(`Data prop not found`)
        }

        if (typeof body.data.uptime !== 'number') {
          throw Error(`Uptime not a number`)
        }
        return true
      })
  })
})
