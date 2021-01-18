import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ApolloAngularSDK, Tenant, TenantRole } from '@metadata/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { map, pluck, switchMap, tap, withLatestFrom } from 'rxjs/operators'

export interface TenantDetailState {
  errors?: any
  loading?: boolean
  tenant?: Tenant
}

@Injectable()
export class TenantDetailStore extends ComponentStore<TenantDetailState> {
  constructor(private readonly sdk: ApolloAngularSDK, route: ActivatedRoute) {
    super({ loading: false })
    this.loadTenantEffect(route.params.pipe(pluck('tenantId')))
  }

  readonly users$ = this.sdk
    .adminUsers({ paging: { limit: 100 } })
    .pipe(map((res) => res.data.users.map((user) => ({ value: user.id, label: user.username }))))

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly tenant$ = this.select((s) => s.tenant)
  readonly vm$ = this.select(
    this.errors$,
    this.loading$,
    this.tenant$,
    this.users$,
    (errors, loading, tenant, users) => ({
      errors,
      loading,
      tenant: { ...tenant },
      users,
    }),
  )

  readonly loadTenantEffect = this.effect<string>((tenantId$) =>
    tenantId$.pipe(
      tap(() => this.setState({ loading: true })),
      switchMap((tenantId) =>
        this.sdk
          .adminTenant({ tenantId })
          .pipe(
            tapResponse(
              (res) => this.patchState({ tenant: res.data.adminTenant, errors: res.errors, loading: false }),
              console.error,
            ),
          ),
      ),
    ),
  )

  readonly addTenantUserEffect = this.effect<[string, TenantRole]>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.tenant$),
      switchMap(([[userId, role], tenant]) =>
        this.sdk
          .adminAddTenantUser({ userId, tenantId: tenant.id, role })
          .pipe(tapResponse(() => this.loadTenantEffect(tenant.id), console.error)),
      ),
    ),
  )

  readonly updateTenantUserRoleEffect = this.effect<[string, TenantRole]>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.tenant$),
      switchMap(([[tenantUserId, role], tenant]) =>
        this.sdk
          .adminUpdateTenantUserRole({ tenantUserId, role })
          .pipe(tapResponse(() => this.loadTenantEffect(tenant.id), console.error)),
      ),
    ),
  )

  readonly removeTenantUserEffect = this.effect<string>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.tenant$),
      switchMap(([tenantUserId, tenant]) =>
        this.sdk
          .adminRemoveTenantUser({ tenantUserId })
          .pipe(tapResponse(() => this.loadTenantEffect(tenant.id), console.error)),
      ),
    ),
  )
}
