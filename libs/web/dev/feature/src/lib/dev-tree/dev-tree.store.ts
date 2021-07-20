import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { ComponentProp, FlatNode } from './model'

export interface Item {
  id?: string
  name?: string
  treeData?: FlatNode[]
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

interface DevTreeState {
  config?: Config
  loading?: boolean
}

@Injectable()
export class DevTreeStore extends ComponentStore<DevTreeState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config: {
        previewData: {
          headerTitle: 'Tree',
          githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/tree/src/lib',
          breadcrumbs: [
            { label: 'Components', path: '/dev' },
            { label: 'Tree', path: '/dev/tree' },
          ],
          directory: '/libs/web/dev/feature/src/lib/dev-store-tree/tree.component.ts',
        },
        items: {
          treeData: [
            {
              name: 'Fruit',
              expandable: true,
              level: 0,
            },
            {
              name: 'Apple',
              expandable: false,
              level: 1,
            },
            {
              name: 'Banana',
              expandable: false,
              level: 1,
            },
            {
              name: 'Fruit loops',
              expandable: false,
              level: 1,
            },
            {
              name: 'Vegetables',
              expandable: true,
              level: 0,
            },
            {
              name: 'Green',
              expandable: true,
              level: 1,
            },
            {
              name: 'Broccoli',
              expandable: false,
              level: 2,
            },
            {
              name: 'Brussels sprouts',
              expandable: false,
              level: 2,
            },
            {
              name: 'Orange',
              expandable: true,
              level: 1,
            },
            {
              name: 'Pumpkins',
              expandable: false,
              level: 2,
            },
            {
              name: 'Carrots',
              expandable: false,
              level: 2,
            },
          ],
        },
        component_inputs: [
          { label: 'Name', prop: '[name]', description: 'What you want set name title.', dataType: 'String' },
          { label: 'Expandable', prop: '[expandable]', description: 'Its expand the tree.', dataType: 'Boolean' },
          { label: 'Level', prop: '[level]', description: 'How many level of tree.', dataType: 'Number' },
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
