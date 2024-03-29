import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from '../dev-feature-sections-by-grid-with-offset-icons/model'

export interface Item {
  id?: string
  name?: string
}

interface DevFeatureSectionsByGridWithOffsetIconsState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Product Features',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/product-features/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Product Features', path: '/dev/product-features' },
  ],
  directory: 'libs/web/dev/feature/src/lib/dev-product-features/dev-product-features.component.ts',
  items: {
    featureOverview: {
      heading: 'Everything you need to deploy your app',
      description: `Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra nulla.`,
    },

    tabsData: [
      {
        id: 1,
        icon: 'cloud_upload',
        title: 'Push to Deploy',
        description: `Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.`,
      },
      {
        id: 2,
        icon: 'lock_closed',
        title: 'SSL Certificates',
        description: `Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.`,
      },
      {
        id: 3,
        icon: 'refresh',
        title: 'Simple Queues',
        description: `Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.`,
      },
      {
        id: 4,
        icon: 'sheild_check',
        title: `Advance Security`,
        description: `Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.`,
      },
      {
        id: 5,
        icon: 'cog',
        title: `Powerful API`,
        description: `Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.`,
      },
      {
        id: 6,
        icon: 'server',
        title: `Database Backups`,
        description: `Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.`,
      },
    ],
  },
}

@Injectable()
export class DevFeatureSectionsByGridWithOffsetIconsStore extends ComponentStore<DevFeatureSectionsByGridWithOffsetIconsState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config,
    })
    //this.loadItemsEffect()
  }

  //readonly items$ = this.select(this.state$, (s) => s.items)
  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))
  getValueOfDate() {}
  // readonly loadItemsEffect = this.effect(($) =>
  //   $.pipe(
  //     tap(() => this.patchState({ loading: true })),
  //     switchMap(() =>
  //       of([{ id: Date.now().toString(), name: 'Item 1' }]).pipe(
  //         tapResponse(
  //           (res) => this.patchState({ items: res }),
  //           (e: any) => console.error('An error occurred', e),
  //         ),
  //       ),
  //     ),
  //   ),
  // )
}
