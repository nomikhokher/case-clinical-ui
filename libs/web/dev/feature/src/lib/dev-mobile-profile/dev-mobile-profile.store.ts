import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { ComponentProps, Config, Input } from './model'
import { UiIcon } from '@schema-driven/web/ui/icon'

export interface Item {
  meta?: any[]
}
interface DevMobileProfileState {
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
export class DevMobileProfileStore extends ComponentStore<DevMobileProfileState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      headerTitle: 'Profile',
      githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/mobile-profile/src/lib',
      breadcrumbs: [
        { label: 'Components', path: '/dev' },
        { label: 'Profile', path: '/dev/mobile-profile' },
      ],
      directory: '/libs/web/dev/feature/src/lib/dev-mobile-profile/dev-mobile-profile.component.ts',
      componentProps: [
        { name: 'buttons', value: 'buttons' },
        { name: 'lowerSubHeadings', value: 'lowerSubHeadings' },
        { name: 'upperSubHeadings', value: 'upperSubHeadings' },
      ],
      items: {
        meta: [
          { label: 'Jobs', icon: 'briefcase' },
          { label: 'Remote', icon: 'locationMarker' },
          { label: '$120k – $140k', icon: 'currencyDollar' },
        ],
      },

      component_inputs: [
        {
          label: 'Data',
          prop: '[meta]',
          description: 'Show all data of the header',
          dataType: 'Array',
          typeArray: [
            [{ label: 'Jobs' }, { icon: icon }],
            [{ label: 'Remote' }, { icon: icon }],
            [{ label: '$120k – $140k' }, { icon: icon }],
          ],
        },
      ],
    })
  }
  readonly vm$ = this.select(this.state$, (s) => s)
}
