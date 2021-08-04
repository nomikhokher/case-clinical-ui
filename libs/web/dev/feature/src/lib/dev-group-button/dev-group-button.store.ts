import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { UiIcon } from '@schema-driven/web/ui/icon'
import { Configs } from './model'

interface DevGroupButtonState {
  config?: Configs
}

let icon = Object.values(UiIcon)

const config: Configs = {
  headerTitle: 'Group Button',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/group-button/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Gruop Button', path: '/dev/group-button' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-group-button.component.ts',
  items: {
    buttons: [
      {
        id: '1',
        name: 'Years',
        icon: 'chevronLeft',
        direction: 'left',
      },
      {
        id: '2',
        name: 'Months',
        icon: 'chevronRight',
        direction: 'right',
      },
      {
        id: '3',
        name: 'Days',
      },
    ],
  },
  component_inputs: [
    {
      label: 'Group Buttons',
      prop: '[buttons]',
      description: 'Shows all buttons together',
      dataType: 'Array',
      typeArray: [
        [{ name: 'Years' }, { icon: icon }, { direction: 'left' }],
        [{ name: 'Months' }, { icon: icon }, { direction: 'right' }],
        [{ name: 'Months' }],
      ],
    },
  ],
  component_outputs: [
    { label: 'Click', prop: '(click)', description: 'Invoked when button is clicked', dataType: '() => void' },
  ],
}

@Injectable()
export class DevGroupButtonStore extends ComponentStore<DevGroupButtonState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))
}
