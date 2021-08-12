import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { WebUiFormField } from '@schema-driven/web/ui/form'
import { UiIcon } from '@schema-driven/web/ui/icon'

export interface Item {
  id?: string
  name?: string
}

const config = {
  headerTitle: 'Multi Checkbox',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/form/src/lib/types/multicheckbox',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Multi Checkbox', path: '/dev/multi-checkboxs' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-multi-checkbox.component.ts',
}

interface DevMultiCheckboxState {
  optsReq?: optsReq[]
  opts?: opts[]
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
export interface opts {
  label?: string
  id?: number
  value?: string
}
export interface optsReq {
  label?: string
  id?: number
  value?: string
  required?: boolean
}
const optsReq: optsReq[] = [
  { id: 2, label: 'Install Mongo Compass', value: 'installation', required: true },
  { id: 1, label: 'Accept Privacy Policy', value: 'privacy', required: true },
]

const opts: opts[] = [
  { id: 1, label: 'Fontend Developer', value: 'fontend' },
  { id: 2, label: 'Backend Developer', value: 'backend' },
  { id: 3, label: 'Database Specialist', value: 'database' },
  { id: 4, label: 'UI/UX', value: 'ui/ux' },
]
const demos: Demo[] = [
  {
    name: 'Multiple Checkbox with label',
    model: {},
    fields: [WebUiFormField.multicheckbox('multicheckbox', { options: opts })],
  },
  {
    name: 'Checkbox with label and help text',
    model: {},
    fields: [
      WebUiFormField.multicheckbox('multicheckbox', {
        options: opts,
        description: 'Please check if you want to continue',
      }),
    ],
  },
  {
    name: 'Checkbox with corner hint',
    model: {},
    fields: [WebUiFormField.multicheckbox('multicheckbox', { options: optsReq, hint: 'Optional' })],
  },
  {
    name: 'Checkbox with trailing icon',
    model: {},
    fields: [
      WebUiFormField.multicheckbox('multicheckbox', {
        options: opts,
        addonRight: { icon: UiIcon.plusCircle },
      }),
    ],
  },
]
@Injectable()
export class DevMultiCheckboxStore extends ComponentStore<DevMultiCheckboxState> {
  constructor() {
    super({ demos, config })
  }

  readonly demos$ = this.select(this.state$, (s) => s.demos)
  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.demos$, this.config$, (demos, config) => ({ demos, config }))
}
