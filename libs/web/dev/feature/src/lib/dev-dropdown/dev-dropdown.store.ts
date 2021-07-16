import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Configs } from './model'

export interface Item {
  id: string
  name: string
}

interface DevDropdownState {
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Dropdown',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/dropdown/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Dropdown', path: '/dev/dropdown' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-dropdown.component.ts',
  items: {
    data: [
      {
        id: '1',
        name: 'Account settings',
        icons: 'dismiss',
      },
      {
        id: '2',
        name: 'Support',
      },
      {
        id: '3',
        name: 'License',
      },
      {
        id: '4',
        name: 'Delete',
      },
    ],
  },

  component_inputs: [{ label: 'Data', prop: '[data]', description: 'Shows all data of list', dataType: 'Object' }],
}

@Injectable()
export class DevDropdownStore extends ComponentStore<DevDropdownState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))
}
