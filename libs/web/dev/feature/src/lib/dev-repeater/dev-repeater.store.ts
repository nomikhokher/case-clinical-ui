import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { WebUiFormField } from '@schema-driven/web/ui/form'

export interface Demo {
  name?: string
  model?: Record<string, unknown>
  fields?: WebUiFormField[]
}

interface DevRepeaterState {
  headerTitle?: string
  githubURL?: string
  breadcrumbs?: Crumb[]
  directory?: string
  demo?: Demo
  loading?: boolean
}

@Injectable()
export class DevRepeaterStore extends ComponentStore<DevRepeaterState> {
  constructor() {
    super({
      headerTitle: 'Repeater Formly Field',
      githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/form/src/lib/types/repeat',
      breadcrumbs: [
        { label: 'Components', path: '/dev' },
        { label: 'Repeater', path: '/dev/repeater' },
      ],
      directory: '/libs/web/ui/form/src/lib/types/repeat/ui-form-repeat.component.ts',
      demo: {
        name: 'Basic Repeater',
        model: {},
        fields: [
          WebUiFormField.repeat('repeat', {
            fieldGroup: [
              WebUiFormField.input('firstName', { label: 'First Name' }),
              WebUiFormField.input('lastName', { label: 'Last Name' }),
            ],
          }),
        ],
      },
    })
  }

  readonly vm$ = this.select(this.state$, (s) => s)
}
