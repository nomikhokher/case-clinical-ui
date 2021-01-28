import { INestApplication } from '@nestjs/common'
import { Login, LoginInput, Me } from '../generated/api-sdk'
import {
  runGraphQLQuery,
  runGraphQLQueryAdmin,
  runGraphQLQueryAlice,
  runGraphQLQueryBob,
  sampleEmail,
  samplePassword,
} from '../helpers'
import { getApp } from '../helpers/get-app'

describe('Auth (e2e)', () => {
  let app: INestApplication

  beforeAll(async () => {
    app = await getApp()
  })
  afterAll(async () => {
    return app.close()
  })

  function runLoginQuery(id, email, role) {
    const input: LoginInput = { password: samplePassword(), email }
    return runGraphQLQuery(app, Login, { input })
      .expect(200)
      .expect((res) => {
        expect(res).toHaveProperty('body.data')
        const data = res.body.data
        expect(data).toHaveProperty('login.token')
      })
  }

  describe('log in ', () => {
    it('should login with sample user: admin', () => {
      const id = 'admin'
      const email = sampleEmail(id)

      return runLoginQuery(id, email, 'Admin')
    })

    it('should login with sample user: alice', () => {
      const id = 'alice'
      const email = sampleEmail(id)

      return runLoginQuery(id, email, 'User')
    })
    it('should login with sample user: bob', () => {
      const id = 'bob'
      const email = sampleEmail(id)

      return runLoginQuery(id, email, 'User')
    })
  })

  describe('retrieve data of logged in user', () => {
    it('should retrieve data of user: admin', () => {
      return runGraphQLQueryAdmin(app, Me)
        .expect(200)
        .expect((res) => {
          expect(res).toHaveProperty('body.data')
          const data = res.body.data
          expect(data).toHaveProperty('me.id')
          expect(data.me.id).toEqual('admin')
          expect(data.me.role).toEqual('Admin')
          expect(data.me.name).toEqual('Admin Example')
          expect(data.me.lastName).toEqual('Example')
          expect(data.me.firstName).toEqual('Admin')
        })
    })
    it('should retrieve data of user: alice', () => {
      return runGraphQLQueryAlice(app, Me)
        .expect(200)
        .expect((res) => {
          expect(res).toHaveProperty('body.data')
          const data = res.body.data
          expect(data).toHaveProperty('me.id')
          expect(data.me.id).toEqual('alice')
          expect(data.me.role).toEqual('User')
          expect(data.me.name).toEqual('Alice Example')
          expect(data.me.lastName).toEqual('Example')
          expect(data.me.firstName).toEqual('Alice')
        })
    })
    it('should retrieve data of user: bob', () => {
      return runGraphQLQueryBob(app, Me)
        .expect(200)
        .expect((res) => {
          expect(res).toHaveProperty('body.data')
          const data = res.body.data
          expect(data).toHaveProperty('me.id')
          expect(data.me.id).toEqual('bob')
          expect(data.me.role).toEqual('User')
          expect(data.me.name).toEqual('Bob Example')
          expect(data.me.lastName).toEqual('Example')
          expect(data.me.firstName).toEqual('Bob')
        })
    })
  })
})
