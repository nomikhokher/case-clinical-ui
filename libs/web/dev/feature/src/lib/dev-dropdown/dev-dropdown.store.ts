import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'

export interface Item {
  id: string
  name: string
  icons?: string
}

interface DevDropdownState {
  items?: Item[]
  loading?: boolean
}

const items: Item[] = [
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
]

@Injectable()
export class DevDropdownStore extends ComponentStore<DevDropdownState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ items })
  }

  readonly items$ = this.select(this.state$, (s) => s.items)
  readonly vm$ = this.select(this.items$, (items) => ({ items }))
}
