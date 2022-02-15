import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from '../dev-mobile-wrapper/model'
export interface Item {
  id?: string
  name?: string
}

interface DevMobileWrapperState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}
const config: Configs = {
  headerTitle: 'List Group',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/list-group/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'List Group', path: '/dev/list-group' },
  ],
  directory: 'libs/web/dev/feature/src/lib/dev-list-group/dev-list-group0.component.ts',
}

@Injectable()
export class DevMobileWrapperStore extends ComponentStore<DevMobileWrapperState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
    //this.loadItemsEffect()
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
