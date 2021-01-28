import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CorePagingInput } from '@schema-driven/api/core/data-access'
import { ApolloAngularSDK, Schema, Tenant, TenantRole } from '@schema-driven/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { pluck, switchMap, tap, withLatestFrom } from 'rxjs/operators'

export interface SchemaListState {
  paging: CorePagingInput
  errors?: any
  loading?: boolean
  tenantId?: string
  tenant?: Tenant
  tenantRole?: TenantRole
  schemata?: Schema[]
}

@Injectable()
export class SchemaListStore extends ComponentStore<SchemaListState> {
  constructor(private readonly sdk: ApolloAngularSDK, route: ActivatedRoute) {
    super({ paging: { skip: 0, limit: 10 } })
    this.setTenantId(route.params.pipe(pluck('tenantId')))
    this.loadTenantEffect(route.params.pipe(pluck('tenantId')))
  }

  readonly setTenantId = this.updater<string>((state, tenantId) => ({ ...state, tenantId }))

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly paging$ = this.select((s) => s.paging)
  readonly tenantId$ = this.select((s) => s.tenantId)
  readonly schemata$ = this.select((s) => s.schemata)
  readonly tenant$ = this.select((s) => s.tenant)
  readonly tenantRole$ = this.select((s) => s.tenantRole)
  readonly data$ = this.select(this.schemata$, this.tenant$, this.tenantRole$, (schemata, tenant, tenantRole) => ({
    schemata,
    tenant,
    tenantRole,
    isOwner: tenantRole === TenantRole.Owner,
  }))

  readonly vm$ = this.select(
    this.errors$,
    this.loading$,
    this.paging$,
    this.data$,
    (errors, loading, paging, data) => ({
      errors,
      loading,
      paging,
      data,
    }),
  )

  readonly loadTenantEffect = this.effect<string>((tenantId$) =>
    tenantId$.pipe(
      switchMap((tenantId) =>
        this.sdk.tenant({ tenantId }).pipe(
          tapResponse((res) => {
            this.patchState({ tenant: res.data?.tenant, tenantRole: res.data?.role })
          }, console.error),
        ),
      ),
    ),
  )

  readonly loadSchemataEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.tenantId$),
      switchMap(([_, tenantId]) =>
        this.sdk.schemata({ tenantId }).pipe(
          tapResponse(
            (res) => this.patchState({ schemata: res.data.schemata, errors: res.errors, loading: false }),
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
