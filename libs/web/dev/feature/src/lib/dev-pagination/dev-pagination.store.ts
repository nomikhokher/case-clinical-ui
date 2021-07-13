import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from './model'

export interface Item {
  id?: string
  name?: string
}

interface DevPaginationState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Pagination',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/pagination/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Pagination', path: '/dev/pagination' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-pagination/dev-pagination.component.ts',
  items: {
    difference: 7,
    pages: 50,
  },
  component_inputs: [
    { label: 'Total Pages', prop: '[pages]', description: 'Shows the total pages.', dataType: 'Number' },
    {
      label: 'Difference',
      prop: '[difference]',
      description: 'Adjust the differnce between pagination.',
      dataType: 'Number',
    },
  ],
}

@Injectable()
export class DevPaginationStore extends ComponentStore<DevPaginationState> {
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
