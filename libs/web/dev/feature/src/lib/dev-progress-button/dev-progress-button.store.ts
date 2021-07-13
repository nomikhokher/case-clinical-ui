import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from '../dev-progress-button/model'

export interface Item {
  id?: string
  name?: string
}

interface DevProgressButtonState {
  items?: Item[]
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Progress Button',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/progress-button/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Progress Button', path: '/dev/progress-button' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-progress-button.component.ts',
  items: {
    buttons: [
      {
        text: 'Spin Left',
        color: 'red',
        position: 'left',
        icon: 'spinners',
      },
      {
        text: 'Spin Right',
        color: 'green',
        position: 'right',
        icon: 'spinners',
      },
    ],
  },

  component_inputs: [
    { label: 'Text', prop: '[text]', description: 'Show button text', dataType: 'string' },
    { label: 'Color', prop: '[color]', description: 'Change background color', dataType: 'string' },
    { label: 'Icon', prop: '[icon]', description: 'Change button icon', dataType: 'string' },
    { label: 'Position', prop: '[position]', description: 'Adjust button position left or right', dataType: 'string' },
  ],
}

@Injectable()
export class DevProgressButtonStore extends ComponentStore<DevProgressButtonState> {
  constructor(private readonly sdk: ApolloAngularSDK) {
    super({
      config,
    })
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
