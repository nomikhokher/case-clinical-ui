import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from './model'

export interface Item {
  id?: number
  pillsActive?: boolean
  pillsTitle?: string
  pillsDetails?: string
}

interface DevPillsState {
  items?: Item[]
  loading?: boolean
  config: Configs
}
const config: Configs = {
  headerTitle: 'Pills',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/pills/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Pills', path: '/dev/pills' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-section-headings/dev-pills.component.ts',
  items: [
    {
      id: 1,
      pillsActive: true,
      pillsTitle: 'Home',
      pillsDetails: 'Home detail',
    },
    {
      id: 2,
      pillsActive: false,
      pillsTitle: 'Profile',
      pillsDetails: 'Profile detail',
    },
    {
      id: 3,
      pillsActive: false,
      pillsTitle: 'Contact',
      pillsDetails: 'Contact detail',
    },
    {
      id: 4,
      pillsActive: false,
      pillsTitle: 'Disable',
      pillsDetails: '',
    },
  ],
  component_inputs: [],
}

@Injectable()
export class DevPillsStore extends ComponentStore<DevPillsState> {
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
