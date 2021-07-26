import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'

export interface Item {
  id?: string
  name?: string
}

interface DevMediaObjectState {
  items?: Item[]
  loading?: boolean
  config
}

const config = {
  headerTitle: 'Media Object',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/media-object/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Media Object', path: '/dev/media-object' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-section-headings/dev-media-object.component.ts',
}

@Injectable()
export class DevMediaObjectStore extends ComponentStore<DevMediaObjectState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
    this.loadItemsEffect()
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))

  readonly loadItemsEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(() =>
        of([{ id: Date.now().toString(), name: 'Item 1' }]).pipe(
          tapResponse(
            (res) => this.patchState({ items: res }),
            (e: any) => console.error('An error occurred', e),
          ),
        ),
      ),
    ),
  )
}
