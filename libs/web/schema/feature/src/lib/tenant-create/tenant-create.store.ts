import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { ApolloAngularSDK, CreateTenantInput, Tenant } from '@schema-driven/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { switchMap, tap } from 'rxjs/operators'

export interface TenantCreateState {
  errors?: any
  loading?: boolean
  tenant?: Tenant
}

@Injectable()
export class TenantCreateStore extends ComponentStore<TenantCreateState> {
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

  readonly createTenantEffect = this.effect<CreateTenantInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap((input) =>
        this.sdk.createTenant({ input }).pipe(
          tapResponse(
            (res) => {
              this.patchState({ tenant: res.data.createTenant, errors: res.errors, loading: false })
              return this.router.navigate(['/schemata', res.data?.createTenant?.id])
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
