import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { WebUiFormField } from '@schema-driven/web/ui/form'
import { UiIcon } from '@schema-driven/web/ui/icon'

export interface Demo {
  name?: string
  model?: Record<string, unknown>
  fields?: WebUiFormField[]
}

interface Items {
  headerTitle?: string
  githubURL?: string
  breadcrumbs?: Crumb[]
  directory?: string
}

interface DevFormsState {
  items: Items
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
    name: 'Input without border',
    model: {},
    fields: [
      WebUiFormField.email('email', {
        label: 'Email',
        placeholder: 'you@example.com',
        border: 'border-t-0 border-l-0 border-r-0 border-b-1 border-gray-900 bg-transparent',
      }),
    ],
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
    super({
      items: {
        headerTitle: 'Forms',
        githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/form/src/lib/types/input',
        breadcrumbs: [
          { label: 'Components', path: '/dev' },
          { label: 'Forms', path: '/dev/forms' },
        ],
        directory: '/libs/web/dev/feature/src/lib/dev-forms/dev-forms.component.ts',
      },
      demos,
    })
  }

  readonly demos$ = this.select(this.state$, (s) => s.demos)
  readonly items$ = this.select(this.state$, (s) => s.items)
  readonly vm$ = this.select(this.demos$, this.items$, (demos, items) => ({ demos, items }))
}
