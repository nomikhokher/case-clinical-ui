import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { WebUiFormField } from '@schema-driven/web/ui/form'

export interface Item {
  id?: string
  name?: string
  fields?: WebUiFormField[]
}
export interface Demo {
  id?: Number
  label?: String
  name?: string
  model?: Record<string, unknown>
  fields?: WebUiFormField[]
}
export interface opts {
  id?: Number
  label?: String
  disabled?: boolean
  value?: string
}

interface DevRadioGroupState {
  opts?: opts[]
  demos?: Demo[]
  items?: Item[]
  loading?: boolean
  config
}
const opts: opts[] = [
  { id: 1, label: 'Male', value: 'Male' },
  { id: 2, label: 'Female', value: 'Female' },
  { id: 3, label: 'Others', value: 'Others' },
]

const config = {
  headerTitle: 'Radio Groups',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/form/src/lib/types/radio',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Radio Groups', path: '/dev/radio-group' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-radio-group.component.ts',
}

const demos: Demo[] = [
  {
    name: 'Radio Inputs with label',
    model: {},
    fields: [WebUiFormField.radio('value', { label: 'Gender', options: opts })],
  },
  {
    name: 'Disabled Radio Inputs',
    model: {},
    fields: [
      WebUiFormField.radio('value', {
        label: 'Gender',
        options: [
          { id: 12, label: 'Radio 1', value: 'Radio 1' },
          { id: 13, label: 'Radio 2', value: 'Radio 2' },
        ],
        disabled: true,
      }),
    ],
  },
  {
    name: 'Radio Inputs with label and help text',
    model: {},
    fields: [
      WebUiFormField.radio('value', {
        label: 'Gender',
        options: opts,
        description: 'Please choose your gender',
      }),
    ],
  },
  {
    name: 'Input with validation error',
    model: { email: 'invalid-email' },
    fields: [WebUiFormField.radio('value', { label: 'Gender', options: opts, required: true })],
  },
  {
    name: 'Input with hidden label',
    model: {},
    fields: [WebUiFormField.radio('value', { label: 'City', options: [{ id: 10, label: null, value: 'London' }] })],
  },
  {
    name: 'Input with corner hint',
    model: {},
    fields: [WebUiFormField.radio('value', { label: 'Gender', hint: 'Optional', options: opts })],
  },
]

@Injectable()
export class DevRadioGroupStore extends ComponentStore<DevRadioGroupState> {
  constructor() {
    super({ demos, config })
  }

  readonly demos$ = this.select(this.state$, (s) => s.demos)
  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.demos$, this.config$, (demos, config) => ({ demos, config }))
}
