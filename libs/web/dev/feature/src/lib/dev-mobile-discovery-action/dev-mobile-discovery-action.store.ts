import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { ComponentProps, Config, Input } from './model'
import { UiIcon } from '@schema-driven/web/ui/icon'

export interface Item {
  id?: string
  name?: string
  meta?: any[]
}

interface DevMobileDiscoveryActionState {
  componentProps?: ComponentProps[]
  headerTitle?: string
  githubURL?: string
  breadcrumbs?: Crumb[]
  directory?: string
  items?: Item
  loading?: boolean
  component_inputs?: Input[]
}
let icon = Object.values(UiIcon)
@Injectable()
export class DevMobileDiscoveryActionStore extends ComponentStore<DevMobileDiscoveryActionState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      headerTitle: 'Discovery',
      githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/mobile-discovery-action/src/lib',
      breadcrumbs: [
        { label: 'Components', path: '/dev' },
        { label: 'Discovery', path: '/dev/mobile-discovery-action' },
      ],
      directory: '/libs/web/dev/feature/src/lib/dev-mobile-discovery-action/dev-mobile-discovery-action.component.ts',
      componentProps: [
        { name: 'buttons', value: 'buttons' },
        { name: 'lowerSubHeadings', value: 'lowerSubHeadings' },
        { name: 'upperSubHeadings', value: 'upperSubHeadings' },
      ],
      items: {
        meta: [
          { label: '', icon: 'briefcase' },
          { label: '', icon: 'locationMarker' },
          { label: '', icon: 'currencyDollar' },
        ],
      },

      component_inputs: [
        {
          label: 'Data',
          prop: '[meta]',
          description: 'Show all data of the header',
          dataType: 'Array',
          typeArray: [
            [{ label: '' }, { icon: icon }],
            [{ label: '' }, { icon: icon }],
            [{ label: '' }, { icon: icon }],
          ],
        },
      ],
    })
  }
  readonly vm$ = this.select(this.state$, (s) => s)
}
