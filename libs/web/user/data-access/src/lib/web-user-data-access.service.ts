import { Injectable } from '@angular/core'
import { ApolloAngularSDK } from '@metadata/web/core/data-access'

@Injectable()
export class WebUserDataAccessService {
  constructor(private readonly sdk: ApolloAngularSDK) {}
}
