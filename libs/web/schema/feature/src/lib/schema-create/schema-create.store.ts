import { Injectable } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { CreateSchemaInput, ApolloAngularSDK, Schema } from '@metadata/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { pluck, switchMap, tap, withLatestFrom } from 'rxjs/operators'

export interface SchemaCreateState {
  errors?: any
  loading?: boolean
  tenantId?: string
  schema?: Schema
}

@Injectable()
export class SchemaCreateStore extends ComponentStore<SchemaCreateState> {
  constructor(private readonly sdk: ApolloAngularSDK, route: ActivatedRoute, private readonly router: Router) {
    super({ loading: false })
    this.setTenantId(route.params.pipe(pluck('tenantId')))
  }

  readonly setTenantId = this.updater<string>((state, tenantId) => ({ ...state, tenantId }))
  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly schema$ = this.select((s) => s.schema)
  readonly tenantId$ = this.select((s) => s.tenantId)
  readonly vm$ = this.select(
    this.errors$,
    this.loading$,
    this.schema$,
    this.tenantId$,
    (errors, loading, schema, tenantId) => ({
      errors,
      loading,
      schema,
      tenantId,
    }),
  )

  readonly createSchemaEffect = this.effect<CreateSchemaInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.tenantId$),
      switchMap(([input, tenantId]) =>
        this.sdk.createSchema({ input, tenantId }).pipe(
          tapResponse(
            (res) => {
              this.patchState({ schema: res.data.createSchema, errors: res.errors, loading: false })
              return this.router.navigate(['/schemata', tenantId, res.data?.createSchema?.id])
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
