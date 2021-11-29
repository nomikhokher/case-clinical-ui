import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { Configs } from './model'

export interface Item {
  id?: string
  name?: string
}

interface DevUserBadgeState {
  items?: Item[]
  loading?: boolean
  config: Configs
}
const config: Configs = {
  headerTitle: 'User Badge',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/user-badge/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'User Badge', path: '/dev/user-badge' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-user-badge/dev-user-badge.component.ts',
  items: {
    userData: {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      img:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  component_inputs: [
    {
      label: 'User Data',
      prop: '[userData]',
      description: 'Holds the user name, role and image path.',
      dataType: 'Object',
      typeObj: [
        { name: 'Lindsay Walton' },
        { role: 'Front-end Developer' },
        {
          img:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],
    },
  ],
}

@Injectable()
export class DevUserBadgeStore extends ComponentStore<DevUserBadgeState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
    // this.loadItemsEffect()
  }

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
