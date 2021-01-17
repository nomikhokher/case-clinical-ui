import { ApiUserDataAccessService } from '@metadata/api/user/data-access'

export class ApiUserFeatureResolver {
  constructor(private readonly data: ApiUserDataAccessService) {}
}
