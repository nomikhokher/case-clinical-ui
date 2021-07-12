import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from './model/range-slider.model'

export interface Item {
  id?: string
  name?: string
}

interface DevRangeSliderState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Range Slider',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/feed/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Range Slider', path: '/dev/range-sliders' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-range-slider.component.ts',
  items: {
    minprice: 100,
    maxprice: 1000,
    difference: 50,
  },

  component_inputs: [
    { label: 'Minimum Price', prop: '[minprice]', description: 'Change minimum price', dataType: 'number' },
    { label: 'Maximum Price', prop: '[maxprice]', description: 'Change maximum price', dataType: 'number' },
    { label: 'Difference', prop: '[difference]', description: 'Change difference price', dataType: 'number' },
  ],
}

@Injectable()
export class DevRangeSliderStore extends ComponentStore<DevRangeSliderState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
    this.loadItemsEffect()
  }

  readonly items$ = this.select(this.state$, (s) => s.items)
  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.items$, this.config$, (items, config) => ({ items, config }))

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
