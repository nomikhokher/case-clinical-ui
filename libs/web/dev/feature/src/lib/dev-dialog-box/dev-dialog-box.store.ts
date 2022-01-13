import { Injectable } from '@angular/core'
import { ComponentStore, tapResponse } from '@ngrx/component-store'
import { ApolloAngularSDK } from '@schema-driven/web/core/data-access'
import { of } from 'rxjs'
import { switchMap, tap } from 'rxjs/operators'
import { Configs } from '../dev-dialog-box/model'

export interface Item {
  id?: string
  name?: string
}

interface DevDialogBoxState {
  items?: Item[]
  loading?: boolean
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Dialog Box',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/dialog-box/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Dialog Box', path: '/dev/dialog-box' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-dialog-box.component.ts',
  items: {
    isActive: false,
    closeButton: true,
    display: true,
    width: '2xl', // width can be [sm, md, lg, xl, 1xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl0, full]
    buttons: [
      {
        text: 'Open Dialog Box',
        color: 'indigo',
        fontColor: 'white',
        hoverColor: 'gray',
      },
    ],
  },
  component_inputs: [
    {
      label: 'Active',
      prop: '[isActive]',
      description: 'Shows Modal or Hide Modal',
      dataType: 'Boolean',
      type: ['true', 'false'],
    },
    {
      label: 'Button',
      prop: '[closeButton]',
      description: 'Close the modal',
      dataType: 'Boolean',
      type: ['true', 'false'],
    },
    { label: 'Display', prop: '[display]', description: 'Display', dataType: 'Boolean', type: ['true', 'false'] },
    {
      label: 'Width',
      prop: '[width]',
      description: 'Adjust the width of modal',
      dataType: 'String',
      type: ['sm', 'md', 'lg', 'xl', '1xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl0', 'full'],
    },
    {
      label: 'Buttons',
      prop: '[buttons]',
      description: 'Show buttons in section heading',
      dataType: 'Array',
      typeArray: [[{ text: 'Open Dialog Box' }, { color: 'white' }, { fontColor: 'gray' }, { hoverColor: 'gray' }]],
    },
  ],
}

@Injectable()
export class DevDialogBoxStore extends ComponentStore<DevDialogBoxState> {
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
