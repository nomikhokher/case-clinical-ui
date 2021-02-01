import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import {
  ApolloAngularSDK,
  CreateSchemaEntityFieldInput,
  Entity,
  Field,
  FieldDataType,
  UpdateSchemaEntityFieldInput,
} from '@schema-driven/web/core/data-access'
import { pluck, switchMap, tap, withLatestFrom } from 'rxjs/operators'
import { SchemaDetailStore } from '../schema-detail/schema-detail.store'

export interface SchemaEntityDetailState {
  errors?: any
  loading?: boolean
  entity?: Entity
  types?: FieldDataType[]
}

@Injectable()
export class SchemaEntityDetailStore extends ComponentStore<SchemaEntityDetailState> {
  constructor(
    private readonly sdk: ApolloAngularSDK,
    route: ActivatedRoute,
    private readonly schema: SchemaDetailStore,
  ) {
    super({ loading: false })
    this.loadSchemaEntityEffect(route.params.pipe(pluck('entityId')))
    this.loadFieldDataTypesEffect()
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly types$ = this.select((s) => s.types)
  readonly schema$ = this.select(this.schema.schema$, (schema) => schema)

  readonly entity$ = this.select((s) => s.entity)
  readonly vm$ = this.select(
    this.errors$,
    this.loading$,
    this.entity$,
    this.types$,
    (errors, loading, entity, types) => ({
      errors,
      loading,
      entity,
      types,
    }),
  )

  readonly loadSchemaEntityEffect = this.effect<string>((entityId$) =>
    entityId$.pipe(
      switchMap((entityId) =>
        this.schema$.pipe(
          tap((schema) => this.patchState({ entity: schema?.entities.find((ent) => ent.id === entityId) })),
        ),
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

  readonly createSchemaEntityFieldEffect = this.effect<CreateSchemaEntityFieldInput>((input$) =>
    input$.pipe(
      withLatestFrom(this.entity$),
      switchMap(([input, entity]) =>
        this.sdk.createEntityField({ entityId: entity.id, input }).pipe(
          withLatestFrom(this.schema$),
          tapResponse(
            ([_, schema]) => this.schema.loadSchemaEffect(schema.id),
            (errors) => this.patchState({ errors }),
          ),
        ),
      ),
    ),
  )

  readonly updateSchemaEntityFieldEffect = this.effect<[string, UpdateSchemaEntityFieldInput]>((input$) =>
    input$.pipe(
      switchMap(([fieldId, input]) =>
        this.sdk.updateEntityField({ fieldId, input }).pipe(
          withLatestFrom(this.schema$),
          tapResponse(
            ([_, schema]) => this.schema.loadSchemaEffect(schema.id),
            (errors) => this.patchState({ errors }),
          ),
        ),
      ),
    ),
  )

  readonly deleteSchemaEntityFieldEffect = this.effect<Field>((field$) =>
    field$.pipe(
      switchMap((field) =>
        this.sdk.deleteEntityField({ fieldId: field.id }).pipe(
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
