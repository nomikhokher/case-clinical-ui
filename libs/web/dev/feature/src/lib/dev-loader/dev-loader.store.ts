import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Configs } from './model'

export interface Item {
  id?: string
  name?: string
}

interface DevLoaderState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}
const config: Configs = {
  headerTitle: 'Loader',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/loader/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Loader', path: '/dev/loader' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-loader/dev-loader.component.ts',
  items: {
    loaderColor: 'indigo',
    loadingType: 'double', //['dots', 'single', 'double', 'simple']
    isLoading: true,
    size: 32,
  },

  component_inputs: [
    {
      label: 'Loader Color',
      prop: '[loaderColor]',
      description: 'To adjust the color of loader.',
      dataType: 'String',
      type: ['gray', 'red', 'yellow', 'blue', 'pink', 'indigo', 'green', 'purple'],
    },
    {
      label: 'Loader Type',
      prop: '[loadingType]',
      description: 'To change the type of loader.',
      dataType: 'String',
      type: ['dots', 'single', 'double', 'simple'],
    },
    {
      label: 'Loader on/off',
      prop: '[isLoading]',
      description: 'Toggle the loader.(on/off)',
      dataType: 'Boolean',
      type: ['true', 'false'],
    },
    {
      label: 'Loader Size',
      prop: '[size]',
      description: 'Adjust the size of loader',
      dataType: 'Number',
      type: ['4', '6', '8', '10', '12', '16', '20', '24', '28', '32', '36', '40', '44', '52', '56', '60', '64'],
    },
  ],
}

@Injectable()
export class DevLoaderStore extends ComponentStore<DevLoaderState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
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
