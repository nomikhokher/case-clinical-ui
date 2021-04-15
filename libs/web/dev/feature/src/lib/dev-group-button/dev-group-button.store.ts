import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'

export interface Item {
  id?: string
  name?: string
  icon?: string
  dircetion?: string
}
interface DevGroupButtonState {
  buttons?: Item[]
}

const buttons: Item[] = [
  {
    id: '1',
    name: 'Years',
    icon: 'chevronLeft',
    dircetion: 'right',
  },
  {
    id: '2',
    name: 'Months',
    icon: 'chevronRight',
    dircetion: 'right',
  },
  {
    id: '3',
    name: 'Days',
  },
]

@Injectable()
export class DevGroupButtonStore extends ComponentStore<DevGroupButtonState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ buttons })
  }

  readonly buttons$ = this.select(this.state$, (s) => s.buttons)
  readonly vm$ = this.select(this.buttons$, (buttons) => ({ buttons }))
}
