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

interface DevTooltipState {
  items?: Item[]
  loading?: boolean
  config: Configs
}

const config: Configs = {
  headerTitle: 'ToolTip',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/tooltip/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'ToolTip', path: '/dev/tooltip' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-tooltip/dev-tooltip.component.ts',
  items: {
    text: 'Top Left',
    color: 'gray',
    position: 'top-left', // position = top-left/top-right/top-center/bottom-left/bottom-right/bottom-center
  },

  component_inputs: [
    { label: 'Text', prop: '[text]', description: 'Display the text of tooltip', dataType: 'String' },
    { label: 'Color', prop: '[color]', description: 'Adjust the color of tooltip', dataType: 'String' },
    {
      label: 'Position',
      prop: '[position]',
      description: 'Adjust the position of tooltip',
      dataType: 'String',
      type: ['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center'],
    },
  ],
}

@Injectable()
export class DevTooltipStore extends ComponentStore<DevTooltipState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({ config })
    this.loadItemsEffect()
  }

  readonly config$ = this.select(this.state$, (s) => s.config)
  readonly vm$ = this.select(this.config$, (config) => ({ config }))

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
