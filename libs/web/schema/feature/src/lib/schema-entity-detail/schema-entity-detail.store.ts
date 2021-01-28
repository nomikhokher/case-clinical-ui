import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK, Entity } from '@schema-driven/web/core/data-access'
import { pluck, switchMap, tap } from 'rxjs/operators'
import { SchemaDetailStore } from '../schema-detail/schema-detail.store'

export interface SchemaEntityDetailState {
  errors?: any
  loading?: boolean
  entity?: Entity
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
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly schema$ = this.select(this.schema.schema$, (schema) => schema)

  readonly entity$ = this.select((s) => s.entity)
  readonly vm$ = this.select(
    this.errors$,
    this.loading$,
    this.schema$,
    this.entity$,
    (errors, loading, schema, entity) => ({
      errors,
      loading,
      schema: { ...schema },
      entity,
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
}
