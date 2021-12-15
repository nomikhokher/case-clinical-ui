import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from '../dev-countdown/model'
//import { Configs } from '../dev-countdown/model'
export interface Item {
  id?: string
  name?: string
}

interface DevCountdownState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'CountDown',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/countdown/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'CountDown', path: '/dev/countdown' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-countdown.component.ts',
  items: {
    width: 'max-w-2xl',
    overlayColor: 'bg-gray-500 ',
    overlayOpacity: 'bg-opacity-75 ',
    slideOverHeader: true,
    slideOverFooter: true,
    closeButtonOutSide: true,
  },
}

@Injectable()
export class DevCountdownStore extends ComponentStore<DevCountdownState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config,
    })
    // this.loadItemsEffect()
  }
  //readonly config$ = this.select(this.state$, (s) => s.config)
  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))

  /* readonly loadItemsEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap(() =>
        of([{ id: Date.now().toString(), name: 'Item 1' }]).pipe(
          tapResponse(
            (res) => this.patchState({ items: res }),
            (e: any) => console.error('An error occurred', e),
          ),
        ),
      ),
    ),
  )*/
}
