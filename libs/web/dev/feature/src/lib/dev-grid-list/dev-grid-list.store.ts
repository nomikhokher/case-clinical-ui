import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from './model/index'
export interface Item {
  id?: string
  name?: string
}

interface DevGridListState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Grid Lists',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/grid-list/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Grid Lists', path: '/dev/grid-list' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-grid-list/dev-grid-list.component.ts',
  items: {
    cols: 1,
    gap: 3,
    lg: 4,
    md: 3,
    sm: 2,
    xs: 2,
  },
  component_inputs: [
    {
      label: 'Columns',
      prop: '[cols]',
      description: 'Change number of columns when content is on smallest screen.',
      dataType: 'Number',
    },
    { label: 'Gap', prop: '[gap]', description: 'Adjust the space between columns.', dataType: 'Number' },
    {
      label: 'On Large Screen',
      prop: '[lg]',
      description: 'Change number of columns when content is on large screen.',
      dataType: 'Number',
    },
    {
      label: 'On Medium Screen',
      prop: '[md]',
      description: 'Change number of columns when content is on medium screen.',
      dataType: 'Number',
    },
    {
      label: 'On Small Screen',
      prop: '[sm]',
      description: 'Change number of columns when content is on small screen.',
      dataType: 'Number',
    },
    {
      label: 'On Extra Small Screen',
      prop: '[xs]',
      description: 'Change number of columns when content is on extra small screen.',
      dataType: 'Number',
    },
  ],
}

@Injectable()
export class DevGridListStore extends ComponentStore<DevGridListState> {
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
