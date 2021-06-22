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

interface DevCheckboxState {
  demos?: Demo[]
  loading?: boolean
}

const demos: Demo[] = [
  {
    name: 'Check with label',
    model: {},
    fields: [WebUiFormField.checkbox('checkbox', { label: 'Checkbox' })],
  },
  {
    name: 'Checkbox with label and help text',
    model: {},
    fields: [
      WebUiFormField.checkbox('checkbox', {
        label: 'Accept Privacy Policy',
        description: 'Please check if you want to continue',
      }),
    ],
  },
  {
    name: 'Checkbox with no label',
    model: {},
    fields: [WebUiFormField.checkbox('checkbox', { formCheck: 'nolabel' })],
  },
  {
    name: 'Checkbox with required condition',
    model: {},
    fields: [WebUiFormField.checkbox('checkbox', { label: 'Checkbox', required: true })],
  },
  {
    name: 'Checkbox with corner hint',
    model: {},
    fields: [WebUiFormField.checkbox('checkbox', { label: 'Checkbox', hint: 'Optional' })],
  },
  {
    name: 'Checkbox with trailing icon',
    model: {},
    fields: [
      WebUiFormField.checkbox('checkbox', {
        label: 'Checkbox',
        addonRight: { icon: UiIcon.plusCircle },
      }),
    ],
  },
]
@Injectable()
export class DevCheckboxStore extends ComponentStore<DevCheckboxState> {
  constructor() {
    super({ demos })
  }

  readonly demos$ = this.select(this.state$, (s) => s.demos)
  readonly vm$ = this.select(this.demos$, (demos) => ({ demos }))
}
