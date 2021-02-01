import { Injectable } from '@angular/core'
import { CorePagingInput } from '@schema-driven/web/core/data-access'
import { ApolloAngularSDK, Tenant } from '@schema-driven/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { switchMap, tap, withLatestFrom } from 'rxjs/operators'

export interface TenantListState {
  paging: CorePagingInput
  errors?: any
  loading?: boolean
  tenants?: Tenant[]
}

@Injectable()
export class AdminTenantListStore extends ComponentStore<TenantListState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ paging: { skip: 0, limit: 10 } })
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly paging$ = this.select((s) => s.paging)
  readonly tenants$ = this.select((s) => s.tenants)
  readonly vm$ = this.select(
    this.errors$,
    this.loading$,
    this.paging$,
    this.tenants$,
    (errors, loading, paging, tenants) => ({
      errors,
      loading,
      paging,
      tenants,
    }),
  )

  readonly loadTenantsEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.paging$),
      switchMap(([_, paging]) =>
        this.sdk.adminTenants({ paging }).pipe(
          tapResponse(
            (res) => this.patchState({ tenants: res.data.tenants, errors: res.errors, loading: false }),
            (errors: any) =>
              this.patchState({
                loading: false,
                errors: errors.graphQLErrors ? errors.graphQLErrors : errors,
              }),
          ),
        ),
      ),
    ),
  )
}
