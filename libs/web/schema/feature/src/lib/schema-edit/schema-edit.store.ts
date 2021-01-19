import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ApolloAngularSDK, Schema } from '@metadata/web/core/data-access'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { pluck, switchMap, tap } from 'rxjs/operators'

export interface SchemaDetailState {
  errors?: any
  loading?: boolean
  schema?: Schema
}

@Injectable()
export class SchemaEditStore extends ComponentStore<SchemaDetailState> {
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

  // readonly updateSchemaEffect = this.effect<AdminUpdateSchemaInput>((input$) =>
  //   input$.pipe(
  //     tap(() => this.patchState({ loading: true })),
  //     withLatestFrom(this.schema$),
  //     switchMap(([input, schema]) =>
  //       this.sdk.adminUpdateSchema({ input, schemaId: schema.id }).pipe(
  //         tapResponse(
  //           (res) => {
  //             this.patchState({ schema: res.data.adminUpdateSchema, errors: res.errors, loading: false })
  //           },
  //           (errors: any) =>
  //             this.patchState({
  //               loading: false,
  //               errors: errors.graphQLErrors ? errors.graphQLErrors : errors,
  //             }),
  //         ),
  //       ),
  //     ),
  //   ),
  // )
}
