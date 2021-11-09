import { Injectable } from '@angular/core'
import { ComponentStore } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Crumb } from '@schema-driven/web/ui/breadcrumbs'
import { ComponentProps, Config, Input } from './models'
import { UiIcon } from '@schema-driven/web/ui/icon'

export interface Item {
  meta?: any[]
}

interface DevPageHeadingsState {
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
export class DevPageHeadingsStore extends ComponentStore<DevPageHeadingsState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      headerTitle: 'Page Headings',
      githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/page-headings/src/lib',
      breadcrumbs: [
        { label: 'Components', path: '/dev' },
        { label: 'Page Headings', path: '/dev/page/headings' },
      ],
      directory: '/libs/web/dev/feature/src/lib/dev-page-headings/dev-page-headings.component.ts',
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
