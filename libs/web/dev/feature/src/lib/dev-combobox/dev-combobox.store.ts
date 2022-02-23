import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { UiIcon } from '@schema-driven/web/ui/icon'
import { Configs } from './model'

export interface Item {
  id?: string
  name?: string
}

interface DevComboboxState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

let icon = Object.values(UiIcon)
const config: Configs = {
  headerTitle: 'Combobox',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/combobox/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Combobox', path: '/dev/combobox' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-combobox/dev-combobox.component.ts',
  items: {
    contactCard: {
      id: 1,
      title: 'Jane Cooper',
      tagLine: 'Paradigm Representative',
      email: 'janecooper@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'Admin',
      icon: 'user',
    },
    toggleCard: 'false',
  },
  component_inputs: [
    {
      label: 'Card content',
      prop: '[contactCard]',
      description: 'It shows all your detail in contact card. ',
      dataType: 'Object',
      typeObj: [
        { title: 'Jane Cooper' },
        { tagLine: 'Paradigm Representative' },
        { email: 'janecooper@example.com' },
        {
          image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
        },
        { role: 'Admin' },
        { icon: icon },
      ],
    },
    {
      label: 'Card Style',
      prop: '[toggleCard]',
      description: 'Change the card style. ',
      dataType: 'Boolean',
      type: ['false', 'true'],
    },
  ],
}
@Injectable()
export class DevComboboxStore extends ComponentStore<DevComboboxState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
  }
  readonly items$ = this.select(this.state$, (s) => s.items)
  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.items$, this.config$, (items, config) => ({ items, config }))
}
