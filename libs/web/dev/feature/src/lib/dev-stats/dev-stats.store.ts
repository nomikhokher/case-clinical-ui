import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { Stats, ComponentProp } from './model'

export interface Item {
  id?: string
  name?: string
  stats?: Stats
}

interface PreviewData {
  headerTitle?: string
  githubURL?: string
  breadcrumbs?: Crumb[]
  directory?: string
}

interface Config {
  previewData: PreviewData
  items?: Item
  component_inputs?: ComponentProp[]
  component_outputs?: ComponentProp[]
}

interface DevStatsState {
  config?: Config
  loading?: boolean
}

@Injectable()
export class DevStatsStore extends ComponentStore<DevStatsState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config: {
        previewData: {
          headerTitle: 'Stats',
          githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/stats/src/lib',
          breadcrumbs: [
            { label: 'Components', path: '/dev' },
            { label: 'Stats', path: '/dev/stats' },
          ],
          directory: '/libs/web/dev/feature/src/lib/dev-stats/dev-stats.component.ts',
        },
        items: {
          stats: {
            title: 'Total Subscribers',
            border_none: 'last',
            values: {
              type: 'numeric',
              total: '',
              current: '897',
              previous: '70857',
              overwrite: true,
              difference: {
                numeric: 457,
                percentage: '12.2555',
                type: 'percentage',
              },
            },
            icon: 'user',
            link: '/',
          },
        },
        component_inputs: [
          { label: 'Title', prop: '[title]', description: 'This title show the total subscribers', dataType: 'String' },
          {
            label: 'Border none',
            prop: '[border_none]',
            description: 'Remove the border of elements',
            dataType: 'String',
          },
          { label: 'Values', prop: '[values]', description: 'This object hold some props', dataType: 'Object' },
          { label: 'User', prop: '[user]', description: 'This props use for icon', dataType: 'String' },
          { label: 'Link', prop: '[link]', description: 'This props use for routing', dataType: 'String' },
        ],
      },
    })
    // this.loadItemsEffect()
  }

  readonly config$ = this.select(this.state$, (s) => s.config)

  readonly vm$ = this.select(this.config$, (config) => ({ config }))

  // readonly loadItemsEffect = this.effect(($) =>
  //   $.pipe(
  //     tap(() => this.patchState({ loading: true })),
  //     switchMap(() =>
  //       of([{ id: Date.now().toString(), name: 'Item 1' }]).pipe(
  //         tapResponse(
  //           (res) => this.patchState({ items: res }),
  //           (e: any) => console.error('An error occurred', e),
  //         ),
  //       ),
  //     ),
  //   ),
  // )
}
