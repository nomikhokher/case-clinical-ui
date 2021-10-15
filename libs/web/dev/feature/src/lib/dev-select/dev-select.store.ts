import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { WebUiFormField } from '@schema-driven/web/ui/form'
import { UiIcon } from '@schema-driven/web/ui/icon'

export interface Demo {
  name?: string
  model?: Record<string, unknown>
  fields?: WebUiFormField[]
}

export interface Item {
  id?: string
  name?: string
}

const config = {
  headerTitle: 'Select Menu',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/form/src/lib/types/select',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Select Menu', path: '/dev/select-menus' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-select.component.ts',
  component_inputs: [
    {
      label: 'Name',
      prop: '[name]',
      description: 'Shows the title of form input.',
      dataType: 'STRING',
    },
    {
      label: 'Model',
      prop: '[model]',
      description: 'Shows the model of form input.',
      dataType: 'Object',
    },
    {
      label: 'Fields',
      prop: '[fields]',
      description: 'Handle the input fields.',
      dataType: 'Object',
    },
  ],
}

interface DevSelectState {
  demos?: Demo[]
  items?: Item[]
  loading?: boolean
  config
}
export interface opts {
  label?: string
  value?: string
  disabled?: boolean
}
const opts: opts[] = [
  { label: 'Islamabad', value: 'Islamabad' },
  { label: 'London', value: 'London' },
  { label: 'Moscow', value: 'Moscow' },
  { label: 'New York', value: 'New York' },
  { label: 'Beijing', value: 'Beijing' },
]

const demos: Demo[] = [
  {
    name: 'Multiple Select Menu',
    model: {},
    fields: [WebUiFormField.select('Select', { label: 'Select', multiple: true, options: opts })],
  },
  {
    name: 'Multiple Select Menu with some disabled properties',
    model: {},
    fields: [
      WebUiFormField.select('Select', {
        label: 'Select',
        multiple: true,
        options: [
          { label: 'Islamabad', value: 'Islamabad' },
          { label: 'London', value: 'London', disabled: true },
          { label: 'Moscow', value: 'Moscow' },
          { label: 'New York', value: 'New York' },
          { label: 'Beijing', value: 'Beijing', disabled: true },
        ],
      }),
    ],
  },
  {
    name: 'Single Select Menu',
    model: {},
    fields: [
      WebUiFormField.select('select', {
        label: 'select',
        placeholder: 'No Select',
        options: opts,
      }),
    ],
  },
  {
    name: 'Disbaled Select Menu',
    model: {},
    fields: [WebUiFormField.select('Select', { label: 'select', disabled: true, placeholder: 'No Selection' })],
  },
  {
    name: 'Select Menu with some disabled properties',
    model: {},
    fields: [
      WebUiFormField.select('Select', {
        label: 'Select',
        placeholder: 'No Selection',
        options: [
          { label: 'Islamabad', value: 'Islamabad' },
          { label: 'London', value: 'London' },
          { label: 'Moscow', value: 'Moscow', disabled: true },
          { label: 'New York', value: 'New York' },
          { label: 'Beijing', value: 'Beijing', disabled: true },
        ],
      }),
    ],
  },
  {
    name: 'Select Menu with label and help text',
    model: {},
    fields: [
      WebUiFormField.select('Select', {
        label: 'Select',
        placeholder: 'No Select',
        options: opts,
        description: 'Please select one city from given options',
      }),
    ],
  },
  {
    name: 'Select Menu with validation error',
    model: { select: 'invalid-select' },
    fields: [WebUiFormField.select('Select', { label: 'Select', required: true, options: opts })],
  },
  {
    name: 'Select Menu with hidden label',
    model: {},
    fields: [WebUiFormField.select('Select', { label: null, placeholder: 'No Selection', options: opts })],
  },
  {
    name: 'Select Menu with corner hint',
    model: {},
    fields: [WebUiFormField.select('Select', { label: 'select', hint: 'Optional', options: opts })],
  },

  {
    name: 'Select Menu with leading icon',
    model: {},
    fields: [
      WebUiFormField.select('select', {
        label: 'select',
        placeholder: 'No Selection',
        options: opts,
        addonLeft: { icon: UiIcon.at },
      }),
    ],
  },
]
@Injectable()
export class DevSelectStore extends ComponentStore<DevSelectState> {
  constructor() {
    super({ demos, config })
  }

  readonly demos$ = this.select(this.state$, (s) => s.demos)
  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.demos$, this.config$, (demos, config) => ({ demos, config }))
}
