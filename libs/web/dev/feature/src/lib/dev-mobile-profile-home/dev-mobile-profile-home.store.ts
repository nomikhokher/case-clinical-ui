import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { ComponentProps, Config, Input } from './model'
import { UiIcon } from '@schema-driven/web/ui/icon'

export interface Item {
  id?: string
  name?: string
  meta?: any[]
}

interface DevMobileProfileHomeState {
  items?: Item[]
  loading?: boolean
  componentProps?: ComponentProps[]
  headerTitle?: string
  githubURL?: string
  breadcrumbs?: Crumb[]
  directory?: string
  component_inputs?: Input[]
}
let icon = Object.values(UiIcon)
@Injectable()
export class DevMobileProfileHomeStore extends ComponentStore<DevMobileProfileHomeState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      headerTitle: 'Profile',
      githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/mobile-profile-home/src/lib',
      breadcrumbs: [
        { label: 'Components', path: '/dev' },
        { label: 'Profile', path: '/dev/mobile-profile-home' },
      ],
      directory: '/libs/web/dev/feature/src/lib/dev-mobile-profile-home/dev-mobile-profile-home.component.ts',
      componentProps: [
        { name: 'buttons', value: 'buttons' },
        { name: 'lowerSubHeadings', value: 'lowerSubHeadings' },
        { name: 'upperSubHeadings', value: 'upperSubHeadings' },
      ],
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
