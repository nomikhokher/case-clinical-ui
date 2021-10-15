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
  component_inputs?: Inputs[]
}

interface Inputs {
  label?: string
  prop?: string
  description?: string
  dataType?: string
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
              WebUiFormField.input('firstName', { label: 'First Name' }, { className: 'sm:col-span-6' }),
              WebUiFormField.input('lastName', { label: 'Last Name' }, { className: 'sm:col-span-3' }),
            ],
          }),
        ],
      },
      component_inputs: [
        { label: 'Name', prop: '[name]', description: 'Name', dataType: 'String' },
        { label: 'Model', prop: '[model]', description: 'Model', dataType: 'Object' },
        {
          label: 'Fields',
          prop: '[fields]',
          description: 'Shows the element that user wants to repeat.',
          dataType: 'Object',
        },
      ],
    })
  }

  readonly vm$ = this.select(this.state$, (s) => s)
}
