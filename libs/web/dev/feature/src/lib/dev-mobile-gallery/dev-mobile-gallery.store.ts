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

interface DevMobileGalleryState {
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
export class DevMobileGalleryStore extends ComponentStore<DevMobileGalleryState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      headerTitle: 'Gallery',
      githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/mobile-gallery/src/lib',
      breadcrumbs: [
        { label: 'Components', path: '/dev' },
        { label: 'Gallery', path: '/dev/mobile-gallery' },
      ],
      directory: '/libs/web/dev/feature/src/lib/dev-mobile-gallery/dev-mobile-gallery.component.ts',
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
