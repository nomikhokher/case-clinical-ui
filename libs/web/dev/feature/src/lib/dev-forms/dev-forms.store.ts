import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { WebUiFormField } from '@schema-driven/web/ui/form'
import { UiIcon } from '@schema-driven/web/ui/icon'

export interface Demo {
  name?: string
  model?: Record<string, unknown>
  fields?: WebUiFormField[]
}

interface DevFormsState {
  demos?: Demo[]
  loading?: boolean
}

const demos: Demo[] = [
  {
    name: 'Input with label',
    model: {},
    fields: [WebUiFormField.email('email', { label: 'Email', placeholder: 'you@example.com' })],
  },
  {
    name: 'Input with label and help text',
    model: {},
    fields: [
      WebUiFormField.email('email', {
        label: 'Email',
        placeholder: 'you@example.com',
        description: 'Make your password short and easy to guess.',
      }),
    ],
  },
  {
    name: 'Input with validation error',
    model: { email: 'invalid-email' },
    fields: [WebUiFormField.email('email', { label: 'Email', placeholder: 'you@example.com' })],
  },
  {
    name: 'Input with hidden label',
    model: {},
    fields: [WebUiFormField.email('email', { label: null, placeholder: 'you@example.com' })],
  },
  {
    name: 'Input with corner hint',
    model: {},
    fields: [WebUiFormField.email('email', { label: 'Email', hint: 'Optional', placeholder: 'you@example.com' })],
  },
  {
    name: 'Input with leading icon',
    model: {},
    fields: [
      WebUiFormField.email('email', {
        label: 'Email',
        placeholder: 'you@example.com',
        addonLeft: { icon: UiIcon.at },
      }),
    ],
  },
  {
    name: 'Input with trailing icon',
    model: {},
    fields: [
      WebUiFormField.email('email', {
        label: 'Email',
        placeholder: 'you@example.com',
        addonRight: { icon: UiIcon.plusCircle },
      }),
    ],
  },
  {
    name: 'Input with add-on',
    model: {},
    fields: [
      WebUiFormField.email('email', {
        label: 'Email',
        placeholder: 'you@example.com',
        addonLeft: { text: 'http://', paddingLeft: '4rem', bordered: true },
      }),
    ],
  },
]

@Injectable()
export class DevFormsStore extends ComponentStore<DevFormsState> {
  constructor() {
    super({ demos })
  }

  readonly demos$ = this.select(this.state$, (s) => s.demos)
  readonly vm$ = this.select(this.demos$, (demos) => ({ demos }))
}
