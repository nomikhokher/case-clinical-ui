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
export interface Demo {
  name?: string
  model?: Record<string, unknown>
  fields?: WebUiFormField[]
}

interface DevTextareaState {
  demos?: Demo[]
  items?: Item[]
  loading?: boolean
  config
}

const config = {
  headerTitle: 'Text Area',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/form/src/lib/types/textarea',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Text Area', path: '/dev/text-areas' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-textarea.component.ts',
  component_inputs: [
    {
      label: 'Name',
      prop: '[name]',
      description: 'Shows the title of form input.',
      dataType: 'STRING',
    },
    {
      label: 'Name',
      prop: '[model]',
      description: 'Shows the title of form input.',
      dataType: 'STRING',
    },
    {
      label: 'Name',
      prop: '[fields]',
      description: 'Shows the title of form input.',
      dataType: 'STRING',
    },
  ],
}

const demos: Demo[] = [
  {
    name: 'Textarea with label',
    model: {},
    fields: [WebUiFormField.textarea('text', { label: 'Description', placeholder: 'Write the description...' })],
  },
  {
    name: 'Textarea with only 1 row',
    model: {},
    fields: [
      WebUiFormField.textarea('text', {
        label: 'Description',
        placeholder: 'Write the description...',
        rows: 1,
      }),
    ],
  },
  {
    name: 'Textarea with label and help text',
    model: {},
    fields: [
      WebUiFormField.textarea('text', {
        label: 'Product Quality Description',
        placeholder: 'Write the description...',
        description: 'Your description should contain only your product quality.',
      }),
    ],
  },
  {
    name: 'Input with validation error',
    model: { error: 'invalid-text' },
    fields: [
      WebUiFormField.textarea('text', {
        label: 'Description',
        placeholder: 'Write the description...',
        required: true,
      }),
    ],
  },
  {
    name: 'Input with hidden label',
    model: {},
    fields: [WebUiFormField.textarea('text', { label: null, placeholder: 'Write the description...' })],
  },
  {
    name: 'Input with corner hint',
    model: {},
    fields: [
      WebUiFormField.textarea('text', {
        label: 'Description',
        hint: 'Optional',
        placeholder: 'Write the description...',
      }),
    ],
  },
]

@Injectable()
export class DevTextareaStore extends ComponentStore<DevTextareaState> {
  constructor() {
    super({ demos, config })
  }

  readonly demos$ = this.select(this.state$, (s) => s.demos)
  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.demos$, this.config$, (demos, config) => ({ demos, config }))
}
