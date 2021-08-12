import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Configs } from './model/index'

export interface Item {
  id?: string
  name?: string
}

interface DevMultiSelectState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Multi Select',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/multi-select/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Multi Select', path: '/dev/multi-select' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-multi-select/dev-multi-select.component.ts',
  items: {
    data: [
      { id: 1, value: 'Option 1' },
      { id: 2, value: 'Option 2' },
      { id: 3, value: 'Option 3' },
      { id: 4, value: 'Option 4' },
      { id: 5, value: 'Option 5' },
      { id: 6, value: 'Option 6' },
    ],
  },
  component_inputs: [
    {
      label: 'Data',
      prop: '[data]',
      description: 'Display all the data in multi select.',
      dataType: 'Array<object>',
      typeArray: [
        [{ id: '1' }, { value: 'Option 1' }],
        [{ id: '2' }, { value: 'Option 2' }],
        [{ id: '3' }, { value: 'Option 3' }],
        [{ id: '4' }, { value: 'Option 4' }],
        [{ id: '5' }, { value: 'Option 5' }],
        [{ id: '6' }, { value: 'Option 6' }],
      ],
    },
  ],
}

@Injectable()
export class DevMultiSelectStore extends ComponentStore<DevMultiSelectState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))
}
