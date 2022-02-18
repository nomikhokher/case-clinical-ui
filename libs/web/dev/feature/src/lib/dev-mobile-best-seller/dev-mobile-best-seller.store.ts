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

interface DevMobileBestSellerState {
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
export class DevMobileBestSellerStore extends ComponentStore<DevMobileBestSellerState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      headerTitle: 'Best Seller',
      githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/mobile-best-seller/src/lib',
      breadcrumbs: [
        { label: 'Components', path: '/dev' },
        { label: 'Best Seller', path: '/dev/mobile-best-seller' },
      ],
      directory: '/libs/web/dev/feature/src/lib/dev-mobile-best-seller/dev-mobile-best-seller.component.ts',
      componentProps: [
        { name: 'buttons', value: 'buttons' },
        { name: 'lowerSubHeadings', value: 'lowerSubHeadings' },
        { name: 'upperSubHeadings', value: 'upperSubHeadings' },
      ],
      items: {
        meta: [
          { label: '', icon: '' },
          { label: '', icon: '' },
          { label: '', icon: '' },
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
