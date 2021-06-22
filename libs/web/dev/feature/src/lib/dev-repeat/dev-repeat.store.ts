import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { WebUiFormField } from '@schema-driven/web/ui/form'

export interface Item {
  id?: string
  name?: string
}

interface DevRepeatState {
  demos?: Demo[]
  items?: Item[]
  loading?: boolean
}
export interface Demo {
  name?: string
  model?: Record<string, unknown>
  fields?: WebUiFormField[]
}

const demos: Demo[] = [
  {
    name: 'Input with label',
    model: {},
    fields: [WebUiFormField.repeat('repeat', { fieldGroup: [{}] })],
  },
]

@Injectable()
export class DevRepeatStore extends ComponentStore<DevRepeatState> {
  constructor() {
    super({ demos })
  }

  readonly demos$ = this.select(this.state$, (s) => s.demos)
  readonly vm$ = this.select(this.demos$, (demos) => ({ demos }))
}
