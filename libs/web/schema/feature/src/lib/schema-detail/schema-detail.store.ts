import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import {
  ApolloAngularSDK,
  CreateSchemaEntityInput,
  CreateSchemaEnumInput,
  Schema,
} from '@schema-driven/web/core/data-access'
import { pluck, switchMap, tap, withLatestFrom } from 'rxjs/operators'

export interface SchemaDetailState {
  errors?: any
  loading?: boolean
  schema?: Schema
}

@Injectable()
export class SchemaDetailStore extends ComponentStore<SchemaDetailState> {
  constructor(private readonly sdk: ApolloAngularSDK, route: ActivatedRoute) {
    super({ loading: false })
    this.loadSchemaEffect(route.params.pipe(pluck('schemaId')))
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly schema$ = this.select((s) => s.schema)
  readonly vm$ = this.select(this.errors$, this.loading$, this.schema$, (errors, loading, schema) => ({
    errors,
    loading,
    schema: { ...schema },
  }))

  readonly loadSchemaEffect = this.effect<string>((schemaId$) =>
    schemaId$.pipe(
      tap(() => this.setState({ loading: true })),
      switchMap((schemaId) =>
        this.sdk.schema({ schemaId }).pipe(
          tapResponse(
            (res) => this.patchState({ schema: res.data.schema, errors: res.errors, loading: false }),
            (errors) => this.patchState({ errors }),
          ),
        ),
      ),
    ),
  )

  readonly createSchemaEntityEffect = this.effect<CreateSchemaEntityInput>((input$) =>
    input$.pipe(
      withLatestFrom(this.schema$),
      switchMap(([input, schema]) =>
        this.sdk.createSchemaEntity({ schemaId: schema.id, input }).pipe(
          tapResponse(
            () => this.loadSchemaEffect(schema.id),
            (errors) => this.patchState({ errors }),
          ),
        ),
      ),
    ),
  )

  readonly createSchemaEnumEffect = this.effect<CreateSchemaEnumInput>((input$) =>
    input$.pipe(
      withLatestFrom(this.schema$),
      switchMap(([input, schema]) =>
        this.sdk.createSchemaEnum({ schemaId: schema.id, input }).pipe(
          tapResponse(
            () => this.loadSchemaEffect(schema.id),
            (errors) => this.patchState({ errors }),
          ),
        ),
      ),
    ),
  )
}
