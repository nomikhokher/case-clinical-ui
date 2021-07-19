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

const config = {
  headerTitle: 'Repeat',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/form/src/lib/types/repeat',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Repeat', path: '/dev/repeat' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-repeat.component.ts',
}

interface DevRepeatState {
  demos?: Demo[]
  items?: Item[]
  loading?: boolean
  config
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
    super({ demos, config })
  }

  readonly demos$ = this.select(this.state$, (s) => s.demos)
  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.demos$, this.config$, (demos, config) => ({ demos, config }))
}
