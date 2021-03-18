import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import {
  ApolloAngularSDK,
  Enum,
  FieldDataType,
  UpdateSchemaEntityFieldInput,
  UpdateSchemaEnumInput,
} from '@schema-driven/web/core/data-access'
import { pluck, switchMap, tap, withLatestFrom } from 'rxjs/operators'
import { SchemaDetailStore } from '../schema-detail/schema-detail.store'

export interface SchemaEnumDetailState {
  errors?: any
  loading?: boolean
  enum?: Enum
  types?: FieldDataType[]
}

@Injectable()
export class SchemaEnumDetailStore extends ComponentStore<SchemaEnumDetailState> {
  constructor(
    private readonly sdk: ApolloAngularSDK,
    route: ActivatedRoute,
    private readonly schema: SchemaDetailStore,
  ) {
    super({ loading: false })
    this.loadSchemaEnumEffect(route.params.pipe(pluck('enumId')))
    this.loadFieldDataTypesEffect()
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly types$ = this.select((s) => s.types)
  readonly schema$ = this.select(this.schema.schema$, (schema) => schema)
  readonly info$ = this.select(this.errors$, this.loading$, (errors, loading) => ({ errors, loading }))
  readonly enum$ = this.select((s) => s.enum)
  readonly vm$ = this.select(this.info$, this.enum$, this.types$, this.schema$, (info, item, types, schema) => ({
    info,
    item,
    types,
    schema,
  }))

  readonly loadSchemaEnumEffect = this.effect<string>((enumId$) =>
    enumId$.pipe(
      switchMap((enumId) =>
        this.schema$.pipe(tap((schema) => this.patchState({ enum: schema?.enums.find((ent) => ent.id === enumId) }))),
      ),
    ),
  )

  readonly loadFieldDataTypesEffect = this.effect(($) =>
    $.pipe(
      switchMap(() =>
        this.sdk
          .fieldDataTypes()
          .pipe(tapResponse((res) => this.patchState({ types: res.data.fieldDataTypes }), console.error)),
      ),
    ),
  )

  readonly updateSchemaEnumEffect = this.effect<[string, UpdateSchemaEnumInput]>((input$) =>
    input$.pipe(
      switchMap(([enumId, input]) =>
        this.sdk.updateSchemaEnum({ enumId, input }).pipe(
          withLatestFrom(this.schema$),
          tapResponse(
            ([_, schema]) => this.schema.loadSchemaEffect(schema.id),
            (errors) => this.patchState({ errors }),
          ),
        ),
      ),
    ),
  )
}
