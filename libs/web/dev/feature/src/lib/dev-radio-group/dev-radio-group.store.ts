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

interface DevRadioGroupState {
  demos?: Demo[]
  items?: Item[]
  loading?: boolean
}

const items: Item[] = [
  {
    name: 'Input with label',
    id: '1',
    fields: [WebUiFormField.radio('field', { label: 'Email', placeholder: 'you@example.com' })],
  },
  {
    name: 'Input without border',
    id: '2',
  },
  {
    name: 'Input with label and help text',
    id: '3',
    fields: [WebUiFormField.email('radio', { name: 'Radioasd', id: 3 })],
  },
  {
    name: 'Input with validation error',
    id: '4',
  },
  {
    name: 'Input with hidden label',
    id: '5',
  },
]

const demos: Demo[] = [
  {
    id: 1,
    name: 'Input with label',
    label: 'RaDIO',
    model: {},
    fields: [WebUiFormField.radio('radio', { name: 'Radio', id: 1, label: 'asdf' }, items)],
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
    fields: [WebUiFormField.radio('radio', { label: 'Radio', placeholder: 'you@example.com' })],
  },
  {
    name: 'Input with hidden label',
    model: {},
    fields: [WebUiFormField.checkbox('email', { label: 'Testing', placeholder: 'you@example.com' })],
  },
  {
    name: 'Input with corner hint',
    model: {},
    fields: [WebUiFormField.select('email', { label: 'Email', hint: 'Optional', placeholder: 'you@example.com' })],
  },
  {
    name: 'Input with leading icon',
    model: {},
    fields: [
      WebUiFormField.email('email', {
        label: 'Email',
        placeholder: 'you@example.com',
      }),
    ],
  },
  {
    name: 'Input with trailing icon',
    model: {},
    fields: [
      WebUiFormField.radio('email', {
        label: 'Email',
        placeholder: 'you@example.com',
      }),
    ],
  },
  {
    name: 'Input with add-on',
    model: {},
    fields: [
      WebUiFormField.multicheckbox('email', {
        label: 'Email',
        placeholder: 'you@example.com',
        addonLeft: { text: 'http://', paddingLeft: '4rem', bordered: true },
      }),
    ],
  },
]

@Injectable()
export class DevRadioGroupStore extends ComponentStore<DevRadioGroupState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ items, demos })
    this.loadItemsEffect()
  }
  readonly demos$ = this.select(this.state$, (s) => s.demos)
  readonly vm$ = this.select(this.demos$, (demos) => ({ demos }))
  //  readonly items$ = this.select(this.state$, (s) => s.items)
  // readonly vm$ = this.select(this.items$, (items) => ({ items }))

  readonly loadItemsEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(() =>
        of([{ id: Date.now().toString(), name: 'Item 2' }]).pipe(
          tapResponse(
            (res) => this.patchState({ items: res }),
            (e: any) => console.error('An error occurred', e),
          ),
        ),
      ),
    ),
  )
}
