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
        icon: 'information_circle',
        title: 'A simple primary alert - check it out!',
        bgColor: 'bg-blue-100',
        textColor: 'text-blue-700',
      },
      {
        id: 2,
        icon: 'circle',
        title: 'A simple secondary alert - check it out!',
        bgColor: 'bg-purple-100',
        textColor: 'text-purple-700',
      },
      {
        id: 3,
        icon: 'check_circle',
        title: 'A simple success alert - check it out!',
        bgColor: 'bg-green-100',
        textColor: 'text-green-700',
      },
      {
        id: 4,
        icon: 'x_circle',
        title: 'A simple danger alert - check it out!',
        bgColor: 'bg-red-100',
        textColor: 'text-red-700',
      },
      {
        id: 5,
        icon: 'exclamation',
        title: `A simple warning alert - check it out!`,
        bgColor: 'bg-yellow-100',
        textColor: 'text-yellow-700',
      },
      {
        id: 6,
        icon: 'chevronRight',
        title: `A simple indigo alert - check it out!`,
        bgColor: 'bg-indigo-100',
        textColor: 'text-indigo-700',
      },
      {
        id: 7,
        icon: 'emoji_happy',
        title: `A simple light alert - check it out!`,
        bgColor: 'bg-gray-50',
        textColor: 'text-gray-500',
      },
      {
        id: 8,
        icon: 'eye',
        title: `A simple dark alert - check it out!`,
        bgColor: 'bg-gray-300',
        textColor: 'text-gray-800',
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
