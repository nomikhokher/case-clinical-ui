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

interface DevMobileDetailState {
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
export class DevMobileDetailStore extends ComponentStore<DevMobileDetailState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      headerTitle: 'Detail',
      githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/mobile-detail/src/lib',
      breadcrumbs: [
        { label: 'Components', path: '/dev' },
        { label: 'Detail', path: '/dev/mobile-detail' },
      ],
      directory: '/libs/web/dev/feature/src/lib/dev-mobile-detail/dev-mobile-detail.component.ts',
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
