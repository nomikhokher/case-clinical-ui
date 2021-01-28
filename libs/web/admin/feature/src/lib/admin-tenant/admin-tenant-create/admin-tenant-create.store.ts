import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { AdminCreateTenantInput, ApolloAngularSDK, Tenant } from '@schema-driven/web/core/data-access'
import { switchMap, tap } from 'rxjs/operators'

export interface TenantCreateState {
  errors?: any
  loading?: boolean
  tenant?: Tenant
}

@Injectable()
export class AdminTenantCreateStore extends ComponentStore<TenantCreateState> {
  constructor(private readonly sdk: ApolloAngularSDK, private readonly router: Router) {
    super({ loading: false })
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly tenant$ = this.select((s) => s.tenant)
  readonly vm$ = this.select(this.errors$, this.loading$, this.tenant$, (errors, loading, tenant) => ({
    errors,
    loading,
    tenant,
  }))

  readonly createTenantEffect = this.effect<AdminCreateTenantInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap((input) =>
        this.sdk.adminCreateTenant({ input }).pipe(
          tapResponse(
            (res) => {
              this.patchState({ tenant: res.data.adminCreateTenant, errors: res.errors, loading: false })
              return this.router.navigate(['/admin/tenants', res.data?.adminCreateTenant?.id])
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
