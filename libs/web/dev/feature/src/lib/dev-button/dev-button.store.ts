import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'

export interface Item {
  id?: string
  name?: string
}

interface DevButtonState {
  items?: Item[]
  loading?: boolean
}

@Injectable()
export class DevButtonStore extends ComponentStore<DevButtonState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({})
    this.loadItemsEffect()
  }

  readonly items$ = this.select(this.state$, (s) => s.items)
  readonly vm$ = this.select(this.items$, (items) => ({ items }))

  readonly loadItemsEffect = this.effect(($) =>
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
  )
}
