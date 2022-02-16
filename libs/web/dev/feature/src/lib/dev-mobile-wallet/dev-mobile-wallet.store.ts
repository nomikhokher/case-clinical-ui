import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { ComponentProps, Config, Input } from './model'
import { UiIcon } from '@schema-driven/web/ui/icon'

export interface Item {
  meta?: any[]
}
interface DevMobileWalletState {
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
export class DevMobileWalletStore extends ComponentStore<DevMobileWalletState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      headerTitle: 'Wallet',
      githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/mobile-wallet/src/lib',
      breadcrumbs: [
        { label: 'Components', path: '/dev' },
        { label: 'Wallet', path: '/dev/mobile-wallet' },
      ],
      directory: '/libs/web/dev/feature/src/lib/dev-mobile-wallet/dev-mobile-wallet.component.ts',
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
