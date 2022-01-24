import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from './model'

export interface Item {
  id?: string
  name?: string
}

interface DevMaskState {
  items?: Item[]
  loading?: boolean
  config: Configs
}
const config: Configs = {
  headerTitle: 'Mask',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/mask/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Mask', path: '/dev/mask' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-section-headings/dev-mask.component.ts',
  items: {
    images: [
      { path: '/assets/carousels/photo-1489365091240-6a18fc761ec2.jpg', bgColor: 'indigo' },
      { path: '/assets/carousels/photo-1547691889-841a6f1c5ca6.jpg', bgColor: 'purple' },
      { path: '/assets/carousels/photo-1595433562696-a8b1cb8bdad1.jpg', bgColor: 'green' },
      { path: '/assets/carousels/photo-1495563381401-ecfbcaaa60f2.jpg', bgColor: 'red' },
      { path: '/assets/carousels/photo-1534801022022-6e319a11f249.jpg', bgColor: 'white' },
      { path: '/assets/carousels/photo-1524324463413-57e3d8392df1.jpg', bgColor: 'blue' },
    ],
  },
  component_inputs: [
    {
      label: 'Images',
      prop: '[images]',
      description: 'Display Images in the mask',
      dataType: 'Array',
      typeArray: [
        [
          {
            bgColor: 'indigo',
          },
        ],
        [
          {
            bgColor: 'purpule',
          },
        ],
        [
          {
            bgColor: 'green',
          },
        ],
        [
          {
            bgColor: 'red',
          },
        ],
        [
          {
            bgColor: 'white',
          },
        ],
        [
          {
            bgColor: 'blue',
          },
        ],
      ],
    },
  ],
}

@Injectable()
export class DevMaskStore extends ComponentStore<DevMaskState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
    // this.loadItemsEffect()
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))
}
