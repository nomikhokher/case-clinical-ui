import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from './Model/index'

export interface Item {
  id?: string
  name?: string
}

interface DevPopConfirmState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}
const config: Configs = {
  headerTitle: 'Pop Confirm Dialoug Box',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/pop-confirm/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Pop Confirm', path: '/dev/pop-confirm' },
  ],
  directory: 'libs/web/dev/feature/src/lib/dev-pop-confirm/dev-pop-confirm.component.ts',
  items: {
    title: 'Do you want to log out?',
    buttons: [
      { text: 'Yes', background: 'yellow' },
      { text: 'No', background: 'green' },
    ],
    position: 'top-right',
  },
  component_inputs: [
    { label: 'Title', prop: '[title]', description: 'Show the title in popup.', dataType: 'String' },
    {
      label: 'Buttons',
      prop: '[buttons]',
      description: 'Adjust the buttons text and background color.',
      dataType: 'Array',
      typeArray: [
        [{ text: 'Yes' }, { background: 'yellow' }],
        [{ text: 'No' }, { background: 'green' }],
      ],
    },
    {
      label: 'Position',
      prop: '[position]',
      description: 'Adjust the position of popup.',
      dataType: 'String',
      type: ['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center'],
    },
  ],
}

@Injectable()
export class DevPopConfirmStore extends ComponentStore<DevPopConfirmState> {
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
