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

interface DevModalState {
  config?: Configs
}

const config: Configs = {
  headerTitle: 'Modal',
  githubURL: 'https://github.com/Schema-Driven/metadata/tree/main/libs/web/ui/modal/src/lib',
  breadcrumbs: [
    { label: 'Components', path: '/dev' },
    { label: 'Modal', path: '/dev/modal' },
  ],
  directory: '/libs/web/dev/feature/src/lib/dev-modal.component.ts',
  items: {
    isActive: false,
    closeButton: true,
    display: true,
    width: '2xl', // width can be [sm, md, lg, xl, 1xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl0, full]
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
  ],
}

@Injectable()
export class DevModalStore extends ComponentStore<DevModalState> {
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
