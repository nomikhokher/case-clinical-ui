import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from '../dev-multiple-alert/model'

export interface Item {
  id?: string
  name?: string
}

interface DevMultipleAlertState {
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
    tabsData: [
      {
        id: 1,
        icon: 'info_circle',
        title: 'A simple primary alert - check it out!',
      },
      {
        id: 2,
        icon: 'circle',
        title: 'A simple secondary alert - check it out!',
      },
      {
        id: 3,
        icon: 'check_circle',
        title: 'A simple success alert - check it out!',
      },
      {
        id: 4,
        icon: 'times_circle',
        title: 'A simple danger alert - check it out!',
      },
      {
        id: 5,
        icon: 'exclamation_triangle',
        title: `A simple warning alert - check it out!`,
      },
      {
        id: 6,
        icon: 'chevron_circle_right',
        title: `A simple indigo alert - check it out!`,
      },
      {
        id: 7,
        icon: 'grin_hearts',
        title: `A simple light alert - check it out!`,
      },
      {
        id: 8,
        icon: 'gem',
        title: `A simple dark alert - check it out!`,
      },
    ],
  },
}

@Injectable()
export class DevMultipleAlertStore extends ComponentStore<DevMultipleAlertState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config,
    })
    //this.loadItemsEffect()
  }

  // readonly items$ = this.select(this.state$, (s) => s.items)
  // readonly vm$ = this.select(this.items$, (items) => ({ items }))

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))

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
