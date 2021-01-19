import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { getApp } from '../helpers/get-app'

describe('AppController (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    app = await getApp()
  })
  afterAll(async () => {
    return app.close()
  })

  it('/api/uptime (GET)', () => {
    return request(app.getHttpServer()).get('/api/uptime').expect(200)
  })
})
