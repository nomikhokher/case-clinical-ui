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

interface DevTreeSelectState {
  config?: Config
  loading?: boolean
}

@Injectable()
export class DevTreeSelectStore extends ComponentStore<DevTreeSelectState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config: {
        previewData: {
          headerTitle: 'Tree Select',
          githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/tree/select/src/lib',
          breadcrumbs: [
            { label: 'Components', path: '/dev' },
            { label: 'Tree Select', path: '/dev/tree/select' },
          ],
          directory: '/libs/web/dev/feature/src/lib/dev-store-tree-select/tree-select.component.ts',
        },
        items: {
          treeData: [
            {
              id: 0,
              name: 'Fruit',
              expandable: true,
              level: 0,
            },
            {
              id: 1,
              name: 'Apple',
              expandable: false,
              level: 1,
            },
            {
              id: 2,
              name: 'Banana',
              expandable: false,
              level: 1,
            },
            {
              id: 3,
              name: 'Fruit loops',
              expandable: false,
              level: 1,
            },
            {
              id: 4,
              name: 'Vegetables',
              expandable: true,
              level: 0,
            },
            {
              id: 5,
              name: 'Green',
              expandable: true,
              level: 1,
            },
            {
              id: 6,
              name: 'Broccoli',
              expandable: false,
              level: 2,
            },
            {
              id: 7,
              name: 'Brussels sprouts',
              expandable: false,
              level: 2,
            },
            {
              id: 8,
              name: 'Orange',
              expandable: true,
              level: 1,
            },
            {
              id: 9,
              name: 'Pumpkins',
              expandable: false,
              level: 2,
            },
            {
              id: 10,
              name: 'Carrots',
              expandable: false,
              level: 2,
            },
          ],
        },
        component_inputs: [
          {
            label: 'Tree Select',
            prop: '[treeData]',
            description: 'Display tree select.',
            dataType: 'Array',
            typeArray: [
              [{ name: 'Fruit' }, { expandable: ['true', 'false'] }, { level: '0' }],
              [{ name: 'Apple' }, { expandable: 'false' }, { level: '1' }],
              [{ name: 'Banana' }, { expandable: ['false', 'true'] }, { level: '1' }],
              [{ name: 'Fruit loops' }, { expandable: ['false', 'true'] }, { level: '1' }],
              [{ name: 'Vegetables' }, { expandable: ['true', 'false'] }, { level: '0' }],
              [{ name: 'Green' }, { expandable: ['true', 'false'] }, { level: '1' }],
              [{ name: 'Broccoli' }, { expandable: ['false', 'true'] }, { level: '2' }],
              [{ name: 'Brussels sprouts' }, { expandable: ['false', 'true'] }, { level: '2' }],
              [{ name: 'Orange' }, { expandable: ['true', 'false'] }, { level: '1' }],
              [{ name: 'Pumpkins' }, { expandable: ['false', 'true'] }, { level: '2' }],
              [{ name: 'Carrots' }, { expandable: ['false', 'true'] }, { level: '2' }],
            ],
          },
          // { label: 'Name', prop: '[name]', description: 'What you want set name title.', dataType: 'String' },
          // { label: 'Expandable', prop: '[expandable]', description: 'Its expand the tree.', dataType: 'Boolean' },
          // { label: 'Level', prop: '[level]', description: 'How many level of tree.', dataType: 'Number' },
        ],
      },
    })
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))
}
