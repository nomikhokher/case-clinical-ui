import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { AdminUpdateTenantInput, ApolloAngularSDK, Tenant } from '@schema-driven/web/core/data-access'
import { pluck, switchMap, tap, withLatestFrom } from 'rxjs/operators'

export interface TenantDetailState {
  errors?: any
  loading?: boolean
  tenant?: Tenant
}

@Injectable()
export class AdminTenantEditStore extends ComponentStore<TenantDetailState> {
  constructor(private readonly sdk: ApolloAngularSDK, route: ActivatedRoute) {
    super({ loading: false })
    this.loadTenantEffect(route.params.pipe(pluck('tenantId')))
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly tenant$ = this.select((s) => s.tenant)
  readonly vm$ = this.select(this.errors$, this.loading$, this.tenant$, (errors, loading, tenant) => ({
    errors,
    loading,
    tenant: { ...tenant },
  }))

  readonly loadTenantEffect = this.effect<string>((tenantId$) =>
    tenantId$.pipe(
      tap(() => this.setState({ loading: true })),
      switchMap((tenantId) =>
        this.sdk.adminTenant({ tenantId }).pipe(
          tapResponse(
            (res) => this.patchState({ tenant: res.data.adminTenant, errors: res.errors, loading: false }),
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

  readonly updateTenantEffect = this.effect<AdminUpdateTenantInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.tenant$),
      switchMap(([input, tenant]) =>
        this.sdk.adminUpdateTenant({ input, tenantId: tenant.id }).pipe(
          tapResponse(
            (res) => {
              this.patchState({ tenant: res.data.adminUpdateTenant, errors: res.errors, loading: false })
            },
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
